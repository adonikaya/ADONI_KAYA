import type { Metadata } from 'next';
import Link from 'next/link';

const siteUrl = 'https://adonikaya.github.io/ADONI_KAYA';
const pageUrl = `${siteUrl}/shradhanjali-maker/`;

export const metadata: Metadata = {
  title: 'Gujarati Shradhanjali Maker',
  description:
    'Create a Gujarati Shradhanjali card online for free. Choose a design, add a photograph and family details, customize it, and download without login.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Gujarati Shradhanjali Maker | ADONI KAYA',
    description:
      'Create and download a Gujarati Shradhanjali card online. No login or registration required.',
    url: pageUrl,
    siteName: 'અડોણી કાયા (ADONI KAYA)',
    type: 'website',
    images: [{ url: `${siteUrl}/icon.svg`, alt: 'ADONI KAYA Gujarati logo' }],
  },
};

export default function ShradhanjaliMakerPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <header className="space-y-4 rounded-3xl border border-brand-sand bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-saffron">
          ADONI KAYA · Gujarati card maker
        </p>
        <h1 className="font-serifGujarati text-3xl font-black text-brand-maroon sm:text-4xl">
          ગુજરાતી શ્રદ્ધાંજલિ કાર્ડ બનાવો
        </h1>
        <p className="font-gujarati text-base leading-8 text-gray-700" lang="gu">
          અડોણી કાયા પર સ્વજનની યાદમાં શ્રદ્ધાંજલિ કાર્ડ તૈયાર કરો. ઉપલબ્ધ ડિઝાઇન પસંદ કરો,
          વિગતો ભરો, પૂર્વદર્શન તપાસો અને કાર્ડ PNG, JPG અથવા PDF રૂપે ડાઉનલોડ કરો.
          બનાવવાની પ્રક્રિયા માટે લૉગિન કે રજીસ્ટ્રેશન જરૂરી નથી.
        </p>
        <p className="leading-7 text-gray-600" lang="en">
          ADONI KAYA is a free Gujarati Shradhanjali card maker that works in your browser.
          Add the details you want on the card, review the design, and download the result.
        </p>
        <Link
          href="/gallery?type=shradhanjali"
          className="inline-flex rounded-xl bg-brand-saffron px-5 py-3 font-gujarati font-bold text-white hover:bg-brand-saffronDark"
        >
          શ્રદ્ધાંજલિ કાર્ડ બનાવો
        </Link>
      </header>

      <section className="space-y-3">
        <h2 className="font-serifGujarati text-2xl font-bold text-brand-maroon">
          ગુજરાતી શ્રદ્ધાંજલિ કાર્ડ શું છે?
        </h2>
        <p className="font-gujarati leading-8 text-gray-700" lang="gu">
          શ્રદ્ધાંજલિ કાર્ડ સ્વર્ગસ્થ વ્યક્તિની સ્મૃતિમાં પરિવારજનો અને સ્નેહીજનો સાથે વિગતો
          અને સ્મૃતિ સંદેશ વહેંચવાનું એક માધ્યમ છે. પરિવાર પોતાની જરૂરિયાત મુજબ નામ, તારીખ,
          ફોટો અને સંદેશ પસંદ કરી શકે છે.
        </p>
      </section>

      <section className="space-y-5">
        <h2 className="font-serifGujarati text-2xl font-bold text-brand-maroon">
          અડોણી કાયા પર કાર્ડ કેવી રીતે બનાવવું?
        </h2>
        <ol className="list-decimal space-y-4 pl-6 text-gray-700 marker:font-bold marker:text-brand-saffron">
          <li className="font-gujarati leading-7">
            <strong>ડિઝાઇન પસંદ કરો:</strong> ગેલેરીમાં શ્રદ્ધાંજલિ અથવા તમારી પસંદની શૈલીનું
            ટેમ્પલેટ પસંદ કરો.
          </li>
          <li className="font-gujarati leading-7">
            <strong>વિગતો ઉમેરો:</strong> સ્વર્ગસ્થનું નામ અને જરૂરી તારીખો દાખલ કરો. ઇચ્છો તો
            ફોટો ઉમેરો; ફોટો બ્રાઉઝરમાં જ ક્રોપ થાય છે.
          </li>
          <li className="font-gujarati leading-7">
            <strong>સંદેશ અને પરિવાર ઉમેરો:</strong> સ્મૃતિ સંદેશ પસંદ કરો અને કાર્ડમાં
            દર્શાવવાના પરિવારજનોનાં નામ ઉમેરો.
          </li>
          <li className="font-gujarati leading-7">
            <strong>પૂર્વદર્શન અને ડાઉનલોડ:</strong> કાર્ડ તપાસી, સંપાદકમાં દેખાતા PNG, JPG અથવા
            PDF વિકલ્પમાંથી પસંદ કરો.
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-serifGujarati text-2xl font-bold text-brand-maroon">
          સામાન્ય પ્રશ્નો
        </h2>
        <details className="rounded-xl border border-brand-sand bg-white p-4">
          <summary className="cursor-pointer font-bold text-brand-charcoal">
            શું શ્રદ્ધાંજલિ કાર્ડ બનાવવા માટે લૉગિન જરૂરી છે?
          </summary>
          <p className="mt-3 font-gujarati leading-7 text-gray-700">
            નહીં. ટેમ્પલેટ પસંદ કરીને વિગતો ભર્યા પછી તમે કાર્ડ બનાવી અને ડાઉનલોડ કરી શકો છો.
          </p>
        </details>
        <details className="rounded-xl border border-brand-sand bg-white p-4">
          <summary className="cursor-pointer font-bold text-brand-charcoal">
            શું ફોટો અડોણી કાયાના સર્વર પર અપલોડ થાય છે?
          </summary>
          <p className="mt-3 font-gujarati leading-7 text-gray-700">
            ફોટો બ્રાઉઝરમાં વાંચી અને ક્રોપ થાય છે; એપ્લિકેશન તેને પોતાના સર્વર પર અપલોડ કરતી
            નથી. ફરી ખોલવા માટેનો ડ્રાફ્ટ તમારા બ્રાઉઝરના સ્થાનિક સ્ટોરેજમાં સાચવાઈ શકે છે.
            વધુ વિગતો માટે <Link className="text-brand-saffron underline" href="/privacy-policy/">ગોપનીયતા નીતિ</Link> જુઓ.
          </p>
        </details>
        <details className="rounded-xl border border-brand-sand bg-white p-4">
          <summary className="cursor-pointer font-bold text-brand-charcoal">
            હું બનાવેલું કાર્ડ કયા ફોર્મેટમાં ડાઉનલોડ કરી શકું?
          </summary>
          <p className="mt-3 font-gujarati leading-7 text-gray-700">
            સંપાદકમાં PNG, JPG અને PDF ડાઉનલોડ વિકલ્પો ઉપલબ્ધ છે.
          </p>
        </details>
      </section>
    </div>
  );
}
