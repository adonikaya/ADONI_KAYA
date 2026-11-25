import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'અડોણી કાયા (ADONI KAYA) — ગુજરાતી શ્રદ્ધાંજલિ અને બેસણું કાર્ડ નિર્માણ',
  description:
    'ગુજરાતી શ્રદ્ધાંજલિ, બેસણું અને પુણ્યતિથિ કાર્ડ બનાવવાનું ભારતનું પ્રથમ સ્માર્ટ પ્લેટફોર્મ. રબારી શૈલી ભરતકામ, ઓટોમેટિક તિથિ કેલ્ક્યુલેટર અને હાઈ-ડેફિનેશન ફ્રી ડાઉનલોડ.',
  keywords: [
    'અડોણી કાયા',
    'ADONI KAYA',
    'શ્રદ્ધાંજલિ કાર્ડ',
    'બેસણું પત્રિકા',
    'ગુજરાતી ડિઝાઇન',
    'પુણ્યતિથિ કાર્ડ',
    'રબારી શૈલી કાર્ડ',
    'Shradhanjali Card Maker Gujarati',
    'Besna Patrika Maker',
    'Gujarati Tribute Card',
    'Shok Sabha Patrika',
    'Free Gujarati Shradhanjali Maker',
  ],
  authors: [{ name: 'Adoni Kaya Team' }],
  creator: 'Adoni Kaya',
  publisher: 'Adoni Kaya',
  metadataBase: new URL('https://krishdesai.github.io/AdoniKaya'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'અડોણી કાયા (ADONI KAYA) — ગુજરાતી ડિઝાઇન હવે સૌ માટે સરળ!',
    description:
      'ગુજરાતી શ્રદ્ધાંજલિ, બેસણું અને પુણ્યતિથિ કાર્ડ સરળતાથી ઓનલાઇન બનાવો. ૧૦૦+ થી વધુ પરંપરાગત ડિઝાઇન્સ, રબારી બોર્ડર અને ત્વરિત HD ડાઉનલોડ.',
    url: 'https://krishdesai.github.io/AdoniKaya',
    siteName: 'અડોણી કાયા (ADONI KAYA)',
    locale: 'gu_IN',
    type: 'website',
    images: [
      {
        url: '/icon.svg',
        width: 512,
        height: 512,
        alt: 'અડોણી કાયા લોગો',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'અડોણી કાયા (ADONI KAYA) — ગુજરાતી શ્રદ્ધાંજલિ અને બેસણું કાર્ડ નિર્માણ',
    description:
      'ગુજરાતી શ્રદ્ધાંજલિ અને બેસણા પત્રિકા વિના મૂલ્યે બનાવો. અધિકૃત ગુજરાતી તિથિ અને વાર્ષિક કેલ્ક્યુલેશન સાથે.',
    images: ['/icon.svg'],
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
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Gujarat, India',
    'geo.position': '23.0225;72.5714',
    'ICBM': '23.0225, 72.5714',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://krishdesai.github.io/AdoniKaya/#app',
      name: 'અડોણી કાયા (ADONI KAYA)',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      inLanguage: ['gu', 'en'],
      description:
        'ગુજરાતી શ્રદ્ધાંજલિ, બેસણું અને પુણ્યતિથિ કાર્ડ બનાવવાનું ભારતનું પ્રથમ સ્માર્ટ પ્લેટફોર્મ.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
      },
      featureList: [
        '૧૫૦+ થી વધુ અધિકૃત ગુજરાતી કાર્ડ ટેમ્પલેટ્સ',
        'ઓટોમેટિક વાર્ષિક અને માસિક શ્રદ્ધાંજલિ કેલ્ક્યુલેટર',
        'હિન્દુ પંચાંગ મુજબ સુદ અને વદ તિથિ સિલેક્ટર',
        'રબારી શૈલી ભરતકામ અને પરંપરાગત બોર્ડર્સ',
        'હાઈ-ડેફિનેશન (HD) PNG, JPG, અને PDF ડાઉનલોડ',
      ],
    },
    {
      '@type': 'Organization',
      '@id': 'https://krishdesai.github.io/AdoniKaya/#organization',
      name: 'અડોણી કાયા (ADONI KAYA)',
      url: 'https://krishdesai.github.io/AdoniKaya',
      logo: 'https://krishdesai.github.io/AdoniKaya/icon.svg',
      slogan: 'ગુજરાતી ડિઝાઇન હવે સૌ માટે સરળ!',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://krishdesai.github.io/AdoniKaya/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'અડોણી કાયા પર ગુજરાતી શ્રદ્ધાંજલિ કાર્ડ કેવી રીતે બનાવવું?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'અડોણી કાયા પર ટેમ્પલેટ પસંદ કરો, સ્વર્ગસ્થનું નામ, તારીખ અને તિથિ દાખલ કરો, સ્મૃતિ સંદેશ અને પરિવારજનોના નામ ઉમેરો અને એક ક્લિકમાં HD કાર્ડ ડાઉનલોડ કરો.',
          },
        },
        {
          '@type': 'Question',
          name: 'શું અડોણી કાયા પર કાર્ડ બનાવવું મફત છે?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'હા, અડોણી કાયા પર શ્રદ્ધાંજલિ, બેસણું અને પુણ્યતિથિ કાર્ડ બનાવવું સંપૂર્ણપણે મફત છે અને કોઈ લૉગિનની જરૂર નથી.',
          },
        },
        {
          '@type': 'Question',
          name: 'શું હું મોબાઈલમાંથી બેસણા પત્રિકા ડાઉનલોડ કરી શકું?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'હા, અડોણી કાયા સંપૂર્ણપણે મોબાઈલ-ફ્રેન્ડલી છે અને તમે સીધા તમારા સ્માર્ટફોનમાંથી PNG, JPG અથવા PDF ફોર્મેટમાં ડાઉનલોડ કરી WhatsApp પર શેર કરી શકો છો.',
          },
        },
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
