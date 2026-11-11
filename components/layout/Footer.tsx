import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { site } from '@/site.config';
import { BrandMark } from './BrandMark';

export function Footer({ locale }: { locale: 'fr' | 'en' }) {
  const isFr = locale === 'fr';
  const socials = [
    ['GitHub', site.socials.github], ['LinkedIn', site.socials.linkedin], ['Medium', site.socials.medium],
    ['Instagram', site.socials.instagram], ['TikTok', site.socials.tiktok], ['X', site.socials.x],
  ].filter((item) => item[1].startsWith('http') && !item[1].includes('TODO'));
  return (
    <footer className="site-footer">
      <div className="footer-topline"><span className="footer-brand"><BrandMark compact /> ULKHAD PHARAON / PORTFOLIO</span><span>© {new Date().getFullYear()} — {isFr ? 'TOUS DROITS RÉSERVÉS' : 'ALL RIGHTS RESERVED'}</span></div>
      <div className="footer-main">
        <div><span className="eyebrow">{isFr ? 'LA SUITE COMMENCE ICI' : 'THE NEXT CHAPTER STARTS HERE'}</span><h2>{isFr ? 'Construisons le prochain monde.' : 'Let’s build the next world.'}</h2><Link className="footer-contact" href="/contact">{isFr ? 'Démarrer une conversation' : 'Start a conversation'} <ArrowUpRight size={18} /></Link></div>
        <div className="footer-links">
          <div><span className="micro-label">{isFr ? 'EXPLORER' : 'EXPLORE'}</span><Link href="/work">{isFr ? 'Projets' : 'Work'}</Link><Link href="/about">{isFr ? 'À propos' : 'About'}</Link><Link href="/writing">{isFr ? 'Journal' : 'Writing'}</Link></div>
          <div><span className="micro-label">{isFr ? 'CONNECTER' : 'CONNECT'}</span>{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label} <ArrowUpRight size={12} /></a>)}</div>
        </div>
      </div>
      <div className="footer-bottom"><span>{isFr ? 'Fait avec intention à Ouagadougou.' : 'Made with intention in Ouagadougou.'}</span><span>BURKINA FASO <span className="gold-dot">◆</span> TECH × CINEMA</span><Link href="/legal">{isFr ? 'Confidentialité' : 'Privacy'}</Link></div>
    </footer>
  );
}
