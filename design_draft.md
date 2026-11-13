# Founder-Creator Portfolio — Design Draft

* **Author:** Elephant (implementation agent)
* **Date:** 2026-11-10
* **Status:** Provisional. The seven Goldfish reviewers could not run: the provider returned `Free usage limit reached` before any reviewer context started. Nothing below is attributed to a reviewer.
* **Source:** `concepts_brief.md` (provisional), the live site, and the assets in `public/media/`.

## 1. The problem in one paragraph

The current site is a competent dark HUD template wrapped around hedged copy. It says “en construction”, “showreel à fournir”, “visual placeholder” and “CV à ajouter”; its strongest evidence (national finalist, Studio Voix d’Or institutional credits, live products) is buried in a ten-item timeline. A visitor cannot answer in ten seconds: who is this, what has he shipped, who used it, and why believe it. The redesign keeps the multi-audience portfolio goal but gives it one spine and puts real artifacts first.

## 2. The spine

> **Ulkhad Pharaon makes films, products and systems — from Ouagadougou.**

Not “the next” anyone. Not a single-venture pitch. The homepage states three verifiable kinds of output (films, products, systems), then proves each with a real frame, a live product or a named credit. The visitor draws the conclusion.

**Hero copy (FR):** `Des films. Des produits. Des systèmes.`
**Hero copy (EN):** `Films. Products. Systems.`

Supporting line, FR: *Réalisateur et builder. Je travaille là où le cinéma, la 3D temps réel et l’IA se rencontrent — du scénario au produit livré.*

Supporting line, EN: *Filmmaker and builder. I work where cinema, real-time 3D and AI meet — from screenplay to shipped product.*

Proof line directly under the claim: `Finaliste — Concours National du Numérique 2026 · Studio Voix d’Or`.

## 3. Homepage order (8 sections, down from 11)

| # | Section | Purpose | Primary audience | Proof shown |
|---|---------|---------|------------------|-------------|
| 1 | Hero | Name, claim, one real film frame | Everyone | Directed Unreal Engine teaser |
| 2 | Proof rail | Three verifiable anchors, no adjectives | Programs, investors, recruiters | Finalist, Studio Voix d’Or, 5 live apps |
| 3 | Selected work | Six projects with real covers | Recruiters, clients | Film stills, app screenshots |
| 4 | Signature frame | One pinned, full-bleed VFX still | Creative clients | Simulation / compositing study |
| 5 | About teaser | Voice, location, current builds | Programs, mentors | NASA Space Apps |
| 6 | Network marquee | Named professionals, real credentials | Everyone | BNV, Inoss, Brand Images, Studio Voix d’Or |
| 7 | Audience paths | Four explicit routes to proof | All four | — |
| 8 | Contact | One next action | All four | — |

**Cut from the homepage:** boot sequence, scroll-scrubbed manifesto, showreel expansion (no master), horizontal pinned disciplines, illustrative before/after slider, lab teaser, ten-item timeline, toolbox constellation, writing cards. Each either had no real asset, duplicated another page, or delayed the proof. Their destinations remain in the nav; the homepage stops repeating them.

**Kept:** nav, smooth scroll (Lenis), footer, grain texture.

**Removed for focus and performance:** custom cursor, scroll HUD, WebGL background (`SceneLayer`), boot overlay. The page now opens on content, and the bundle drops the three.js scene from every route.

## 4. Art direction

**Direction chosen: editorial cinema.** Warm black, bone type, saffron accent, muted sage data labels. Large Instrument Serif headlines against documentary frames and full-bleed product screenshots. Thin rules, index numbers, generous margins. The reference feeling is a printed film programme or a production dossier, not a sci-fi dashboard.

**What changes:**
- Global palette warms: `#0b0a09` background, `#f0ece1` text, `#d2a95c` saffron, `#a9c6b4` sage replaces the cyan glow.
- Display face (Instrument Serif) becomes the default for `h1`, `h2`, `h3`; the body stays Space Grotesk; labels stay JetBrains Mono.
- The dotted hand emblem, grid marks, orbit labels and HUD corners leave the homepage.
- Real media replaces abstract SVG artwork wherever a cover exists. Abstract artwork remains only for projects with no publishable image, and loses the “VISUAL PLACEHOLDER” label.

**Signature motion:** one pinned section. A real VFX still starts inset at 58% width and expands to full-bleed over ~100vh of scroll while a caption fades in. It is the only pin on the page. `prefers-reduced-motion` renders the same frame full-width, static, with the caption visible. No scroll-jacking: native scroll position drives the tween.

**Supporting motion:** hero image clip-path reveal and name line stagger on load; section reveals at 88% viewport; card image scale on hover; CSS marquee for the network rail (paused on hover, static scroll row under reduced motion).

## 5. Content rules

1. No invented quotes, credits, metrics, logos or results. The testimonial marquee renders a quote only when `quote` and `approved` are both present; otherwise it renders the person’s name, role and verified credential. It never prints “quote to add”.
2. Nikon Film Festival and the 18/20 defense stay precise: the film is “presented in the context of the Nikon Film Festival”; the 18/20 is “a reported user outcome, not causation”. Both keep a `confirm before publish` note in the content checklist, not in the UI.
3. NGO names appear as text only. No logos until permission is confirmed.
4. Every visible string is either sourced from the user’s brief, the existing site, or a verifiable page. No “en construction”, “à fournir”, “à ajouter”, “placeholder”.
5. FR and EN are written together in the same data object. No hard-coded bilingual JSX in new components.

## 6. Data model changes (`site.config.ts`)

```ts
type Project = {
  // existing fields …
  cover?: string;                        // /media/work/*.jpg or /media/apps/*.png
  coverAlt?: Record<Locale, string>;     // descriptive alt, localized
  home?: number;                         // homepage order; absent = not featured
};
```

- Add covers for: Rain Power, Unreal teaser, music video, VFX, AI production study, Dagara, LensCraft, LibriWouo, AI agents, CellLab.
- Replace `featured` usage on the homepage with `home` order (6 items). Keep `featured` for compatibility or remove it.
- Add `proofPoints` and `audiences` arrays.
- Rewrite `endorsements` with `name`, `role`, `credential`, optional `quote`, `approved`; remove all “to be added” context strings.
- Replace the `copy` object with homepage copy for the eight sections.

## 7. File plan

**Create**
- `components/home/SignatureFrame.tsx` — pinned still expansion.
- `components/home/AudiencePaths.tsx` — four audience routes.
- `components/home/ProofRail.tsx` — four proof anchors.
- `app/icon.svg` and `app/favicon.ico` — real favicon.
- `lib/site-url.ts` — env-based canonical URL, no placeholder domain.

**Rewrite**
- `site.config.ts` — media, proof, audiences, endorsements, homepage copy.
- `components/home/HomePage.tsx` — eight sections.
- `components/home/EndorsementTicker.tsx` — network marquee, no pending labels.
- `components/projects/ProjectArtwork.tsx` — real cover via `next/image`, no placeholder label.
- `components/projects/ProjectCard.tsx` — cover, index, category, outcome.
- `app/[locale]/(site)/work/[slug]/page.tsx` — real cover, remove process placeholder block.
- `app/[locale]/(site)/about/page.tsx` — remove dead CV button, replace with a real dossier request.
- `components/layout/SiteShell.tsx` — remove cursor, HUD, WebGL scene; add hydration marker.
- `app/layout.tsx` — env-based metadata base, locale-aware `lang` bootstrap.
- `app/sitemap.ts`, `app/robots.ts` — only emit URLs when a real domain is configured.
- `next.config.ts` — `allowedDevOrigins`.
- `tests/smoke.spec.ts` — wait for hydration before interaction.
- `app/globals.css` — palette, serif headings, homepage v2, cover images, voices marquee.

**Delete**
- `components/home/BootSequence.tsx`
- `components/home/BreakdownSlider.tsx`
- `components/home/Showreel.tsx`
- `components/ui/scroll-expansion-hero.tsx`
- `components/layout/CustomCursor.tsx`
- `components/layout/ScrollHUD.tsx`
- `components/layout/SceneLayer.tsx`, `components/webgl/Scene.tsx`, `lib/scroll/progress.ts` (if unreferenced)

## 8. Launch fixes

| Issue | Fix |
|-------|-----|
| `https://TODO_CONTENT_DOMAIN` in metadata, sitemap, robots | `NEXT_PUBLIC_SITE_URL`; omit sitemap entries and canonical base when unset |
| `/favicon.ico` 404 | `app/icon.svg` + generated `app/favicon.ico` |
| `<html lang="fr">` on `/en` | pre-paint inline bootstrap from `location.pathname`, plus existing effect |
| e2e clicks before hydration | `data-hydrated="true"` on `<html>` after mount; tests wait for it |
| HMR cross-origin warning | `allowedDevOrigins: ['127.0.0.1']` |
| Visible placeholders | removed from About, case study, project cards, showreel (section deleted) |
| Dead nav destination `cinematic-launch` | keep page, exclude from sitemap until linked |
| Contact channel missing | form remains; email channel hidden unless configured; GitHub and Medium shown |

## 9. Verification

1. `npm run typecheck`, `npm run lint`, `npm run build`.
2. `npm run test:e2e` with hydration waits.
3. Manual viewport checks at 1440, 1024, 390; FR and EN.
4. Reduced-motion check: no pinned tween, no marquee animation, all content visible.
5. Grep for `TODO_`, `PLACEHOLDER`, `À AJOUTER`, `À FOURNIR`, `to be added` in rendered components.
6. Lighthouse-style checks: hero image `priority`, covers lazy, no CLS from `fill` + fixed aspect ratios.

## 10. Open questions (must not block launch, must not be faked)

- Exact Nikon Film Festival selection/credit status.
- Permission for NGO logos (text-only until then).
- Approved testimonial quotes.
- Portrait photograph, showreel master, email, WhatsApp, LinkedIn, Instagram, TikTok, X.
- Real production domain for `NEXT_PUBLIC_SITE_URL`.

## 11. Risks

- Instrument Serif at very large sizes may clip accents; check FR glyphs and line-height.
- App screenshots are viewport captures; they may contain browser chrome or loading states. Review each before publish.
- Removing the WebGL layer changes the feel of inner pages; verify that pages still have depth through type, rules and imagery.
- The network marquee without quotes could read as name-dropping. Mitigation: each card carries a verifiable credential, and the section is labelled as a network, not as testimonials.
