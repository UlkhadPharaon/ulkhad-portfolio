'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { copy, site, type Locale } from '@/site.config';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * The page's single pinned moment: a real VFX still opens from an inset
 * frame to full bleed. Native scroll drives it; nothing is hijacked.
 */
export function SignatureFrame({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference) and (min-width: 900px)', () => {
      const section = root.current;
      const pin = section?.querySelector<HTMLElement>('.hp-signature__pin');
      if (!section || !pin) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=85%',
          scrub: true,
          pin,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .fromTo('.hp-signature__frame', { clipPath: 'inset(16% 20% 16% 20%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none' }, 0)
        .fromTo('.hp-signature__img', { scale: 1.18 }, { scale: 1, ease: 'none' }, 0)
        .fromTo('.hp-signature__overlay', { opacity: 0, y: 28 }, { opacity: 1, y: 0, ease: 'power2.out' }, 0.35);
    });

    return () => mm.revert();
  }, { scope: root });

  return (
    <section className="hp-signature" ref={root} aria-labelledby="signature-title">
      <div className="hp-signature__pin">
        <div className="hp-signature__frame">
          <div className="hp-signature__img">
            <Image
              src={site.media.signature}
              alt={locale === 'fr' ? 'Rendu 3D : une berline sombre lancée sur une piste désertique, à contre-jour.' : '3D render: a dark sedan speeding along a desert track, backlit.'}
              fill
              sizes="100vw"
              className="hp-signature__image"
            />
          </div>
          <div className="hp-signature__scrim" />
          <div className="hp-signature__overlay">
            <div className="hp-signature__top">
              <span>{c.signatureEyebrow}</span>
              <span>VFX / 3D</span>
            </div>
            <div className="hp-signature__copy">
              <h2 id="signature-title">{c.signatureTitle}</h2>
              <p>{c.signatureBody}</p>
            </div>
            <div className="hp-signature__bottom">
              <span>BLENDER · HOUDINI · UNREAL ENGINE · NUKE</span>
              <span>STILL / 01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
