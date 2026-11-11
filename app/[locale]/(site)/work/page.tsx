import { localizedMetadata } from '@/lib/seo';
import { WorkDirectory } from '@/components/projects/WorkDirectory';
import { PageIntro } from '@/components/ui/PageIntro';
import type { Locale } from '@/site.config';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, '/work',
    { fr: 'Projets & études de cas', en: 'Selected work & case studies' },
    { fr: 'Cinéma, VFX, CGI, XR, computer vision et systèmes IA développés par Ulkhad Pharaon.', en: 'Cinema, VFX, CGI, XR, computer vision and AI systems built by Ulkhad Pharaon.' },
  );
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (raw === 'en' ? 'en' : 'fr') as Locale;
  return <div className="inner-page work-page"><PageIntro index="01" label={locale === 'fr' ? 'ARCHIVE / SÉLECTION' : 'ARCHIVE / SELECTED WORK'} title={locale === 'fr' ? 'Le travail parle.' : 'Let the work speak.'} description={locale === 'fr' ? 'Projets de cinéma, de VFX, de recherche XR et de systèmes IA. Chaque fiche distingue ce qui est livré, en développement ou encore à documenter.' : 'Cinema, VFX, XR research and AI systems. Each case study distinguishes what is shipped, in development or still to be documented.'} /><section className="section-pad inner-section"><WorkDirectory locale={locale} /></section></div>;
}
