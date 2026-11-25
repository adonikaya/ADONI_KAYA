import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = 'https://adonikaya.github.io/ADONI_KAYA';
const pageUrl = `${siteUrl}/about/`;

export const metadata: Metadata = {
  title: { absolute: 'About ADONI KAYA' },
  description:
    'Learn about ADONI KAYA, a free online tool for creating Gujarati Shradhanjali and Besna cards in a web browser.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'About ADONI KAYA',
    description:
      'Learn about the free Gujarati Shradhanjali and Besna card maker.',
    url: pageUrl,
    siteName: 'અડોણી કાયા (ADONI KAYA)',
    type: 'website',
    images: [{ url: `${siteUrl}/icon.svg`, alt: 'ADONI KAYA Gujarati logo' }],
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-saffron">ADONI KAYA</p>
        <h1 className="font-serifGujarati text-3xl font-black text-brand-maroon sm:text-4xl">
          અડોણી કાયા વિશે
        </h1>
        <p className="font-gujarati text-base leading-8 text-gray-700" lang="gu">
          અડોણી કાયા ગુજરાતી ભાષામાં શ્રદ્ધાંજલિ, બેસણું અને પુણ્યતિથિ કાર્ડ તૈયાર કરવા માટેની
          મફત ઓનલાઇન સેવા છે. લોકો ઉપલબ્ધ ડિઝાઇનમાંથી પસંદ કરી વિગતો ઉમેરે છે અને પોતાના
          બ્રાઉઝરમાં કાર્ડ ડાઉનલોડ કરે છે.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-serifGujarati text-2xl font-bold text-brand-maroon">
          ગુજરાતી કાર્ડ બનાવવાનું સરળ સાધન
        </h2>
        <p className="leading-7 text-gray-700" lang="en">
          ADONI KAYA provides a browser-based editor for Gujarati memorial cards. It includes
          template selection, fields for card details, a live preview, and downloadable card
          formats. No account is needed to use the card-making flow.
        </p>
        <p className="font-gujarati leading-8 text-gray-700" lang="gu">
          આ સેવા અમદાવાદ, ગાંધીનગર, સુરત, રાજકોટ, વડોદરા સહિત ગુજરાતના શહેરો અને ગામોમાંથી,
          તેમજ ઇન્ટરનેટ ઉપલબ્ધ હોય ત્યાંથી વાપરી શકાય છે. અડોણી કાયા કોઈ ભૌતિક સ્થાનિક
          સેવા-કેન્દ્ર હોવાનો દાવો કરતી નથી.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serifGujarati text-2xl font-bold text-brand-maroon">
          શરૂઆત કરો
        </h2>
        <p className="font-gujarati leading-8 text-gray-700">
          શ્રદ્ધાંજલિ અથવા બેસણું કાર્ડ બનાવવા માટે સંબંધિત માર્ગદર્શન અને ટેમ્પલેટ ગેલેરી જુઓ.
        </p>
        <ul className="space-y-2">
          <li><Link className="text-brand-saffron underline" href="/shradhanjali-maker/">ગુજરાતી શ્રદ્ધાંજલિ કાર્ડ બનાવો</Link></li>
          <li><Link className="text-brand-saffron underline" href="/besna-card-maker/">ગુજરાતી બેસણું કાર્ડ બનાવો</Link></li>
          <li><Link className="text-brand-saffron underline" href="/privacy-policy/">ગોપનીયતા નીતિ વાંચો</Link></li>
        </ul>
      </section>
    </div>
  );
}
