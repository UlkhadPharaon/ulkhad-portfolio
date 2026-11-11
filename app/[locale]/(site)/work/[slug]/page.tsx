import { localizedMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { projects, projectTitle, type Locale } from '@/site.config';
import { ProjectArtwork } from '@/components/projects/ProjectArtwork';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
import { VIDEO_LABELS } from '@/site.config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: 'Project not found' };
  const title = projectTitle(project, locale === 'en' ? 'en' : 'fr');
  return localizedMetadata(locale, `/work/${slug}`,
    { fr: `${title} — Étude de cas`, en: `${title} — Case study` },
    { fr: project.summary.fr, en: project.summary.en },
  );
}

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params;
  const locale = (raw === 'en' ? 'en' : 'fr') as Locale;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const isFr = locale === 'fr';
  const next = projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];
  const title = projectTitle(project, locale);
  return (
    <div className="inner-page case-study-page">
      <section className="case-hero">
        <div className="case-hero__top"><Link href="/work"><ArrowLeft size={14} /> {isFr ? 'Retour aux projets' : 'Back to work'}</Link><span>{`PROJECT ${project.number} / ${project.category}`}</span></div>
        <div className="case-hero__title"><span className="eyebrow">{project.status} · {project.year}</span><h1>{title}</h1><p>{project.summary[locale]}</p></div>
        <div className="case-hero__art"><ProjectArtwork project={project} locale={locale} preload sizes="(max-width: 900px) 100vw, 80vw" /></div>
      </section>
      <section className="case-facts section-pad">
        <div><span className="micro-label">{isFr ? 'RÔLE' : 'ROLE'}</span><b>{project.role.join(' · ')}</b></div>
        <div><span className="micro-label">{isFr ? 'OUTILS' : 'TOOLS'}</span><b>{project.tools.join(' · ')}</b></div>
        <div><span className="micro-label">{isFr ? 'STATUT' : 'STATUS'}</span><b>{project.status}</b></div>
      </section>
      <section className="case-copy section-pad"><div><span className="eyebrow">{isFr ? 'CONTEXTE / INTENTION' : 'CONTEXT / INTENT'}</span><h2>{isFr ? 'Le point de départ.' : 'The starting point.'}</h2></div><div><p>{project.detail[locale]}</p><div className="case-outcome"><span className="micro-label">{isFr ? 'ÉTAT / RÉSULTAT' : 'STATUS / OUTCOME'}</span><p>{project.outcome[locale]}</p></div></div></section>
      {project.media?.length || project.video ? (
        <section className="case-media section-pad">
          <div className="case-media__heading"><span className="eyebrow">{isFr ? 'LECTEUR / SÉLECTION VIDÉO' : 'PLAYER / SELECTED VIDEO'}</span><span className="micro-label">{String((project.media?.length ?? 0) + (project.video ? 1 : 0)).padStart(2, '0')} {isFr ? 'EXTRAIT(S)' : 'CLIP(S)'}</span></div>
          <div className="case-media__grid">
            {project.video && (
              <figure className="case-media__item">
                <VideoPlayer local={project.video.local} poster={project.video.poster} title={title} labels={isFr ? VIDEO_LABELS.fr : VIDEO_LABELS.en} />
                <figcaption>{isFr ? 'Prévisualisation — teaser Unreal Engine' : 'Previsualization — Unreal Engine teaser'}</figcaption>
              </figure>
            )}
            {project.media?.map((media) => (
              <figure className="case-media__item" key={media.youtubeId}>
                <VideoPlayer youtubeId={media.youtubeId} title={media.title[locale]} labels={isFr ? VIDEO_LABELS.fr : VIDEO_LABELS.en} />
                <figcaption>{media.title[locale]}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}
      {project.gallery?.length ? (
        <section className="case-gallery section-pad">
          <div className="case-media__heading"><span className="eyebrow">{isFr ? 'PLANCHES / DÉVELOPPEMENT VISUEL' : 'PLATES / VISUAL DEVELOPMENT'}</span><span className="micro-label">{String(project.gallery.length).padStart(2, '0')} {isFr ? 'IMAGE(S)' : 'IMAGE(S)'}</span></div>
          <div className="case-gallery__grid">
            {project.gallery.map((item) => (
              <figure className="case-gallery__item" key={item.src}>
                <Image src={item.src} alt={item.caption[locale]} width={1600} height={1100} sizes="(max-width: 900px) 100vw, 33vw" />
                <figcaption>{item.caption[locale]}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}
      {project.demo ? (
        <section className="case-demo section-pad">
          <div className="case-links-head">
            <span className="eyebrow">{isFr ? 'DÉMONSTRATION / ESSAYER' : 'DEMO / TRY IT'}</span>
            <span className="micro-label">LIVE</span>
          </div>
          <a className="button button--gold" href={project.demo} target="_blank" rel="noreferrer">
            {isFr ? 'Lancer la démonstration' : 'Run the demo'} <ArrowUpRight size={16} />
          </a>
        </section>
      ) : null}
      {project.links.length > 0 ? (
        <section className="case-links-section section-pad">
          <div className="case-links-head">
            <span className="eyebrow">{isFr ? 'LIENS / SOURCES' : 'LINKS / SOURCES'}</span>
            <span className="micro-label">{String(project.links.length).padStart(2, '0')} {isFr ? 'LIEN(S)' : 'LINK(S)'}</span>
          </div>
          <div className="case-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined} className="text-link">
                {link.label[locale]} <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        </section>
      ) : null}
      <Link href={`/work/${next.slug}`} className="next-project"><span className="eyebrow">{isFr ? 'PROJET SUIVANT' : 'NEXT PROJECT'}</span><h2>{projectTitle(next, locale)}</h2><ArrowUpRight size={24} /></Link>
    </div>
  );
}
