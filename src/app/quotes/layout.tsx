import type { Metadata } from 'next';

const siteUrl = 'https://adonikaya.github.io/ADONI_KAYA';

export const metadata: Metadata = {
  title: 'Gujarati Remembrance Quotes',
  description:
    'Browse Gujarati remembrance and condolence messages for Shradhanjali and Besna cards, and copy a message into your card.',
  alternates: {
    canonical: `${siteUrl}/quotes/`,
  },
  openGraph: {
    title: 'Gujarati Remembrance Quotes',
    description:
      'Browse Gujarati remembrance and condolence messages for Shradhanjali and Besna cards.',
    url: `${siteUrl}/quotes/`,
    siteName: 'અડોણી કાયા (ADONI KAYA)',
    type: 'website',
    images: [{ url: `${siteUrl}/icon.svg`, alt: 'ADONI KAYA Gujarati logo' }],
  },
};

export default function QuotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
