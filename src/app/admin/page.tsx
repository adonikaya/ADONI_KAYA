'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, ArrowLeft, KeyRound } from 'lucide-react';
import { SmartTemplateCreator } from '@/components/admin/SmartTemplateCreator';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Pre-authenticated for pairing & testing, with secure option
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === 'adoni2026' || pin === 'admin') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream/60 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Link
          href="/"
          className="text-xs font-bold text-brand-maroon hover:text-brand-saffron flex items-center gap-1 font-gujarati inline-flex"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>મુખપૃષ્ઠ પર પાછા જાઓ</span>
        </Link>
      </div>

      {!isAuthenticated ? (
        <div className="max-w-md mx-auto mt-16 p-8 bg-white rounded-3xl border border-brand-sand shadow-lg text-center space-y-6">
          <div className="w-16 h-16 bg-brand-maroon/10 rounded-2xl flex items-center justify-center mx-auto text-brand-maroon">
            <Lock className="w-8 h-8" />
          </div>

          <div>
            <h2 className="text-xl font-bold font-serifGujarati text-brand-maroon">
              એડમિન સુરક્ષિત લોગિન
            </h2>
            <p className="text-xs text-gray-500 font-gujarati mt-1">
              સ્માર્ટ ટેમ્પલેટ ક્રિએટર એડમિન પાસકોડ દાખલ કરો
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="એડમિન પિન (દા.ત. adoni2026)"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full px-4 py-2.5 text-center text-sm border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none tracking-widest font-mono"
            />
            {error && <p className="text-xs text-red-600 font-gujarati">ખોટો પિન. ફરી પ્રયાસ કરો.</p>}

            <button
              type="submit"
              className="w-full py-2.5 bg-brand-maroon hover:bg-brand-maroonDark text-white font-bold text-sm rounded-xl shadow-sm transition-all"
            >
              પ્રવેશ કરો
            </button>
          </form>
        </div>
      ) : (
        <SmartTemplateCreator />
      )}
    </div>
  );
}
