import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  allowedDevOrigins: ['127.0.0.1'],
  devIndicators: false,
  // Cloudflare Pages hosts the prerendered `out/` directory, so every route must
  // resolve at build time. The contact endpoint runs as a Pages Function
  // (functions/api/contact.ts) instead of a Next route handler.
  output: 'export',
  // The default next/image optimizer needs a Node server; the media in public/
  // is already exported at final size.
  images: { unoptimized: true },
  experimental: { optimizePackageImports: ['lucide-react'] },
};

export default withNextIntl(nextConfig);
