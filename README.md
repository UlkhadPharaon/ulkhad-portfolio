# Ulkhad Pharaon — Portfolio

A bilingual portfolio for Ulkhad Pharaon (Ulrich Tapsoba), filmmaker and builder in Ouagadougou. It presents one body of work to several audiences — programs and investors, recruiters, institutions and creative clients — with a single narrative spine: **Films. Products. Systems.**

The direction is **editorial cinema**: warm black, bone type, saffron and muted sage, Instrument Serif headlines, and real stills or real product screenshots instead of abstract decoration.

## Stack

- Next.js 16 App Router, React 19, TypeScript
- Tailwind CSS v4 tokens plus a hand-written stylesheet in `app/globals.css`
- GSAP + ScrollTrigger for section reveals and the single pinned signature frame
- Lenis for smooth scrolling (native scroll position is preserved)
- `next-intl` for French and English routing
- React Hook Form + Zod on the client, Zod + Resend in the contact API

## Run locally

Requirements: Node.js 20.9+ (Node 22 recommended) and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000` (redirects to `/fr`). English is at `/en`.

Quality gates:

```bash
npm run typecheck
npm run lint
npm run build
npm run test:e2e
# one-time browser install for Playwright
npx playwright install chromium
```

## Deploy — Cloudflare Pages

The site is published as a **static export** plus one **Pages Function**:

| Piece | File | Role |
|---|---|---|
| Prerendered site | `out/` | `next build` with `output: 'export'` — 396 files, no Node server |
| Root locale redirect | `public/_redirects` | `/` -> `/fr` (302); `output: 'export'` cannot emit redirects |
| Cache headers | `public/_headers` | immutable `_next/static`, one-week media |
| Contact endpoint | `functions/api/contact.ts` | `POST /api/contact` -> Resend REST API via `fetch`, copied to `out/functions/` at deploy |
| Deploy tooling | `wrangler` (devDependency) | `scripts/sync-functions.mjs` + `wrangler pages deploy out` |

```bash
npm run deploy        # build + sync functions + deploy to the production branch
npm run pages:dev     # local Cloudflare runtime: wrangler pages dev out
```

Deployed at **https://ulkhad-portfolio.pages.dev** (Cloudflare Pages project
`ulkhad-portfolio`, production branch `main`). Every deploy is a git tag
(`deploy-YYYYMMDD-HHMM`); roll back by redeploying the previous tag's `out/`.

Constraints that follow from `output: 'export'` (see
`node_modules/next/dist/docs/01-app/02-guides/static-exports.md`):

- **No middleware.** The next-intl `proxy.ts` now lives at `i18n/proxy.ts`,
  disabled; locale routing is `public/_redirects` plus the prefixes that
  `next-intl` navigation already writes into every link.
- **No Node route handlers.** The contact route moved to
  `functions/api/contact.ts` (identical request/response contract).
- **`images: { unoptimized: true }`** — the default optimizer needs a server.
- **25 MiB per file.** The Buud Zabré teaser is an H.264 export at 17.9 MiB; the
  89 MB HEVC master is kept outside `public/` in `media-masters/`.
- **Canonical URLs are baked at build time** from `NEXT_PUBLIC_SITE_URL`
  (`.env.local`). Attaching a custom domain means one rebuild + redeploy.
- `npm run start` (`next start`) does not work in export mode; use `pages:dev`.


## Homepage structure

1. Hero — name, claim, proof line and the official logo reveal running as the full-bleed backdrop
2. Proof rail — four verifiable signals, each with an outbound proof link where one exists
3. Selected work — six projects with real covers
4. Signature frame — one pinned VFX still that opens from an inset frame to full bleed
5. About teaser — the filmmaker/builder position and a link to the full journey
6. Professional network — an infinite marquee of real collaborators, no invented quotes
7. Audience paths — four ways into the work
8. Contact — problem-first closing section

## Edit content

`site.config.ts` is the single source of truth. It holds:

- `site` — identity, location, email, WhatsApp, social links and the two homepage media slots
- `copy.fr` / `copy.en` — hero, section headings, proof text and contact copy
- `proofPoints` — the four signals in the proof rail
- `projects` — 19 case studies with slug, stage, role, tools, summary, detail, outcome and optional YouTube embeds
- `homepageProjects` — the six projects promoted to the homepage
- `audiences` — the four audience paths and their destinations
- `endorsements` — the professional-network cards (name, role, credential)
- `timeline`, `tools`, `services`, `articles`

Rules for this file:

- Never invent a credit, metric, quote, logo or result.
- Only set a project cover when the file is a real frame or a real screenshot.
- Every public case study must state its stage: delivered, prototype, R&D or in development.
- An endorsement quote renders only when `approved: true` and a real quote is present. Names and roles alone are the default.
- Write an article link only when the article exists. Draft notes stay hidden.

Localized titles: `projectTitle(project, locale)` returns `titleFr` on French pages and `title` on English pages. Proper names (CellLab, Nefertem, Buud Zabré, Dagara Germanist AI) need no `titleFr`; descriptive titles must have one.

Display order in the work archive and in the "next project" link comes from each project's `number`. `homepageProjects` filters on `home` and sorts by it; the two are independent, so a project can appear early in the archive without being promoted.

## Videos

Every video plays on its own — muted, looping, with the player chrome hidden. No static poster stands in for a moving clip anywhere, including the homepage cards and the work archive.

Every control sits on the site, not inside YouTube:

- **Watch with sound** unmutes the same clip in place and hands over YouTube's own controls for seeking and pausing. Nothing opens a new tab and nothing reloads the page.
- **Fullscreen** uses the real Fullscreen API on the player container.
- **Focus** grows the player into a theatre view fixed inside the page; Escape leaves it.
- Maximum quality is requested with the `hd=1` parameter. YouTube chooses the actual stream.

`VideoPlayer` (`components/ui/VideoPlayer.tsx`) drives the YouTube IFrame API, so the player is created and controlled in JavaScript instead of declared as a bare `<iframe>`. It accepts either a `youtubeId` or a self-hosted `local` clip.

`prefers-reduced-motion: reduce` disables autoplay: the player mounts paused with the controls already visible.

On the homepage and archive cards the player is inert. A transparent shield sits above it so a click goes to the case study, where the clip plays with sound.

## Real media in the build

| Asset | Path | Use |
|---|---|---|
| Hero still | `public/media/work/unreal-teaser-frame.jpg` | Homepage hero (letterbox cropped) |
| Signature VFX still | `public/media/work/vfx-02-crop.jpg` | Pinned signature frame |
| Rain Power / Nikon | `public/media/work/rain-power.jpg` | Project cover |
| Unreal teaser | `public/media/work/unreal-teaser-frame.jpg` | Project cover |
| Music video | `public/media/work/music-video.jpg` | Project cover |
| VFX / CGI | `public/media/work/vfx-01.jpg` | Project cover |
| AI production | `public/media/work/ai-production.jpg` | Project cover |
| Apps | `public/media/apps/*.png` | Real product screenshots |
| Itaoua Hoka | `public/media/work/itaoua-hoka.jpg` | Real frame from the CGI spot |
| Studio Voix d'Or | `public/media/work/studio-voix-dor-1..7.jpg` | Real frames from published clips |
| Buud Zabré | `public/media/work/buud-zabre/` | Teaser MP4, frames, 8 Bible plates, screenplay PDF |
| Hand tracking | `public/media/work/hand-tracking-live.png` | Live Celly demo with landmarks |
| Bangre Néo Lab | `public/media/work/bangre-neo-lab-test.png` | Celly assessment screen |
| CRISPR | `public/media/work/crispr-benchling.png` | Benchling BRCA2 sequence editor |

Do not add a showreel or portrait until a real master exists. The site currently has no showreel section on purpose.

Both robotics projects (AEGIS and Go2 Patrol) are labelled as challenge builds and research dossiers, and both state that no robot is owned or operated. Keep that framing — it is what separates a research portfolio from a claimed deployment.

`public/media/work/buud-zabre/teaser.mp4` is a 17.9 MiB H.264 export of the 92 MB HEVC master (Cloudflare Pages caps a single asset at 25 MiB). The master is preserved in `media-masters/buud-zabre-teaser-master.mp4`. The source Bible is a 322 MB `.docx`; only its concept plates were extracted into the build.

The hand landmark model and MediaPipe WASM folders were removed with the Lab page, and MediaPipe is no longer a dependency.

## Brand

The identity is Ulkhad Pharaon's own artwork, not a generic monogram.

| Asset | Path | Use |
|---|---|---|
| Emblem | `public/media/brand/ulkhad-mark.png` | Nav bar and footer mark |
| Full lockup | `public/media/brand/ulkhad-logo.jpg` | Large display |
| Reveal animation | `public/media/brand/ulkhad-logo-reveal.mp4` | Homepage hero backdrop and About page opening, autoplaying muted and looping |
| App icon | `app/icon.png` | Favicon and app icon |

`components/layout/BrandMark.tsx` renders the emblem; it replaces the old `UP` monogram everywhere.

## Environment

```env
# Public URL for canonical links, sitemap, robots and social previews.
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Contact form delivery (optional until the form goes live).
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=Portfolio <onboarding@resend.dev>
```

- Without `NEXT_PUBLIC_SITE_URL`, metadata falls back to `http://localhost:3000`, `sitemap.xml` returns no entries and `robots.txt` omits the sitemap line.
- Without the three Resend variables, the contact API returns a neutral 503 configuration message instead of pretending a message was sent.
- Verify the sender domain in Resend before production, and add rate limiting at the edge or hosting layer.
- Direct email and WhatsApp links render only when `site.email` and `site.whatsapp` are filled. Today only GitHub and Medium are public.

## Internationalization

- French: `/fr` (default)
- English: `/en`
- Route handling: `proxy.ts` + `i18n/routing.ts`
- Navigation messages: `messages/fr.json`, `messages/en.json`
- Page metadata: `lib/seo.ts` with a `%s · Ulkhad Pharaon` title template

French and English must stay at parity. When a claim cannot be verified in both languages, soften it rather than translating a fabrication.

## Motion and accessibility

- Native scrolling; no scroll-jacking.
- One pinned moment only: the signature VFX frame, driven by ScrollTrigger scrub. Its trigger and pin are resolved from the component ref, never from a bare selector.
- `prefers-reduced-motion` removes the clip-path reveal, the image scale, the marquee animation and the title transforms.
- The hand-tracking demo is opt-in and requests the camera only after a click.
- Keyboard focus is visible, and the skipped-content link is the first tab stop.
- The network marquee pauses on hover and becomes a horizontal scroll region when motion is reduced.
- Above-the-fold images use Next 16 `preload`; the deprecated `priority` prop is not used anywhere.
- `prefers-reduced-motion` also neutralises autoplaying video: the ambient players start paused with a visible play affordance.

## Project accuracy rules

- Two projects share one identity on purpose: `business-ai-agents` is titled "AI Agents for Business Operations — Nefertem" because Nefertem *is* that system, and `creative-ai-agent-orchestration` is the agent named Jordan. Do not split them into separate projects again.
- `ai-assisted-creative-production-study` is the perfume commercial produced end-to-end with open-source models. Its tool list names the actual stack (LTX 2.3, Z-Image 2, GLM 5.2 through Hermes).
- The CRISPR case study names the real sequence in Benchling (BRCA2, ENSG00000139618) and stays labelled in-silico.
- Nefertem is not a separate venture from the AI-agents system; describing them as two things is the error this section exists to prevent.

## Testimonials and quotes

Two separate concepts, and the difference matters:

- `endorsements` — the professional network. Name, role, credential. Nothing is ever written in someone else's voice here.
- `testimonials` — approved High Fives received from named people, rendered as a readable grid on the About page. Every entry is a real message; only obvious typos were corrected, and wording and voice are preserved.

Rules:

- A quote is added only when the person actually said it. If they did not, they still appear in `endorsements` with name, role and credential only.
- Both `fr` and `en` renderings are required. The French version is a translation, not the original — that is stated nowhere on the page, so keep it faithful.
- A quote never renders unless the entry is in `testimonials`.

## Before deployment

1. Set `NEXT_PUBLIC_SITE_URL`.
2. Configure the Resend variables and test a real submission.
3. Confirm the unverified credits and statuses listed in `CONTENT_CHECKLIST.md`.
4. Run `npm run typecheck`, `npm run lint`, `npm run build` and `npm run test:e2e`.
5. Run Lighthouse on a mid-range Android phone and on desktop.
6. Verify the reduced-motion path, the mobile menu, the signature frame and the contact error state.

- Two projects share one identity on purpose: `business-ai-agents` is titled "AI Agents for Business Operations — Nefertem" because Nefertem *is* that system, and `creative-ai-agent-orchestration` is the agent named Jordan. Do not split them into separate projects again.
- `ai-assisted-creative-production-study` is the perfume commercial produced end-to-end with open-source models. Its tool list names the actual stack (LTX 2.3, Z-Image 2, GLM 5.2 through Hermes).
- The CRISPR case study names the real sequence in Benchling (BRCA2, ENSG00000139618) and stays labelled in-silico.

- Rain Power / Nikon Film Festival: keep the exact status and personal credits precise; confirm before describing it as an official selection.
- Dagara Germanist AI: the 18/20 defense result is reported, not measured. Do not imply that the app alone caused it.
- NGO and government work: describe project contributions (editing, color grading, animation) rather than blanket client relationships.
- The 2026 national digital competition entry stays generic until the official name and finalist evidence are confirmed.
- The cancer-related Teachable Machine model is experimental and not clinically validated.
- The Benchling / CRISPR item is an in-silico exploration, not wet-lab work.
- Video players use the `youtube-nocookie.com` domain, but loading one still connects the visitor's browser to Google. The privacy page states this plainly instead of claiming there are no third-party trackers.
