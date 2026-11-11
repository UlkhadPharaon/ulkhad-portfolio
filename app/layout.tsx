import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Instrument_Serif, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { site } from '@/site.config';
import { siteUrl } from '@/lib/site-url';

const displayFont = Instrument_Serif({ subsets: ['latin'], weight: ['400'], variable: '--font-instrument', display: 'swap' });
const bodyFont = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-space', display: 'swap' });
const monoFont = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.metadata.title,
  description: site.metadata.description.fr,
  applicationName: 'Ulkhad Pharaon Portfolio',
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  openGraph: {
    type: 'website',
    title: site.metadata.title,
    description: site.metadata.description.fr,
    siteName: site.name,
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: site.metadata.title,
    description: site.metadata.description.fr,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "try{var l=location.pathname.split('/')[1];if(l==='en'||l==='fr'){document.documentElement.lang=l}}catch(e){}",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
