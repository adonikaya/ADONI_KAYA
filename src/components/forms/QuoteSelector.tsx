'use client';

import React, { useState, useMemo } from 'react';
import { Search, Quote, Check, Edit3, X, SkipForward, ArrowRight } from 'lucide-react';
import { GUJARATI_QUOTES, QUOTE_CATEGORIES } from '../../data/quotes';

interface QuoteSelectorProps {
  selectedQuote: string;
  onSelectQuote: (quote: string, category: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export const QuoteSelector: React.FC<QuoteSelectorProps> = ({
  selectedQuote,
  onSelectQuote,
  onNext,
  onBack,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [customQuoteText, setCustomQuoteText] = useState(selectedQuote || '');
  const [isEditingCustom, setIsEditingCustom] = useState(false);

  const filteredQuotes = useMemo(() => {
    return GUJARATI_QUOTES.filter((q) => {
      if (activeCategory !== 'all' && q.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return q.text.includes(query) || q.categoryGujarati.includes(query);
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const handleSelect = (text: string, category: string) => {
    setCustomQuoteText(text);
    onSelectQuote(text, category);
  };

  const handleApplyCustom = () => {
    onSelectQuote(customQuoteText, 'custom');
    setIsEditingCustom(false);
  };

  const handleSkip = () => {
    onSelectQuote('', 'none');
    onNext();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Banner and Active Selection Box */}
      <div className="bg-white rounded-2xl border border-brand-sand shadow-sm p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-maroon font-serifGujarati flex items-center gap-2">
              <Quote className="w-5 h-5 text-brand-saffron" />
              <span>ગુજરાતી સ્મૃતિ સંદેશ / શ્રદ્ધાસુમન પસંદ કરો</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-gujarati mt-1">
              સંસ્કૃતિ અને લાગણીસભર ૨૦૦+ ગુણવત્તાસભર સંદેશાઓમાંથી શ્રેષ્ઠ સંદેશ પસંદ કરો અથવા પોતાનો સંદેશ લખો.
            </p>
          </div>

          <button
            type="button"
            onClick={handleSkip}
            className="text-xs text-gray-500 hover:text-gray-800 font-medium flex items-center gap-1 self-start sm:self-auto px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"
          >
            <span>સંદેશ ઉમેર્યા વિના આગળ વધો</span>
            <SkipForward className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Selected / Custom Quote Box */}
        <div className="p-4 bg-brand-cream/60 rounded-xl border border-brand-gold/60 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-brand-maroon font-gujarati uppercase tracking-wider">
              હાલમાં પસંદ કરેલ સંદેશ (Preview):
            </span>
            <button
              type="button"
              onClick={() => setIsEditingCustom(!isEditingCustom)}
              className="text-xs text-brand-saffron font-bold flex items-center gap-1 hover:underline font-gujarati"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditingCustom ? 'સંપાદન બંધ કરો' : 'સંદેશ બદલો / લખો'}</span>
            </button>
          </div>

          {isEditingCustom ? (
            <div className="space-y-2">
              <textarea
                rows={3}
                value={customQuoteText}
                onChange={(e) => setCustomQuoteText(e.target.value)}
                placeholder="અહીં આપનો મનપસંદ સંદેશ અથવા કવિતા લખો..."
                className="w-full p-3 text-sm bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditingCustom(false)}
                  className="px-3 py-1.5 text-xs text-gray-600 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  રદ કરો
                </button>
                <button
                  type="button"
                  onClick={handleApplyCustom}
                  className="px-4 py-1.5 text-xs font-bold bg-brand-saffron text-white rounded-lg hover:bg-brand-saffronDark shadow-sm"
                >
                  આ સંદેશ રાખો
                </button>
              </div>
            </div>
          ) : (
            <p className="text-sm sm:text-base font-serifGujarati italic text-gray-800 leading-relaxed">
              {customQuoteText ? `“${customQuoteText}”` : 'કોઈ સંદેશ પસંદ કરેલ નથી (ખાલી રહેશે)'}
            </p>
          )}
        </div>
      </div>

      {/* Categories & Search */}
      <div className="bg-white rounded-2xl border border-brand-sand shadow-sm p-6 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="સંદેશ શોધો (માતા, પિતા, આત્મા, શાંતિ)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <span className="text-xs text-gray-500 font-mono font-medium">
            કુલ {filteredQuotes.length} સંદેશાઓ ઉપલબ્ધ
          </span>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {QUOTE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-brand-maroon text-white font-bold shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Quotes List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[460px] overflow-y-auto pr-1">
          {filteredQuotes.map((q) => {
            const isCurrent = customQuoteText === q.text;

            return (
              <div
                key={q.id}
                onClick={() => handleSelect(q.text, q.category)}
                className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isCurrent
                    ? 'border-brand-saffron bg-brand-saffronLight/70 ring-2 ring-brand-saffron/20'
                    : 'border-gray-200 hover:border-brand-gold/70 hover:bg-brand-cream/30'
                }`}
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-brand-goldDark bg-brand-goldLight px-2 py-0.5 rounded-full border border-brand-gold/30">
                    {q.categoryGujarati}
                  </span>
                  <p className="text-sm font-serifGujarati text-gray-800 leading-relaxed pt-1">
                    “{q.text}”
                  </p>
                </div>

                <div className="flex items-center justify-end">
                  {isCurrent ? (
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                      <span>પસંદ કરેલ છે</span>
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-brand-saffron hover:underline">
                      આ સંદેશ પસંદ કરો →
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="bg-white p-4 rounded-2xl border border-brand-sand flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
        >
          પાછા જાઓ
        </button>

        <button
          type="button"
          onClick={onNext}
          className="px-8 py-2.5 rounded-xl bg-brand-saffron text-white text-sm font-bold hover:bg-brand-saffronDark shadow-md flex items-center gap-2"
        >
          <span>આગળ વધો (પરિવારજનોનાં નામ)</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
