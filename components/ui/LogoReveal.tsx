'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * The official logo reveal, used as a living backdrop.
 *
 * Autoplaying, muted and looping so it never competes with the page content.
 * `prefers-reduced-motion: reduce` stops the playback and leaves the poster
 * frame still — a moving background is exactly what that preference is for.
 */
export function LogoReveal({ size = 'large' }: { size?: 'large' | 'compact' }) {
  const video = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      setReduced(query.matches);
      if (video.current) {
        if (query.matches) video.current.pause();
        else void video.current.play().catch(() => undefined);
      }
    };
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  return (
    <span className={`logo-reveal logo-reveal--${size}`}>
      <video
        ref={video}
        className="logo-reveal__video"
        src="/media/brand/ulkhad-logo-reveal.mp4"
        poster="/media/brand/ulkhad-logo-poster.jpg"
        autoPlay={!reduced}
        muted
        loop
        playsInline
        preload="metadata"
      />
    </span>
  );
}
