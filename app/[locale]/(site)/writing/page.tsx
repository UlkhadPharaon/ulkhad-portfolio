import { localizedMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { articles, type Locale } from '@/site.config';
import { ArrowUpRight } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, '/writing',
    { fr: 'Journal & recherche', en: 'Writing & research' },
    { fr: 'Articles et notes de terrain sur l’apprentissage XR, le design d’interaction et la technologie.', en: 'Articles and field notes on XR learning, interaction design and technology.' },
  );
}

export default async function WritingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (raw === 'en' ? 'en' : 'fr') as Locale;
  const fr = locale === 'fr';
  const published = articles.filter((article) => article.href.startsWith('http'));
  return (
    <div className="inner-page writing-page">
      <PageIntro index="04" label={fr ? 'ARTICLES / RECHERCHE' : 'ARTICLES / RESEARCH'} title={fr ? 'Des idées en mouvement.' : 'Ideas in motion.'} description={fr ? 'Notes de terrain, recherches et prises de position sur la création, l’apprentissage et les technologies interactives.' : 'Field notes, research and perspectives on creation, learning and interactive technologies.'} />
      <section className="section-pad inner-section writing-list">
        {published.map((article, index) => <article className="writing-list-card" key={article.title}><div className="writing-list-card__index">0{index + 1}</div><div className="writing-list-card__body"><span className="eyebrow">{article.category} / {article.date}</span><h2>{article.title}</h2><p>{article.excerpt[locale]}</p><div className="writing-card__bottom"><span>{article.readingTime} {fr ? 'de lecture' : 'read'}</span><a href={article.href} target="_blank" rel="noreferrer">{fr ? 'Ouvrir l’article' : 'Open article'} <ArrowUpRight size={16} /></a></div></div></article>)}
      </section>
      <section className="writing-note section-pad"><span className="eyebrow">EDITORIAL STANDARD</span><h2>{fr ? 'Pas de hype sans preuve.' : 'No hype without evidence.'}</h2><p>{fr ? 'Les projets XR et IA seront documentés avec leurs limites, leurs hypothèses et des résultats vérifiables. L’immersion, la nouveauté et les démos impressionnantes ne remplacent pas l’évaluation.' : 'XR and AI projects will be documented with their limitations, assumptions and verifiable results. Immersion, novelty and impressive demos do not replace evaluation.'}</p></section>
    </div>
  );
}
