import type { MetadataRoute } from 'next';
import { hasPublicSiteUrl, siteUrl } from '@/lib/site-url';

// Required with `output: 'export'`: metadata routes must be explicitly static.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(hasPublicSiteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
