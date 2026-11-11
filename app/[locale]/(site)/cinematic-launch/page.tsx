import { localizedMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { Link } from '@/i18n/routing';
import { ArrowUpRight, Clapperboard, Film, Layers3 } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, '/cinematic-launch',
    { fr: 'Cinematic Launch — Film de marque premium', en: 'Cinematic Launch — Premium brand film' },
    { fr: 'Format de film hero premium pour marques et institutions, proposé par Studio Voix d’Or.', en: 'A premium hero-film format for brands and institutions, by Studio Voix d’Or.' },
  );
}

export default async function CinematicLaunchPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const fr = raw !== 'en';
  return <div className="inner-page cinematic-page"><PageIntro index="08" label="STUDIO VOIX D’OR / CINEMATIC LAUNCH" title={fr ? 'Une marque mérite son film.' : 'A brand deserves its film.'} description={fr ? 'Un format de film hero premium pour les marques et institutions qui veulent raconter une vision avec une vraie intention de cinéma.' : 'A premium hero-film format for brands and institutions that want to tell a story with a cinematic point of view.'} /><section className="cinematic-hero-art section-pad"><div className="cinematic-title-frame"><span className="micro-label">THE HERO FILM / 45—90 SEC</span><Clapperboard size={72} strokeWidth={0.7} /><span className="eyebrow">CINEMATIC LAUNCH / SVO</span></div><div className="cinematic-info"><h2>{fr ? 'Du positionnement à l’image finale.' : 'From positioning to final frame.'}</h2><p>{fr ? 'Un film principal de 45 à 90 secondes, accompagné de 3 à 5 déclinaisons courtes, avec une direction visuelle, une production et une finition sonore cohérentes.' : 'A 45–90 second hero film, accompanied by 3–5 short cutdowns, with coherent visual direction, production and sound finishing.'}</p><div className="cinematic-deliverables"><span><Film size={16} /> HERO FILM / 45–90s</span><span><Layers3 size={16} /> 3–5 CUTDOWNS</span></div></div></section><section className="cinematic-process section-pad"><div><span className="eyebrow">THE PROCESS</span><h2>{fr ? 'Quatre étapes. Une signature.' : 'Four steps. One signature.'}</h2></div><div className="cinematic-process-grid">{(fr ? ['Stratégie & intention','Écriture & préproduction','Production & CGI / VFX','Montage, color & sound'] : ['Strategy & intent','Writing & pre-production','Production & CGI / VFX','Edit, color & sound']).map((step,index)=><article key={step}><span>0{index+1}</span><h3>{step}</h3></article>)}</div></section><section className="cinematic-cta section-pad"><div><span className="eyebrow">BUILT FOR PREMIUM BRANDS & INSTITUTIONS</span><p>{fr ? 'Format non destiné aux clips musicaux. Le périmètre, le calendrier et le budget sont confirmés après un brief.' : 'Not designed for music videos. Scope, timeline and budget are confirmed after a brief.'}</p></div><Link href="/contact?type=film" className="button button--gold">{fr ? 'Parler de votre film' : 'Discuss your film'} <ArrowUpRight size={16} /></Link></section></div>;
}
