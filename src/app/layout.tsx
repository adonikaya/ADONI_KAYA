import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'અડોણી કાયા (ADONI KAYA) — ગુજરાતી ડિઝાઇન હવે સૌ માટે સરળ!',
  description:
    'ગુજરાતી શ્રદ્ધાંજલિ, બેસણું અને પુણ્યતિથિ કાર્ડ બનાવવાનું ભારતનું પ્રથમ સ્માર્ટ પ્લેટફોર્મ. રબારી શૈલી ભરતકામ, ઓટોમેટિક વાર્ષિક કેલ્ક્યુલેટર અને હાઈ-ડેફિનેશન ડાઉનલોડ.',
  keywords: [
    'અડોણી કાયા',
    'ADONI KAYA',
    'શ્રદ્ધાંજલિ કાર્ડ',
    'બેસણું પત્રિકા',
    'ગુજરાતી ડિઝાઇન',
    'પુણ્યતિથિ કાર્ડ',
    'રબારી શૈલી કાર્ડ',
    'Shradhanjali Card Gujarati',
    'Besna Patrika Maker',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="gu">
      <body className="min-h-screen flex flex-col bg-brand-cream text-brand-charcoal selection:bg-brand-saffron selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
