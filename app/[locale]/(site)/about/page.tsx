import { localizedMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { Link } from '@/i18n/routing';
import { timeline, tools, type Locale } from '@/site.config';
import { ArrowUpRight } from 'lucide-react';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
import { VIDEO_LABELS } from '@/site.config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, '/about',
    { fr: 'À propos', en: 'About' },
    { fr: 'Le parcours d’Ulkhad Pharaon, créateur à la croisée du cinéma, de la 3D, de la XR et des systèmes IA.', en: 'The journey of Ulkhad Pharaon, a creator at the intersection of cinema, 3D, XR and AI systems.' },
  );
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (raw === 'en' ? 'en' : 'fr') as Locale;
  const fr = locale === 'fr';
  return (
    <div className="inner-page about-page">
      <PageIntro index="03" label={fr ? 'IDENTITÉ / TRAJECTOIRE' : 'IDENTITY / JOURNEY'} title={fr ? 'Entre deux mondes. À leur intersection.' : 'Between worlds. At their intersection.'} description={fr ? 'Je suis Ulkhad Pharaon — Ulrich Tapsoba — un créateur basé à Ouagadougou, qui relie cinéma, technologie et apprentissage.' : 'I am Ulkhad Pharaon — Ulrich Tapsoba — a creator based in Ouagadougou, connecting cinema, technology and learning.'} />
      <section className="about-identity section-pad">
        <div className="about-identity__frame">
          <VideoPlayer
            local="/media/brand/ulkhad-logo-reveal.mp4"
            poster="/media/brand/ulkhad-logo-poster.jpg"
            title={fr ? 'Révélation du logo Ulkhad Pharaon' : 'Ulkhad Pharaon logo reveal'}
            labels={fr ? VIDEO_LABELS.fr : VIDEO_LABELS.en}
          />
        </div>
        <div className="about-identity__note">
          <span className="eyebrow">{fr ? 'IDENTITÉ / MARQUE' : 'IDENTITY / BRAND'}</span>
          <p>{fr ? 'Le logo et son animation sont l’identité officielle : une pellicule qui se déplie en triangle, des ondes sonores, et la promesse « African Audiovisual Empire ».' : 'The logo and its animation are the official identity: a film strip unfolding into a triangle, sound waves, and the promise of an “African Audiovisual Empire”.'}</p>
        </div>
      </section>
      <section className="about-manifesto section-pad"><div className="about-monogram">UP<span>✳</span></div><div><span className="eyebrow">{fr ? 'PROFIL CRÉATIF' : 'THE CREATIVE PROFILE'}</span><h2>{fr ? 'Je ne veux pas seulement utiliser la technologie. Je veux imaginer ce qu’elle rend possible.' : 'I don’t only want to use technology. I want to imagine what it makes possible.'}</h2><p>{fr ? 'Je construis ce parcours en parallèle de mes études. Mon terrain se situe à la croisée de la narration et de l’ingénierie créative. J’écris des scénarios, réalise et monte des images ; je développe aussi des prototypes XR, des interactions par tracking des mains et des systèmes IA. Cette double pratique nourrit une même ambition : produire des expériences fortes, utiles et culturellement situées.' : 'I am building this path alongside my studies. My practice sits where storytelling meets creative engineering. I write screenplays, direct and edit films; I also develop XR prototypes, hand-tracked interactions and AI systems. This dual practice feeds one ambition: create experiences that are compelling, useful and culturally grounded.'}</p></div></section>
      <section className="about-roles section-pad"><div><span className="eyebrow">{fr ? 'OÙ JE TRAVAILLE' : 'WHERE I WORK'}</span><h2>{fr ? 'Deux terrains, un même niveau d’exigence.' : 'Two fields, one standard of care.'}</h2></div><div className="about-role-list"><article><span>01 / PRODUCTION</span><h3>Studio Voix d’Or</h3><p>{fr ? 'Tech lead — production audiovisuelle, postproduction et développement créatif.' : 'Tech lead — audiovisual production, post-production and creative development.'}</p></article><article><span>02 / BUSINESS SYSTEMS</span><h3>AI Agents for Business Operations</h3><p>{fr ? 'Concevoir et déployer des agents IA pour les entreprises : réseaux sociaux, service client, automatisation des tâches répétitives.' : 'Designing and deploying AI agents for companies: social media, customer service and recurring-task automation.'}</p></article></div></section>
      <section className="about-credentials section-pad">
        <div><span className="eyebrow">{fr ? 'CRÉDIBILITÉ / EXPÉRIENCE' : 'CREDIBILITY / EXPERIENCE'}</span><h2>{fr ? 'Apprendre vite. Livrer du travail réel.' : 'Learn fast. Ship real work.'}</h2></div>
        <div className="about-credentials__grid">
          <article><span>01 / RECOGNITION</span><h3>Barka Digital</h3><p>{fr ? 'Finaliste d’un concours national du numérique en 2026 avec Barka Digital, une solution présentée sur la vitrine officielle du concours.' : 'Finalist in a 2026 national digital competition with Barka Digital, a solution published on the official competition showcase.'}</p><a className="text-link" href="https://lefasodigital.net/concours/vitrine/barka-digital" target="_blank" rel="noreferrer">{fr ? 'Voir la solution' : 'See the solution'} <ArrowUpRight size={14} /></a></article>
          <article><span>02 / PRODUCTION</span><h3>NGO & Government Projects</h3><p>{fr ? 'Missions audiovisuelles impliquant notamment UNICEF, Terre des Hommes, CRS, Save the Children et Plan International ; montage, étalonnage et animation selon les projets.' : 'Audiovisual assignments involving UNICEF, Terre des Hommes, CRS, Save the Children and Plan International; editing, color grading and animation depending on the project.'}</p></article>
          <article><span>03 / CHALLENGE</span><h3>NASA Space Apps 2026</h3><p>{fr ? 'Participation au NASA Space Apps Challenge 2026 au sein de l’équipe « Icarus 6 ».' : 'Participation in the 2026 NASA Space Apps Challenge as part of team “Icarus 6”.'}</p><a className="text-link" href="https://www.spaceappschallenge.org/2026/find-a-team/icarus6/?tab=members" target="_blank" rel="noreferrer">{fr ? 'Équipe Icarus 6' : 'Team Icarus 6'} <ArrowUpRight size={14} /></a></article>
        </div>
      </section>
      <section className="journey-section section-pad"><div className="about-timeline-heading"><span className="eyebrow">{fr ? 'LE PARCOURS' : 'THE JOURNEY'}</span><h2>{fr ? 'Ce qui se construit.' : 'What is being built.'}</h2></div><div className="timeline-list">{timeline[locale].map((item, index) => <article className="timeline-item" key={item.label}><div className="timeline-item__node"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="timeline-item__content"><h3>{item.label}</h3><p>{item.body}</p></div><span className="timeline-item__state">{index > 7 ? 'ONGOING' : 'LOGGED'}</span></article>)}</div></section>
      <section className="about-tools section-pad"><div><span className="eyebrow">TOOLS / WORKING SET</span><h2>{fr ? 'Un atelier en constante évolution.' : 'A constantly evolving workshop.'}</h2><p>{fr ? 'La liste ci-dessous est un inventaire de travail, pas une promesse de maîtrise égale sur chaque outil.' : 'The list below is a working inventory, not a claim of equal proficiency across every tool.'}</p></div><div className="about-tool-grid">{tools.map((tool) => <span key={tool.name}><b>{tool.name}</b><small>{tool.group}</small></span>)}</div></section>
      <section className="about-cv section-pad"><div><span className="eyebrow">PROFILE / DOSSIER</span><h2>{fr ? 'Le parcours complet, sur demande.' : 'The full record, on request.'}</h2><p>{fr ? 'Crédits, dates, références et accès aux projets : demandez le dossier de travail par le formulaire. Il est partagé projet par projet, avec les informations vérifiées.' : 'Credits, dates, references and project access: request the work dossier through the form. It is shared project by project, with verified information.'}</p></div><Link href="/contact" className="button button--outline">{fr ? 'Demander le dossier' : 'Request the dossier'} <ArrowUpRight size={15} /></Link></section>
    </div>
  );
}
