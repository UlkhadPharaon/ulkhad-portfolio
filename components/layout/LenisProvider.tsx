'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'lenis/dist/lenis.css';

gsap.registerPlugin(ScrollTrigger);

export function LenisProvider({ children }: { children: ReactNode }) {
  /**
   * <ReactLenis root> creates the Lenis instance inside its own effect and publishes
   * it through lenis's module-level root store, so the shell above the provider can
   * access it with useLenis(). The instance also arrives one render after mount —
   * this effect runs again as soon as it exists.
   */
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    // Lenis core handles prefers-reduced-motion itself (respectReducedMotion: true),
    // so the clock is always driven from here; reduced-motion users get instant,
    // non-eased jumps instead of an animation.
    const onScroll = () => ScrollTrigger.update();
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    lenis.on('scroll', onScroll);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.off('scroll', onScroll);
      // Instance lifecycle (create/destroy) belongs to <ReactLenis>.
    };
  }, [lenis]);

  return (
    <ReactLenis root options={{ autoRaf: false, lerp: 0.085, anchors: true }}>
      {children}
    </ReactLenis>
  );
}
