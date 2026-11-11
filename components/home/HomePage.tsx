'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { copy, homepageProjects, site, type Locale } from '@/site.config';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { LogoReveal } from '@/components/ui/LogoReveal';
import { ProofRail } from './ProofRail';
import { SignatureFrame } from './SignatureFrame';
import { EndorsementTicker } from './EndorsementTicker';
import { AudiencePaths } from './AudiencePaths';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });

      intro
        .fromTo('.hp-hero__media', { clipPath: 'inset(0 0 0 100%)' }, { clipPath: 'inset(0 0 0 0%)', duration: 1.15 }, 0)
        .fromTo('.hp-hero__media img', { scale: 1.12 }, { scale: 1, duration: 1.4, ease: 'power2.out' }, 0)
        .fromTo('.hp-title__line', { yPercent: 108 }, { yPercent: 0, duration: 1, stagger: 0.1 }, 0.15)
        .fromTo(
          '.hp-kicker, .hp-claim, .hp-intro, .hp-actions, .hp-hero__caption, .hp-hero__top, .hp-hero__bottom',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.07 },
          0.45,
        );

      gsap.utils.toArray<HTMLElement>('.hp-reveal, .hp-work__grid .work-card').forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 38 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 90%', once: true },
          },
        );
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    });

    return () => mm.revert();
  }, { scope: root });

  const directLinks: [string, string][] = [
    ['GitHub', site.socials.github],
    ['Medium', site.socials.medium],
  ].filter((entry): entry is [string, string] => Boolean(entry[1]) && entry[1].startsWith('http'));

  return (
    <div ref={root} className="home-page">
      <section className="hp-hero" aria-labelledby="hero-title">
        {/* The identity animation is the backdrop: full-bleed, looping, silent. */}
        <div className="hp-hero__backdrop" aria-hidden="true">
          <LogoReveal size="large" />
          <div className="hp-hero__backdrop-veil" />
        </div>

        <div className="hp-hero__content">
          <div className="hp-hero__top">
            <span>PORTFOLIO / 2026</span>
            <span>OUAGADOUGOU · 12°22′N</span>
          </div>

          <div className="hp-hero__body">
            <span className="hp-kicker">{c.eyebrow}</span>
            <h1 id="hero-title" className="hp-title">
              <span className="hp-title__mask"><span className="hp-title__line">Ulkhad</span></span>
              <span className="hp-title__mask"><span className="hp-title__line hp-title__line--second">Pharaon<span className="hp-title__period">.</span></span></span>
            </h1>
            <p className="hp-claim">{c.heroClaim}</p>
            <p className="hp-intro">{c.heroIntro}</p>
            <div className="hp-actions">
              <a href="#work" className="button button--gold">
                {locale === 'fr' ? 'Voir le travail' : 'See the work'} <ArrowDown size={15} />
              </a>
              <Link href="/contact" className="text-link">
                {locale === 'fr' ? 'Démarrer une conversation' : 'Start a conversation'} <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="hp-hero__bottom">
            <span className="hp-hero__proof">{c.heroProof}</span>
            <a className="hp-scroll" href="#work">
              {locale === 'fr' ? 'DÉFILER' : 'SCROLL'} <ArrowDown size={14} />
            </a>
          </div>
        </div>
      </section>

      <ProofRail locale={locale} />

      <section id="work" className="hp-work" aria-labelledby="work-title">
        <div className="hp-section-head hp-reveal">
          <div className="hp-section-head__label">
            <span className="eyebrow">{c.workLabel}</span>
            <span className="micro-label">01 — 06</span>
          </div>
          <div className="hp-section-head__body">
            <h2 id="work-title">{c.workTitle}</h2>
            <p>{c.workIntro}</p>
          </div>
          <Link href="/work" className="text-link hp-section-head__cta">
            {c.workCta} <ArrowRight size={15} />
          </Link>
        </div>

        <div className="hp-work__grid">
          {homepageProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} locale={locale} />
          ))}
        </div>
      </section>

      <SignatureFrame locale={locale} />

      <section className="hp-about" aria-labelledby="about-title">
        <div className="hp-about__aside hp-reveal">
          <span className="eyebrow">{c.aboutEyebrow}</span>
          <span className="hp-about__coords">12°22′N / 1°31′W<br />OUAGADOUGOU<br />BURKINA FASO</span>
        </div>
        <div className="hp-about__body hp-reveal">
          <h2 id="about-title">{c.aboutTitle}</h2>
          <p>{c.aboutBody}</p>
          <ul className="hp-about__chips">
            {c.aboutChips.map((chip) => <li key={chip}>{chip}</li>)}
          </ul>
          <Link href="/about" className="text-link">
            {c.aboutCta} <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <EndorsementTicker locale={locale} />
      <AudiencePaths locale={locale} />

      <section className="hp-contact" aria-labelledby="contact-title">
        <div className="hp-contact__top">
          <span className="eyebrow">{c.contactEyebrow}</span>
          <span className="micro-label">CONTACT / 001</span>
        </div>
        <h2 id="contact-title">{c.contactTitle}</h2>
        <div className="hp-contact__bottom">
          <p>{c.contactBody}</p>
          <div className="hp-contact__actions">
            <Link href="/contact" className="button button--gold button--large">
              {c.contactCta} <ArrowUpRight size={18} />
            </Link>
            <div className="hp-contact__links">
              {directLinks.map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  {label} <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="hp-contact__foot">
          <span>{site.location}</span>
          <span>PORTFOLIO / 2026</span>
        </div>
      </section>
    </div>
  );
}
