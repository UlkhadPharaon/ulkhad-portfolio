# Content checklist — before publishing

The site hides what is missing rather than showing placeholders. This file tracks what still needs evidence, permission or a real asset.

## Publish blockers

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- [ ] Add a professional email in `site.email`. Until then the email channel is hidden and the contact form is the only route.
- [ ] Add a WhatsApp number in `site.whatsapp` if it should be public. Until then the channel is hidden.
- [ ] Add LinkedIn, Instagram, TikTok and X in `site.socials` if they are active. GitHub and Medium are the only public profiles today.
- [ ] Confirm the GitHub profile and the Celly repository links.
- [ ] Configure `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL`, verify the sender domain, and test one real submission.
- [ ] Add rate limiting to `POST /api/contact` before exposing it publicly.
- [ ] Review the privacy page against the final host, log retention and any analytics added later.
- [ ] **Nefertem** — https://nefertem.pages.dev/ currently serves the Vite source entry (`/src/main.tsx`) instead of the built bundle, so the live page is blank. Republish the `dist/` output; the portfolio cover was captured while an earlier build still rendered.

## Links that are live and need checking

These are wired into the site but only the owner can confirm them:

- [ ] TKS profile — https://www.tks.life/p/ulrich (public, linked from `/fr/about`)
- [ ] Barka Digital — https://lefasodigital.net/concours/vitrine/barka-digital (public, linked from `/fr/about`)
- [ ] NASA Space Apps team Icarus 6 — https://www.spaceappschallenge.org/2026/find-a-team/icarus6/?tab=members (public, linked from `/fr/about`)
- [ ] Celly — https://celly-epp.pages.dev/ (public, linked from the Celly and CellLab projects)
- [ ] Benchling BRCA2 sequence — https://benchling.com/s/seq-ePGCQhAEdbs5pwtq7opz (public, linked from the CRISPR project)

## Credits and claims to confirm

- [ ] **Rain Power / Nikon Film Festival** — exact personal role, year, and whether the festival name may be presented as an official selection. The site keeps the wording precise and cautious.
- [ ] **Music videos** — several clips in the Studio Voix d'Or catalogue are published under the artist's own channel (Gareth Lafia, Yvy, TEEG WEND PRODUCTION, Naba Officiel) rather than the studio's. Confirm the studio's involvement on each before the page reads as a studio credit.
- [ ] **Itaoua HOKA / Lamborghini / Saiwa / pommade ads** — labelled "concept" and "non official concept". Confirm the status wording before presenting them as client work.
- [ ] **NASA Space Apps** — the team link is live but the project is not published yet. Keep the participation wording until it is.
- [ ] **NGO names** (UNICEF, Terre des Hommes, CRS, Save the Children, Plan International) — attach each organisation to the exact project and obtain name-use permission. Do not use a blanket credit.
- [ ] **Professional network** — confirm each person's current role and credential before publishing.

## Quotes that cannot be invented

- [ ] **Inoss, BNV, Serge Désiré Ouédraogo, Sougrinoma Ferdinand Tapsoba** — no ready-made quotes. They appear with name, role and credential only. If any of them supplies wording, move them into `testimonials`.
- [ ] The eleven approved TKS High Fives in `testimonials` were transcribed from messages the owner received. Re-read each French rendering against the English original before publishing; the translations are faithful but should be checked by a native reader.

## Media still missing

- [ ] **The VFX, CGI, AI-workflow and breakdown showreels** — the owner is making these. They will replace the per-project video grid on the VFX case study. The site has no showreel section on purpose yet.
- [ ] **Cancer-detection prototype** — the demo runs locally, but its model and weights are fetched from the TensorFlow.js CDN. Confirm the demo still loads on the production host and after any CDN change.
- [ ] **A real portrait** — only if an approved one exists. The current layout does not depend on it.
- [ ] **Bangre Néo Lab** — currently illustrated with the Celly assessment screen, which is a real output of the same research direction. Replace with dedicated material if it appears.

## Hosting notes

- [ ] `public/media/work/buud-zabre/teaser.mp4` is ~92 MB. Check the deployment size limits or host the file elsewhere and point `video.local` at that URL.
- [ ] The Bible is a 322 MB `.docx`, far too large to ship. Only its concept plates were extracted into `public/media/work/buud-zabre/`. If the full bible should be downloadable, host it outside the repo and add a link.
- [ ] YouTube embeds load Google servers. The privacy page already states this.

## Verified in the current build

- [x] 20 project records, each with a stage and a case-study route.
- [x] Real covers, real screenshots, autoplaying video or a working demo for every project — no designed marks remain.
- [x] Nefertem and the AI-agents system are one project, not two; Jordan is its own project.
- [x] The AI-production case study names its real open-source stack (LTX 2.3, Z-Image 2, GLM 5.2 through Hermes).
- [x] The CRISPR case study names the real Benchling sequence (BRCA2, ENSG00000139618) and stays labelled in-silico.
- [x] Studio Voix d'Or lists the real music videos and commercials with their real titles.
- [x] Every video autoplays muted and looping; a click swaps in the sound-on player. `hd=1` requests the highest available quality.
- [x] Buud Zabré has a self-hosted teaser, a downloadable screenplay PDF and eight real Bible plates.
- [x] TKS Velocity is described as an accelerated, selective program, not a cohort, with the profile linked.
- [x] The Lab page, its nav entry, its styles and the MediaPipe dependency are all removed.
- [x] The official logo and its reveal animation replace the old "UP" monogram in the nav, footer, favicon, About page and homepage hero.
- [x] Every video control is localised in French and English; no English label appears on a French page.
- [x] Celly is a project, with a real screenshot as its cover.
- [x] AEGIS — The Intelligent Escort is a project (Unitree G1 EDU, TKS Unitree SDK Challenge), with the real showcase page as its cover.
- [x] Go2 Patrol — Campus Security Research is a project (Unitree Go2, campus security pilot research), with the real dossier page as its cover. It is labelled a research dossier and SIMULATED throughout.
- [x] The cancer-detection model has a self-hosted, runnable demo (TensorFlow.js, three real classes: normal / benign / malignant) and the cover is a screenshot of it returning a real result.
- [x] Jordan — Creative AI Agent is illustrated with real renders from the Jordan Creative Pack.
- [x] Nefertem is presented as a live, paid service with its real offer, guarantee, payment methods and WhatsApp onboarding, linked to https://nefertem.pages.dev/.
- [x] The homepage carries six work cards that map to the claim: two films, a CGI commercial, the live Nefertem service, the open-source AI production pipeline and Dagara.
- [x] No horizontal overflow on any FR or EN route at 1440, 1024 or 390 px.
- [x] `npm run typecheck`, `npm run lint`, `npm run build` and the four Playwright tests pass.

## Final checks

- [ ] Run Lighthouse on a mid-range Android phone and on desktop.
- [ ] Confirm LCP, CLS, contrast and heading order.
- [ ] Test the mobile menu at 390 px, the work grid at 1024 px and the signature frame at 1440 px.
- [ ] Test the contact form with valid input, invalid input, the honeypot and missing Resend configuration.
- [ ] Test each video player: ambient loop, the click-to-watch swap, and the reduced-motion fallback.
- [ ] Confirm that no FR or EN page exposes a placeholder, a dead link or an unreviewed claim.
- [ ] Review the full FR and EN copy for tone and parity before launch.
- [ ] Listen to the Buud Zabré teaser audio path and confirm it should stay muted by default.
