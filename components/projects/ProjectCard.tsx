'use client';

import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { projectTitle, type Project, type Locale } from '@/site.config';
import { ProjectArtwork } from './ProjectArtwork';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
import { VIDEO_LABELS } from '@/site.config';

export function ProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const fr = locale === 'fr';
  const href = `/work/${project.slug}`;
  const title = projectTitle(project, locale);
  const firstVideo = project.media?.[0];
  const hasVideo = Boolean(firstVideo || project.video);

  return (
    <article className="work-card">
      <Link href={href} className="work-card__media" aria-label={`${fr ? 'Explorer' : 'Explore'} ${title}`}>
        {hasVideo ? (
          // The card is a link, so the player is inert here: a shield captures
          // the click and sends the visitor to the case study, where the same
          // clip plays with sound, controls and fullscreen.
          <span className="work-card__video">
            <VideoPlayer
              youtubeId={firstVideo?.youtubeId}
              local={project.video?.local}
              poster={project.video?.poster}
              title={firstVideo?.title[locale]}
              labels={fr ? VIDEO_LABELS.fr : VIDEO_LABELS.en}
            />
            <span className="work-card__video-shield" aria-hidden="true" />
          </span>
        ) : (
          <ProjectArtwork project={project} locale={locale} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 46vw" />
        )}
        <span className="work-card__number">{project.number}</span>
        <span className="work-card__open"><ArrowUpRight size={17} /></span>
      </Link>
      <div className="work-card__meta">
        <span>{project.category}</span>
        <span>{project.year}</span>
      </div>
      <h3 className="work-card__title"><Link href={href}>{title}</Link></h3>
      <p className="work-card__summary">{project.summary[locale]}</p>
      <div className="work-card__foot">
        <span>{project.status}</span>
        <Link href={href} className="work-card__link" aria-label={`${fr ? 'Voir le projet' : 'View project'} ${title}`}>
          {fr ? 'Voir le projet' : 'View project'} <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}
