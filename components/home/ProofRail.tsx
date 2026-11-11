import { proofPoints, type Locale } from '@/site.config';

export function ProofRail({ locale }: { locale: Locale }) {
  return (
    <section className="hp-proof" aria-label={locale === 'fr' ? 'Preuves et crédits' : 'Proof and credentials'}>
      <div className="hp-proof__inner">
        {proofPoints.map((point) => (
          <div className="hp-proof__item" key={point.id}>
            <span className="hp-proof__label">{point.label[locale]}</span>
            <strong className="hp-proof__value">{point.value[locale]}</strong>
            {point.note ? <small className="hp-proof__note">{point.note[locale]}</small> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
