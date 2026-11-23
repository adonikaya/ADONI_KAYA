'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Quote, Copy, Check, ArrowLeft, Sparkles } from 'lucide-react';
import { GUJARATI_QUOTES, QUOTE_CATEGORIES } from '@/data/quotes';

export default function QuotesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredQuotes = useMemo(() => {
    return GUJARATI_QUOTES.filter((q) => {
      if (activeCategory !== 'all' && q.category !== activeCategory) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return q.text.includes(query) || q.categoryGujarati.includes(query);
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <Link
            href="/"
            className="text-xs font-bold text-brand-maroon hover:text-brand-saffron flex items-center gap-1 font-gujarati mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>મુખપૃષ્ઠ પર પાછા જાઓ</span>
          </Link>
          <h1 className="text-3xl font-black text-brand-maroon font-serifGujarati flex items-center gap-2">
            <Quote className="w-7 h-7 text-brand-saffron" />
            <span>૨૦૦+ ગુજરાતી શોક અને સ્મૃતિ સંદેશ લાઈબ્રેરી</span>
          </h1>
          <p className="text-sm text-gray-600 font-gujarati mt-1">
            માતા, પિતા, દાદા, દાદી, ભાઈ, બહેન અને વડીલો માટે સંસ્કૃતિસભર મૂળ ગુજરાતી સંદેશાઓ.
          </p>
        </div>

        <Link
          href="/?type=shradhanjali"
          className="px-5 py-2.5 rounded-xl bg-brand-saffron text-white text-xs font-bold hover:bg-brand-saffronDark shadow-sm flex items-center gap-1.5 self-start sm:self-auto"
        >
          <Sparkles className="w-4 h-4 text-brand-gold" />
          <span>કાર્ડમાં ઉપયોગ કરો</span>
        </Link>
      </div>

      {/* Search and Category Tabs */}
      <div className="bg-white p-6 rounded-2xl border border-brand-sand shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="સંદેશ શોધો (માતા, પિતા, આત્મા, પુણ્યતિથિ)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
            />
          </div>

          <span className="text-xs text-gray-500 font-mono">
            કુલ {filteredQuotes.length} સંદેશાઓ દર્શાવેલ છે
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {QUOTE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-maroon text-white font-bold shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Quotes Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuotes.map((q) => {
          const isCopied = copiedId === q.id;
          return (
            <div
              key={q.id}
              className="bg-white rounded-2xl border border-brand-sand p-5 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-card transition-all"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-brand-goldDark bg-brand-goldLight px-2 py-0.5 rounded-full border border-brand-gold/30">
                  {q.categoryGujarati}
                </span>
                <p className="text-sm font-serifGujarati text-gray-800 leading-relaxed pt-1">
                  “{q.text}”
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={() => copyToClipboard(q.id, q.text)}
                  className="text-gray-600 hover:text-brand-saffron flex items-center gap-1 font-gujarati"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-bold">કોપી થઈ ગયું!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>ટેક્સ્ટ કોપી કરો</span>
                    </>
                  )}
                </button>

                <Link
                  href={`/?type=shradhanjali&quote=${encodeURIComponent(q.text)}`}
                  className="font-bold text-brand-saffron hover:underline font-gujarati"
                >
                  કાર્ડ બનાવો →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

