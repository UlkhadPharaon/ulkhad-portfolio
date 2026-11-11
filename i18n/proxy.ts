/**
 * next-intl locale middleware — DISABLED for the Cloudflare Pages deployment.
 *
 * `output: 'export'` forbids Proxy/Middleware (see
 * node_modules/next/dist/docs/01-app/02-guides/static-exports.md,
 * "Unsupported Features"). Locale routing on Pages is handled by
 * `public/_redirects` (`/` -> `/fr`) plus the locale prefixes baked into every
 * `next-intl` navigation link.
 *
 * Kept for reference: restore it as the root `proxy.ts` and drop
 * `output: 'export'` if the app ever moves back to a Node/edge runtime.
 */
import createMiddleware from 'next-intl/middleware';
import { routing } from './routing';

export default createMiddleware(routing);

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
