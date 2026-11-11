'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { VIDEO_LABELS, type VideoLabels } from '@/site.config';

type YTPlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  unMute: () => void;
  mute: () => void;
  setVolume: (v: number) => void;
  getIframe: () => HTMLIFrameElement;
  destroy: () => void;
};

declare global {
  interface Window {
    YT?: {
      Player: new (element: HTMLElement, options: Record<string, unknown>) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<void> | null = null;

/** Every control the visitor sees, in their language. */




/** Loads the YouTube IFrame API once and resolves when it is usable. */
function loadYouTubeApi(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.YT?.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;

  apiPromise = new Promise<void>((resolve) => {
    const previous = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previous?.();
      resolve();
    };
    const existing = document.querySelector<HTMLScriptElement>('script[data-yt-api]');
    if (existing) return;
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.dataset.ytApi = 'true';
    document.head.appendChild(script);
  });

  return apiPromise;
}

/**
 * Ambient video player.
 *
 * The clip starts on its own — muted, looping, no player chrome. Every control
 * the visitor needs sits on the site, not inside YouTube:
 *
 * - "Watch with sound" unmutes the same clip in place; nothing opens a new tab
 *   and nothing reloads the page.
 * - "Fullscreen" uses the real Fullscreen API on the player container.
 * - "Focus" enlarges the player into a theatre view inside the page.
 *
 * `prefers-reduced-motion: reduce` disables autoplay entirely and shows the
 * controls from the start.
 */
export function VideoPlayer({
  youtubeId,
  title,
  local,
  poster,
  labels,
  className = '',
}: {
  youtubeId?: string;
  title?: string;
  /** Self-hosted clip, used instead of YouTube when provided. */
  local?: string;
  poster?: string;
  /** Localized labels for every control. */
  labels?: VideoLabels;
  className?: string;
}) {
  const mount = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [focused, setFocused] = useState(false);
  const [withSound, setWithSound] = useState(false);
  const [reduced, setReduced] = useState(false);
  const t = { ...VIDEO_LABELS.en, ...labels };

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  // Escape leaves focus mode.
  useEffect(() => {
    if (!focused) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setFocused(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [focused]);

  const frameOf = useCallback(() => mount.current?.closest<HTMLElement>('.video-frame') ?? null, []);

  const toggleFullscreen = useCallback(() => {
    const node = frameOf();
    if (!node) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void node.requestFullscreen?.();
  }, [frameOf]);

  // YouTube player. Rebuilt when the visitor asks for sound, because the
  // watched variant needs YouTube's own chrome, fullscreen and seeking.
  useEffect(() => {
    if (!youtubeId || !mount.current) return;
    let cancelled = false;
    let created: YTPlayer | null = null;

    loadYouTubeApi().then(() => {
      if (cancelled || !mount.current || !window.YT) return;
      created = new window.YT.Player(mount.current, {
        videoId: youtubeId,
        playerVars: withSound
          ? { autoplay: 1, mute: 0, controls: 1, rel: 0, modestbranding: 1, playsinline: 1, fs: 1, hd: 1 }
          : { autoplay: reduced ? 0 : 1, mute: 1, loop: 1, playlist: youtubeId, controls: 0, rel: 0, modestbranding: 1, playsinline: 1, iv_load_policy: 3, disablekb: 1, fs: 0, hd: 1 },
        events: {
          onReady: (event: { target: YTPlayer }) => {
            const frame = event.target.getIframe();
            if (frame && title) frame.title = title;
            if (withSound) {
              event.target.unMute();
              event.target.setVolume(100);
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      created?.destroy?.();
    };
  }, [youtubeId, reduced, withSound, title]);

  // Self-hosted clip.
  if (local) {
    return (
      <div className={`video-frame ${focused ? 'video-frame--focused' : ''} ${className}`}>
        <video
          ref={video}
          className="video-frame__media"
          src={local}
          poster={poster}
          autoPlay={!reduced}
          muted
          loop
          playsInline
          controls={withSound || reduced}
        />
        {!withSound && !reduced && (
          <div className="video-frame__controls">
            <button
              type="button"
              className="video-frame__btn video-frame__btn--primary"
              onClick={() => {
                if (video.current) {
                  video.current.muted = false;
                  video.current.volume = 1;
                  void video.current.play();
                }
                setWithSound(true);
              }}
            >
              {t.sound}
            </button>
          </div>
        )}
        <div className="video-frame__tools">
          <button type="button" className="video-frame__btn" onClick={toggleFullscreen} aria-label={t.fullscreen}>
            {t.fullscreen}
          </button>
          <button
            type="button"
            className="video-frame__btn"
            onClick={() => setFocused((value) => !value)}
            aria-pressed={focused}
          >
            {focused ? t.focusOff : t.focus}
          </button>
        </div>
      </div>
    );
  }

  if (!youtubeId) return null;

  return (
    <div className={`video-frame ${focused ? 'video-frame--focused' : ''} ${className}`}>
      <div ref={mount} className="video-frame__mount" />
      <div className="video-frame__controls">
        {!withSound && (
          <button type="button" className="video-frame__btn video-frame__btn--primary" onClick={() => setWithSound(true)}>
            {t.sound}
          </button>
        )}
        <span className="video-frame__state">{withSound ? t.soundOn : t.muted}</span>
      </div>
      <div className="video-frame__tools">
        <button type="button" className="video-frame__btn" onClick={toggleFullscreen} aria-label={t.fullscreen}>
          {t.fullscreen}
        </button>
        <button
          type="button"
          className="video-frame__btn"
          onClick={() => setFocused((value) => !value)}
          aria-pressed={focused}
        >
          {focused ? t.focusOff : t.focus}
        </button>
      </div>
    </div>
  );
}
