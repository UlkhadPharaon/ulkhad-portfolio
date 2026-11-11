import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { audiences, copy, type Locale } from '@/site.config';

export function AudiencePaths({ locale }: { locale: Locale }) {
  const c = copy[locale];

  return (
    <section className="hp-audiences" aria-labelledby="audiences-title">
      <div className="hp-audiences__head hp-reveal">
        <span className="eyebrow">{c.audiencesLabel}</span>
        <h2 id="audiences-title">{c.audiencesTitle}</h2>
      </div>
      <div className="hp-audiences__grid">
        {audiences.map((audience, index) => (
          <Link href={audience.href} className="hp-audience hp-reveal" key={audience.id}>
            <span className="hp-audience__index">{String(index + 1).padStart(2, '0')}</span>
            <span className="hp-audience__label">{audience.label[locale]}</span>
            <h3>{audience.title[locale]}</h3>
            <p>{audience.body[locale]}</p>
            <span className="hp-audience__cta">
              {audience.cta[locale]} <ArrowUpRight size={15} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
