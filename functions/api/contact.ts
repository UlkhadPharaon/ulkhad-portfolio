/**
 * Contact delivery for the Cloudflare Pages deployment.
 *
 * The Next.js route handler (`app/api/contact/route.ts`) was removed because
 * `output: 'export'` cannot prerender a route that reads the incoming Request.
 * This Pages Function keeps the exact same contract the ContactForm expects:
 *   POST /api/contact  ->  { ok: true } on success, { error } with a status on failure.
 *
 * Delivery is Resend's REST API called with plain `fetch`, so the function has
 * no npm dependency and runs unchanged on the Workers runtime. The handler
 * types below mirror the Pages Function runtime shape without depending on
 * ambient `@cloudflare/*` globals, so `tsc --noEmit` stays clean.
 *
 * Required Pages project variables (Settings -> Environment variables):
 *   RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL
 * Without them the endpoint answers 503, exactly like the previous handler.
 */

interface ContactEnv {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

interface FunctionContext {
  request: Request;
  env: ContactEnv;
  /** Continues the Pages Function chain to the next matching handler. */
  next: () => Promise<Response>;
}

type PagesHandler = (context: FunctionContext) => Promise<Response>;

const INVALID_BODY = { error: 'Please check the form fields and try again.' };
const NOT_CONFIGURED = {
  error: 'Contact delivery is not configured on this deployment. Please use the social channels listed on the contact page.',
};
const DELIVERY_FAILED = { error: 'The email provider could not deliver your message.' };

const PROJECT_TYPES = ['film', 'xr', 'ai', 'collaboration'] as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

/** Mirrors the zod schema that previously guarded the Next route handler. */
function parseContact(payload: unknown) {
  if (typeof payload !== 'object' || payload === null) return null;
  const raw = payload as Record<string, unknown>;
  const str = (key: string): string => (typeof raw[key] === 'string' ? (raw[key] as string).trim() : '');

  const name = str('name');
  const email = str('email');
  const type = str('type');
  const message = str('message');
  const budget = str('budget');
  const website = str('website');

  if (name.length < 2 || name.length > 100) return null;
  if (!EMAIL_PATTERN.test(email) || email.length > 254) return null;
  if (!PROJECT_TYPES.includes(type as (typeof PROJECT_TYPES)[number])) return null;
  if (message.length < 20 || message.length > 5000) return null;
  if (budget.length > 80 || website.length > 500) return null;

  return { name, email, type, budget, message, website };
}

function escapeHtml(value: string): string {
  const replacements: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return value.replace(/[&<>"']/g, (character) => replacements[character] ?? character);
}

export const onRequestPost: PagesHandler = async ({ request, env }) => {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json(INVALID_BODY, 400);
  }

  const parsed = parseContact(payload);
  if (!parsed) return json(INVALID_BODY, 400);

  // Honeypot: silently accept so bots get no signal.
  if (parsed.website) return json({ ok: true }, 200);

  const apiKey = env.RESEND_API_KEY;
  const to = env.CONTACT_TO_EMAIL;
  const from = env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return json(NOT_CONFIGURED, 503);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        authorization: `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: parsed.email,
        subject: `[Portfolio] ${parsed.type.toUpperCase()} — ${parsed.name}`,
        text: `Name: ${parsed.name}\nEmail: ${parsed.email}\nProject: ${parsed.type}\nBudget: ${parsed.budget || 'Not specified'}\n\n${parsed.message}`,
        html: `<h2>New portfolio inquiry</h2><p><strong>Name:</strong> ${escapeHtml(parsed.name)}</p><p><strong>Email:</strong> ${escapeHtml(parsed.email)}</p><p><strong>Project:</strong> ${escapeHtml(parsed.type)}</p><p><strong>Budget:</strong> ${escapeHtml(parsed.budget || 'Not specified')}</p><p>${escapeHtml(parsed.message).replace(/\n/g, '<br>')}</p>`,
      }),
    });

    if (!response.ok) return json(DELIVERY_FAILED, 502);
    return json({ ok: true }, 200);
  } catch {
    return json(DELIVERY_FAILED, 502);
  }
};

// Any non-POST verb is rejected with the same shape the form already handles.
export const onRequest: PagesHandler = async ({ request, next }) => {
  if (request.method !== 'POST') return json({ error: 'Method not allowed.' }, 405);
  return next();
};
