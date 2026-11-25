import type { Metadata } from 'next';

const siteUrl = 'https://adonikaya.github.io/ADONI_KAYA';
const pageUrl = `${siteUrl}/privacy-policy/`;

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read how ADONI KAYA handles card details, uploaded photographs, browser storage, optional analytics, and third-party services.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'Privacy Policy | ADONI KAYA',
    description:
      'How the ADONI KAYA card editor handles information and browser storage.',
    url: pageUrl,
    siteName: 'અડોણી કાયા (ADONI KAYA)',
    type: 'website',
    images: [{ url: `${siteUrl}/icon.svg`, alt: 'ADONI KAYA Gujarati logo' }],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <p className="text-sm font-bold uppercase tracking-wide text-brand-saffron">ADONI KAYA</p>
        <h1 className="font-serifGujarati text-3xl font-black text-brand-maroon sm:text-4xl">
          ગોપનીયતા નીતિ
        </h1>
        <p className="font-gujarati leading-8 text-gray-700" lang="gu">
          આ નીતિ અડોણી કાયા કાર્ડ બનાવવાની એપ્લિકેશન દ્વારા માહિતી કેવી રીતે વપરાય છે તે સમજાવે
          છે. વેબસાઇટ GitHub Pages પર હોસ્ટ થાય છે; હોસ્ટિંગ પ્રદાતાની તકનીકી પ્રક્રિયા
          એપ્લિકેશનની પ્રક્રિયાથી અલગ છે.
        </p>
        <h2 className="text-xl font-bold text-brand-maroon" lang="en">Privacy Policy</h2>
        <p className="leading-7 text-gray-700" lang="en">
          This policy describes the ADONI KAYA card-making application. The website is hosted
          on GitHub Pages; hosting-provider infrastructure and request logs are separate from
          the application’s own data handling.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="font-serifGujarati text-2xl font-bold text-brand-maroon">
          કાર્ડની વિગતો અને ફોટા
        </h2>
        <p className="font-gujarati leading-8 text-gray-700" lang="gu">
          કાર્ડમાં દાખલ કરેલી વિગતો—જેમ કે નામ, તારીખ, ફોન નંબર, સ્થળ, પરિવારનાં નામ અને
          સંદેશ—બ્રાઉઝરમાં જ કાર્ડ તૈયાર કરવા માટે વપરાય છે. પસંદ કરેલો ફોટો બ્રાઉઝરમાં વાંચી,
          ક્રોપ કરી અને કાર્ડ પર રેન્ડર થાય છે. તપાસેલી એપ્લિકેશનમાં આ કાર્ડની વિગતો અથવા ફોટા
          એપ્લિકેશન સર્વર પર મોકલતી કે સર્વર ડેટાબેઝમાં સાચવતી સુવિધા નથી.
        </p>
        <p className="leading-7 text-gray-700" lang="en">
          Card details and selected photographs are used by the browser to compose and export
          the card. The application code does not upload those card details or photographs to
          an ADONI KAYA application server or store them in an application database.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serifGujarati text-2xl font-bold text-brand-maroon">
          બ્રાઉઝરમાં ડ્રાફ્ટ સાચવવો
        </h2>
        <p className="font-gujarati leading-8 text-gray-700" lang="gu">
          ફરીથી કામ ચાલુ રાખવા માટે એપ્લિકેશન ડ્રાફ્ટને બ્રાઉઝરના localStorage માં સાચવે છે.
          તેમાં દાખલ કરેલી કાર્ડ વિગતો અને ક્રોપ કરેલો ફોટો હોઈ શકે છે. આ માહિતી પેજ રિફ્રેશ
          કર્યા પછી અથવા બ્રાઉઝર બંધ કરીને ફરી ખોલ્યા પછી પણ તે જ બ્રાઉઝર પ્રોફાઇલમાં રહી શકે
          છે. નવું કાર્ડ શરૂ કરતાં પહેલાંનો ડ્રાફ્ટ બદલાય છે; સંપૂર્ણપણે દૂર કરવા માટે તમારા
          બ્રાઉઝરની આ સાઇટ માટેની સંગ્રહિત માહિતી સાફ કરો. ગેલેરીમાંથી નવું કાર્ડ શરૂ કરવા માટે
          sessionStorage માં થોડા સમય માટે એક navigation marker પણ વપરાય છે; તેમાં કાર્ડની
          વ્યક્તિગત વિગતો હોતી નથી.
        </p>
        <p className="leading-7 text-gray-700" lang="en">
          To restore work, the editor saves a draft in browser localStorage. It can include the
          entered card details and the cropped photo. The draft can remain after a refresh or
          closing the browser. Starting another card replaces the previous draft; you can also
          clear this site’s stored data in your browser settings. A short-lived sessionStorage
          navigation marker is also used when starting a card from the gallery; it contains no
          card details.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serifGujarati text-2xl font-bold text-brand-maroon">
          વૈકલ્પિક ઉપયોગ આંકડા
        </h2>
        <p className="font-gujarati leading-8 text-gray-700" lang="gu">
          જો કોઈ બિલ્ડમાં Google Apps Script analytics endpoint ગોઠવાયેલો હોય, તો એપ્લિકેશન
          ઘટના સમય, workflow પ્રકાર, પસંદ કરેલું ટેમ્પલેટ, પગલું, ઉપકરણનો સામાન્ય પ્રકાર,
          બ્રાઉઝરમાં બનાવાયેલ રેન્ડમ session ID અને ડાઉનલોડ ફોર્મેટ/સ્થિતિ જેવા ઉપયોગ આંકડા
          મોકલી શકે છે. આ payload માં કાર્ડનાં નામ, ફોટા, સંદેશા, ફોન નંબર કે સ્થળ સામેલ નથી.
          આ ગોઠવણી ન હોય તો એપ્લિકેશન આ analytics મોકલતી નથી. અત્યારે GitHub Pages deploy
          workflow આ endpoint ગોઠવતું નથી.
        </p>
        <p className="leading-7 text-gray-700" lang="en">
          If a build is configured with a Google Apps Script analytics endpoint, limited usage
          events may be sent to that Google service: event time, workflow type, selected
          template, step, broad device category, a randomly generated browser session ID, and
          export format/status. The event payload excludes card names, photographs, messages,
          phone numbers, and venue details. Without that configuration, the application does
          not send these analytics events. The current GitHub Pages deployment workflow does
          not configure the endpoint.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serifGujarati text-2xl font-bold text-brand-maroon">
          તૃતીય-પક્ષ સેવાઓ અને હોસ્ટિંગ
        </h2>
        <p className="font-gujarati leading-8 text-gray-700" lang="gu">
          પેજ પરના ગુજરાતી ફોન્ટ Google Fonts માંથી લોડ થાય છે; ફોન્ટ મેળવવા માટે બ્રાઉઝર Google
          ને વિનંતી કરે છે, પરંતુ કાર્ડની વિગતો આ વિનંતીમાં મોકલાતી નથી. વેબસાઇટ GitHub Pages
          પર હોસ્ટ છે અને GitHub તેની હોસ્ટિંગ તથા સુરક્ષા માટે જરૂરી તકનીકી માહિતી—જેમ કે
          વિનંતી સંબંધિત લોગ—પ્રોસેસ કરી શકે છે. બાહ્ય Instagram લિંક ખોલશો તો Instagramની
          પોતાની ગોપનીયતા નીતિ લાગુ પડે છે.
        </p>
        <p className="leading-7 text-gray-700" lang="en">
          Gujarati fonts are loaded from Google Fonts, which receives a browser request for
          those font files; card content is not included in that request. GitHub Pages hosts
          the site and may process technical request information, such as infrastructure logs.
          If you follow an Instagram link, Instagram’s privacy policy applies.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-serifGujarati text-2xl font-bold text-brand-maroon">
          સંપર્ક
        </h2>
        <p className="font-gujarati leading-8 text-gray-700" lang="gu">
          આ નીતિ વિશે પ્રશ્ન હોય તો Instagram પર અડોણી કાયાનો સંપર્ક કરો:
        </p>
        <a
          className="text-brand-saffron underline"
          href="https://www.instagram.com/adoni_kaya/"
          target="_blank"
          rel="noreferrer"
        >
          @adoni_kaya on Instagram
        </a>
      </section>
    </div>
  );
}
