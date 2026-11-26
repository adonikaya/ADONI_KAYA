'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, HeartHandshake, Palette, Home, Menu, X } from 'lucide-react';

interface NavbarProps {
  onSelectFlow?: (type: 'shradhanjali' | 'besna') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectFlow }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-sand shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-saffron via-brand-saffronDark to-brand-maroon flex items-center justify-center text-white shadow-md shadow-brand-saffron/20 group-hover:scale-105 transition-transform">
              <span className="font-serifGujarati text-2xl font-bold">અ</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-tight text-brand-maroon font-serifGujarati">
                  અડોણી કાયા
                </span>
                <span className="text-xs uppercase tracking-widest text-brand-goldDark font-semibold bg-brand-goldLight px-2 py-0.5 rounded-full border border-brand-gold/30">
                  ADONI KAYA
                </span>
              </div>
              <p className="text-xs text-brand-charcoal/70 font-gujarati font-medium">
                ગુજરાતી ડિઝાઇન હવે સૌ માટે સરળ!
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-2">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg text-sm font-medium text-brand-charcoal/80 hover:text-brand-saffron hover:bg-brand-saffronLight transition-colors flex items-center gap-1.5"
            >
              <Home className="w-4 h-4" />
              <span>મુખપૃષ્ઠ</span>
            </Link>

            <Link
              href="/gallery?type=shradhanjali"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-brand-maroon bg-brand-saffronLight hover:bg-brand-saffron/20 transition-all flex items-center gap-1.5 border border-brand-saffron/20"
            >
              <Sparkles className="w-4 h-4 text-brand-saffron" />
              <span>શ્રદ્ધાંજલિ બનાવો</span>
            </Link>

            <Link
              href="/gallery?type=besna"
              className="px-4 py-2 rounded-lg text-sm font-semibold text-brand-charcoal bg-brand-sand/50 hover:bg-brand-sand transition-all flex items-center gap-1.5 border border-brand-gold/30"
            >
              <HeartHandshake className="w-4 h-4 text-brand-goldDark" />
              <span>બેસણું બનાવો</span>
            </Link>

            <Link
              href="/gallery?category=rabari-style"
              className="px-3 py-2 rounded-lg text-sm font-medium text-brand-charcoal/80 hover:text-brand-saffron hover:bg-brand-saffronLight transition-colors flex items-center gap-1.5"
            >
              <Palette className="w-4 h-4 text-amber-600" />
              <span>રબારી કલેક્શન</span>
            </Link>

            <Link
              href="/about/"
              className="px-3 py-2 rounded-lg text-sm font-medium text-brand-charcoal/80 hover:text-brand-saffron hover:bg-brand-saffronLight transition-colors"
            >
              અમારા વિશે
            </Link>

          </nav>

          {/* Mobile menu button */}
          <div className="xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-brand-charcoal hover:bg-brand-sand/50"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-brand-sand bg-white px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-base font-medium text-brand-charcoal hover:bg-brand-saffronLight"
          >
            <Home className="w-5 h-5 text-brand-saffron" />
            <span>મુખપૃષ્ઠ</span>
          </Link>
          <Link
            href="/gallery?type=shradhanjali"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-base font-bold text-white bg-brand-saffron shadow-sm"
          >
            <Sparkles className="w-5 h-5" />
            <span>શ્રદ્ધાંજલિ બનાવો</span>
          </Link>
          <Link
            href="/gallery?type=besna"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-base font-bold text-brand-charcoal bg-brand-goldLight border border-brand-gold/40"
          >
            <HeartHandshake className="w-5 h-5 text-brand-goldDark" />
            <span>બેસણું બનાવો</span>
          </Link>
          <Link
            href="/gallery?category=rabari-style"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-base font-medium text-brand-charcoal hover:bg-brand-saffronLight"
          >
            <Palette className="w-5 h-5 text-amber-600" />
            <span>રબારી શૈલી કલેક્શન</span>
          </Link>
          <Link
            href="/about/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-base font-medium text-brand-charcoal hover:bg-brand-saffronLight"
          >
            <span>અમારા વિશે</span>
          </Link>
        </div>
      )}
    </header>
  );
};

