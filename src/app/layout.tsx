import type { Metadata } from 'next';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WebSiteSchema } from '@/components/SchemaOrg';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ruta-colombia.com'),
  other: {
    'google-adsense-account': 'ca-pub-2469196723812841',
  },
  title: {
    default: 'Ruta Colombia — Your Definitive Guide to Living in Colombia',
    template: '%s | Ruta Colombia',
  },
  description:
    'Your definitive guide to living, working, investing, and exploring Colombia. Expert local coverage of Medellín, Santa Marta, and beyond — for expats, digital nomads, investors, and tourists.',
  keywords: [
    'Colombia',
    'Medellín',
    'Santa Marta',
    'expat Colombia',
    'digital nomad Colombia',
    'invest in Colombia',
    'living in Colombia',
    'real estate Colombia',
    'Colombia travel guide',
  ],
  authors: [{ name: 'Ruta Colombia' }],
  creator: 'The Maia Group',
  publisher: 'Ruta Colombia',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ruta-colombia.com',
    siteName: 'Ruta Colombia',
    title: 'Ruta Colombia — Your Definitive Guide to Living in Colombia',
    description:
      'Expert guides on real estate, legal, food, jobs, and lifestyle across Colombia — written by local professionals.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruta Colombia',
    description: 'Your definitive guide to living in Colombia.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <WebSiteSchema />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream min-h-screen flex flex-col">
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2469196723812841"
          crossOrigin="anonymous"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
