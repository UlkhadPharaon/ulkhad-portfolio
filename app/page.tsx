import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ulkhad Pharaon — Films, produits, systèmes',
  alternates: { canonical: '/fr' },
};

/**
 * Root entry point for the static export.
 *
 * `redirects()` in next.config and `redirect()` from next/navigation are both
 * unavailable with `output: 'export'` — every route has to exist as a file.
 * Cloudflare Pages issues the real 302 from `public/_redirects` (`/` -> `/fr`);
 * this page is the JavaScript-free fallback for a direct `/index.html` hit.
 */
export default function IndexPage() {
  return (
    <main>
      <meta httpEquiv="refresh" content="0;url=/fr" />
      <p>
        <Link href="/fr">Ulkhad Pharaon — Films, produits, systèmes</Link>
      </p>
    </main>
  );
}
