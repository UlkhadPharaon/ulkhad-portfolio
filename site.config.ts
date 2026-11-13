/**
 * Single source of truth for the portfolio's editable identity, copy and links.
 *
 * Content rules:
 * - Never invent a credit, metric, quote, logo or result.
 * - A project cover is only set when the image is a real frame or a real screenshot.
 * - `NEXT_PUBLIC_SITE_URL` supplies the public domain; nothing here fakes one.
 */
export type Locale = 'fr' | 'en';

export const site = {
  name: 'Ulkhad Pharaon',
  legalName: 'Ulrich Tapsoba',
  shortName: 'ULKHAD',
  location: 'Ouagadougou, Burkina Faso',
  timezone: 'Africa/Ouagadougou',
  email: '',
  whatsapp: '',
  defaultLocale: 'fr' as Locale,
  media: {
    hero: '/media/work/unreal-teaser-frame.jpg',
    signature: '/media/work/vfx-02-crop.jpg',
  },
  socials: {
    github: 'https://github.com/UlkhadPharaon',
    cellLabRepo: 'https://github.com/UlkhadPharaon/Celly',
    cellLabDemo: 'https://cellab.vercel.app',
    cellyDemo: 'https://celly-epp.pages.dev/',
    barkaDigital: 'https://lefasodigital.net/concours/vitrine/barka-digital',
    nasaTeam: 'https://www.spaceappschallenge.org/2026/find-a-team/icarus6/?tab=members',
    linkedin: '',
    medium: 'https://medium.com/@ulrichtapsoba2009',
    instagram: '',
    tiktok: '',
    x: '',
  },
  metadata: {
    title: 'Ulkhad Pharaon — Films, produits, systèmes',
    description: {
      fr: 'Ulkhad Pharaon — Ulrich Tapsoba. Réalisateur et builder à Ouagadougou : films, VFX, environnements 3D temps réel et systèmes IA.',
      en: 'Ulkhad Pharaon — Ulrich Tapsoba. Filmmaker and builder in Ouagadougou: films, VFX, real-time 3D environments and AI systems.',
    },
  },
};

export type ProofPoint = {
  id: string;
  label: Record<Locale, string>;
  value: Record<Locale, string>;
  note?: Record<Locale, string>;
  /** Key into `site.socials` for an outbound proof link. */
  href?: string;
};

export const proofPoints: ProofPoint[] = [
  {
    id: 'finalist',
    label: { fr: 'FINALISTE / 2026', en: 'FINALIST / 2026' },
    value: { fr: 'Barka Digital — Concours National du Numérique', en: 'Barka Digital — National Digital Competition' },
    href: 'barkaDigital',
  },
  {
    id: 'studio',
    label: { fr: 'PRODUCTION', en: 'PRODUCTION' },
    value: { fr: 'Studio Voix d’Or', en: 'Studio Voix d’Or' },
    note: { fr: 'UNICEF · CRS · Save the Children · Plan', en: 'UNICEF · CRS · Save the Children · Plan' },
  },
  {
    id: 'products',
    label: { fr: 'EN LIGNE', en: 'LIVE' },
    value: { fr: '5 applications conçues et déployées', en: '5 applications designed and shipped' },
  },
];

export type Audience = {
  id: string;
  label: Record<Locale, string>;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
  href: string;
  cta: Record<Locale, string>;
};

export const audiences: Audience[] = [
  {
    id: 'programs',
    label: { fr: 'PROGRAMMES & INVESTISSEURS', en: 'PROGRAMS & INVESTORS' },
    title: { fr: 'La trajectoire, puis les preuves.', en: 'The trajectory, then the proof.' },
    body: { fr: 'Ce que je construis, avec qui, et ce que ça produit déjà.', en: 'What I am building, with whom, and what it already produces.' },
    href: '/about',
    cta: { fr: 'Lire le parcours', en: 'Read the journey' },
  },
  {
    id: 'recruiters',
    label: { fr: 'RECRUTEURS', en: 'RECRUITERS' },
    title: { fr: 'Ce que je sais livrer.', en: 'What I can ship.' },
    body: { fr: 'Films, images 3D, produits et systèmes, avec les rôles et les outils.', en: 'Films, 3D imagery, products and systems, with roles and tools.' },
    href: '/work',
    cta: { fr: 'Voir les projets', en: 'See the work' },
  },
  {
    id: 'institutions',
    label: { fr: 'INSTITUTIONS & PARTENAIRES', en: 'INSTITUTIONS & PARTNERS' },
    title: { fr: 'Des productions réelles.', en: 'Real productions.' },
    body: { fr: 'Montage, étalonnage et animation sur des projets associatifs et gouvernementaux.', en: 'Editing, color grading and animation across NGO and government projects.' },
    href: '/services',
    cta: { fr: 'Voir les services', en: 'See services' },
  },
  {
    id: 'clients',
    label: { fr: 'CLIENTS CRÉATIFS', en: 'CREATIVE CLIENTS' },
    title: { fr: 'Films, VFX, outils.', en: 'Films, VFX, tools.' },
    body: { fr: 'Un brief clair, une direction visuelle, un livrable utilisable.', en: 'A clear brief, a visual direction, a usable deliverable.' },
    href: '/contact',
    cta: { fr: 'Décrire un projet', en: 'Start a project' },
  },
];

export const copy = {
  fr: {
    eyebrow: 'RÉALISATEUR · BUILDER · OUAGADOUGOU',
    heroClaim: 'Des films. Des produits. Des systèmes.',
    heroIntro: 'Réalisateur et builder. Je travaille là où le cinéma, la 3D temps réel et l’IA se rencontrent — du scénario au produit livré.',
    heroProof: 'Finaliste — Barka Digital, Concours National du Numérique 2026 · Studio Voix d’Or',
    heroImageCaption: 'Teaser de court métrage — réalisation & production, Unreal Engine.',
    workLabel: 'TRAVAIL / SÉLECTION',
    workTitle: 'Ce qui existe déjà.',
    workIntro: 'Films, environnements temps réel et produits en ligne. Chaque image renvoie à un projet livré ou publié.',
    workCta: 'Voir tout le travail',
    signatureEyebrow: 'ÉTUDE VFX / IMAGE FINALE',
    signatureTitle: 'L’image se construit avant d’être filmée.',
    signatureBody: 'Simulation, rendu et compositing. Une étude personnelle réalisée avec Blender, Houdini, Unreal Engine et Nuke.',
    aboutEyebrow: 'LE CONSTRUCTEUR',
    aboutTitle: 'Le cinéma m’a appris à raconter. Le code m’a appris à livrer.',
    aboutBody: 'Je m’appelle Ulrich Tapsoba — Ulkhad Pharaon. Basé à Ouagadougou, je construis en parallèle des films, des environnements 3D et des produits IA. La même exigence traverse les trois : une idée claire, une exécution réelle, un résultat utilisable.',
    aboutCta: 'Lire le parcours',
    aboutChips: ['Studio Voix d’Or', 'NASA Space Apps 2026'],
    voicesLabel: 'RÉSEAU / HIGH FIVES',
    voicesTitle: 'Le travail se construit avec d’autres.',
    voicesIntro: 'Producteurs, DJs, studios et pairs qui ont vu le travail de près.',
    audiencesLabel: 'PAR OÙ COMMENCER',
    audiencesTitle: 'Quatre façons d’entrer.',
    contactEyebrow: 'UNE IDÉE À CONSTRUIRE',
    contactTitle: 'Parlons du problème, puis construisons.',
    contactBody: 'Un film, un environnement 3D, un produit IA ou une collaboration institutionnelle : décrivez le contexte et l’objectif.',
    contactCta: 'Décrire un projet',
  },
  en: {
    eyebrow: 'FILMMAKER · BUILDER · OUAGADOUGOU',
    heroClaim: 'Films. Products. Systems.',
    heroIntro: 'Filmmaker and builder. I work where cinema, real-time 3D and AI meet — from screenplay to shipped product.',
    heroProof: 'Finalist — Barka Digital, 2026 National Digital Competition · Studio Voix d’Or',
    heroImageCaption: 'Short-film teaser — direction & production, Unreal Engine.',
    workLabel: 'WORK / SELECTED',
    workTitle: 'What already exists.',
    workIntro: 'Films, real-time environments and live products. Every image points to a shipped or published project.',
    workCta: 'See all work',
    signatureEyebrow: 'VFX STUDY / FINAL IMAGE',
    signatureTitle: 'The image is built before it is filmed.',
    signatureBody: 'Simulation, rendering and compositing. A personal study made with Blender, Houdini, Unreal Engine and Nuke.',
    aboutEyebrow: 'THE BUILDER',
    aboutTitle: 'Cinema taught me to tell. Code taught me to ship.',
    aboutBody: 'My name is Ulrich Tapsoba — Ulkhad Pharaon. Based in Ouagadougou, I build films, 3D environments and AI products in parallel. The same standard runs through all three: a clear idea, real execution, a usable result.',
    aboutCta: 'Read the journey',
    aboutChips: ['Studio Voix d’Or', 'NASA Space Apps 2026'],
    voicesLabel: 'NETWORK / HIGH FIVES',
    voicesTitle: 'Good work is built with other people.',
    voicesIntro: 'Producers, DJs, studios and peers who have seen the work up close.',
    audiencesLabel: 'WHERE TO START',
    audiencesTitle: 'Four ways in.',
    contactEyebrow: 'SOMETHING TO BUILD',
    contactTitle: 'Name the problem, then we build.',
    contactBody: 'A film, a 3D environment, an AI product or an institutional collaboration: share the context and the objective.',
    contactCta: 'Start a project',
  },
} satisfies Record<Locale, object>;

/** Every control the video player shows, in both languages. */
export type VideoLabels = {
  sound: string;
  soundOn: string;
  muted: string;
  fullscreen: string;
  focus: string;
  focusOff: string;
};

export const VIDEO_LABELS: Record<Locale, VideoLabels> = {
  fr: {
    sound: 'Regarder avec le son',
    soundOn: 'Son activ\u00e9',
    muted: 'Boucle muette',
    fullscreen: 'Plein \u00e9cran',
    focus: 'Focus',
    focusOff: 'Quitter le focus',
  },
  en: {
    sound: 'Watch with sound',
    soundOn: 'Sound on',
    muted: 'Muted loop',
    fullscreen: 'Fullscreen',
    focus: 'Focus',
    focusOff: 'Exit focus',
  },
};

export type Project = {
  slug: string;
  number: string;
  /** Canonical title. Proper names stay identical in both languages. */
  title: string;
  /** French rendering for descriptive titles; omitted for proper names. */
  titleFr?: string;
  category: string;
  status: string;
  visual: 'hand' | 'cell' | 'nodes' | 'film' | 'afrofuture' | 'camera';
  year: string;
  role: string[];
  tools: string[];
  summary: Record<Locale, string>;
  detail: Record<Locale, string>;
  outcome: Record<Locale, string>;
  links: { label: Record<Locale, string>; href: string; external?: boolean }[];
  media?: { youtubeId: string; title: Record<Locale, string> }[];
  /** Self-hosted clip shown with the autoplaying player, used instead of YouTube. */
  video?: { local: string; poster?: string };
  /** Self-hosted interactive demo, opened in a new tab from the case study. */
  demo?: string;
  /** Real stills shown as a gallery on the case-study page. */
  gallery?: { src: string; caption: Record<Locale, string> }[];
  cover?: string;
  coverAlt?: Record<Locale, string>;
  home?: number;
};

/** French pages should not display an English descriptive title. */
export function projectTitle(project: Project, locale: Locale) {
  return locale === 'fr' ? project.titleFr ?? project.title : project.title;
}

export const projects: Project[] = ([
  {
    slug: 'rain-power-nikon-film-festival',
    number: '01',
    title: 'Rain Power — Unreal Documentary',
    titleFr: 'Rain Power — documentaire Unreal',
    category: 'FILM / UNREAL ENGINE',
    status: 'COLLABORATIVE FILM',
    visual: 'film',
    year: 'NIKON FILM FESTIVAL',
    role: ['Unreal Engine production', 'Real-time environments'],
    tools: ['Unreal Engine', 'Virtual production'],
    summary: {
      fr: 'Rain Power est le nom du film : un court documentaire produit avec Studio Voix d’Or dans un univers construit avec Unreal Engine.',
      en: 'Rain Power is the film’s name: a documentary short produced with Studio Voix d’Or inside a world built with Unreal Engine.',
    },
    detail: {
      fr: 'Rain Power est un court documentaire en images réelles et environnements Unreal Engine, produit avec Studio Voix d’Or et présenté dans le cadre du Nikon Film Festival. Le film mêle prises de vues réelles et univers temps réel construits dans Unreal Engine.',
      en: 'Rain Power is a documentary short combining live-action footage and Unreal Engine environments, produced with Studio Voix d’Or and presented in the context of the Nikon Film Festival. The film mixes real footage with real-time worlds built in Unreal Engine.',
    },
    outcome: { fr: 'Film disponible en ligne.', en: 'Film available online.' },
    links: [{ label: { fr: 'Voir le film · YouTube', en: 'Watch film · YouTube' }, href: 'https://youtu.be/Fe099D1qAoc', external: true }],
    media: [{ youtubeId: 'Fe099D1qAoc', title: { fr: 'Rain Power — court documentaire', en: 'Rain Power — documentary short' } }],
    cover: '/media/work/rain-power.jpg',
    coverAlt: {
      fr: 'Feuille verte couverte de gouttes de pluie, image du documentaire Rain Power.',
      en: 'Green leaf covered in raindrops, a frame from the Rain Power documentary.',
    },
    home: 1,
  },
  {
    slug: 'unreal-engine-short-film-teaser',
    number: '02',
    title: 'Unreal Engine — Short Film Teaser',
    titleFr: 'Unreal Engine — teaser de court métrage',
    category: 'FILM / DIRECTION',
    status: 'DIRECTED & PRODUCED',
    visual: 'film',
    year: 'SELECTED WORK',
    role: ['Director', 'Producer'],
    tools: ['Unreal Engine', 'Film direction', 'Previsualization'],
    summary: {
      fr: 'Un teaser de court métrage dirigé et produit dans un univers cinématographique construit avec Unreal Engine.',
      en: 'A short-film teaser directed and produced inside a cinematic world built with Unreal Engine.',
    },
    detail: {
      fr: 'Ce projet réunit direction, production et création d’un univers visuel temps réel avec Unreal Engine. Les outils 3D servent la mise en scène et la narration.',
      en: 'This project brings together direction, production and real-time worldbuilding in Unreal Engine. The 3D tools serve staging and storytelling.',
    },
    outcome: { fr: 'Teaser publié en ligne.', en: 'Teaser published online.' },
    links: [{ label: { fr: 'Voir le teaser · YouTube', en: 'Watch teaser · YouTube' }, href: 'https://youtu.be/reQEJulE2hU', external: true }],
    media: [{ youtubeId: 'reQEJulE2hU', title: { fr: 'Teaser de court métrage', en: 'Short-film teaser' } }],
    cover: '/media/work/unreal-teaser-frame.jpg',
    coverAlt: {
      fr: 'Silhouette bras ouverts devant un mur de briques, chapeau lumineux rouge — teaser réalisé avec Unreal Engine.',
      en: 'Figure with arms open in front of a brick wall, glowing red hat — teaser made with Unreal Engine.',
    },
    home: 2,
  },
  {
    slug: 'music-video-direction-editing',
    number: '03',
    title: 'Music Videos — Solo End-to-End Direction',
    titleFr: 'Clips musicaux — réalisation & montage en autonomie',
    category: 'FILM / MUSIC VIDEO',
    status: 'WRITTEN, SHOT, EDITED & GRADED ALONE',
    visual: 'camera',
    year: 'SELECTED WORK',
    role: ['Idea', 'Storyboard', 'Direction', 'Camera', 'Editing', 'Color grading'],
    tools: ['Directing', 'Storyboarding', 'Editing', 'Color grading'],
    summary: {
      fr: 'Des clips que j’ai menés seul, de l’idée à l’image finale : écriture, storyboard, tournage, montage et étalonnage.',
      en: 'Music videos I carried alone from idea to final image: writing, storyboard, shooting, editing and color grading.',
    },
    detail: {
      fr: 'Ces clips ont ceci de particulier qu’ils ont été menés par une seule personne, de bout en bout. L’idée, le storyboard, le tournage, le montage et l’étalonnage sont de mon fait. Ce sont donc les projets où la direction visuelle est la plus personnelle : chaque choix de cadre, de rythme et de couleur passe par la même tête, sans validation intermédiaire.',
      en: 'What makes these music videos special is that they were carried by one person, end to end. The idea, the storyboard, the shoot, the edit and the grade are all mine. They are the projects where the visual direction is most personal: every framing, rhythm and color choice passes through one head, with no intermediate validation.',
    },
    outcome: { fr: 'Extrait vidéo disponible en ligne.', en: 'A video sample is available online.' },
    links: [{ label: { fr: 'Voir le clip · YouTube', en: 'Watch music video · YouTube' }, href: 'https://youtu.be/fkdxzegfuk4', external: true }],
    media: [{ youtubeId: 'fkdxzegfuk4', title: { fr: 'Extrait — réalisation & montage', en: 'Sample — direction & editing' } }],
    cover: '/media/work/music-video.jpg',
    coverAlt: {
      fr: 'Foule joyeuse et enfant souriant, extrait d’un clip réalisé et monté.',
      en: 'Crowd and smiling child, a frame from a directed and edited music video.',
    },
  },
  {
    slug: 'vfx-cgi-environments',
    number: '04',
    title: 'VFX, CGI & Real-Time Environments',
    titleFr: 'VFX, CGI & environnements temps réel',
    category: 'VFX / CGI / 3D',
    status: 'SELECTED BREAKDOWNS',
    visual: 'camera',
    year: 'SELECTED WORK',
    role: ['VFX artist', '3D generalist', 'Environment creator'],
    tools: ['Blender', 'Houdini', 'Unreal Engine', 'Nuke', 'After Effects'],
    summary: {
      fr: 'Simulations, compositing, animation produit 3D, modélisation et création d’environnements temps réel.',
      en: 'Simulations, compositing, 3D product animation, modeling and real-time environment creation.',
    },
    detail: {
      fr: 'Cette sélection rassemble des recherches et travaux en simulation avec Blender, Houdini et Unreal Engine, en compositing avec Nuke et After Effects, ainsi qu’en modélisation, animation produit et création d’environnements 3D.',
      en: 'This selection brings together simulation work in Blender, Houdini and Unreal Engine; compositing in Nuke and After Effects; plus 3D modeling, product animation and environment creation.',
    },
    outcome: { fr: 'Cinq extraits publiés en ligne.', en: 'Five excerpts published online.' },
    links: [
      { label: { fr: 'Étude VFX 01 · YouTube', en: 'VFX study 01 · YouTube' }, href: 'https://youtu.be/g_GY5vTkfDo', external: true },
      { label: { fr: 'Étude VFX 02 · YouTube', en: 'VFX study 02 · YouTube' }, href: 'https://youtu.be/W2SLiDIwJRA', external: true },
      { label: { fr: 'Étude VFX 03 · YouTube', en: 'VFX study 03 · YouTube' }, href: 'https://youtu.be/tsIy230X3X8', external: true },
      { label: { fr: 'Étude VFX 04 · YouTube', en: 'VFX study 04 · YouTube' }, href: 'https://youtu.be/-essNSRi49E', external: true },
      { label: { fr: 'Étude VFX 05 · YouTube', en: 'VFX study 05 · YouTube' }, href: 'https://youtu.be/Hrcecqe3rL4', external: true },
    ],
    media: [
      { youtubeId: 'g_GY5vTkfDo', title: { fr: 'Étude VFX / 3D 01', en: 'VFX / 3D study 01' } },
      { youtubeId: 'W2SLiDIwJRA', title: { fr: 'Étude VFX / 3D 02', en: 'VFX / 3D study 02' } },
      { youtubeId: 'tsIy230X3X8', title: { fr: 'Étude VFX / 3D 03', en: 'VFX / 3D study 03' } },
      { youtubeId: '-essNSRi49E', title: { fr: 'Étude VFX / 3D 04', en: 'VFX / 3D study 04' } },
      { youtubeId: 'Hrcecqe3rL4', title: { fr: 'Étude VFX / 3D 05', en: 'VFX / 3D study 05' } },
    ],
    cover: '/media/work/vfx-01.jpg',
    coverAlt: {
      fr: 'Créature aquatique dans une eau turquoise, étude VFX et rendu 3D.',
      en: 'Aquatic creature in turquoise water, a VFX and 3D rendering study.',
    },
  },
  {
    slug: 'celllab',
    number: '05',
    title: 'CellLab',
    category: 'XR / WEB 3D',
    status: 'PROTOTYPE LIVE',
    visual: 'cell',
    year: '2026',
    role: ['Product builder', '3D interaction'],
    tools: ['Three.js', 'MediaPipe', 'Webcam hand tracking'],
    summary: {
      fr: 'Explorer une cellule en 3D et interagir avec elle grâce à une webcam.',
      en: 'Explore a 3D cell and interact with it through a webcam.',
    },
    detail: {
      fr: 'CellLab est un prototype web qui relie la vision par ordinateur à un modèle 3D manipulable. Le projet teste une hypothèse simple : une interaction gestuelle peut-elle rendre l’exploration d’un modèle biologique plus intuitive ?',
      en: 'CellLab is a web prototype connecting computer vision to a manipulable 3D model. It tests a simple hypothesis: can gesture-based interaction make exploring a biological model feel more intuitive?',
    },
    outcome: { fr: 'Une démonstration interactive est accessible en ligne ; le code est public.', en: 'An interactive demo is available online; the code is public.' },
    links: [{ label: { fr: 'Ouvrir la démo', en: 'Open live demo' }, href: 'https://cellab.vercel.app', external: true },
  { label: { fr: 'Voir le code source', en: 'View source code' }, href: 'https://github.com/UlkhadPharaon/Celly', external: true }],
    cover: '/media/apps/cellab.png',
    coverAlt: { fr: 'Interface du prototype CellLab dans le navigateur.', en: 'CellLab prototype interface in the browser.' },
  },
  {
    slug: 'celly',
    number: '06',
    title: 'Celly',
    category: 'EDTECH / WEB 3D',
    status: 'LIVE APP',
    visual: 'cell',
    year: '2026',
    role: ['Product builder', 'Adaptation for secondary school'],
    tools: ['Three.js', 'MediaPipe', 'Hand tracking', 'Educational design'],
    summary: {
      fr: 'La version lycée de CellLab : même interaction, public et programme adaptés.',
      en: 'The secondary-school version of CellLab: the same interaction, adapted audience and curriculum.',
    },
    detail: {
      fr: 'Celly adapte CellLab au public du lycée. L’interaction reste identique — une main devant la webcam, un geste de pinch pour manipuler l’objet 3D — mais le contenu, le vocabulaire et le niveau sont pensés pour des élèves plus âgés. C’est la même base technique appliquée à un autre moment du parcours scolaire.',
      en: 'Celly adapts CellLab for secondary-school students. The interaction stays the same — a hand in front of the webcam, a pinch gesture to manipulate the 3D object — but the content, vocabulary and level are designed for older students. The same technical base applied to a different point in the school journey.',
    },
    outcome: { fr: 'Application en ligne et utilisable en classe.', en: 'A live application ready for classroom use.' },
    links: [{ label: { fr: 'Ouvrir la démo', en: 'Open live demo' }, href: 'https://celly-epp.pages.dev/', external: true }],
    cover: '/media/apps/celly.png',
    coverAlt: { fr: 'Interface de l’application éducative Celly dans le navigateur.', en: 'Celly educational application interface in the browser.' },
  },
  {
    slug: 'dagara-germanist-ai',
    number: '07',
    title: 'Dagara Germanist AI',
    category: 'AI / EDUCATION',
    status: 'LIVE APP',
    visual: 'nodes',
    year: '2026',
    role: ['App builder', 'AI workflow designer'],
    tools: ['AI-assisted research', 'Web application', 'Workflow design'],
    summary: {
      fr: 'Une application conçue pour accompagner les élèves inspecteurs dans leurs recherches et leurs travaux.',
      en: 'An application built to support inspector trainees with research and academic work.',
    },
    detail: {
      fr: 'Dagara Germanist AI aide des élèves inspecteurs dans leur recherche et leur travail. Selon le retour partagé, un inspecteur ayant utilisé l’outil a obtenu 18/20 à sa soutenance ; ce résultat est rapporté comme un retour d’usage, sans prétendre que l’application en est l’unique cause.',
      en: 'Dagara Germanist AI supports inspector trainees with research and academic work. According to the feedback shared, an inspector who used the tool received 18/20 at their defense; this is presented as a reported user outcome, not as a result caused by the app alone.',
    },
    outcome: { fr: 'Application accessible en ligne et utilisée dans un contexte réel de préparation de soutenance.', en: 'A live application used in a real thesis-defense preparation context.' },
    links: [{ label: { fr: 'Ouvrir l’application', en: 'Open application' }, href: 'https://dagara-germanist-ai.vercel.app', external: true }],
    cover: '/media/apps/dagara.png',
    coverAlt: { fr: 'Interface de l’application Dagara Germanist AI.', en: 'Dagara Germanist AI application interface.' },
    home: 6,
  },
  {
    slug: 'lenscraft-music-to-scenario',
    number: '08',
    title: 'LensCraft — Music to Scenario',
    titleFr: 'LensCraft — de la musique au scénario',
    category: 'AI / CREATIVE TOOLS',
    status: 'USED AT STUDIO VOIX D’OR',
    visual: 'nodes',
    year: '2026',
    role: ['Product builder', 'AI workflow designer'],
    tools: ['AI', 'Music analysis', 'Lyrics analysis', 'Creative writing'],
    summary: {
      fr: 'Un générateur de scénarios qui s’appuie sur la musique et les paroles pour nourrir la création audiovisuelle.',
      en: 'A scenario generator that uses music and lyrics to support audiovisual creation.',
    },
    detail: {
      fr: 'LensCraft a été conçu pour un studio de production musicale : l’outil prend en compte la musique et les paroles afin de proposer une direction de scénario exploitable dans un processus créatif. Il est utilisé par Studio Voix d’Or.',
      en: 'LensCraft was built for a music production studio: it takes music and lyrics into account to suggest a scenario direction that can feed a creative workflow. It is used by Studio Voix d’Or.',
    },
    outcome: { fr: 'Outil utilisé au sein de Studio Voix d’Or.', en: 'Tool used within Studio Voix d’Or.' },
    links: [{ label: { fr: 'Ouvrir LensCraft', en: 'Open LensCraft' }, href: 'https://lenscraft-three.vercel.app', external: true }],
    cover: '/media/apps/lenscraft.png',
    coverAlt: { fr: 'Interface de LensCraft, générateur de scénarios à partir d’une musique.', en: 'LensCraft interface, a scenario generator driven by music.' },
  },
  {
    slug: 'libriwouo-sme-tax-saas',
    number: '09',
    title: 'LibriWouo — SME Tax SaaS',
    titleFr: 'LibriWouo — SaaS fiscal pour PME',
    category: 'AI / BUSINESS SOFTWARE',
    status: 'SAAS PROTOTYPE',
    visual: 'nodes',
    year: '2026',
    role: ['SaaS builder', 'Product developer'],
    tools: ['Cloudflare Workers', 'Web application', 'Business workflows'],
    summary: {
      fr: 'Un SaaS en construction pour aider les PME à organiser plus simplement leurs obligations fiscales et leurs impôts.',
      en: 'A SaaS in development to help SMEs manage tax obligations and tax-related workflows more easily.',
    },
    detail: {
      fr: 'LibriWouo vise à rendre les démarches fiscales des petites et moyennes entreprises plus compréhensibles et plus faciles à suivre. Le produit est présenté comme un prototype logiciel ; les fonctions réglementaires et la conformité doivent être validées avant tout usage décisionnel.',
      en: 'LibriWouo aims to make tax processes easier for small and medium-sized businesses to understand and track. It is presented as a software prototype; regulatory functionality and compliance must be validated before operational reliance.',
    },
    outcome: { fr: 'Version prototype accessible en ligne.', en: 'A prototype version is available online.' },
    links: [{ label: { fr: 'Ouvrir le prototype LibriWouo', en: 'Open LibriWouo prototype' }, href: 'https://libriwouo-cloudflare-version1.ulrichtapsoba2009.workers.dev/', external: true }],
    cover: '/media/apps/libriwouo.png',
    coverAlt: { fr: 'Interface de LibriWouo, tableau de bord fiscal pour PME.', en: 'LibriWouo interface, a tax dashboard for SMEs.' },
  },
  {
    slug: 'business-ai-agents',
    number: '10',
    title: 'Nefertem — AI Growth Systems',
    titleFr: 'Nefertem — systèmes de croissance IA',
    category: 'AI / BUSINESS SYSTEMS',
    status: 'LIVE SERVICE',
    visual: 'nodes',
    year: '2026—',
    role: ['Service design', 'Agent architecture', 'Automation', 'Client operations'],
    tools: ['Custom AI agents', 'Content production', 'WhatsApp onboarding', 'Weekly reporting'],
    summary: {
      fr: 'Un service en ligne qui crée les visuels d’une marque, publie, répond à ses clients et lui envoie un bilan clair chaque semaine.',
      en: 'A live service that creates a brand’s visuals, publishes them, answers its customers and sends a clear report every week.',
    },
    detail: {
      fr: 'Nefertem est un système de croissance qui fonctionne comme un service à part entière, pas comme une maquette. Il prend en charge la chaîne complète : création des visuels, publication sur les pages de la marque, réponse aux commentaires et aux messages, puis un bilan simple en français courant chaque semaine. L’intégration se fait en deux minutes sur WhatsApp, et le premier lot de contenus est livré sous 72 heures. L’offre est mensuelle, sans engagement et résiliable à tout moment, payable par Orange Money, Moov Money, Wave ou virement. Le budget publicitaire, quand il y en a un, reste séparé des honoraires : la somme versée à Meta, TikTok ou Google s’ajoute. Le premier lot est refait gratuitement une fois si le style ne convient pas. Les comptes et la marque restent au client, et les contenus créés pour lui lui appartiennent.',
      en: 'Nefertem is a growth system that runs as a service in its own right, not as a mock-up. It covers the whole chain: creating the visuals, publishing them on the brand’s pages, answering comments and messages, then a plain-language report every week. Onboarding takes two minutes on WhatsApp, and the first batch of content is delivered within 72 hours. The offer is monthly, with no commitment and cancellation at any time, payable by Orange Money, Moov Money, Wave or bank transfer. Any advertising budget stays separate from the fees: what goes to Meta, TikTok or Google is added on top. The first batch is redone once, free, if the style does not fit. The accounts and the brand stay with the client, and the content created for them belongs to them.',
    },
    outcome: {
      fr: 'Service en ligne et en production, avec offres publiées, exemples de production, FAQ et paiement mobile money intégré.',
      en: 'Live service in production, with published offers, production examples, an FAQ and integrated mobile-money payment.',
    },
    links: [
      { label: { fr: 'Ouvrir Nefertem', en: 'Open Nefertem' }, href: 'https://nefertem.pages.dev/', external: true },
    ],
    cover: '/media/work/nefertem-home.jpg',
    coverAlt: {
      fr: 'Page d’accueil de Nefertem : « Votre marque reste visible, même quand vous êtes débordé », diagnostic gratuit et premier lot en 72 heures.',
      en: 'Nefertem home page: “Your brand stays visible even when you are overwhelmed,” free diagnostic and a first batch within 72 hours.',
    },
    home: 4,
  },
  {
    slug: 'creative-ai-agent-orchestration',
    number: '11',
    title: 'Jordan — Creative AI Agent',
    titleFr: 'Jordan — agent IA créatif',
    category: 'AI / CREATIVE AUTOMATION',
    status: 'ACTIVE BUILD',
    visual: 'nodes',
    year: '2026—',
    role: ['Agent design', 'Pipeline architecture', 'HyperFrames compositions'],
    tools: ['LLM agents', 'HyperFrames', 'ComfyUI', 'DaVinci Resolve', 'Blender', 'Unreal Engine'],
    summary: {
      fr: 'Jordan, un agent IA qui pilote une chaîne de production créative, du brief au rendu.',
      en: 'Jordan, an AI agent that drives a creative production chain, from brief to render.',
    },
    detail: {
      fr: 'Jordan est un agent IA créatif. Là où un outil automatisé une tâche isolée, Jordan enchaîne les étapes : analyse d’un brief, proposition de direction, préparation des plans, puis composition et rendu. Les compositions sont écrites en HTML et animées avec des timelines GSAP déterministes, ce qui permet de rendre une vidéde entière depuis du code. Les ressources visuelles viennent de pipelines locaux — ComfyUI pour les images et les séquences — et la finalisation reste faite à la main dans Resolve, Blender ou Unreal. Jordan reste un assistant : chaque livrable est validé par un humain avant publication. Les visuels de ce projet sont des rendus réels produits par cette chaîne : systèmes de widgets, graphiques et habillages livrés pour des clients.',
      en: 'Jordan is a creative AI agent. Where a tool automates one isolated task, Jordan chains the steps: brief analysis, direction proposals, shot preparation, then composition and render. The compositions are written in HTML and animated with deterministic GSAP timelines, which makes it possible to render a whole video from code. Visual assets come from local pipelines — ComfyUI for stills and sequences — and finishing stays hand-made in Resolve, Blender or Unreal. Jordan stays an assistant: every deliverable is validated by a human before publication. The images on this project are real renders produced by that chain: widget systems, charts and brand graphics delivered to clients.',
    },
    outcome: { fr: 'Agent actif, utilisé sur des productions réelles ; pipeline et compositions documentés.', en: 'Agent in active use on real production work, with the pipeline and compositions documented.' },
    links: [],
    cover: '/media/work/jordan-chart.jpg',
    coverAlt: {
      fr: 'Graphique en verre dépoli produit par la chaîne Jordan : thème glass, barres lime sur fond sombre, données de ventes trimestrielles.',
      en: 'A frosted-glass chart produced by the Jordan chain: glass theme, lime bars on a dark ground, quarterly sales figures.',
    },
    gallery: [
      { src: '/media/work/jordan-chart.jpg', caption: { fr: 'Graphique de ventes — thème glass.', en: 'Sales chart — glass theme.' } },
      { src: '/media/work/jordan-widgets.jpg', caption: { fr: 'Système de widgets — fondations verre, flou et opacité documentés.', en: 'Widget system — glass foundations with documented blur and opacity.' } },
    ],
  },
  {
    slug: 'ai-assisted-creative-production-study',
    number: '12',
    title: 'Voix d’Or Parfum — Fully AI-Driven Production',
    titleFr: 'Voix d’Or Parfum — production 100 % IA open source',
    category: 'AI / CREATIVE PRODUCTION',
    status: 'EXPERIMENT DELIVERED',
    visual: 'camera',
    year: '2026',
    role: ['AI pipeline designer', 'Look development', 'Editor'],
    tools: ['ComfyUI', 'LTX 2.3', 'Z-Image 2', 'GLM 5.2 via Hermes', 'DaVinci Resolve'],
    summary: {
      fr: 'Un film publicitaire produit entièrement avec des modèles open source exécutés en local.',
      en: 'An entire commercial film produced with open-source models running locally.',
    },
    detail: {
      fr: 'Ce projet demande une réponse simple : peut-on produire un contenu de qualité commerciale avec uniquement des modèles open source ? La chaîne est entièrement locale — LTX 2.3 dans ComfyUI pour la génération vidéo, Z-Image 2 dans ComfyUI pour le storyboarding et les images clés, GLM 5.2 via Hermes pour l’écriture et la structuration des plans. Le montage, l’étalonnage et le finishing restent faits à la main. L’objectif n’était pas de remplacer une équipe, mais de mesurer ce qu’un pipeline open source, contrôlé de bout en bout, permet réellement de livrer aujourd’hui.',
      en: 'This project asks one question: can commercial-grade content be produced using only open-source models? The pipeline runs entirely locally — LTX 2.3 in ComfyUI for video generation, Z-Image 2 in ComfyUI for storyboarding and key frames, and GLM 5.2 through Hermes for writing and shot structuring. Editing, grading and finishing stay hand-made. The goal was not to replace a crew, but to measure what a fully local, open-source pipeline can genuinely deliver today.',
    },
    outcome: { fr: 'Film publicitaire produit et publié ; pipeline open source documenté.', en: 'A commercial film produced and published, with the open-source pipeline documented.' },
    links: [{ label: { fr: 'Voix d’Or parfum — Cinematic Launch · YouTube', en: 'Voix d’Or parfum — Cinematic Launch · YouTube' }, href: 'https://youtu.be/xyguAEQNeEg', external: true }],
    media: [{ youtubeId: 'xyguAEQNeEg', title: { fr: 'Voix d’Or parfum — Cinematic Launch', en: 'Voix d’Or parfum — Cinematic Launch' } }],
    cover: '/media/work/ai-production.jpg',
    coverAlt: { fr: 'Plan du film publicitaire produite avec des modèles d’IA open source, flacon de parfum et regard maquillé.', en: 'A frame from the commercial film produced with open-source AI models — a perfume bottle and a made-up gaze.' },
    home: 5,
  },
  {
    slug: 'cancer-detection-ai-prototype',
    number: '13',
    title: 'Cancer Detection — Image Classifier',
    titleFr: 'Détection du cancer — classifieur d’images',
    category: 'AI / HEALTH RESEARCH',
    status: 'EXPERIMENTAL MODEL',
    visual: 'nodes',
    year: '2026',
    role: ['ML prototype builder', 'Model trainer'],
    tools: ['Teachable Machine', 'TensorFlow.js', 'Image classification'],
    demo: '/media/work/cancer-model/demo.html',
    summary: {
      fr: 'Un modèle entraîné à classer une image en trois classes : normal, bénin, malin.',
      en: 'A model trained to sort an image into three classes: normal, benign, malignant.',
    },
    detail: {
      fr: 'Un modèle de classification d’images entraîné avec Google Teachable Machine, sans code externe. Il reçoit une image de 224 × 224 pixels et produit une probabilité pour chacune de ses trois classes : normal, bénin, malin. Les scores sont des probabilités brutes, sans seuil de décision — aucun résultat n’est transformé en recommandation. Le modèle tourne entièrement dans le navigateur avec TensorFlow.js, donc aucune image ne quitte la machine. C’est une démonstration éducative : il n’est pas cliniquement validé, ne doit jamais servir à dépister, diagnostiquer ou guider un traitement, et ses résultats ne valent que sur des images du même type que celles qui l’ont entraîné.',
      en: 'An image-classification model trained with Google Teachable Machine, with no external code. It takes a 224 × 224 pixel image and outputs a probability for each of its three classes: normal, benign and malignant. The scores are raw probabilities with no decision threshold, so no result is ever turned into a recommendation. The model runs entirely in the browser with TensorFlow.js, so no image leaves the machine. It is an educational demonstration: it is not clinicallyically validated, must never be used to screen, diagnose or guide treatment, and its results only mean anything on images of the same kind it was trained on.',
    },
    outcome: { fr: 'Modèle accessible en ligne, exécutable dans le navigateur, sans valeur diagnostique.', en: 'Model available online, runnable in the browser, with no diagnostic validity.' },
    links: [
      { label: { fr: 'Ouvrir le modèle original', en: 'Open the original model' }, href: 'https://teachablemachine.withgoogle.com/models/_EC79URAZ/', external: true },
      { label: { fr: 'Lancer la démo dans le navigateur', en: 'Run the browser demo' }, href: '/media/work/cancer-model/demo.html', external: true },
    ],
    cover: '/media/work/cancer-model.jpg',
    coverAlt: {
      fr: 'Démo du modèle en cours d’analyse : une image de test donne 92 % « bénin », 8 % « malin » et 0 % « normal ».',
      en: 'The model demo mid-analysis: a test image returns 92% benign, 8% malignant and 0% normal.',
    },
  },
  {
    slug: 'crispr-benchling-exploration',
    number: '14',
    title: 'CRISPR Design — BRCA2 Sequence',
    titleFr: 'Conception CRISPR — séquence BRCA2',
    category: 'BIOLOGY / COMPUTATIONAL DESIGN',
    status: 'IN-SILICO EXPLORATION',
    visual: 'cell',
    year: '2026',
    role: ['Sequence design exploration', 'In-silico analysis'],
    tools: ['Benchling', 'CRISPR concepts', 'Sequence design'],
    summary: {
      fr: 'Une exploration de conception CRISPR appliquée à une séquence réelle dans Benchling.',
      en: 'A CRISPR design exploration applied to a real sequence in Benchling.',
    },
    detail: {
      fr: 'Cette exploration part d’une séquence réelle importée dans Benchling — le gène BRCA2 (ENSG00000139618), 84 793 paires de bases, avec son exon 1 annoté et sa carte de restriction. Le travail consiste à raisonner sur les emplacements de coupe, les sites guides et les conséquences théoriques d’une édition. C’est un exercice de conception numérique : aucune modification n’a été réalisée en laboratoire et rien ici ne constitue un résultat expérimental ou une validation clinique.',
      en: 'This exploration starts from a real sequence imported into Benchling — the BRCA2 gene (ENSG00000139618), 84,793 base pairs, with its annotated exon 1 and restriction map. The work reasons about cut sites, guide-RNA placement and the theoretical consequences of an edit. It is a digital design exercise: nothing was modified in a laboratory, and nothing here is an experimental result or a clinical validation.',
    },
    outcome: { fr: 'Séquence et exploration de conception consultables sur Benchling.', en: 'Sequence and design exploration available on Benchling.' },
    links: [{ label: { fr: 'Voir la séquence Benchling', en: 'View Benchling sequence' }, href: 'https://benchling.com/s/seq-ePGCQhAEdbs5pwtq7opz?item_id=seq_G6BK6CHAuB&m=slm-KPy2LcESmKqPrQeJEPZ9', external: true }],
    cover: '/media/work/crispr-benchling.png',
    coverAlt: { fr: 'Éditeur de séquences Benchling montrant la carte linéaire de BRCA2 (ENSG00000139618) et son exon 1 annoté.', en: 'Benchling sequence editor showing the linear map of BRCA2 (ENSG00000139618) and its annotated exon 1.' },
  },
  {
    slug: 'itaoua-hoka-cgi-pipeline',
    number: '15',
    title: 'Itaoua Hoka — Full-CGI Commercial',
    titleFr: 'Itaoua Hoka — publicité 100 % CGI',
    category: 'CGI / ADVERTISING',
    status: 'DELIVERED SPOT · PIPELINE STUDY',
    visual: 'camera',
    year: '2026',
    role: ['CGI pipeline builder', 'Environment & look development', 'Rendering'],
    tools: ['Unreal Engine', 'Hunyuan 3D', 'Blender', 'Asset creation', 'Real-time rendering'],
    summary: {
      fr: 'Une publicité automobile entièrement en CGI, produite avec un pipeline contraint et comparée à des références haut de gamme.',
      en: 'A fully CGI car commercial, produced under real constraints and benchmarked against high-end references.',
    },
    detail: {
      fr: 'Itaoua Hoka est un spot CGI complet : univers construit dans Unreal Engine, rendu temps réel, assets générés avec Hunyuan 3D puis retravaillés dans Blender. La contrainte était de produire une image de niveau commercial sans budget de production, en comparant le résultat à des publicités de référence. Le projet documente le pipeline, ses compromis et ce que le temps réel permet réellement sur ce type de livrable.',
      en: 'Itaoua Hoka is a complete CGI spot: environments built in Unreal Engine, real-time rendering, and assets generated with Hunyuan 3D then refined in Blender. The constraint was to reach commercial-grade imagery without a production budget, benchmarked against reference commercials. The project documents the pipeline, its trade-offs, and what real-time rendering can genuinely deliver on this kind of deliverable.',
    },
    outcome: { fr: 'Spot CGI produit et publié ; pipeline reproductible pour de prochaines publicités.', en: 'A CGI spot produced and published, with a reusable pipeline for future commercials.' },
    links: [
      { label: { fr: 'Itaoua HOKA Car AD · YouTube', en: 'Itaoua HOKA Car AD · YouTube' }, href: 'https://youtu.be/W2SLiDIwJRA', external: true },
      { label: { fr: 'Concept Car (Lamborghini Ad) · YouTube', en: 'Car (Lamborghini Ad) concept · YouTube' }, href: 'https://youtu.be/tsIy230X3X8', external: true },
      { label: { fr: 'Concept Product Ad Saiwa · YouTube', en: 'Product Ad Saiwa concept · YouTube' }, href: 'https://youtu.be/Hrcecqe3rL4', external: true },
    ],
    media: [{ youtubeId: 'W2SLiDIwJRA', title: { fr: 'Itaoua HOKA — publicité CGI', en: 'Itaoua HOKA — CGI commercial' } }],
    cover: '/media/work/itaoua-hoka.jpg',
    coverAlt: { fr: 'Berline noire lancée sur une piste désertique, image du spot CGI Itaoua Hoka.', en: 'A dark sedan speeding along a desert track, a frame from the Itaoua Hoka CGI spot.' },
    home: 3,
  },
  {
    slug: 'studio-voix-dor',
    number: '16',
    title: 'Studio Voix d’Or — Selected Production Work',
    titleFr: 'Studio Voix d’Or — productions sélectionnées',
    category: 'FILM / MUSIC VIDEOS / COMMERCIALS',
    status: 'PRODUCTION CREDITS',
    visual: 'film',
    year: 'ONGOING',
    role: ['Tech lead', 'Editing', 'Color grading', 'Animation', 'CGI / VFX'],
    tools: ['DaVinci Resolve', 'After Effects', 'Blender', 'Unreal Engine', 'Production audio'],
    summary: {
      fr: 'Des clips et des films de marque réalisés en collaboration avec Studio Voix d’Or.',
      en: 'Music videos and brand films made in collaboration with Studio Voix d’Or.',
    },
    detail: {
      fr: 'Studio Voix d’Or est un studio avec lequel je collabore sur des productions réelles : clips musicaux, spots publicitaires et films de marque. Ils me confient la réalisation, le montage, l’étalonnage, l’animation et le CGI selon les projets. Le catalogue ci-dessous regroupe une sélection de ces travaux. Les projets institutionnels, associatifs et gouvernementaux sur lesquels j’ai contribu impliquent notamment UNICEF, Terre des Hommes, CRS, Save the Children et Plan International ; le rôle exact varie selon le projet.',
      en: 'Studio Voix d’Or is a studio I collaborate with on real productions: music videos, commercials and brand films. They entrust me with direction, editing, color grading, animation and CGI depending on the project. The catalogue below gathers a selection of that work. The institutional, NGO and government projects I contributed to involve UNICEF, Terre des Hommes, CRS, Save the Children and Plan International; the exact role varies by project.',
    },
    outcome: { fr: 'Un catalogue de productions réelles, en croissance.', en: 'A growing catalogue of real productions.' },
    links: [
      { label: { fr: 'PAGALELA serssi kolgui taaba — clip officiel', en: 'PAGALELA serssi kolgui taaba — Clip officiel' }, href: 'https://youtu.be/HaApx1OEU1k', external: true },
      { label: { fr: 'Berriz Barton Kawren — clip officiel', en: 'Berriz Barton Kawren — Clip officiel' }, href: 'https://youtu.be/kzamhUUfrlM', external: true },
      { label: { fr: 'M’Belam — version finale', en: 'M’Belam — version finale' }, href: 'https://youtu.be/m4Fuk1QV-_0', external: true },
      { label: { fr: 'Yvy CULU — clip officiel', en: 'Yvy CULU — Clip officiel' }, href: 'https://youtu.be/L5R2RfzMSvY', external: true },
      { label: { fr: 'MOYENGA_TOND VEUDA', en: 'MOYENGA_TOND VEUDA' }, href: 'https://youtu.be/EtyaOHVpqrg', external: true },
      { label: { fr: 'NABA — Tond Yayé — clip officiel', en: 'NABA — Tond Yayé, Clip officiel' }, href: 'https://youtu.be/ydBv7xGTWfk', external: true },
    ],
    media: [
      { youtubeId: 'HaApx1OEU1k', title: { fr: 'PAGALELA serssi kolgui taaba — clip officiel', en: 'PAGALELA serssi kolgui taaba — official clip' } },
      { youtubeId: 'kzamhUUfrlM', title: { fr: 'Berriz Barton Kawren — clip officiel', en: 'Berriz Barton Kawren — official clip' } },
      { youtubeId: 'm4Fuk1QV-_0', title: { fr: 'M’Belam — version finale', en: 'M’Belam — final version' } },
      { youtubeId: 'EtyaOHVpqrg', title: { fr: 'MOYENGA_TOND VEUDA', en: 'MOYENGA_TOND VEUDA' } },
      { youtubeId: 'ydBv7xGTWfk', title: { fr: 'NABA — Tond Yayé, clip officiel', en: 'NABA — Tond Yayé, official clip' } },
      { youtubeId: 'Hrcecqe3rL4', title: { fr: 'Product Ad Saiwa — concept', en: 'Product Ad Saiwa — concept' } },
    ],
    cover: '/media/work/studio-voix-dor-1.jpg',
    coverAlt: { fr: 'Plan d’un clip musical produit avec Studio Voix d’Or.', en: 'A frame from a music video produced with Studio Voix d’Or.' },
  },
  {
    slug: 'buud-zabre',
    number: '17',
    title: 'Buud Zabré',
    category: 'AFROFUTURISM / FILM',
    status: 'IN DEVELOPMENT',
    visual: 'afrofuture',
    year: 'DEVELOPMENT',
    role: ['Writer / Director', 'Worldbuilding', 'Concept art direction', 'Unreal previsualization'],
    tools: ['Screenwriting', 'Unreal Engine', 'Worldbuilding', 'Concept art'],
    summary: {
      fr: 'Un long métrage afrofuturiste ancré dans les imaginaires mossi et lobi.',
      en: 'An Afrofuturist feature film rooted in Mossi and Lobi imagination.',
    },
    detail: {
      fr: 'Buud Zabré est un projet de long métrage en développement. L’univers fait dialoguer héritages culturels, futurisme africain et récit intime autour de l’identité et de la réconciliation. Le développement comprend un scénario écrit, une bible détaillée — personnages, créatures, lieux et mythologie — et une prévisualisation produite dans Unreal Engine pour donner à voir le ton et l’échelle du monde avant le tournage.',
      en: 'Buud Zabré is a feature-film project in development. Its world brings cultural heritage, African futurism and intimate storytelling into conversation around identity and reconciliation. Development includes a written screenplay, a detailed bible — characters, creatures, locations and mythology — and a previsualization produced in Unreal Engine that shows the tone and scale of the world before shooting.',
    },
    outcome: { fr: 'Scénario, bible et prévisualisation Unreal Engine réalisés ; projet en préparation de présentation.', en: 'Screenplay, bible and Unreal Engine previsualization completed; the project is being prepared for presentation.' },
    links: [
      { label: { fr: 'Lire le scénario (PDF)', en: 'Read the screenplay (PDF)' }, href: '/media/work/buud-zabre/screenplay.pdf', external: true },
      { label: { fr: 'Teaser et planches sur demande', en: 'Teaser & concept art on request' }, href: '/contact' },
    ],
    video: { local: '/media/work/buud-zabre/teaser.mp4', poster: '/media/work/buud-zabre/teaser-poster.jpg' },
    cover: '/media/work/buud-zabre/concept-spirit-water.jpg',
    coverAlt: { fr: 'Planche de concept de Buud Zabré : une figure féminine auréolée d’eau dans un temple sculpté, issue de la bible du film.', en: 'Buud Zabré concept plate: a female figure crowned with water in a carved temple, from the film bible.' },
    gallery: [
      { src: '/media/work/buud-zabre/concept-cosmic-fire.jpg', caption: { fr: 'Figure cosmique de feu — planche de la bible.', en: 'Cosmic fire figure — bible plate.' } },
      { src: '/media/work/buud-zabre/concept-water-goddess.jpg', caption: { fr: 'Déesse des eaux — planche de la bible.', en: 'Water goddess — bible plate.' } },
      { src: '/media/work/buud-zabre/concept-ritual-fire.jpg', caption: { fr: 'Autel rituel et masques — planche de la bible.', en: 'Ritual altar and masks — bible plate.' } },
      { src: '/media/work/buud-zabre/concept-winged.jpg', caption: { fr: 'Figure ailée et galaxies — planche de la bible.', en: 'Winged figure and galaxies — bible plate.' } },
      { src: '/media/work/buud-zabre/concept-desert-serpent.jpg', caption: { fr: 'Serpent à ramure, désert — planche de la bible.', en: 'Horned serpent, desert — bible plate.' } },
      { src: '/media/work/buud-zabre/concept-creature.jpg', caption: { fr: 'Créature de la forêt — planche de la bible.', en: 'Forest creature — bible plate.' } },
      { src: '/media/work/buud-zabre/concept-forest-spirit.jpg', caption: { fr: 'Esprit de la forêt — planche de la bible.', en: 'Forest spirit — bible plate.' } },
      { src: '/media/work/buud-zabre/teaser-frame-2.jpg', caption: { fr: 'Carton-titre de la prévisualisation Unreal Engine.', en: 'Title card from the Unreal Engine previsualization.' } },
    ],
  },
  {
    slug: 'aegis-intelligent-escort',
    number: '18',
    title: 'AEGIS — The Intelligent Escort',
    titleFr: 'AEGIS — l\u2019escorte intelligente',
    category: 'ROBOTICS / COMPUTER VISION / AI',
    status: 'CHALLENGE BUILD \u00b7 SIMULATED',
    visual: 'camera',
    year: '2026',
    role: ['Product definition', 'Mission architecture', 'SDK integration', 'Console prototype'],
    tools: ['Unitree G1 EDU', 'ROS 2 Humble', 'OpenCV', 'TensorRT', 'ByteTrack', 'MediaPipe Pose', 'Gemma', 'Python SDK'],
    summary: {
      fr: 'Un compagnon de s\u00e9curit\u00e9 personnelle construit sur le robot Unitree G1 EDU.',
      en: 'A personal safety companion built on the Unitree G1 EDU robot.'
    },
    detail: {
      fr: 'AEGIS est un compagnon de s\u00e9curit\u00e9 personnelle construit sur le robot Unitree G1 EDU. Il combine perception spatiale, vision par ordinateur et interpr\u00e9tation locale des \u00e9v\u00e9nements assist\u00e9e par IA, le tout plac\u00e9 derri\u00e8re un superviseur de s\u00e9curit\u00e9 d\u00e9terministe qui a l\u2019autorit\u00e9 finale sur les mouvements physiques. Une boucle de mission en huit \u00e9tapes \u2014 appairage, contr\u00f4le pr\u00e9alable, localisation, suivi, planification, d\u00e9placement, r\u00e9ponse, fin \u2014 avec des conditions d\u2019arr\u00eat explicites et une escalade vers un humain. AEGIS n\u2019est pas un robot de combat : pas de frappe, de saisie, de poursuite, de contention ni d\u2019affrontement autonome. Le produit pr\u00e9vient, met en pause, cr\u00e9e de la distance, guide et alerte. La page du projet documente aussi trois corrections v\u00e9rifi\u00e9es contre le SDK Python officiel \u2014 Lie2StandUp() plut\u00f4t que StandUp(), Move() n\u2019est valide qu\u2019avec continous_move=True, et GetFsmId() pour l\u2019\u00e9tat de disponibilit\u00e9.',
      en: 'AEGIS is a personal safety companion built on the Unitree G1 EDU robot. It combines spatial sensing, computer vision and local AI-assisted event interpretation, all placed behind a deterministic safety supervisor that has final authority over physical movement. A constrained eight-step mission loop \u2014 pair, pre-flight, localize, track, plan, move, respond, end \u2014 with explicit stop conditions and human escalation. AEGIS is not a combat robot: no striking, grabbing, chasing, restraining or autonomous confrontation. It warns, pauses, creates distance, guides and alerts. The project page also documents three corrections verified against the official Python SDK \u2014 Lie2StandUp() rather than StandUp(), Move() only valid with continous_move=True, and GetFsmId() for readiness polling.',
    },
    outcome: { fr: 'Projet de challenge document\u00e9, architecture et prototype de console livr\u00e9s. Aucun robot n\u2019est poss\u00e9d\u00e9 ou exploit\u00e9 : tout est simulation.', en: 'Challenge project documented, with architecture and console prototype delivered. No robot is owned or operated: everything is simulated.' },
    links: [
      { label: { fr: 'Ouvrir la vitrine AEGIS', en: 'Open the AEGIS showcase' }, href: 'https://aegis-showcase-ast.pages.dev/', external: true },
      { label: { fr: 'Ouvrir le prototype de console', en: 'Open the console prototype' }, href: 'https://aegis-showcase-ast.pages.dev/#console', external: true },
    ],
    cover: '/media/work/aegis.jpg',
    coverAlt: { fr: 'Page du projet AEGIS : pr\u00e9sentation de l\u2019escorte intelligente et du robot Unitree G1 EDU.', en: 'AEGIS project page presenting the intelligent escort and the Unitree G1 EDU robot.' },
  },
  {
    slug: 'go2-campus-security',
    number: '19',
    title: 'Go2 Patrol — Campus Security Research',
    titleFr: 'Go2 Patrol — recherche sur la sécurité de campus',
    category: 'ROBOTICS / RESEARCH / SAFETY',
    status: 'RESEARCH DOSSIER · SIMULATED',
    visual: 'camera',
    year: 'UNITREE ROBOT APPLICATION · 2026',
    role: ['Research design', 'Patrol architecture', 'Constraint & safety research', 'Deck authoring'],
    tools: ['Unitree Go2', 'SportClient SDK', 'LiDAR', 'Computer vision', 'Patrol simulation'],
    summary: {
      fr: 'Un dossier de recherche qui évalue la robotique quadrupède dans la sécurité universitaire, avec ses limites écrites comme des règles vérifiables.',
      en: 'A research dossier evaluating quadrupedal robotics in university security, with every limit written as a checkable rule.',
    },
    detail: {
      fr: 'Go2 Patrol est un dossier de recherche, pas un déploiement. Il évalue ce qu’un robot quadrupède Unitree Go2 pourrait apporter à la sécurité d’un campus, et écrit chaque limite comme une règle, un contrôle qui l’applique et une manière de la vérifier. Le modèle retenu est hybride : l’infrastructure existante (CCTV, contrôle d’accès, alarmes) reste la base, la patrouille robotisée l’inspecte, la supervision reste centrale, et la réponse reste humaine. Le prototype décrit un seul Go2 suivant une route fixe avec des points de contrôle nommés, un flux caméra en direct et une détection d’obstructions que les agents confirment ou rejettent. Huit domaines de contraintes sont documentés — sécurité physique, vie privée, fiabilité de l’IA, supervision humaine, cybersécurité, batterie, environnement et coût. Une alerte ne déclenche jamais une sanction, un appel à la police ou une inscription au dossier d’un étudiant ; le robot observe, alerte et se retire. Aucun robot n’est possédé ou exploité par ce projet : le simulateur de patrouille est l’artefact interactif déjà construit pour la présentation.',
      en: 'Go2 Patrol is a research dossier, not a deployment. It evaluates what a Unitree Go2 quadrupedal robot could contribute to campus security, and writes every limit as a rule, a control that enforces it, and a way to verify it. The chosen model is hybrid: existing infrastructure (CCTV, access control, alarms) stays the base, robotic patrols supplement it, monitoring stays central, and response stays human. The prototype describes a single Go2 following a fixed route with named checkpoints, a live camera feed, and obstruction detection that security staff confirm or dismiss. Eight constraint areas are documented — physical safety, privacy, AI reliability, human oversight, cybersecurity, battery, environment and cost. An alert never triggers a sanction, a police call or an entry in a student file; the robot observes, alerts and withdraws. No robot is owned or operated by this project: the patrol simulator is the interactive artifact already built for the presentation.',
    },
    outcome: { fr: 'Dossier de recherche publié, avec huit domaines de contraintes documentés et une porte de déploiement à huit conditions. Prototype et simulateur en simulation.', en: 'Research dossier published, with eight constraint areas documented and an eight-condition deployment gate. Prototype and simulator are simulated.' },
    links: [
      { label: { fr: 'Ouvrir le dossier de recherche', en: 'Open the research dossier' }, href: 'https://go2-campus-security.pages.dev/', external: true },
      { label: 'Ouvrir le simulateur de patrouille', href: 'https://go2-campus-security.pages.dev/#simulator', external: true },
    ],
    cover: '/media/work/go2-campus-security.jpg',
    coverAlt: {
      fr: 'Page du dossier Go2 Patrol : présentation de la recherche sur la sécurité de campus et du modèle de patrouille hybride.',
      en: 'Go2 Patrol dossier page presenting the campus security research and the hybrid patrol model.',
    },
  },
] as Project[]).sort((a, b) => Number(a.number) - Number(b.number));

export const homepageProjects = projects
  .filter((project) => typeof project.home === 'number')
  .sort((a, b) => (a.home ?? 0) - (b.home ?? 0));

export type Endorsement = {
  id: string;
  name: string;
  role: Record<Locale, string>;
  credential: Record<Locale, string>;
  quote?: Record<Locale, string>;
  approved?: boolean;
};

export const endorsements: Endorsement[] = [
  {
    id: 'bnv',
    name: 'BNV',
    role: { fr: 'Producteur musical', en: 'Music producer' },
    credential: { fr: 'Meilleur arrangeur de l’année — Nuit du Mérite', en: 'Best Arranger of the Year — Nuit du Mérite' },
  },
  {
    id: 'inoss',
    name: 'Inoss',
    role: { fr: 'DJ', en: 'DJ' },
    credential: { fr: 'Meilleur DJ 2026 — Nuit des Lauréats', en: 'Best DJ 2026 — Nuit des Lauréats' },
  },
  {
    id: 'serge-desire-ouedraogo',
    name: 'Serge Désiré Ouédraogo',
    role: { fr: 'Gérant', en: 'Manager' },
    credential: { fr: 'Brand Images / Étalon Film', en: 'Brand Images / Étalon Film' },
  },
  {
    id: 'sougrinoma-ferdinand-tapsoba',
    name: 'Sougrinoma Ferdinand Tapsoba',
    role: { fr: 'Gérant', en: 'Manager' },
    credential: { fr: 'Studio Voix d’Or', en: 'Studio Voix d’Or' },
  },
  ];

/**
 * Approved High Fives received from collaborators.
 *
 * These are real messages from named people. Only obvious typos were corrected;
 * wording, order and voice are preserved. Each carries both a French and an
 * English rendering so neither locale shows untranslated text.
 *
 * Nothing may be added here unless the person said it. If a quote is not listed,
 * that person still appears in `endorsements` with name, role and credential only.
 */
export type Testimonial = {
  id: string;
  name: string;
  context: Record<Locale, string>;
  quote: Record<Locale, string>;
};

export const testimonials: Testimonial[] = [
  {
    id: 'ben-rebernik',
    name: 'Ben Rebernik',
    context: { fr: 'Conrad Challenge', en: 'Conrad Challenge' },
    quote: {
      fr: 'Ulrich est une personne tr\u00e8s int\u00e9ressante. Je veux d\u00e9finitivement le rencontrer bient\u00f4t. J\u2019ai travaill\u00e9 avec lui sur la Conrad Challenge. C\u2019\u00e9tait vraiment fun, et je trouve v\u00e9ritablement impressionnant ce qu\u2019il conna\u00eet en IA et la mani\u00e8re dont il connecte diff\u00e9rents outils pour travailler avec eux.',
      en: 'Ulrich is a very interesting person. I definitely want to meet him soon. I\u2019ve worked together with him on the Conrad Challenge. It was really fun, and I think it\u2019s genuinely impressive what he knows about AI and how he connects different tools and works with them.',
    },
  },
  {
    id: 'gurman-kaur',
    name: 'Gurman Kaur',
    context: { fr: 'NASA Space Apps Challenge 2026', en: 'NASA Space Apps Challenge 2026' },
    quote: {
      fr: 'Une personne incroyable ! Un vrai g\u00e9nie de la tech. La vitesse et l\u2019efficacit\u00e9 de son travail m\u2019ont sid\u00e9r\u00e9e. Et un excellent co\u00e9quipier.',
      en: 'Such an amazing person! A total tech genius. Had me flabbergasted at the speed and efficiency of his work. And a great teammate!',
    },
  },
  {
    id: 'leonardo-perugia',
    name: 'Leonardo Perugia',
    context: { fr: 'NASA Space Apps Challenge 2026', en: 'NASA Space Apps Challenge 2026' },
    quote: {
      fr: 'L\u2019un des programmeurs les plus comp\u00e9tents que j\u2019aie eu l\u2019honneur de rencontrer. Travailler avec toi rend tout plus simple.',
      en: 'One of the most skilled programmers I have ever had the honour to meet. Working with you makes everything easier.',
    },
  },
  {
    id: 'manar-gherabli',
    name: 'Manar Gherabli',
    context: { fr: 'NASA Space Apps Challenge 2026', en: 'NASA Space Apps Challenge 2026' },
    quote: {
      fr: 'Heureux d\u2019avoir travaill\u00e9 avec une personne comme toi. J\u2019aimerais beaucoup en savoir plus sur ton laboratoire 3D VR.',
      en: 'Pleased to get to work with a person like you. I would love to hear more about your 3D VR laboratory.',
    },
  },
  {
    id: 'rafaat-jahan',
    name: 'Rafaat Jahan',
    context: { fr: 'NASA Space Apps Challenge 2026', en: 'NASA Space Apps Challenge 2026' },
    quote: {
      fr: 'J\u2019appr\u00e9cie vraiment \u00e0 quel point tu es comp\u00e9tent en IA et en automatisation. J\u2019ai h\u00e2te d\u2019apprendre de toi et de voir ce que nous pouvons construire ensemble pour le hackathon NASA.',
      en: 'I really appreciate how skilled you are in AI and automation. I\u2019m looking forward to learning from you and seeing what we can build together on the NASA hackathon.',
    },
  },
  {
    id: 'aadi-kapoor',
    name: 'Aadi Kapoor',
    context: { fr: 'Conrad Challenge', en: 'Conrad Challenge' },
    quote: {
      fr: 'Ulrich ! Ton enthousiasme pour tes centres d\u2019int\u00e9r\u00eat et tes projets est tout simplement fou. J\u2019adore ton \u00e9tat d\u2019esprit : construire des choses folles sans tenir compte de ton \u00e2ge, et cet engagement est vraiment admirable. J\u2019ai aussi beaucoup aim\u00e9 tes projets.',
      en: 'Ulrich! Your enthusiasm towards your interests and projects is actually crazy. I really love the mindset you have about doing that crazy building regardless of your age, and the commitment is really commendable. I also really loved your projects.',
    },
  },
];

export const timeline = {
  fr: [
    { label: '2022 — Pschool Burkina Faso', body: 'Formation à Pschool, première promotion du Burkina Faso : les bases du code et de la robotique.' },
    { label: '2022 — Aviation, Nit-Design / Aviation Club', body: 'Formation en aviation suivie d’un diplôme, avec Nit-Design / Aviation Club.' },
    { label: 'Réalisation & pratique audiovisuelle', body: 'Écriture de scénarios, réalisation, montage, direction de clips et création de films avec des workflows temps réel.' },
    { label: 'Studio Voix d’Or & productions institutionnelles', body: 'Collaborer à des projets audiovisuels réels, notamment au montage, à l’étalonnage et à l’animation, sur des missions associatives et gouvernementales.' },
    { label: 'VFX, 3D & environnements Unreal', body: 'Construire des images de la simulation au compositing : Blender, Houdini, Unreal Engine, Nuke et After Effects.' },
    { label: 'Finaliste — Barka Digital, concours national du numérique 2026', body: 'Atteindre la finale d’une compétition nationale consacrée au numérique avec Barka Digital.' },
    { label: 'NASA Space Apps Challenge 2026', body: 'Prendre part avec l’équipe Icarus 6 à un défi lié à la commercialisation de l’orbite basse (Commercializing LEO).' },
    { label: 'Conrad Challenge 2026–27', body: 'Concevoir en équipe une solution qui relie énergie solaire, protection des panneaux et usages agricoles.' },
    { label: 'Produits IA & SaaS', body: 'Construire Dagara Germanist AI, LensCraft, LibriWouo et des systèmes d’agents IA adaptés aux besoins d’entreprises.' },
    { label: 'Recherche & exploration', body: 'Publier sur l’impact de la XR en éducation et explorer des sujets techniques, de l’IA expérimentale à la conception génétique in silico.' },  ],
  en: [
    { label: '2022 — Pschool Burkina Faso', body: 'Trained at Pschool, part of its first Burkina Faso cohort: learned the basics of coding and robotics.' },
    { label: '2022 — Aviation, Nit-Design / Aviation Club', body: 'Aviation training followed by a graduation, with Nit-Design / Aviation Club.' },
    { label: 'Film direction & audiovisual practice', body: 'Writing screenplays, directing, editing, directing music videos and creating films with real-time workflows.' },
    { label: 'Studio Voix d’Or & institutional productions', body: 'Collaborating on real audiovisual projects, including editing, color grading and animation across NGO and government assignments.' },
    { label: 'VFX, 3D & Unreal environments', body: 'Building images from simulation to compositing with Blender, Houdini, Unreal Engine, Nuke and After Effects.' },
    { label: 'Finalist — Barka Digital, 2026 National Digital Competition', body: 'Reaching the finalist stage of a national digital competition with Barka Digital.' },
    { label: 'NASA Space Apps Challenge 2026', body: 'Taking part with team Icarus 6 in a challenge related to Commercializing LEO.' },
    { label: 'Conrad Challenge 2026–27', body: 'Working with a team on a solution connecting solar energy, panel protection and agricultural use cases.' },
    { label: 'AI products & SaaS', body: 'Building Dagara Germanist AI, LensCraft, LibriWouo and custom AI-agent systems for business workflows.' },
    { label: 'Research & exploration', body: 'Publishing on the impact of XR in education and exploring technical subjects, from experimental AI to in-silico genetic design.' },  ],
};

export const tools = [
  { name: 'Blender', group: '3D / VFX' },
  { name: 'Houdini', group: '3D / VFX' },
  { name: 'Unreal Engine', group: '3D / VFX' },
  { name: 'Nuke', group: 'COMPOSITING' },
  { name: 'After Effects', group: 'MOTION / VFX' },
  { name: 'DaVinci Resolve', group: 'CINEMA' },
  { name: 'Unity', group: 'XR' },
  { name: 'Three.js', group: 'XR' },
  { name: 'MediaPipe', group: 'COMPUTER VISION' },
  { name: 'OSC', group: 'XR' },
  { name: 'AI agents', group: 'AI SYSTEMS' },
  { name: 'Workflow automation', group: 'AI SYSTEMS' },
  { name: 'Teachable Machine', group: 'ML PROTOTYPING' },
  { name: 'Benchling', group: 'BIO DESIGN' },
  { name: 'Cloudflare Workers', group: 'PRODUCT ENGINEERING' },
];

export const articles = [
  {
    title: 'How to Make School More Valuable',
    category: 'XR / EDUCATION',
    date: '2026-10-30',
    readingTime: '15 min',
    excerpt: {
      fr: 'Une réflexion sur la façon dont les technologies immersives peuvent compléter l’école — sans confondre immersion et apprentissage.',
      en: 'A reflection on how immersive technologies can complement school — without confusing immersion with learning.',
    },
    href: 'https://medium.com/@ulrichtapsoba2009/how-to-make-school-more-valuable-94ac46cecc32',
  },
  {
    title: 'From RGB Camera to 3D Interaction',
    category: 'COMPUTER VISION',
    date: 'RESEARCH NOTE',
    readingTime: 'DRAFT',
    excerpt: { fr: 'Journal de recherche : transformer les landmarks d’une main en interactions fiables dans un espace 3D.', en: 'Research notes: turning hand landmarks into reliable interactions in a 3D space.' },
    href: '',
  },
  {
    title: 'Building for the classroom you actually have',
    category: 'EDTECH / FIELD NOTES',
    date: 'IN PROGRESS',
    readingTime: 'DRAFT',
    excerpt: { fr: 'Pourquoi la latence, le coût, le hors-ligne et les habitudes des enseignants doivent guider le design XR.', en: 'Why latency, cost, offline access and teacher workflows should shape XR design.' },
    href: '',
  },
];

export const services = {
  fr: [
    { id: 'film', title: 'Films & VFX', price: 'Sur brief', body: 'Films de marque, production vidéo, montage, compositing et images 3D.', bullets: ['Écriture de scénario & direction', 'Tournage / montage / color grading', 'CGI, VFX & animation'] },
    { id: 'xr', title: 'Prototypes XR', price: 'Sur brief', body: 'Démos interactives, prototypes spatiaux et expériences d’apprentissage 3D.', bullets: ['Prototypage Unity / Unreal', 'Web 3D & hand tracking', 'Preuve de concept'] },
    { id: 'ai', title: 'Assistant IA permanent & automatisation', price: 'Sur brief', body: 'Des assistants et agents IA pour réduire les tâches répétitives et rendre les équipes plus réactives.', bullets: ['Cartographie du workflow', 'Assistant IA & agents métier', 'Automatisations & transfert'] },
  ],
  en: [
    { id: 'film', title: 'Film & VFX', price: 'Scoped per brief', body: 'Brand films, video production, editing, compositing and 3D imagery.', bullets: ['Screenwriting & direction', 'Shooting / editing / color grading', 'CGI, VFX & animation'] },
    { id: 'xr', title: 'XR prototypes', price: 'Scoped per brief', body: 'Interactive demos, spatial prototypes and 3D learning experiences.', bullets: ['Unity / Unreal prototyping', 'Web 3D & hand tracking', 'Proof of concept'] },
    { id: 'ai', title: 'Always-on AI assistant & automation', price: 'Scoped per brief', body: 'AI assistants and agents that reduce repetitive tasks and help teams respond faster.', bullets: ['Workflow mapping', 'AI assistant & business agents', 'Automation & handoff'] },
  ],
};

export const nav = [
  { href: '/', id: 'home' },
  { href: '/work', id: 'work' },
  { href: '/about', id: 'about' },
  { href: '/services', id: 'services' },
  { href: '/writing', id: 'writing' },
];