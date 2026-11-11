import type { Metadata } from 'next';

export function localizedMetadata(
  locale: string,
  path: string,
  title: { fr: string; en: string },
  description: { fr: string; en: string },
): Metadata {
  const language = locale === 'en' ? 'en' : 'fr';
  const pageTitle = title[language];
  const pageDescription = description[language];
  const normalizedPath = path === '/' ? '' : path;
  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `/${language}${normalizedPath}`,
      languages: {
        fr: `/fr${normalizedPath}`,
        en: `/en${normalizedPath}`,
      },
    },
    openGraph: {
      type: 'website',
      title: pageTitle,
      description: pageDescription,
    },
  };
}
