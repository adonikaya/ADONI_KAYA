import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = 'https://adonikaya.github.io/ADONI_KAYA';
const pageUrl = `${siteUrl}/besna-card-maker/`;

export const metadata: Metadata = {
  title: 'Gujarati Besna Card Maker',
  description:
    'Create a Gujarati Besna card online for free. Choose a traditional design, add the event date, time, venue and family details, then download without login.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Gujarati Besna Card Maker | ADONI KAYA',
    description:
      'Create and download a Gujarati Besna card online. No login or registration required.',
    url: pageUrl,
    siteName: 'અડોણી કાયા (ADONI KAYA)',
    type: 'website',
    images: [{ url: `${siteUrl}/icon.svg`, alt: 'ADONI KAYA Gujarati logo' }],
  },
};

export default function BesnaCardMakerPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <header className="space-y-4 rounded-3xl border border-brand-sand bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-saffron">
          ADONI KAYA · Gujarati card maker
        </p>
        <h1 className="font-serifGujarati text-3xl font-black text-brand-maroon sm:text-4xl">
          ગુજરાતી બેસણું કાર્ડ બનાવો
        </h1>
        <p className="font-gujarati text-base leading-8 text-gray-700" lang="gu">
          બેસણું અથવા પ્રાર્થના સભાની માહિતી સ્નેહીજનો સાથે વહેંચવા માટે ગુજરાતી કાર્ડ બનાવો.
          ડિઝાઇન પસંદ કર્યા પછી સ્વર્ગસ્થનું નામ, તારીખ, સમય, સ્થળ અને પરિવારની વિગતો ઉમેરો;
          પછી પૂર્વદર્શન જોઈને કાર્ડ ડાઉનલોડ કરો.
        </p>
        <p className="leading-7 text-gray-600" lang="en">
          ADONI KAYA lets you create a Gujarati Besna invitation card in your browser without
          creating an account or paying to download the card.
        </p>
        <Link
          href="/gallery?type=besna"
          className="inline-flex rounded-xl bg-brand-saffron px-5 py-3 font-gujarati font-bold text-white hover:bg-brand-saffronDark"
        >
          બેસણું કાર્ડ બનાવો
        </Link>
      </header>

      <section className="space-y-3">
        <h2 className="font-serifGujarati text-2xl font-bold text-brand-maroon">
          બેસણું કાર્ડમાં કઈ વિગતો હોય છે?
        </h2>
        <p className="font-gujarati leading-8 text-gray-700" lang="gu">
          કાર્ડમાં સામાન્ય રીતે સ્વર્ગસ્થનું નામ, પ્રાર્થના સભા અથવા બેસણાની તારીખ અને સમય,
          સ્થળ તથા પરિવારજનોની વિગતો આપવામાં આવે છે. કઈ માહિતી દર્શાવવી તે પરિવાર નક્કી કરી
          શકે છે; જરૂરી ન હોય તેવી વિગતો ઉમેરવાની જરૂર નથી.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-serifGujarati text-2xl font-bold text-brand-maroon">
          બેસણું કાર્ડ બનાવવાના પગલાં
        </h2>
        <ol className="list-decimal space-y-4 pl-6 text-gray-700 marker:font-bold marker:text-brand-saffron">
          <li className="font-gujarati leading-7">
            <strong>બેસણાની ડિઝાઇન પસંદ કરો:</strong> ગેલેરીમાં બેસણું અથવા પ્રાર્થના સભા
            કેટેગરીનું ટેમ્પલેટ પસંદ કરો.
          </li>
          <li className="font-gujarati leading-7">
            <strong>જરૂરી વિગતો ભરો:</strong> નામ, તારીખ, સમય અને સ્થળ દાખલ કરો. ઉપલબ્ધ ફોર્મમાં
            પરિવારની વિગતો અને ફોટો ઉમેરવાના વિકલ્પો પણ છે.
          </li>
          <li className="font-gujarati leading-7">
            <strong>કાર્ડ તપાસો:</strong> પૂર્વદર્શનમાં લખાણ અને ગોઠવણી ચકાસીને જરૂર મુજબ ફેરફાર
            કરો.
          </li>
          <li className="font-gujarati leading-7">
            <strong>ડાઉનલોડ કરો:</strong> સંપાદકમાંથી PNG, JPG અથવા PDF પસંદ કરો.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-serifGujarati text-2xl font-bold text-brand-maroon">
          સામાન્ય પ્રશ્નો
        </h2>
        <details className="rounded-xl border border-brand-sand bg-white p-4">
          <summary className="cursor-pointer font-bold text-brand-charcoal">
            શું બેસણું કાર્ડ બનાવવાનું મફત છે?
          </summary>
          <p className="mt-3 font-gujarati leading-7 text-gray-700">
            હા. અડોણી કાયા પર કાર્ડ બનાવવાની અને ઉપલબ્ધ ફોર્મેટમાં ડાઉનલોડ કરવાની સુવિધા મફત છે.
          </p>
        </details>
        <details className="rounded-xl border border-brand-sand bg-white p-4">
          <summary className="cursor-pointer font-bold text-brand-charcoal">
            શું હું મોબાઇલથી બેસણું કાર્ડ બનાવી શકું?
          </summary>
          <p className="mt-3 font-gujarati leading-7 text-gray-700">
            હા. વેબસાઇટને મોબાઇલ, ટેબ્લેટ અથવા કમ્પ્યુટર પર બ્રાઉઝરમાં ખોલીને વાપરી શકાય છે.
          </p>
        </details>
        <details className="rounded-xl border border-brand-sand bg-white p-4">
          <summary className="cursor-pointer font-bold text-brand-charcoal">
            શું કાર્ડની વિગતો સર્વર પર સાચવાય છે?
          </summary>
          <p className="mt-3 font-gujarati leading-7 text-gray-700">
            એપ્લિકેશન કાર્ડની વિગતો પોતાના સર્વર પર મોકલતી કે સાચવતી નથી. ડ્રાફ્ટ તમારા
            બ્રાઉઝરના સ્થાનિક સ્ટોરેજમાં રહી શકે છે. વિગતો માટે <Link className="text-brand-saffron underline" href="/privacy-policy/">ગોપનીયતા નીતિ</Link> જુઓ.
          </p>
        </details>
      </section>
    </div>
  );
}
