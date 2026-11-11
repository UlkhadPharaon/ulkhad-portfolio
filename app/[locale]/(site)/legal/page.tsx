import { localizedMetadata } from '@/lib/seo';
import { PageIntro } from '@/components/ui/PageIntro';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return localizedMetadata(locale, '/legal',
    { fr: 'Confidentialité & données', en: 'Privacy & data' },
    { fr: 'Informations sur les données du formulaire et les interactions webcam du portfolio.', en: 'Information about contact-form data and webcam interactions on this portfolio.' },
  );
}

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const fr = raw !== 'en';
  return (
    <div className="inner-page legal-page">
      <PageIntro index="07" label={fr ? 'CONFIDENTIALITÉ / DONNÉES' : 'PRIVACY / DATA'} title={fr ? 'Votre navigateur. Vos choix.' : 'Your browser. Your choice.'} description={fr ? 'Ce site collecte le minimum : pas de profil publicitaire, pas de mesure d’audience, et aucune caméra n’est activée depuis ces pages.' : 'This site collects the minimum: no advertising profile, no audience measurement, and no camera is ever activated from these pages.'} />
      <section className="legal-content section-pad">
        <article>
          <span className="eyebrow">01 / CAMERA & TRACKING</span>
          <h2>{fr ? 'La caméra reste entre vos mains.' : 'The camera stays in your hands.'}</h2>
          <p>{fr ? 'Aucune page de ce site ne demande l’accès à la caméra et aucune image n’est capturée ni transmise. Les travaux de suivi des mains sont présentés par des captures d’écran et des vidéos de démonstrations réelles, pas par une webcam activée depuis le portfolio.' : 'No page on this site asks for camera access, and no image is captured or transmitted. The hand-tracking work is shown through screenshots and videos of real demonstrations, not through a webcam activated from the portfolio.'}</p>
        </article>
        <article>
          <span className="eyebrow">02 / CONTACT FORM</span>
          <h2>{fr ? 'Les informations de brief.' : 'Project inquiry data.'}</h2>
          <p>{fr ? 'Les informations envoyées via le formulaire servent uniquement à répondre à votre demande. Lorsque le formulaire est actif, elles sont transmises au prestataire d’envoi d’emails configuré côté serveur, puis conservées le temps nécessaire au suivi de l’échange. Aucune inscription marketing n’est créée.' : 'Information submitted through the form is used only to respond to your inquiry. When the form is active, it is passed to the server-side email provider configured for this site, then kept for as long as needed to follow up. No marketing list is created.'}</p>
        </article>
        <article>
          <span className="eyebrow">03 / HOSTING & LOGS</span>
          <h2>{fr ? 'Les journaux techniques.' : 'Technical logs.'}</h2>
          <p>{fr ? 'L’hébergeur peut enregistrer des journaux techniques (adresse IP, requête, horodatage) pour la sécurité et le fonctionnement du service. Ce site n’ajoute aucun outil de mesure d’audience ni cookie publicitaire.' : 'The hosting provider may record technical logs (IP address, request, timestamp) for security and service operation. This site adds no audience-measurement tool and no advertising cookie.'}</p>
        </article>
        <article>
          <span className="eyebrow">04 / YOUR RIGHTS</span>
          <h2>{fr ? 'Demander, corriger, supprimer.' : 'Ask, correct, delete.'}</h2>
          <p>{fr ? 'Pour consulter, corriger ou supprimer les informations que vous avez envoyées, utilisez le formulaire de contact en précisant votre demande. Une réponse est apportée dans un délai raisonnable.' : 'To access, correct or delete the information you submitted, use the contact form and state your request. A response is provided within a reasonable delay.'}</p>
        </article>
        <article>
          <span className="eyebrow">05 / EMBEDDED VIDEO</span>
          <h2>{fr ? 'Les lecteurs vidéo.' : 'Video players.'}</h2>
          <p>{fr ? 'Les lecteurs utilisent le domaine YouTube sans cookie (youtube-nocookie.com). Le chargement d’un lecteur met toutefois votre navigateur en relation avec les serveurs de Google, qui peut recevoir des données techniques telles que votre adresse IP. Aucun lecteur ne se charge avant l’ouverture d’une page de projet qui en contient un.' : 'Players use YouTube’s no-cookie domain (youtube-nocookie.com). Loading a player still connects your browser to Google’s servers, which may receive technical data such as your IP address. No player loads before you open a project page that includes one.'}</p>
        </article>
      </section>
    </div>
  );
}
