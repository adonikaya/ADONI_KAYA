import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Download, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

const siteUrl = 'https://adonikaya.github.io/ADONI_KAYA';
const pageUrl = `${siteUrl}/about/`;

export const metadata: Metadata = {
  title: { absolute: 'About ADONI KAYA | Free Gujarati Shradhanjali & Besna Card Maker' },
  description:
    'Learn about ADONI KAYA, a free Gujarati online Shradhanjali and Besna card maker. Create personalized memorial cards without login, directly from your mobile or computer.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'About ADONI KAYA | Free Gujarati Card Maker',
    description: 'Learn about ADONI KAYA, a free Gujarati online Shradhanjali and Besna card maker.',
    url: pageUrl,
    siteName: 'અડોણી કાયા (ADONI KAYA)',
    locale: 'gu_IN',
    type: 'website',
    images: [{ url: `${siteUrl}/icon.svg`, alt: 'ADONI KAYA Gujarati logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'About ADONI KAYA',
    description: 'A free Gujarati-language platform for creating Shradhanjali and Besna cards without login.',
    images: [`${siteUrl}/icon.svg`],
  },
};

const faqs = [
  ['અડોણી કાયા શું છે?', 'અડોણી કાયા એક મફત, ગુજરાતી-ભાષાનું ઓનલાઇન કાર્ડ બનાવવાનું પ્લેટફોર્મ છે. અહીં શ્રદ્ધાંજલિ અને બેસણાંના કાર્ડ માટે ઉપલબ્ધ ડિઝાઇનમાંથી પસંદ કરીને વિગતો અને ફોટા ઉમેરી શકાય છે.'],
  ['શું અડોણી કાયા મફત છે?', 'હા, કાર્ડ બનાવવાની અને ઉપલબ્ધ PNG, JPG તથા PDF ફોર્મેટમાં ડાઉનલોડ કરવાની સુવિધા મફત છે.'],
  ['શું શ્રદ્ધાંજલિ કાર્ડ બનાવવા માટે Login કરવું પડે છે?', 'નહીં. લૉગિન અથવા એકાઉન્ટ બનાવ્યા વિના ટેમ્પલેટ પસંદ કરીને કાર્ડ બનાવી શકાય છે.'],
  ['શું બેસણાંનું કાર્ડ બનાવી શકાય છે?', 'હા. બેસણાં અથવા પ્રાર્થના સભા માટે તારીખ, સમય, સ્થળ અને પરિવારની વિગતો ઉમેરી શકાય છે.'],
  ['શું મોબાઇલમાં કાર્ડ બનાવી શકાય છે?', 'હા. અડોણી કાયાની વેબસાઇટ મોબાઇલ, ટેબ્લેટ અને કમ્પ્યુટર પર બ્રાઉઝરમાં વાપરી શકાય છે.'],
  ['કાર્ડ કયા ફોર્મેટમાં ડાઉનલોડ કરી શકાય છે?', 'સંપાદકમાંથી PNG, JPG અને PDF ફોર્મેટમાં કાર્ડ ડાઉનલોડ કરી શકાય છે.'],
  ['શું કાર્ડમાં પોતાનો ફોટો અને પરિવારજનોનાં નામ ઉમેરી શકાય છે?', 'હા. ઉપલબ્ધ કાર્ડમાં ફોટો કાપી-કાપણી કરી શકાય છે તથા પરિવારજનોનાં નામ ફોર્મમાં ઉમેરી શકાય છે.'],
  ['શું મારી માહિતી ADONI KAYAના સર્વર પર સંગ્રહિત થાય છે?', 'કાર્ડની વિગતો અને ફોટા ADONI KAYAના application server પર સંગ્રહિત નથી; પ્રક્રિયા અને export તમારા બ્રાઉઝરમાં થાય છે. કાર્ડ ડ્રાફ્ટ બ્રાઉઝરના localStorageમાં રહી શકે છે.'],
  ['શું અડોણી કાયા ભવિષ્યમાં નવી સુવિધાઓ ઉમેરશે?', 'અમે પ્લેટફોર્મને વધુ ઉપયોગી બનાવવા માટે સમયાંતરે સુધારા અને નવી સુવિધાઓના પ્રયાસો ચાલુ રાખીએ છીએ.'],
] as const;

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: 'About ADONI KAYA',
      inLanguage: 'gu',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#organization` },
      description: 'Information about ADONI KAYA, a free Gujarati-language online memorial card creation platform.',
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'અડોણી કાયા (ADONI KAYA)',
      alternateName: 'ADONI KAYA',
      url: `${siteUrl}/`,
      logo: `${siteUrl}/icon.svg`,
      slogan: 'ગુજરાતી ડિઝાઇન હવે સૌ માટે સરળ!',
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'અડોણી કાયા (ADONI KAYA)',
      inLanguage: 'gu',
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'WebApplication',
      '@id': `${siteUrl}/#app`,
      name: 'અડોણી કાયા (ADONI KAYA)',
      alternateName: 'ADONI KAYA',
      applicationCategory: 'DesignApplication',
      operatingSystem: 'Web browser',
      browserRequirements: 'Requires JavaScript and HTML5.',
      inLanguage: 'gu',
      url: `${siteUrl}/`,
      description: 'A free Gujarati-language online platform for creating Shradhanjali and Besna cards.',
      publisher: { '@id': `${siteUrl}/#organization` },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'મુખપૃષ્ઠ', item: `${siteUrl}/` },
        { '@type': 'ListItem', position: 2, name: 'અમારા વિશે', item: pageUrl },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqs.map(([question, answer]) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="overflow-hidden bg-brand-cream">
        <section className="border-b border-brand-sand bg-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
            <div className="space-y-6">
              <p className="inline-flex rounded-full border border-brand-gold/40 bg-brand-goldLight px-4 py-2 text-sm font-bold text-brand-goldDark">ADONI KAYA · અડોણી કાયા</p>
              <h1 className="font-serifGujarati text-4xl font-black leading-tight text-brand-maroon sm:text-5xl">અડોણી કાયા વિશે</h1>
              <p className="font-serifGujarati text-xl font-bold text-brand-saffron">ગુજરાતી ડિઝાઇન હવે સૌ માટે સરળ!</p>
              <p className="max-w-2xl font-gujarati text-lg leading-9 text-brand-charcoal/80" lang="gu">
                અડોણી કાયા એક મફત ગુજરાતી ડિજિટલ પ્લેટફોર્મ છે, જ્યાં કોઈપણ વ્યક્તિ સરળતાથી
                શ્રદ્ધાંજલિ અને બેસણાંના કાર્ડ બનાવી શકે છે. ડિઝાઇનિંગની જાણકારી કે કોઈ ખાસ
                સોફ્ટવેરની જરૂર વગર, પોતાના પરિવારજનોની યાદમાં સુંદર અને આદરપૂર્ણ કાર્ડ તૈયાર કરી શકાય છે.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/gallery?type=shradhanjali" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-maroon px-5 py-3.5 font-gujarati font-bold text-white hover:bg-brand-maroonDark">શ્રદ્ધાંજલિ કાર્ડ બનાવો <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/gallery?type=besna" className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-gold/50 bg-brand-goldLight px-5 py-3.5 font-gujarati font-bold text-brand-maroon hover:bg-brand-gold/20">બેસણાંનું કાર્ડ બનાવો <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md rounded-[2rem] border border-brand-gold/40 bg-brand-goldLight p-6 shadow-card">
              <div className="rounded-[1.5rem] border border-brand-maroon/10 bg-white px-6 py-10 text-center">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-brand-maroon font-serifGujarati text-5xl font-bold text-brand-gold shadow-lg">અ</div>
                <p className="font-serifGujarati text-3xl font-bold text-brand-maroon">અડોણી કાયા</p>
                <p className="mt-2 text-sm font-bold tracking-[0.2em] text-brand-goldDark">ADONI KAYA</p>
                <p className="mt-5 font-gujarati leading-7 text-brand-charcoal/70">શ્રદ્ધાંજલિ અને બેસણાં માટે સરળ ગુજરાતી કાર્ડ નિર્માણ</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <section className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-saffron">અમારો હેતુ</p>
              <h2 className="font-serifGujarati text-3xl font-bold text-brand-maroon">યાદને આદરપૂર્વક રજૂ કરવી સરળ બનાવવી</h2>
            </div>
            <div className="rounded-2xl border border-brand-sand bg-white p-6 shadow-soft sm:p-8">
              <p className="font-gujarati text-lg leading-9 text-brand-charcoal/80" lang="gu">
                અડોણી કાયાની રચના Gujarati স্মરણપત્ર અને કાર્ડ બનાવવાની પ્રક્રિયા સરળ બનાવવા માટે થઈ છે.
                સ્મૃતિની માહિતી આદરપૂર્વક કાર્ડમાં ગોઠવી શકાય છે.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {['ગુજરાતી ભાષામાં સરળ ઉપયોગ', 'ડિઝાઇનિંગનો અનુભવ જરૂરી નથી', 'શ્રદ્ધાંજલિ અને બેસણાં માટે વિવિધ ડિઝાઇન', 'મફત બનાવવાની અને સરળ ડાઉનલોડ', 'મોબાઇલ અને કમ્પ્યુટર બંને માટે', 'દરેક વ્યક્તિ માટે સગવડરૂપ અનુભવ'].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-gujarati leading-7 text-brand-charcoal/80"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-saffron" />{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-brand-gold/30 bg-brand-goldLight/70 p-6 sm:p-10">
            <p className="mb-3 text-sm font-bold text-brand-goldDark">અડોણી કાયા શું છે?</p>
            <h2 className="font-serifGujarati text-3xl font-bold text-brand-maroon">Gujarati Memorial Card Maker</h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-brand-charcoal/80" lang="en">
              ADONI KAYA is a free Gujarati-language online memorial card maker that allows users
              to create Shradhanjali and Besna cards without creating an account or installing design software.
            </p>
            <p className="mt-4 max-w-4xl font-gujarati leading-8 text-brand-charcoal/80" lang="gu">
              અડોણી કાયા બ્રાઉઝરમાં કામ કરતી મફત ગુજરાતી ડિજિટલ સેવા છે. ટેમ્પલેટ પસંદ કરીને
              વ્યક્તિગત વિગતો ભરવા, પૂર્વદર્શન જોવા અને કાર્ડ ડાઉનલોડ કરવા માટે એકાઉન્ટ બનાવવું જરૂરી નથી.
            </p>
          </section>

          <section>
            <div className="mb-8"><p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-saffron">શું બનાવી શકાય?</p><h2 className="font-serifGujarati text-3xl font-bold text-brand-maroon">અહીં શું બનાવી શકાય?</h2></div>
            <div className="grid gap-5 md:grid-cols-2">
              {[
                { icon: HeartHandshake, title: 'શ્રદ્ધાંજલિ કાર્ડ', text: 'સ્વજનની স্মૃતિમાં ગુજરાતી ડિઝાઇન, ફોટો, વ્યક્તિગત વિગતો અને સ્મૃતિ સંદેશ સાથે કાર્ડ બનાવો.' },
                { icon: Sparkles, title: 'બેસણાં કાર્ડ', text: 'બેસણું અથવા પ્રાર્થના સભાની તારીખ, સમય, સ્થળ અને પરિવારજનોની માહિતી દર્શાવતી પત્રિકા બનાવો.' },
                { icon: CheckCircle2, title: 'વિવિધ ડિઝાઇન', text: 'શ્રદ્ધાંજલિ, બેસણાં અને અન્ય ઉપલબ્ધ શ્રેણીઓમાં વિવિધ ડિઝાઇન પસંદ કરી લખાણ અને ફોટો સુધારો.' },
                { icon: Download, title: 'સરળ ડાઉનલોડ', text: 'પૂર્વદર્શન પછી સંપાદકમાંથી PNG, JPG અથવા PDF ફોર્મેટ ડાઉનલોડ કરો.' },
              ].map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-2xl border border-brand-sand bg-white p-6 shadow-soft">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-saffronLight text-brand-saffron"><Icon className="h-5 w-5" /></div>
                  <h3 className="font-serifGujarati text-xl font-bold text-brand-maroon">{title}</h3>
                  <p className="mt-3 font-gujarati leading-7 text-brand-charcoal/75">{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-brand-maroon p-6 text-white sm:p-8">
              <h2 className="font-serifGujarati text-3xl font-bold">અડોણી કાયા શા માટે?</h2>
              <ul className="mt-6 grid gap-4 font-gujarati sm:grid-cols-2">
                {['મફત ઉપયોગ', 'Login અથવા accountની જરૂર નહીં', 'ગુજરાતી ઇન્ટરફેસ', 'મોબાઇલ અને ડેસ્કટોપ', 'સરળ customization', 'વિવિધ કાર્ડ ડિઝાઇન', 'સરળ image download'].map((item) => (
                  <li key={item} className="flex items-start gap-2 leading-7"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-gold" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-brand-sand bg-white p-6 sm:p-8">
              <h2 className="font-serifGujarati text-3xl font-bold text-brand-maroon">અમારી પ્રતિબદ્ધતા</h2>
              <p className="mt-5 font-gujarati leading-8 text-brand-charcoal/80" lang="gu">
                અડોણી કાયાનો હેતુ ગુજરાતી ભાષામાં ડિજિટલ ડિઝાઇનને વધુ સરળ અને દરેક વ્યક્તિ સુધી
                પહોંચાડવાનો છે. અમે પ્લેટફોર્મને વધુ ઉપયોગી બનાવવા માટે સતત સુધારા અને નવી સુવિધાઓ ઉમેરવાનો પ્રયાસ કરીએ છીએ.
              </p>
              <p className="mt-4 font-gujarati leading-8 text-brand-charcoal/80" lang="gu">
                આ સેવામાં સરળ અનુભવ, આદરપૂર્ણ स्मृति ડિઝાઇન, ગુજરાતી ભાષાની ઉપલબ્ધતા અને
                વપરાશકર્તાની માહિતી પ્રત્યે જવાબદાર અભિગમનો પ્રયાસ રહે છે.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-brand-sand bg-white p-6 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-goldLight text-brand-goldDark"><ShieldCheck className="h-6 w-6" /></div>
              <div>
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-saffron">ગોપનીયતા અને વપરાશકર્તાની માહિતી</p>
                <h2 className="font-serifGujarati text-3xl font-bold text-brand-maroon">માહિતી બ્રાઉઝરમાં કેવી રીતે વપરાય છે?</h2>
                <p className="mt-5 font-gujarati leading-8 text-brand-charcoal/80" lang="gu">કાર્ડ બનાવતી વખતે દાખલ કરેલી માહિતી અને ફોટા તમારા બ્રાઉઝરમાં પ્રક્રિયા કરવામાં આવે છે. આ માહિતી ADONI KAYAના પોતાના સર્વર પર કાર્ડ બનાવવા માટે સંગ્રહિત કરવામાં આવતી નથી.</p>
                <p className="mt-3 font-gujarati leading-8 text-brand-charcoal/80" lang="gu">કાર્ય ફરી શરૂ કરવા માટે દાખલ કરેલી વિગતો અને ક્રોપ કરેલો ફોટા બ્રાઉઝરના localStorage ડ્રાફ્ટમાં સાચવાઈ શકે છે. નવી કાર્ડની શરૂઆત આ ડ્રાફ્ટ બદલી શકે છે; બ્રાઉઝરના સેટિંગમાં આ સાઇટનો સંગ્રહ દૂર કરી શકો છો.</p>
                <p className="mt-3 font-gujarati leading-8 text-brand-charcoal/80" lang="gu">વર્તમાન GitHub Pages deployમાં Google Apps Script analytics endpoint ગોઠવેલું નથી. ગુજરાતી ફોન્ટ Google Fontsમાંથી લોડ થાય છે અને સાઇટ GitHub Pages પર હોસ્ટ થયેલી છે.</p>
                <Link href="/privacy-policy/" className="mt-5 inline-flex items-center gap-2 font-bold text-brand-saffron underline underline-offset-4">સંપૂર્ણ ગોપનીયતા નીતિ વાંચો <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-brand-gold/30 bg-brand-goldLight/60 p-6 text-center sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-goldDark">Developed &amp; Managed by the ADONI KAYA Team</p>
            <h2 className="mt-3 font-serifGujarati text-2xl font-bold text-brand-maroon">અડોણી કાયા ટીમ</h2>
            <p className="mt-3 font-gujarati text-brand-charcoal/75">ગુજરાતી ડિજિટલ ડિઝાઇનને સરળ અને સૌ માટે સુલભ બનાવવાના હેતુથી.</p>
            <p className="mt-3 font-gujarati text-brand-charcoal/75">સ્થાપક અને ટીમનો સંપર્ક કરવા:</p>
            <a href="mailto:adonikaya@gmail.com" className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg px-3 font-medium text-brand-maroon underline underline-offset-4 hover:text-brand-saffron">
              adonikaya@gmail.com
            </a>
          </section>

          <section>
            <div className="mb-8 text-center"><p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-saffron">સામાન્ય પ્રશ્નો</p><h2 className="font-serifGujarati text-3xl font-bold text-brand-maroon">Frequently Asked Questions</h2></div>
            <div className="mx-auto max-w-4xl space-y-3">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group rounded-xl border border-brand-sand bg-white px-5 py-1">
                  <summary className="cursor-pointer list-none py-4 font-gujarati font-bold text-brand-charcoal"><span className="flex items-center justify-between gap-4">{question}<span className="text-brand-saffron transition group-open:rotate-45">+</span></span></summary>
                  <p className="pb-5 font-gujarati leading-8 text-brand-charcoal/75">{answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
