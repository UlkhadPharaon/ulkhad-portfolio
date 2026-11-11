import Image from 'next/image';
import { projectTitle, type Locale, type Project } from '@/site.config';

type ArtworkProps = {
  project: Project;
  locale: Locale;
  compact?: boolean;
  preload?: boolean;
  sizes?: string;
};

/**
 * Real cover when one exists; otherwise a designed abstract mark.
 * Abstract marks are never labelled as placeholders — they are the identity
 * of projects that have no publishable frame yet.
 */
export function ProjectArtwork({ project, locale, compact = false, preload = false, sizes }: ArtworkProps) {
  const visual = project.visual;

  if (project.cover) {
    return (
      <div className={`project-art project-art--cover ${compact ? 'project-art--compact' : ''}`}>
        <Image
          src={project.cover}
          alt={project.coverAlt?.[locale] ?? projectTitle(project, locale)}
          fill
          preload={preload}
          sizes={sizes ?? '(max-width: 900px) 100vw, 50vw'}
          className="project-art__img"
        />
      </div>
    );
  }

  return (
    <div className={`project-art project-art--${visual} ${compact ? 'project-art--compact' : ''}`} aria-hidden="true">
      <div className="project-art__grid" />
      {visual === 'hand' && <svg className="art-hand" viewBox="0 0 360 300" fill="none"><g stroke="#a9c6b4" strokeWidth="1.6" opacity=".76"><path d="M173 257 164 165 118 119 88 79 64 46M164 165 161 99 157 50 156 20M164 165 207 95 218 48 223 17M178 164 242 111 259 72 274 46M187 169 266 151 300 124 320 96"/><path d="M173 257 164 165 178 164 187 169M118 119 161 99 207 95 242 111 266 151" opacity=".4"/></g><g fill="#d2a95c"><circle cx="173" cy="257" r="4"/><circle cx="64" cy="46" r="3"/><circle cx="156" cy="20" r="3"/><circle cx="223" cy="17" r="3"/><circle cx="274" cy="46" r="3"/><circle cx="320" cy="96" r="3"/></g></svg>}
      {visual === 'cell' && <svg className="art-cell" viewBox="0 0 360 300" fill="none"><ellipse cx="180" cy="150" rx="118" ry="92" stroke="#a9c6b4" strokeWidth="1.2" opacity=".55"/><ellipse cx="180" cy="150" rx="88" ry="67" stroke="#d2a95c" strokeWidth="1.2" strokeDasharray="4 6"/><path d="M124 141c8-33 58-42 77-17 14 18 1 44-22 52-27 9-62-6-55-35Z" fill="#d2a95c" fillOpacity=".16" stroke="#d2a95c"/><circle cx="184" cy="148" r="18" fill="#a9c6b4" fillOpacity=".17" stroke="#a9c6b4"/><g fill="#a9c6b4"><circle cx="107" cy="118" r="3"/><circle cx="246" cy="126" r="3"/><circle cx="222" cy="205" r="3"/><circle cx="129" cy="207" r="3"/></g><path d="M180 38v25M180 237v25M52 150h24M284 150h24" stroke="#a9c6b4" opacity=".4"/></svg>}
      {visual === 'nodes' && <svg className="art-nodes" viewBox="0 0 360 300" fill="none"><g stroke="#d2a95c" strokeOpacity=".55" strokeWidth="1"><path d="M56 160 126 78 222 110 298 52M56 160 133 235 222 190 298 242M126 78 133 235M222 110 222 190M56 160 222 110 298 242"/></g><g fill="#0b0a09" stroke="#d2a95c" strokeWidth="1.5"><circle cx="56" cy="160" r="13"/><circle cx="126" cy="78" r="10"/><circle cx="222" cy="110" r="15"/><circle cx="298" cy="52" r="8"/><circle cx="133" cy="235" r="11"/><circle cx="222" cy="190" r="9"/><circle cx="298" cy="242" r="13"/></g><g fill="#a9c6b4"><circle cx="56" cy="160" r="3"/><circle cx="222" cy="110" r="4"/><circle cx="298" cy="242" r="3"/></g></svg>}
      {visual === 'film' && <div className="art-film"><div className="art-film__frame"><span>SHOT 04</span><i /><b>VOIX D’OR</b><small>00:01:24:09</small></div><div className="art-film__strip"><i /><i /><i /><i /><i /></div></div>}
      {visual === 'afrofuture' && <svg className="art-future" viewBox="0 0 360 300" fill="none"><path d="M180 34 250 118 221 254 139 254 110 118 180 34Z" stroke="#d2a95c" strokeWidth="1.3"/><path d="M180 34v220M110 118h140M139 254l41-136 41 136M110 118l70 17 70-17" stroke="#d2a95c" strokeOpacity=".65"/><circle cx="180" cy="118" r="44" stroke="#a9c6b4" strokeOpacity=".75" strokeDasharray="3 5"/><path d="M180 74v88M136 118h88" stroke="#a9c6b4" opacity=".6"/><circle cx="180" cy="118" r="8" fill="#a9c6b4" fillOpacity=".35"/></svg>}
      {visual === 'camera' && <svg className="art-camera" viewBox="0 0 360 300" fill="none"><path d="M60 104h178l30 26v116H60V104Z" stroke="#d2a95c" strokeWidth="1.4"/><path d="M238 132h31l32 24v62l-32 28h-31" stroke="#a9c6b4"/><circle cx="153" cy="172" r="54" stroke="#a9c6b4" strokeWidth="1.5"/><circle cx="153" cy="172" r="34" stroke="#d2a95c" strokeDasharray="3 5"/><circle cx="153" cy="172" r="12" fill="#a9c6b4" fillOpacity=".2"/><path d="M91 82v22M91 82h22M238 82h-22M238 82v22M91 246v-22M91 246h22M238 246h-22M238 246v-22" stroke="#d2a95c"/></svg>}
      <div className="art-corner art-corner--tl" /><div className="art-corner art-corner--br" />
    </div>
  );
}
