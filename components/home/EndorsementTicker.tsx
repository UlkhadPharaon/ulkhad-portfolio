import { endorsements, testimonials, copy, type Locale } from '@/site.config';

export function EndorsementTicker({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const fr = locale === 'fr';
  const sets = [0, 1, 2, 3];

  return (
    <section className="voices-section" aria-labelledby="voices-title">
      <div className="voices-heading">
        <div>
          <span className="eyebrow">{c.voicesLabel}</span>
          <h2 id="voices-title">{c.voicesTitle}</h2>
        </div>
        <p>{c.voicesIntro}</p>
      </div>

      {/* Breadth: the whole professional network, names and credentials only. */}
      <div className="voices-marquee" aria-label={fr ? 'Réseau professionnel' : 'Professional network'}>
        <div className="voices-track">
          {sets.map((set) => (
            <div className="voices-set" key={set} aria-hidden={set > 0}>
              {endorsements.map((person, index) => (
                <article className="voice-card" key={`${set}-${person.id}`}>
                  <div className="voice-card__top">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span>HIGH FIVE</span>
                  </div>
                  <h3>{person.name}</h3>
                  <p className="voice-card__role">{person.role[locale]}</p>
                  <small>{person.credential[locale]}</small>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Depth: approved quotes, readable instead of scrolling past. */}
      <div className="voices-quotes">
        <div className="voices-quotes__head">
          <span className="eyebrow">{fr ? 'HIGH FIVES / COLLABORATIONS' : 'HIGH FIVES / COLLABORATORS'}</span>
          <h3>{fr ? 'Ce que l’équipe dit.' : 'What the team says.'}</h3>
          <p>{fr ? 'Encouragements reçus de mes collaborateurs. Chaque citation est un message réel, attribué à son auteur.' : 'Encouragement received from my collaborators. Every quote is a real message, attributed to its author.'}</p>
        </div>
        <div className="voices-quotes__grid">
          {testimonials.map((person) => (
            <figure className="voice-quote" key={person.id}>
              <blockquote>{person.quote[locale]}</blockquote>
              <figcaption>
                <b>{person.name}</b>
                <span>{person.context[locale]}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="voices-foot">
        <span>PRODUCTION · MUSIQUE · ÉDUCATION · STUDIOS</span>
        <span>{fr ? 'RÉSEAU PROFESSIONNEL' : 'PROFESSIONAL NETWORK'}</span>
      </div>
    </section>
  );
}
