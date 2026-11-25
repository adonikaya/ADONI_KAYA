import type { Metadata } from 'next';

const siteUrl = 'https://adonikaya.github.io/ADONI_KAYA';

export const metadata: Metadata = {
  title: 'Gujarati Shradhanjali & Besna Template Gallery',
  description:
    'Browse Gujarati Shradhanjali, Besna, Punyatithi, and Rabari-style card designs in the ADONI KAYA template gallery.',
  alternates: {
    canonical: `${siteUrl}/gallery/`,
  },
  openGraph: {
    title: 'Gujarati Shradhanjali & Besna Template Gallery',
    description:
      'Browse Gujarati Shradhanjali, Besna, Punyatithi, and Rabari-style card designs.',
    url: `${siteUrl}/gallery/`,
    siteName: 'અડોણી કાયા (ADONI KAYA)',
    type: 'website',
    images: [{ url: `${siteUrl}/icon.svg`, alt: 'ADONI KAYA Gujarati logo' }],
  },
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
