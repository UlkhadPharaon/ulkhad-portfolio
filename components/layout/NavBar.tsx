'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, Link } from '@/i18n/routing';
import { ArrowUpRight, Menu as MenuIcon, X } from 'lucide-react';
import { nav, site } from '@/site.config';
import { BrandMark } from './BrandMark';

export function NavBar() {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const previousY = useRef(0);

  // Close any open menu when the route changes. React's documented pattern for
  // adjusting state on external value changes: reset during render (you-might-not-need-an-effect).
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setHidden(current > 180 && current > previousY.current + 4 && !open);
      if (current < 60 || current < previousY.current - 3) setHidden(false);
      previousY.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === 'fr' ? 'en' : 'fr' });
  };

  return (
    <>
      <header className={`site-nav ${hidden ? 'site-nav--hidden' : ''}`}>
        <Link href="/" className="brand-lockup" aria-label="Ulkhad Pharaon — home">
          <BrandMark compact />
          <span className="brand-word">ULKHAD <i>PHARAON</i></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((item) => (
            <Link key={item.id} href={item.href} className={pathname === item.href ? 'is-current' : ''}>{t(item.id)}</Link>
          ))}
        </nav>
        <div className="nav-actions">
          <button className="language-switch" onClick={switchLocale} aria-label="Change language">{locale === 'fr' ? 'EN' : 'FR'} <span>↗</span></button>
          <Link href="/contact" className="nav-contact">{locale === 'fr' ? 'Parlons' : 'Let’s talk'} <ArrowUpRight size={14} /></Link>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? t('close') : t('menu')} aria-expanded={open}>
            {open ? <X size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </header>
      <div className={`mobile-menu ${open ? 'mobile-menu--open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu__top"><span>MENU / NAVIGATION</span><span>OUAGA · BF</span></div>
        <nav>
          {nav.map((item, index) => (
            <Link key={item.id} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>
              <span className="mobile-menu__number">0{index + 1}</span><span>{t(item.id)}</span><ArrowUpRight size={20} />
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__bottom"><span>{site.location}</span><button onClick={switchLocale}>{locale === 'fr' ? 'SWITCH TO ENGLISH' : 'PASSER EN FRANÇAIS'}</button></div>
      </div>
    </>
  );
}
