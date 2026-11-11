import { testimonials, type Locale } from '@/site.config';

/**
 * Approved High Fives, shown as readable quotes rather than marquee text.
 * Every entry here is a real, named message; nothing is drafted on someone's
 * behalf.
 */
export function Testimonials({ locale }: { locale: Locale }) {
  const fr = locale === 'fr';
  return (
    <section className="testimonials section-pad" aria-labelledby="testimonials-title">
      <div className="testimonials__head">
        <span className="eyebrow">{fr ? 'HIGH FIVES / COMMUNAUTÉ TKS' : 'HIGH FIVES / TKS COMMUNITY'}</span>
        <h2 id="testimonials-title">{fr ? 'Ce que l’équipe dit.' : 'What the team says.'}</h2>
        <p>{fr ? 'Encouragements reçus dans la communauté TKS. Chaque citation est un message réel, attribué à son auteur.' : 'Encouragement received inside the TKS community. Every quote is a real message, attributed to its author.'}</p>
      </div>
      <div className="testimonials__grid">
        {testimonials.map((person) => (
          <figure className="testimonial" key={person.id}>
            <blockquote>{person.quote[locale]}</blockquote>
            <figcaption>
              <b>{person.name}</b>
              <span>{person.context[locale]}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
