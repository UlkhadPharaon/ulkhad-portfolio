import { localizedMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { Link } from '@/i18n/routing';
import { services, type Locale } from '@/site.config';
import { ArrowUpRight, Clapperboard, Cpu, ScanFace } from 'lucide-react';

const icons = [Clapperboard, ScanFace, Cpu];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, '/services',
    { fr: 'Services — Film, VFX, XR & agents IA', en: 'Services — Film, VFX, XR & AI agents' },
    { fr: 'Production audiovisuelle, VFX, prototypes XR et automatisation par agents IA.', en: 'Audiovisual production, VFX, XR prototypes and AI-agent automation.' },
  );
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (raw === 'en' ? 'en' : 'fr') as Locale;
  const fr = locale === 'fr';
  return (
    <div className="inner-page services-page">
      <PageIntro index="05" label={fr ? 'COLLABORATIONS / OFFRES' : 'COLLABORATIONS / SERVICES'} title={fr ? 'La bonne expertise pour la bonne idée.' : 'The right expertise for the right idea.'} description={fr ? 'Trois portes d’entrée. Un même principe : cadrer le problème avant de choisir les outils.' : 'Three ways to start. One principle: frame the problem before choosing the tools.'} />
      <section className="section-pad inner-section service-grid">
        {services[locale].map((service, index) => { const Icon = icons[index]; return <article className="service-card" key={service.id}><div className="service-card__top"><span>0{index + 1} / SERVICE</span><Icon size={22} strokeWidth={1.1} /></div><h2>{service.title}</h2><p>{service.body}</p><ul>{service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul><div className="service-card__bottom"><span>{service.price}</span><Link href={`/contact?type=${service.id}`} aria-label={`${fr ? 'Contacter pour' : 'Contact about'} ${service.title}`}><ArrowUpRight size={19} /></Link></div></article>; })}
      </section>
      <section className="cinematic-launch-banner section-pad"><div><span className="eyebrow">STUDIO VOIX D’OR / SIGNATURE OFFER</span><h2>Cinematic Launch</h2><p>{fr ? 'Un film de marque premium pensé comme une pièce de cinéma : film hero de 45–90 secondes et déclinaisons courtes.' : 'A premium brand film designed as a cinematic piece: a 45–90 second hero film plus short cutdowns.'}</p></div><Link className="button button--outline" href="/cinematic-launch">{fr ? 'Découvrir le format' : 'Explore the format'} <ArrowUpRight size={16} /></Link></section>
    </div>
  );
}
