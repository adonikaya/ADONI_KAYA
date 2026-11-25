import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const siteUrl = 'https://adonikaya.github.io/ADONI_KAYA';
const organizationId = `${siteUrl}/#organization`;

export const metadata: Metadata = {
  title: {
    default: 'ADONI KAYA | Free Gujarati Shradhanjali & Besna Card Maker',
    template: '%s | ADONI KAYA',
  },
  description:
    'Create Gujarati Shradhanjali and Besna cards online for free. Choose a design, add details, and download without login or registration.',
  authors: [{ name: 'Adoni Kaya Team' }],
  creator: 'Adoni Kaya',
  publisher: 'Adoni Kaya',
  metadataBase: new URL(`${siteUrl}/`),
  alternates: {
    canonical: `${siteUrl}/`,
  },
  openGraph: {
    title: 'ADONI KAYA | Free Gujarati Shradhanjali & Besna Card Maker',
    description:
      'Create beautiful Gujarati Shradhanjali and Besna cards online for free. No login, registration, or payment required.',
    url: `${siteUrl}/`,
    siteName: 'અડોણી કાયા (ADONI KAYA)',
    locale: 'gu_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/icon.svg`,
        alt: 'ADONI KAYA Gujarati logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADONI KAYA | Free Gujarati Shradhanjali & Besna Card Maker',
    description:
      'Create Gujarati Shradhanjali and Besna cards online for free. No login or registration required.',
    images: [`${siteUrl}/icon.svg`],
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'અડોણી કાયા (ADONI KAYA)',
      inLanguage: 'gu',
      publisher: { '@id': organizationId },
    },
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: 'અડોણી કાયા (ADONI KAYA)',
      url: `${siteUrl}/`,
      logo: `${siteUrl}/icon.svg`,
      slogan: 'ગુજરાતી ડિઝાઇન હવે સૌ માટે સરળ!',
      sameAs: ['https://www.instagram.com/adoni_kaya/'],
    },
    {
      '@type': 'WebApplication',
      '@id': `${siteUrl}/#app`,
      name: 'અડોણી કાયા (ADONI KAYA)',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Web browser',
      browserRequirements: 'Requires JavaScript and HTML5.',
      inLanguage: 'gu',
      url: `${siteUrl}/`,
      publisher: { '@id': organizationId },
      description:
        'Create Gujarati Shradhanjali, Besna, and Punyatithi cards in a web browser.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
      },
      featureList: [
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="gu">
      <head>
        <meta
          name="google-site-verification"
          content="w0OeEadz_yypbtrOhcrY9G20xUB9vjU_ByNbLvQej6Y"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-cream text-brand-charcoal selection:bg-brand-saffron selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
