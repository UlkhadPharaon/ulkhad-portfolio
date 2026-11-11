import type { MetadataRoute } from 'next';
import { projects } from '@/site.config';
import { hasPublicSiteUrl, siteUrl } from '@/lib/site-url';

// Required with `output: 'export'`: metadata routes must be explicitly static.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!hasPublicSiteUrl) return [];

  const routes = ['', '/work', '/about', '/writing', '/services', '/contact', '/legal'];
  const lastModified = new Date();

  return ['fr', 'en'].flatMap((locale) => {
    const pages = routes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified,
      alternates: { languages: { fr: `${siteUrl}/fr${route}`, en: `${siteUrl}/en${route}` } },
    }));
    const cases = projects.map((project) => ({
      url: `${siteUrl}/${locale}/work/${project.slug}`,
      lastModified,
    }));
    return [...pages, ...cases];
  });
}
