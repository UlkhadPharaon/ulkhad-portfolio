'use client';

import { LenisProvider } from './LenisProvider';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { useLocale } from 'next-intl';
import { useEffect, type ReactNode } from 'react';

export function SiteShell({ children }: { children: ReactNode }) {
  const locale = useLocale() as 'fr' | 'en';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dataset.hydrated = 'true';
    return () => {
      delete document.documentElement.dataset.hydrated;
    };
  }, [locale]);

  return (
    <LenisProvider>
      <a className="skip-link" href="#main">Skip to content</a>
      <NavBar />
      <main id="main">{children}</main>
      <Footer locale={locale} />
      <div className="grain-overlay" aria-hidden="true" />
    </LenisProvider>
  );
}
