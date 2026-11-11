'use client';

import { useMemo, useState } from 'react';
import { projects, type Locale } from '@/site.config';
import { ProjectCard } from './ProjectCard';

const filters = ['ALL', 'FILM', 'VFX', 'XR', 'AI', 'STUDIO'];

export function WorkDirectory({ locale }: { locale: Locale }) {
  const [filter, setFilter] = useState('ALL');
  const filtered = useMemo(() => projects.filter((project) => {
    if (filter === 'ALL') return true;
    if (filter === 'FILM' || filter === 'STUDIO') return /FILM|PRODUCTION|STUDIO|AFROFUTURISM/.test(project.category);
    if (filter === 'VFX') return /VFX|3D/.test(project.category) || project.tools.some((tool) => /Blender|Nuke|Unreal/.test(tool));
    return project.category.includes(filter) || project.tools.some((tool) => tool.toUpperCase().includes(filter));
  }), [filter]);
  return (
    <>
      <div className="work-filter"><span className="micro-label">FILTER / CATEGORY</span><div>{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'is-active' : ''}>{item}</button>)}</div><span className="work-filter__count">{String(filtered.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span></div>
      <div className="projects-grid work-directory-grid">{filtered.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} />)}</div>
      {filtered.length === 0 && <p className="empty-state">{locale === 'fr' ? 'Aucun projet dans cette catégorie pour le moment.' : 'No projects in this category yet.'}</p>}
    </>
  );
}
