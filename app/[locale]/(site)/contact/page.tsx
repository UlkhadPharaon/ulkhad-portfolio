import { localizedMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';
import { ContactForm } from '@/components/contact/ContactForm';
import { site } from '@/site.config';
import type { Locale } from '@/site.config';
import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, '/contact',
    { fr: 'Contact — Parlons de votre projet', en: 'Contact — Let’s discuss your project' },
    { fr: 'Contacter Ulkhad Pharaon pour un projet de film, VFX, XR, 3D ou système IA.', en: 'Contact Ulkhad Pharaon about a film, VFX, XR, 3D or AI systems project.' },
  );
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = (raw === 'en' ? 'en' : 'fr') as Locale;
  const fr = locale === 'fr';
  const emailReady = site.email.includes('@');
  const whatsappReady = site.whatsapp.trim().length > 0;
  const whatsappHref = whatsappReady ? (site.whatsapp.startsWith('http') ? site.whatsapp : `https://wa.me/${site.whatsapp.replace(/\D/g, '')}`) : undefined;
  const socials = [
    ['GitHub', site.socials.github], ['LinkedIn', site.socials.linkedin], ['Medium', site.socials.medium],
    ['Instagram', site.socials.instagram], ['TikTok', site.socials.tiktok], ['X', site.socials.x],
  ].filter((item) => item[1].startsWith('http'));

  return (
    <div className="inner-page contact-page">
      <PageIntro index="06" label={fr ? 'CONTACT / NOUS PARLONS' : 'CONTACT / LET’S TALK'} title={fr ? 'Décrivez le monde que vous voulez construire.' : 'Describe the world you want to build.'} description={fr ? 'Un bon brief commence par un problème clair. Donnez-moi le contexte, l’objectif et les contraintes — nous cadrerons la suite.' : 'A good brief starts with a clear problem. Share the context, objective and constraints — we’ll scope the next step.'} />
      <section className="contact-layout section-pad">
        <div className="contact-sidebar">
          <span className="eyebrow">DIRECT CHANNELS</span>
          {emailReady ? (
            <a href={`mailto:${site.email}`} className="contact-channel">
              <Mail size={18} />
              <span><small>EMAIL</small><b>{site.email}</b></span>
              <ArrowUpRight size={15} />
            </a>
          ) : null}
          {whatsappHref ? (
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="contact-channel">
              <MessageCircle size={18} />
              <span><small>WHATSAPP</small><b>{fr ? 'Démarrer une conversation' : 'Start a conversation'}</b></span>
              <ArrowUpRight size={15} />
            </a>
          ) : null}
          <div className="contact-channel contact-channel--static">
            <MapPin size={18} />
            <span><small>LOCATION / TIMEZONE</small><b>{site.location}</b></span>
          </div>
          {socials.length > 0 ? (
            <div className="contact-socials">
              <span className="micro-label">SOCIAL / NETWORK</span>
              <div>{socials.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noreferrer">{label}<ArrowUpRight size={12} /></a>)}</div>
            </div>
          ) : null}
          <div className="contact-reply"><span className="live-dot" />{fr ? 'Disponible pour des projets sélectionnés.' : 'Available for selected projects.'}</div>
          <div className="contact-sidebar-note">
            <span className="micro-label">BEFORE WE START</span>
            <p>{fr ? 'Je préfère les briefs honnêtes aux promesses floues. Budget, délais et contraintes techniques peuvent être discutés dès le départ.' : 'I prefer honest briefs over vague promises. Budget, timeline and technical constraints can be discussed from the start.'}</p>
          </div>
        </div>
        <div className="contact-form-wrap">
          <div className="contact-form-head">
            <span className="eyebrow">PROJECT INTAKE / 001</span>
            <span className="micro-label">{fr ? 'TOUS LES CHAMPS MARQUÉS SONT REQUIS' : 'REQUIRED FIELDS ARE MARKED'}</span>
          </div>
          <ContactForm locale={locale} />
        </div>
      </section>
    </div>
  );
}
