# Founder-Creator Portfolio — Concept Brief

* **Author:** EGM Synthesizer (for the Elephant)
* **Date:** 2026-11-09
* **Status:** BLOCKED — no Goldfish review executed. See Reviewer Status.

## Overview

Ulkhad Pharaon's site is to become a founder-creator portfolio with one spine: a teenage builder from Ouagadougou who turns ideas into working systems across film, XR and AI. The claim is proved with real artifacts — film frames and VFX breakdowns, live products with named users, institutional production credits, competition results, and approved testimonials — instead of placeholders and hedged copy. The homepage leads with a portrait and a single claim, then gives top-tier programs and investors, recruiters, governments and partners, and creative clients each a clear path to the proof they need. The visual system and one signature scroll moment are rebuilt from his actual footage.

This document is a dispatch packet, not a completed multi-lens synthesis. The seven Goldfish reviewers could not run because this harness limits nested subagents to one level and this session is already at that level. The sections below record the block, preserve the review plan, state the decisions already fixed by the owner, and provide a provisional direction that is explicitly **not** Goldfish output. The provisional material must be replaced or validated by a real fresh-context review before it is treated as review findings.

## Reviewer Status

| Reviewer | Assigned lens | Status | Retry |
| --- | --- | --- | --- |
| `egm-design` | Narrative/positioning; art direction/motion | `not run` | One retry attempted; same depth-limit error |
| `egm-codebase-details` | Content/IA data model; codebase reality check | `not run` | Batch attempt blocked before reviewer start |
| `egm-zoom-out` | Scope/YAGNI; minimum viable launch | `not run` | Batch attempt blocked before reviewer start |
| `egm-comprehension` | Naive-reader positioning; content/IA | `not run` | Batch attempt blocked before reviewer start |
| `egm-implementation-readiness` | Phased implementation; media pipeline; tests | `not run` | Batch attempt blocked before reviewer start |
| `egm-structural` | IA hierarchy; formatting/template; accessibility structure | `not run` | Batch attempt blocked before reviewer start |
| `egm-inventive-catalyst` | Contradiction elimination; Ideal Final Result | `not run` | Batch attempt blocked before reviewer start |

**Exact harness error:** `Subagent depth limit reached (1). Increase "experimental.subagent_depth" to allow nested subagents.`

**What this means:** no reviewer timed out and no reviewer returned zero findings. The delegation guard rejected every nested call before a reviewer context was created. The Synthesizer did not run the seven lenses in its own context, because that would not be a fresh-context Goldfish review and would violate the instruction not to simulate a review inline.

## Analysis

### Reviewer findings

None. No Goldfish analysis was produced. This section is intentionally empty of reviewer-attributed claims.

### What the review must resolve

The following questions are the review plan. They are not findings.

**1. Narrative and positioning (`egm-design`, `egm-comprehension`)**

- Does "founder-creator" describe a real position, or is it a hedge that satisfies neither investors nor creative clients?
- What is the single claim on the first screen, and which artifact proves it fastest?
- What should a YC/Thiel scout, an investor, a recruiter, a government/partner program officer, and a creative client each see first, second, and third?
- Which current sections read as generic, hedged, or warning signs: "EN CONSTRUCTION," "VISUAL PLACEHOLDER," "SHOWREEL / À FOURNIR," "CV / À AJOUTER," the 11-chapter HUD, the "quest log" label, the four equal-weight disciplines?
- How is ambition made legible without the "next Mark Zuckerberg" comparison? Which specific artifacts carry the ambition?
- Is a single spine credible when the evidence spans film, institutional production, XR research, and AI products? Where is the through-line: "builds working systems," "director's eye and engineer's hands," "from frame to system," or something else?

**2. Art direction and motion (`egm-design`, `egm-inventive-catalyst`)**

- The current obsidian/gold/cyan HUD is a recognizable "creative technologist" template. What are two or three distinct directions grounded in the actual footage, the Ouagadougou context, and the production work?
- Which direction is credible to film clients and institutional partners while still signaling technical range?
- What is the one signature scroll moment, what real asset does it require, and what happens if that asset never arrives?
- Which existing motion survives: boot sequence, custom cursor, horizontal pinned disciplines, pinned reel expansion, WebGL backdrop, grain overlay?
- How does the chosen direction perform on a mid-range Android phone, and how does it degrade under `prefers-reduced-motion`?

**3. Content and information architecture (`egm-comprehension`, `egm-structural`, `egm-codebase-details`)**

- What is the target sitemap and homepage order for four audiences without four separate landing pages or a single-venture pitch?
- Which of the 19 project records are proof anchors, which are supporting studies, and which are archive noise?
- What data model represents proof tiers, claim verification, media rights, approved testimonials, and audience relevance?
- Where does the current schema force placeholders or hedging: free-text `status`, the `visual` enum, `links` with `TODO` hrefs, `endorsements` without quotes?
- How is fr/en parity made structural rather than manual, given the hard-coded bilingual ternaries in the pages?
- What should the testimonial marquee do when quotes are pending? Does it build trust or undermine it?
- Which page-level claims need "confirm before publish": Rain Power/Nikon status, Studio Voix d'Or roles, competition names, product usage, the 18/20 reported outcome?

**4. Implementation readiness (`egm-implementation-readiness`, `egm-codebase-details`)**

- What is the phased plan, ordered by dependency and risk, with exact files, components, types, and tests?
- How are missing assets gated so the production UI hides incomplete sections instead of rendering placeholders?
- What is the media pipeline for portrait, film stills, VFX before/after pairs, muted loops, posters, captions, credits, and alt text?
- What is the signature moment recipe using Lenis + GSAP + existing components, with reduced-motion and low-end fallbacks?
- Which Playwright tests prove hydration-safe interaction, fr/en parity, no placeholder strings, missing-asset fallbacks, and contact success/failure?
- How are changes staged for review without git?

**5. Scope and YAGNI (`egm-zoom-out`)**

- What is the smallest page and section set that still serves the four audiences?
- Which of the 19 projects deserve to survive, and is a 19-item inventory a liability?
- Which features should be deleted or hidden rather than reworked: BootSequence, custom cursor, WebGL backdrop, horizontal pinned disciplines, illustrative BreakdownSlider, unused `scroll-expansion-hero`, Lab, cinematic-launch, incomplete writing?
- Is one signature scroll moment necessary, or would a still portrait plus one real film frame outperform it?
- What is the minimum viable launch, and what is merely nice to have?

### Contradictions the review must resolve

These are candidate tensions for `egm-inventive-catalyst`; they are not resolved here.

| Opposing pair | Conventional compromise | What the review must find |
| --- | --- | --- |
| Distinctive vs credible | A cinematic HUD is memorable but reads as a template; a plain portfolio is credible but forgettable | A visual language derived from the actual work, not from a genre |
| Proof vs permission | Show the strongest institutional work and risk a rights problem; hide it and lose credibility | A proof format that shows role and context without uncleared logos or names |
| Ambition vs trust | Claim scale with adjectives and sound derivative; underclaim and look small | Ambition carried by falsifiable artifacts and dated results |
| Rich media vs performance/accessibility | Autoplay everything and hurt LCP/CLS; strip media and lose the work | One real media moment with static fallbacks, not a media-heavy page |
| Multi-audience vs one spine | Four paths fragment the story; one path serves the lowest common denominator | One narrative with audience-specific proof labels and anchors |
| Real footage vs no footage yet | Fake a breakdown or ship a placeholder; wait indefinitely | A design that derives identity from what exists now and upgrades when assets arrive |
| Bilingual parity vs speed | Hard-code ternaries and let copy drift; translate late and break layout | Copy stored per locale with a parity test and shared structure |

### Ideal Final Result

The owner's stated ideal, restated: the first screen shows a real person and a falsifiable claim. Every claim below it is attached to a visible artifact, credit, or dated result. No section exists without evidence. The visual language comes from the work itself — film frames, production documents, interaction captures — so it could not be mistaken for a template. Any audience can find its proof in one scroll, and no audience is asked to read a pitch for a company that does not exist.

### Provisional direction (Synthesizer-authored, not Goldfish-reviewed)

**Recommended spine:** "A director's eye and an engineer's hands, built in Ouagadougou." This is a practice, not a venture. It keeps the portfolio frame the owner asked for, makes the film/XR/AI range coherent, and avoids the "founder-creator" hedge. The ambition is carried by four proof anchors rather than adjectives:

1. **Film** — a real frame or short loop from Rain Power or the Unreal Engine teaser, with the exact role and status confirmed. If the Nikon selection is unconfirmed, say "presented in the context of" only after verification; otherwise describe the film itself.
2. **Production** — Studio Voix d'Or institutional work, text-only unless logo permission is confirmed, with specific roles per project: editing, color grading, animation.
3. **Systems** — one live product with a named user context. Dagara Germanist AI is the strongest because the use is specific; phrase the 18/20 result as a reported user outcome, not causation. LensCraft is the second because it is used inside a production studio.
4. **Recognition** — the 2026 national digital competition finalist, NASA Space Apps 2026, Conrad Challenge 2026–27. Use exact names and dates only where verified; otherwise omit rather than hedge.

**Homepage order:**

1. Portrait and one claim, with one line of proof and two actions: "For programs and partners" and "For clients."
2. Proof index: four anchors (Film / Systems / Production / Recognition), each with one artifact and one line. This replaces the institutional logo strip as the first proof; the strip follows only with permission.
3. Selected work: four to six anchors with real stills, role, status, and outcome.
4. One signature moment: a real frame or short loop expands from a contact-sheet grid into full-bleed, with metadata in the margin. Built with a tall wrapper, a sticky stage, and GSAP ScrollTrigger scrub. No pin on mobile, no scroll-jacking, static fallback under reduced motion. If no asset exists, skip the moment rather than fake it.
5. Testimonial marquee: only with approved quotes. Otherwise omit the section entirely.
6. Short story/timeline, collapsed by default.
7. Three services, subordinate to proof.
8. Contact.

**Art direction:** "Evidence-first editorial cinema." Warm black or paper ground, projector amber and oxide red as accents, a strong serif for titles, a grotesque for body, mono only for credits and metadata. Large real frames, annotated captions, production-document textures. Keep cyan only for XR/interaction cues, not as a global theme. This resolves distinctive-vs-credible by looking like a director's working archive rather than a sci-fi dashboard. The dark HUD can survive as a contained lab/XR section, not as the whole site.

**What to cut or hide:** the boot sequence, the custom cursor, the horizontal pinned disciplines, the illustrative breakdown slider, the toolbox constellation, the 11-chapter numbering, the "quest log" label, the writing section until at least three real posts exist, the Lab teaser unless the hand-tracking demo is a proof anchor, and `cinematic-launch` unless it is a real scoped offer. The unused `scroll-expansion-hero` should be either reimplemented with GSAP or deleted; keeping both GSAP and `motion/react` for one unused component adds weight and two animation systems.

**Data model:** add a proof tier (`anchor` / `supporting` / `archive`), a stage (`delivered` / `prototype` / `rnd` / `development`), structured credits, media assets with rights and alt text, testimonials with approval state, and claim records with `verified` / `confirmBeforePublish`. Add a build-time validation script that fails on `TODO`, missing alt text, unapproved quotes, or a published project without media. This is the structural enforcement of "no placeholder strings."

**Launch fixes:** set the real domain, email, WhatsApp, and social links; make `metadataBase`, sitemap, and robots read from the real domain; add a favicon; make `app/layout.tsx` set the document language per locale; replace pre-hydration e2e clicks with a hydration marker; remove unused code; run accessibility and Lighthouse checks; verify contact delivery and rate limiting.

## Goals vs. Non-Goals

### In-scope goals

- One spine: a teenage builder from Ouagadougou who turns ideas into working systems across film, XR and AI.
- Proof through real artifacts: film frames, VFX breakdowns, live products with named users, institutional production credits, competition results, approved testimonials.
- A portrait-led homepage with a single claim.
- Clear paths for top-tier programs and investors, recruiters, governments and partners, and creative clients, without four separate landing pages or a single-venture pitch.
- A testimonial marquee with named people and approved quotes.
- A rebuilt visual system and one signature scroll moment derived from real footage.
- fr/en parity.
- Launch fixes: domain/SEO/sitemap/favicon, contact/social links, e2e hydration, unused code, accessibility, performance.

### Out-of-scope non-goals

- A single-venture pitch. The owner rejected it; the site remains a portfolio of his story and work.
- The "next Mark Zuckerberg" comparison. It must not appear as site copy.
- Invented content, credits, metrics, testimonials, logos, or results.
- Placeholder strings in production UI. Incomplete sections are hidden.
- Scroll-jacking. The site keeps Lenis + GSAP and respects `prefers-reduced-motion`.
- New dependencies or a stack replacement. Prefer editing existing components.
- A 19-project flat inventory as the primary proof. This is a provisional recommendation to be tested by `egm-zoom-out`.

## Alternatives Weighed

- **Set aside: self-comparison to Mark Zuckerberg.** Rejected because it is unverifiable, derivative, and reads as a warning sign to investors. The ambition is preserved through artifacts, dated results, and named collaborators, not through a comparison to someone else.
- **Set aside: a single-venture pitch.** Rejected by the owner. The site must remain a portfolio of his story and work, not a company narrative that narrows the evidence to one product.
- **Set aside: placeholder-driven UI.** Rejected by the constraint that no placeholder strings appear in production. A section with no verified asset is hidden, not labeled "VISUAL PLACEHOLDER" or "À FOURNIR."
- **Set aside: rebuilding on a new stack or adding a new animation library.** Rejected by the constraint to preserve the existing stack and prefer editing existing components.
- **Provisional, not decided: retaining the 11-section HUD home.** The provisional synthesis recommends replacing it because it buries proof and reads as a template. `egm-design`, `egm-zoom-out`, and `egm-structural` must test this before it is treated as a decision.
- **Provisional, not decided: separate audience landing pages.** The provisional synthesis recommends one narrative with audience-specific proof labels. `egm-comprehension` and `egm-structural` must test whether that serves all four audiences.

## Key Decisions & Staging for Next Steps

### Decisions fixed now

1. **Do not present this document as a Goldfish review.** The Reviewer Status table is authoritative. The provisional direction is the Synthesizer's own reading of the repository and the owner's brief.
2. **Unblock the review before drafting or implementation.** Two valid paths:
   - **Preferred: direct dispatch from the Elephant.** The Elephant is at depth 0 and can spawn the seven registered reviewers with the prompts in Appendix A. This follows the EGM harness guidance: when a harness cannot nest subagents, use direct dispatch instead of the synthesizer.
   - **Alternative: raise the depth limit.** Set `experimental.subagent_depth` to 2 in the opencode configuration, then re-run this synthesizer. This is a global configuration change; confirm with the owner before making it.
3. **No production UI ships with placeholders.** Incomplete sections are hidden. A missing portrait does not become a gray box; the hero uses a real film frame with a caption, or the section is omitted.
4. **Testimonials publish only with approved quotes.** The marquee is omitted until at least three quotes are approved, or it runs with the approved subset. Pending-quote cards are not published.
5. **One signature moment, one real asset.** If the asset does not exist, the moment is omitted rather than simulated.
6. **All claims carry a verification state.** `confirmed`, `reported`, or `confirm before publish`. The build fails on `TODO` in published content.

### Staging proposal (to be validated by the swarm)

| Stage | Work | Exit condition |
| --- | --- | --- |
| 0. Unblock | Direct-dispatch reviewers or raise depth; freeze the content inventory | Seven reviewer reports exist, or the owner accepts a reduced lens set |
| 1. Evidence | Confirm domain, contact, socials, portrait, film stills, showreel, credits, competition names, testimonial approvals | Every published claim has a source and a verification state |
| 2. Narrative and IA | Decide the spine, homepage order, sitemap, and which projects are anchors | Owner signs off on one page order and one project tier list |
| 3. Art direction | Build one page prototype and one signature moment from a real asset | Desktop and mobile prototype reviewed; reduced-motion fallback works |
| 4. Implementation | Data model, validation script, component rebuild, copy migration | Typecheck, lint, build, and content validation pass |
| 5. Launch | Domain/SEO/sitemap/favicon, contact delivery, e2e hydration, accessibility, Lighthouse | Launch checklist passes; no placeholder strings; fr/en parity test passes |

### Risks

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| Portrait, stills, or testimonial approvals arrive late | High | High | Hide the section; launch with text plus one real artifact; keep the asset slot behind a config gate |
| Rain Power/Nikon, Studio Voix d'Or, or competition claims cannot be verified | Medium | High | Mark `confirm before publish`; use the neutral description; omit logos and official names until cleared |
| The redesign expands into a full-site rebuild | High | Medium | Prototype one page first; do not touch inner pages until the homepage direction is signed off |
| Signature moment hurts mid-range Android performance | Medium | Medium | One media asset, no WebGL hero, static fallback, measure LCP/CLS/long tasks |
| fr/en copy drifts | High | Medium | Move page copy into `site.config.ts` or `messages/*.json`; add a key-parity test |
| The review is skipped and provisional material is treated as approved | Medium | High | Keep the Reviewer Status table in every downstream document; require a fresh-context review before `/egm-draft` |
| Changes are hard to review without git | Medium | Low | Write `CHANGE_LOG.md`, list every touched file, capture before/after screenshots |

## Appendix A: Reviewer Dispatch Prompts

Use these with the registered reviewer names. Each reviewer must start with a fresh context, read `F:\ulkhad-portfolio`, and must not edit it. Pass the full owner brief and the verified current state from the task prompt, plus the lens block below.

### Shared instruction

> Mode: BRAINSTORM. Review an early concept, not a finished document. Challenge it, find contradictions, and state what must be true. Do not praise by default. Do not invent facts, credits, metrics, testimonials, logos, or results; mark anything unverified as "confirm before publish." You are read-only: you may read `F:\ulkhad-portfolio` but must not create or edit any file. Return your report in your final message only. Max ~1000 words: strongest objections ranked; concrete recommendations with file/section references; what to cut; open questions requiring verification; one-sentence verdict.

### `egm-design`

> You own narrative/positioning and art direction/motion. Does "founder-creator" describe a real position or a hedge? What is the first-screen claim, and which artifact proves it fastest? What should programs/investors, recruiters, governments/partners, and creative clients each see first? Name the sections and claims that read as generic or hedged. Propose two or three distinct art directions grounded in the actual film, production, XR, and Ouagadougou context. For each: what it looks like, what it implies, what it costs, what it risks. Recommend one. Define one signature scroll moment built from real footage, with reduced-motion and low-end fallbacks. State what existing motion to keep, rework, or delete.

### `egm-codebase-details`

> You own content/IA data model and codebase reality. Audit `site.config.ts` (`Project`, `Endorsement`, `timeline`, `services`, `articles`, `nav`) against the proposed portrait + claim + audience paths + media pipeline + testimonial marquee. Specify the schema changes for proof tiers, stages, structured credits, media assets with rights/alt/caption, testimonials with approval state, and claims with verification state. Identify where the current schema forces placeholders or hedging. Check fr/en parity risks: typed `Record<Locale, string>` versus hard-coded bilingual JSX. Verify which existing components can be reused, which are dead code, and which should be deleted. Cite file and line where possible. Concrete traps to inspect: `scroll-expansion-hero.tsx`, `BootSequence.tsx` sessionStorage guards, `HomePage.tsx` global GSAP selectors, pinned breakpoints, `EndorsementTicker` pending cards, `ProjectArtwork` "VISUAL PLACEHOLDER", sitemap publishing every project, `app/layout.tsx` hardcoded `lang="fr"`.

### `egm-zoom-out`

> You own scope/YAGNI. The site has 19 projects, 11 home sections, 6 nav destinations, a hand-tracking lab, a cinematic-launch page, a WebGL backdrop, a custom cursor, a boot sequence, and multiple pinned sequences. What is the smallest page and section set that still serves the four audiences? Which project records survive, and is a 19-item inventory a liability? What should be deleted or hidden rather than reworked: BootSequence, custom cursor, WebGL backdrop, horizontal pinned disciplines, illustrative BreakdownSlider, unused scroll-expansion-hero, Lab, cinematic-launch, incomplete writing, services? Is one signature scroll moment necessary, or would a still portrait plus one real film frame outperform it? Give a minimum viable launch, ordered, with effort and risk.

### `egm-comprehension`

> You own naive-reader positioning and content/IA. Read the current copy as a first-time visitor who is, in turn, a YC/Thiel scout, an investor, a recruiter, a government/partner program officer, and a creative client. Identify undefined terms ("founder-creator," "builder," Conrad Challenge, NASA Space Apps, VFX breakdown, XR, AI agents), missing proof, and where the site fails to answer: Who is this? How old? Where? What has he shipped? Who used it? What did he personally do? Why believe the claim? What next? Audit the homepage order and nav against the four audience paths. Evaluate the testimonial marquee when quotes are pending. Evaluate bilingual drift. Flag unverified claims and propose honest rewrites.

### `egm-implementation-readiness`

> You own implementation readiness. Produce a phased plan naming exact files, components, types, and tests. Distinguish content/config changes, component rework, new components, CSS/motion, and deletion. Design the missing-asset gate: config flag, status enum, build-time validation, or all three, with exact fields and rendering rules. Design the media pipeline: formats/sizes, asset locations, references, video handling, captions/transcripts, credits/alt text, layout shift. Give a specific signature-moment recipe using Lenis + GSAP ScrollTrigger + existing components, with reduced-motion and low-end fallbacks, effort, risk, and the metrics to watch. Write the Playwright test plan with exact assertions for hydration, reduced motion, mobile, fr/en parity, no-placeholder strings, missing assets, and contact success/failure. Explain how to stage changes for review without git. State a readiness verdict: ready / ready with conditions / not ready.

### `egm-structural`

> You own IA hierarchy and formatting/template compliance. Audit the proposed homepage order for hierarchy and redundancy. Check the page inventory (home, work, work/[slug], lab, about, writing, services, contact, legal, cinematic-launch) for overlap and audience confusion. Propose a target sitemap and homepage section order with one-line purpose and primary audience per section. Identify structurally redundant sections (disciplines vs services, timeline vs about, projects vs work, endorsements vs about credentials). Recommend whether to keep section numbering (01–11) or drop it. Flag heading order, landmark structure, skip link, mobile menu focus, dialog focus, marquee duplication with `aria-hidden`, and reduced-motion structure. Cite files.

### `egm-inventive-catalyst`

> You own contradiction elimination and the Ideal Final Result. Examine the opposing pairs: distinctive vs credible; proof vs permission; ambition vs trust; rich media vs performance/accessibility; multi-audience vs one spine; real footage vs no footage yet; bilingual parity vs speed; portfolio vs product pitch. For each, name the conventional compromise and propose an inventive resolution that eliminates it, using existing components and data. Rank by impact and feasibility. State the Ideal Final Result: what the site looks like if the contradictions disappear — no trade-off, no placeholder, no hedge. Name the three highest-leverage changes. State what must be true for the IFR to be feasible.

## Appendix B: Verified Current State and Evidence

### Current state

- Build, typecheck, and lint pass after recent fixes.
- The home page is a dark obsidian + gold + cyan HUD-style sequence with 11 numbered sections.
- No portrait or real project stills exist in `public/`. Project cards display "VISUAL PLACEHOLDER"; the showreel displays "SHOWREEL / À FOURNIR"; the hero says "EN CONSTRUCTION"; the About CV button says "CV / À AJOUTER."
- `site.config.ts` has 20 TODO placeholders: domain, email, WhatsApp, socials, showreel, and several case-study links.
- Sitemap and robots use the placeholder domain. `/favicon.ico` 404s.
- E2E: 2 of 3 tests fail because they click before hydration.
- Homepage, About, and Services sell film/VFX, XR, and AI systems with equal weight. The strongest proof (Studio Voix d'Or institutional productions, NASA Space Apps, Conrad, national finalist) is buried in a timeline and hedged.

### Evidence inventory

- **Film:** Rain Power documentary short made with Unreal Engine, presented in the context of the Nikon Film Festival (exact selection/credit status to confirm); Unreal Engine short-film teaser directed and produced; music-video direction and editing.
- **VFX/3D:** Blender/Houdini/Unreal simulations, Nuke/After Effects compositing, 3D product animation/modeling, Unreal environment building; five VFX study videos; one AI-assisted creative production study.
- **Products:** Dagara Germanist AI (used by an inspector trainee who reported 18/20 at a defense — reported outcome, not causation); LensCraft (scenario generator used by Studio Voix d'Or); LibriWouo (SME tax SaaS prototype); AI agents for social media/customer service (offer page).
- **Recognition:** finalist, 2026 National Digital Competition; NASA Space Apps Challenge 2026 participant; Conrad Challenge 2026–27 participant.
- **Production:** Studio Voix d'Or — editing, color grading, animation on NGO/government projects (UNICEF, Terre des Hommes, CRS, Save the Children, Plan International). Keep text-only unless logo permission is confirmed.
- **Testimonials (names/roles known, quotes pending approval):** BNV (music producer, Best Arranger of the Year, Nuit du Mérite), Inoss (DJ, Best DJ 2026, Nuit des Lauréats), Serge Désiré Ouédraogo (Manager, Brand Images / Étalon Film), Sougrinoma Ferdinand Tapsoba (Manager, Studio Voix d'Or).

### Owner constraints

- Do not invent content, credits, metrics, testimonials, logos, or results. Mark unverified claims "confirm before publish."
- Keep fr/en parity.
- No scroll-jacking; the site uses Lenis + GSAP. Respect `prefers-reduced-motion`.
- Preserve the existing stack. Prefer editing existing components over adding dependencies.
- No placeholder strings in production UI; hide incomplete sections instead.
- The repo is not a git repository; changes must be easy to review.
- The plan must include launch fixes: domain/SEO/sitemap/favicon, contact/social links, e2e hydration, unused code, accessibility, performance.

## Appendix C: What Is Provisional and What Is Not

**Not provisional:** the reviewer status, the harness error, the owner's constraints, the owner's goals and non-goals, the evidence inventory, the two rejected alternatives (Zuckerberg comparison, single-venture pitch), and the fact that the current production UI contains placeholders.

**Provisional:** the recommended spine, the homepage order, the art direction, the cut list, the data model, the staging table, and the risk ratings. These are the Synthesizer's own reading. They must be tested by the seven reviewers before they are carried into `/egm-draft` or implementation.

**Next action:** the Elephant should either direct-dispatch the seven reviewers with Appendix A, or raise `experimental.subagent_depth` to 2 and re-run the synthesizer. Until one of those happens, this brief is a dispatch packet, not a Goldfish review.
