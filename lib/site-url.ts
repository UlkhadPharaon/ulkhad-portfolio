const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

function normalize(value: string) {
  const withProtocol = value.startsWith('http://') || value.startsWith('https://') ? value : `https://${value}`;
  return withProtocol.replace(/\/+$/, '');
}

/** A public URL is only real when it is configured and not a placeholder. */
export const hasPublicSiteUrl = Boolean(raw && !/TODO|example\.com|localhost/i.test(raw));
export const siteUrl = hasPublicSiteUrl && raw ? normalize(raw) : 'http://localhost:3000';
