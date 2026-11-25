import React from 'react';
import Link from 'next/link';
import { Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-white/90 border-t-4 border-brand-saffron">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-saffron to-brand-gold flex items-center justify-center text-white font-serifGujarati text-2xl font-bold shadow-sm">
                અ
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white font-serifGujarati">
                  અડોણી કાયા
                </span>
                <span className="text-xs uppercase text-brand-gold ml-2 font-mono">ADONI KAYA</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 font-gujarati leading-relaxed max-w-md">
              ગુજરાતી સંસ્કૃતિ અને પરંપરાને અનુરૂપ શ્રદ્ધાંજલિ, બેસણું અને પુણ્યતિથિ કાર્ડ બનાવવા માટેની ઓનલાઇન સેવા.
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-gold bg-brand-charcoal/80 border border-brand-gold/30 px-3 py-1.5 rounded-full w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>૧૦૦% મફત • કોઈપણ લૉગિન કે રજીસ્ટ્રેશન વિના</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
              ડિઝાઇન સેવાઓ
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/gallery?type=shradhanjali" className="hover:text-brand-saffron transition-colors">
                  શ્રદ્ધાંજલિ કાર્ડ બનાવો
                </Link>
              </li>
              <li>
                <Link href="/gallery?type=besna" className="hover:text-brand-saffron transition-colors">
                  બેસણું પત્રિકા બનાવો
                </Link>
              </li>
              <li>
                <Link href="/gallery?category=rabari-style" className="hover:text-brand-saffron transition-colors">
                  રબારી શૈલી ભરતકામ કાર્ડ
                </Link>
              </li>
              <li>
                <Link href="/gallery?category=punyatithi" className="hover:text-brand-saffron transition-colors">
                  વાર્ષિક પુણ્યતિથિ સ્મૃતિ
                </Link>
              </li>
              <li>
                <Link href="/quotes" className="hover:text-brand-saffron transition-colors">
                  ૨૦૦+ ગુજરાતી શોક સંદેશ લાઈબ્રેરી
                </Link>
              </li>
              <li>
                <Link href="/shradhanjali-maker/" className="hover:text-brand-saffron transition-colors">
                  શ્રદ્ધાંજલિ કાર્ડ બનાવવાની રીત
                </Link>
              </li>
              <li>
                <Link href="/besna-card-maker/" className="hover:text-brand-saffron transition-colors">
                  બેસણું કાર્ડ બનાવવાની રીત
                </Link>
              </li>
            </ul>
          </div>

          {/* Cultural note & features */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-gray-700 pb-2">
              વિશેષતાઓ
            </h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>✓ ઓટોમેટિક માસિક / વાર્ષિક ગણતરી</li>
              <li>✓ સ્માર્ટ પરિવાર નામ લેઆઉટ એન્જિન</li>
              <li>✓ 1080x1350 સોશિયલ મીડિયા સાઈઝ</li>
              <li>✓ A4 હાઈ-ડેફિનેશન પ્રિન્ટ પીડીએફ</li>
              <li>✓ વોટરમાર્ક વગર સીધું ડાઉનલોડ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} અડોણી કાયા (ADONI KAYA). સર્વાધિકાર સુરક્ષિત.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/about/" className="hover:text-white">અમારા વિશે</Link>
            <Link href="/privacy-policy/" className="hover:text-white">ગોપનીયતા નીતિ</Link>
            <p className="flex items-center gap-1">
              ગુજરાતી ગૌરવ સાથે નિર્મિત <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

