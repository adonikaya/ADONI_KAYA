'use client';

import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Filter, Check, Eye, X, ChevronRight } from 'lucide-react';
import { CardTemplate, TemplateCategory } from '../../lib/types';
import { CARD_TEMPLATES } from '../../data/templates';

interface TemplateGalleryProps {
  initialType?: 'shradhanjali' | 'besna';
  initialCategory?: TemplateCategory;
  onSelectTemplate: (template: CardTemplate) => void;
  selectedTemplateId?: string;
}

const CATEGORY_TABS: { id: string; name: string }[] = [
  { id: 'all', name: 'બધા ટેમ્પલેટ્સ (૧૫૪)' },
  { id: 'shradhanjali', name: 'શ્રદ્ધાંજલિ' },
  { id: 'peaceful-floral', name: 'પુષ્પાંજલિ / ફૂલ-હાર' },
  { id: 'temple-sacred', name: 'અગરબત્તી & દિવો' },
  { id: 'royal-gold', name: 'શાહી ગોલ્ડ / પ્રીમિયમ' },
  { id: 'rabari-style', name: 'રબારી આભલા શૈલી' },
  { id: 'punyatithi', name: 'પુણ્યતિથિ સ્મરણ' },
  { id: 'besna', name: 'બેસણું / પ્રાર્થના સભા' },
  { id: 'shok-sabha', name: 'શોક સભા' },
  { id: 'tervi-dashkriya', name: 'તેરવી / દશક્રિયા' },
];

export const TemplateGallery: React.FC<TemplateGalleryProps> = ({
  initialType,
  initialCategory,
  onSelectTemplate,
  selectedTemplateId,
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    initialCategory || (initialType ? initialType : 'all')
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPopularOnly, setFilterPopularOnly] = useState(false);
  const [previewTemplate, setPreviewTemplate] = useState<CardTemplate | null>(null);

  const filteredTemplates = useMemo(() => {
    return CARD_TEMPLATES.filter((tpl) => {
      // Category filter
      if (activeTab === 'shradhanjali') {
        if (
          tpl.category !== 'shradhanjali' &&
          tpl.category !== 'peaceful-floral' &&
          tpl.category !== 'royal-gold' &&
          tpl.category !== 'temple-sacred' &&
          !tpl.id.includes('shradh')
        )
          return false;
      } else if (activeTab === 'peaceful-floral') {
        if (tpl.category !== 'peaceful-floral') return false;
      } else if (activeTab === 'temple-sacred') {
        if (tpl.category !== 'temple-sacred') return false;
      } else if (activeTab === 'royal-gold') {
        if (tpl.category !== 'royal-gold') return false;
      } else if (activeTab === 'besna') {
        if (tpl.category !== 'besna') return false;
      } else if (activeTab === 'rabari-style') {
        if (!tpl.isRabariStyle && tpl.category !== 'rabari-style') return false;
      } else if (activeTab !== 'all' && tpl.category !== activeTab) {
        return false;
      }

      // Popular filter
      if (filterPopularOnly && !tpl.isPopular) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = tpl.name.toLowerCase().includes(query) || tpl.gujaratiName.includes(query);
        const matchesTags = tpl.tags.some((tag) => tag.toLowerCase().includes(query));
        if (!matchesName && !matchesTags) return false;
      }

      return true;
    });
  }, [activeTab, filterPopularOnly, searchQuery]);

  return (
    <div className="space-y-6">
      {/* Header and Search */}
      <div className="bg-white p-5 rounded-2xl border border-brand-sand shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-brand-maroon font-serifGujarati">
              ટેમ્પલેટ પસંદ કરો
            </h2>
            <p className="text-xs sm:text-sm text-brand-charcoal/70 font-gujarati">
              તમારી પસંદગીનું શ્રેષ્ઠ પવિત્ર ડિઝાઇન ટેમ્પલેટ પસંદ કરો (૧,૦૦૦+ ડિઝાઇન આર્કિટેક્ચર સપોર્ટ)
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="શોધો (ઉદા. રબારી, સોનેરી, મરૂન)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-saffron focus:border-transparent font-gujarati"
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
        </div>

        {/* Categories Pills */}
        <div className="relative">
          <div
            role="region"
            aria-label="ટેમ્પલેટ કેટેગરી ફિલ્ટર્સ"
            tabIndex={0}
            className="flex items-center gap-2 overflow-x-auto pb-2 pr-7 scrollbar-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-saffron"
          >
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-brand-saffron text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.name}
              </button>
            ))}

            <button
              onClick={() => setFilterPopularOnly(!filterPopularOnly)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-1 transition-all border ${
                filterPopularOnly
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>માત્ર લોકપ્રિય</span>
            </button>
          </div>
          <div className="absolute right-0 top-0 bottom-2 flex items-center bg-gradient-to-l from-white via-white/90 to-transparent pl-4 pointer-events-none text-gray-500">
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Grid of Templates */}
      {filteredTemplates.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
          <Filter className="w-10 h-10 text-gray-300 mx-auto mb-2" />
          <h3 className="text-base font-semibold text-gray-700 font-gujarati">કોઈ ટેમ્પલેટ મળ્યું નહીં</h3>
          <p className="text-xs text-gray-500 mt-1">કૃપા કરીને અલગ કીવર્ડ અથવા કેટેગરી પસંદ કરો</p>
          <button
            onClick={() => {
              setActiveTab('all');
              setSearchQuery('');
              setFilterPopularOnly(false);
            }}
            className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-brand-saffron text-white hover:bg-brand-saffronDark"
          >
            બધા ટેમ્પલેટ્સ જુઓ
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => {
            const isSelected = selectedTemplateId === template.id;

            return (
              <div
                key={template.id}
                className={`group bg-white rounded-2xl border-2 transition-all duration-300 overflow-hidden flex flex-col shadow-xs hover:shadow-card ${
                  isSelected
                    ? 'border-brand-saffron ring-4 ring-brand-saffronLight'
                    : 'border-brand-sand hover:border-brand-gold/60'
                }`}
              >
                {/* Visual Template Canvas Preview Card */}
                <div
                  className="relative aspect-[4/5] w-full p-4 flex flex-col justify-between items-center text-center overflow-hidden cursor-pointer"
                  style={{
                    background:
                      template.theme.bgType === 'gradient' || template.theme.bgType === 'procedural'
                        ? `linear-gradient(to bottom, ${template.theme.bgColor}, ${template.theme.secondaryColor})`
                        : template.theme.bgColor,
                  }}
                  onClick={() => onSelectTemplate(template)}
                >
                  {/* Decorative Borders Mock in Thumbnail */}
                  <div
                    className="absolute inset-2 border rounded-lg pointer-events-none"
                    style={{
                      borderColor: template.theme.accentColor,
                      borderStyle: template.theme.composition === 'double-frame'
                        ? 'double'
                        : template.theme.borderStyle === 'rabari-embroidery' ? 'dashed' : 'solid',
                      borderWidth: template.theme.composition === 'double-frame' ||
                        template.theme.borderStyle === 'rabari-embroidery' ? '3px' : '1.5px',
                    }}
                  />
                  {template.theme.composition === 'radial-halo' && (
                    <div
                      className="absolute top-[18%] left-1/2 -translate-x-1/2 w-32 h-32 rounded-full pointer-events-none"
                      style={{
                        background: `radial-gradient(circle, ${template.theme.accentColor}30, transparent 72%)`,
                      }}
                    />
                  )}
                  {template.theme.composition === 'side-vines' && (
                    <>
                      <div
                        className="absolute top-[18%] bottom-[18%] left-5 border-l opacity-40 pointer-events-none"
                        style={{ borderColor: template.theme.accentColor }}
                      />
                      <div
                        className="absolute top-[18%] bottom-[18%] right-5 border-r opacity-40 pointer-events-none"
                        style={{ borderColor: template.theme.accentColor }}
                      />
                    </>
                  )}
                  {template.theme.composition === 'lotus-medallion' && (
                    <div
                      className="absolute top-[17%] left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border pointer-events-none"
                      style={{ borderColor: template.theme.accentColor, backgroundColor: `${template.theme.accentColor}22` }}
                    />
                  )}

                  {/* Badges */}
                  <div className="w-full flex items-center justify-between z-10">
                    {template.isRabariStyle ? (
                      <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                        રબારી આભલા શૈલી
                      </span>
                    ) : template.isPopular ? (
                      <span className="bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                        લોકપ્રિય
                      </span>
                    ) : (
                      <span className="bg-black/40 text-white text-[10px] px-2 py-0.5 rounded-full backdrop-blur-xs">
                        {template.category}
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewTemplate(template);
                      }}
                      className="p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-700 shadow-sm transition-transform hover:scale-110"
                      title="ઝડપી પૂર્વદર્શન"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Thumbnail Mock Elements */}
                  <div className="my-auto flex flex-col items-center space-y-2 z-10 w-full px-4">
                    <div
                      className="text-xs font-bold font-serifGujarati tracking-wider"
                      style={{ color: template.placeholders.header.color }}
                    >
                      {template.category === 'besna' ? 'પ્રાર્થના સભા / બેસણું' : 'ભાવપૂર્ણ શ્રદ્ધાંજલિ'}
                    </div>

                    {/* Photo Frame Mock */}
                    <div
                      className="w-16 border-2 flex items-center justify-center shadow-md my-1"
                      style={{
                        aspectRatio: `1 / ${template.placeholders.photo.aspectRatio}`,
                        borderRadius:
                          template.placeholders.photo.shape === 'circle' ||
                          template.placeholders.photo.shape === 'oval' ||
                          template.placeholders.photo.shape === 'ornate'
                            ? '50%'
                            : template.placeholders.photo.shape === 'rounded-rect' ? '18%' : '0.25rem',
                        borderColor: template.placeholders.photo.borderColor,
                        backgroundColor: '#374151',
                      }}
                    >
                      <span className="text-[10px] text-white/80">ફોટો</span>
                    </div>

                    {/* Name mock */}
                    <div
                      className="text-sm font-bold font-serifGujarati truncate w-full"
                      style={{ color: template.placeholders.deceasedName.color }}
                    >
                      સ્વર્ગસ્થનું નામ
                    </div>

                    {/* Date mock line */}
                    <div className="h-1.5 w-24 bg-white/30 rounded-full my-0.5" />
                    <div className="h-1 w-32 bg-white/20 rounded-full" />
                  </div>

                  {/* Footer banner mock */}
                  <div
                    className="w-full py-1 text-[9px] font-bold rounded z-10 truncate"
                    style={{
                      backgroundColor: template.theme.accentColor,
                      color: template.placeholders.footerBlock.color,
                    }}
                  >
                    ॥ સમસ્ત પરિવાર ॥
                  </div>
                </div>

                {/* Info and Actions */}
                <div className="p-4 bg-white flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-bold text-gray-900 font-serifGujarati text-base">
                      {template.gujaratiName}
                    </h4>
                    <p className="text-xs text-gray-500 font-mono mt-0.5">{template.name}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {template.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] bg-brand-cream text-gray-600 px-1.5 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectTemplate(template)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                        isSelected
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-brand-saffron text-white hover:bg-brand-saffronDark shadow-sm'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>પસંદ કરેલ છે</span>
                        </>
                      ) : (
                        <span>ટેમ્પલેટ પસંદ કરો</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Quick Preview */}
      {previewTemplate && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setPreviewTemplate(null)}
              className="absolute right-4 top-4 p-1.5 rounded-full text-gray-400 hover:text-gray-600 bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-brand-maroon font-serifGujarati mb-1">
              {previewTemplate.gujaratiName}
            </h3>
            <p className="text-xs text-gray-500 mb-4">{previewTemplate.name}</p>

            <div
              className="aspect-[4/5] w-full rounded-xl p-6 flex flex-col justify-between items-center text-center shadow-inner relative"
              style={{
                background: previewTemplate.theme.bgType === 'gradient' ||
                  previewTemplate.theme.bgType === 'procedural'
                  ? `linear-gradient(to bottom, ${previewTemplate.theme.bgColor}, ${previewTemplate.theme.secondaryColor})`
                  : previewTemplate.theme.bgColor,
              }}
            >
              <div
                className="absolute inset-3 border-2 rounded-lg pointer-events-none"
                style={{ borderColor: previewTemplate.theme.accentColor }}
              />
              <div
                className="text-base font-bold font-serifGujarati mt-4 z-10"
                style={{ color: previewTemplate.placeholders.header.color }}
              >
                {previewTemplate.category === 'besna' ? 'પ્રાર્થના સભા / બેસણું' : 'ભાવપૂર્ણ શ્રદ્ધાંજલિ'}
              </div>
              <div
                className="w-24 border-4 flex items-center justify-center my-4 z-10"
                style={{
                  aspectRatio: `1 / ${previewTemplate.placeholders.photo.aspectRatio}`,
                  borderRadius:
                    previewTemplate.placeholders.photo.shape === 'circle' ||
                    previewTemplate.placeholders.photo.shape === 'oval' ||
                    previewTemplate.placeholders.photo.shape === 'ornate'
                      ? '50%'
                      : previewTemplate.placeholders.photo.shape === 'rounded-rect' ? '18%' : '0.25rem',
                  borderColor: previewTemplate.placeholders.photo.borderColor,
                  backgroundColor: '#4B5563',
                }}
              >
                <span className="text-xs text-white">ફોટોગ્રાફ</span>
              </div>
              <div
                className="text-xl font-bold font-serifGujarati z-10"
                style={{ color: previewTemplate.placeholders.deceasedName.color }}
              >
                સ્વ. રમણલાલ નારણદાસ પટેલ
              </div>
              <div
                className="w-full py-2 rounded text-xs font-bold mb-3 z-10"
                style={{
                  backgroundColor: previewTemplate.theme.accentColor,
                  color: previewTemplate.placeholders.footerBlock.color,
                }}
              >
                ॥ સમસ્ત પટેલ પરિવાર ॥
              </div>
            </div>

            <div className="mt-5 flex gap-3">
              <button
                onClick={() => setPreviewTemplate(null)}
                className="flex-1 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                બંધ કરો
              </button>
              <button
                onClick={() => {
                  onSelectTemplate(previewTemplate);
                  setPreviewTemplate(null);
                }}
                className="flex-1 py-2.5 rounded-xl bg-brand-saffron text-white text-sm font-bold hover:bg-brand-saffronDark shadow-sm"
              >
                આ ટેમ્પલેટ સાથે આગળ વધો
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

