'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Download,
  FileText,
  Image as ImageIcon,
  RotateCcw,
  Undo2,
  Redo2,
  Smartphone,
  Layers,
  ZoomIn,
  ZoomOut,
  Sparkles,
  Check,
  Eye,
} from 'lucide-react';
import {
  CardTemplate,
  DeceasedDetails,
  FamilyDetails,
  AspectRatioFormat,
  FORMAT_DIMENSIONS,
} from '../../lib/types';
import { renderCardToCanvas } from '../../lib/canvasRenderer';
import { exportCard, ExportFormat } from '../../lib/exportEngine';

interface LiveCanvasEditorProps {
  template: CardTemplate;
  deceased: DeceasedDetails;
  quoteText: string;
  family: FamilyDetails;
  cardType: 'shradhanjali' | 'besna';
  onUpdateDeceased?: (updated: Partial<DeceasedDetails>) => void;
  onUpdateQuote?: (quote: string) => void;
  onBackToSteps?: (step: number) => void;
}

export const LiveCanvasEditor: React.FC<LiveCanvasEditorProps> = ({
  template,
  deceased,
  quoteText,
  family,
  cardType,
  onUpdateDeceased,
  onUpdateQuote,
  onBackToSteps,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<AspectRatioFormat>('4:5');
  const [isRendering, setIsRendering] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  // Editor manual adjustments
  const [customHeading, setCustomHeading] = useState(deceased.heading);
  const [customName, setCustomName] = useState(deceased.name);
  const [customQuote, setCustomQuote] = useState(quoteText);
  const [nameFontSizeDelta, setNameFontSizeDelta] = useState(0);

  // Re-render canvas whenever details or format changes
  const redrawCanvas = async () => {
    if (!canvasRef.current) return;
    setIsRendering(true);

    try {
      const activeDeceased: DeceasedDetails = {
        ...deceased,
        heading: customHeading,
        name: customName,
      };

      // Create modified template with user font size adjustments if any
      const modifiedTemplate: CardTemplate = {
        ...template,
        placeholders: {
          ...template.placeholders,
          deceasedName: {
            ...template.placeholders.deceasedName,
            fontSize: template.placeholders.deceasedName.fontSize + nameFontSizeDelta,
          },
        },
      };

      await renderCardToCanvas(
        canvasRef.current,
        modifiedTemplate,
        activeDeceased,
        customQuote,
        family,
        cardType,
        {
          selectedFormat,
          scale: 1, // Preview scale
        }
      );
    } catch (err) {
      console.error('Error drawing canvas', err);
    } finally {
      setIsRendering(false);
    }
  };

  useEffect(() => {
    redrawCanvas();
  }, [
    template,
    deceased,
    quoteText,
    family,
    cardType,
    selectedFormat,
    customHeading,
    customName,
    customQuote,
    nameFontSizeDelta,
  ]);

  // Handle High-Res Download
  const handleDownload = async (format: ExportFormat) => {
    setIsDownloading(true);
    setDownloadSuccessMessage(null);

    try {
      const activeDeceased: DeceasedDetails = {
        ...deceased,
        heading: customHeading,
        name: customName,
      };

      const modifiedTemplate: CardTemplate = {
        ...template,
        placeholders: {
          ...template.placeholders,
          deceasedName: {
            ...template.placeholders.deceasedName,
            fontSize: template.placeholders.deceasedName.fontSize + nameFontSizeDelta,
          },
        },
      };

      await exportCard({
        template: modifiedTemplate,
        deceased: activeDeceased,
        quoteText: customQuote,
        family,
        cardType,
        aspectFormat: selectedFormat,
        exportFormat: format,
      });

      const formatLabel = format.toUpperCase();
      setDownloadSuccessMessage(`તમારું ${formatLabel} કાર્ડ સફળતાપૂર્વક હાઈ-રિઝોલ્યુશનમાં ડાઉનલોડ થઈ ગયું છે!`);
      setTimeout(() => setDownloadSuccessMessage(null), 5000);
    } catch (err) {
      console.error('Download failed', err);
    } finally {
      setIsDownloading(false);
    }
  };

  const currentDims = FORMAT_DIMENSIONS[selectedFormat];

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Top Controls Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-brand-sand shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-brand-maroon font-serifGujarati flex items-center gap-2">
            <Eye className="w-5 h-5 text-brand-saffron" />
            <span>લાઈવ પૂર્વદર્શન અને અંતિમ એડિટર</span>
          </h2>
          <p className="text-xs text-gray-500 font-gujarati mt-0.5">
            જેવું અહીં દેખાશે તેવું જ હાઈ-ડેફિનેશનમાં ડાઉનલોડ થશે.
          </p>
        </div>

        {/* Aspect Ratio / Format Selector */}
        <div className="flex items-center gap-1.5 bg-gray-100 p-1.5 rounded-xl border border-gray-200">
          {(['4:5', '9:16', '2:3', 'A4'] as AspectRatioFormat[]).map((fmt) => (
            <button
              key={fmt}
              onClick={() => setSelectedFormat(fmt)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedFormat === fmt
                  ? 'bg-white text-brand-maroon shadow-xs'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {fmt === '4:5' && '૪:૫ સોશિયલ'}
              {fmt === '9:16' && '૯:૧૬ સ્ટોરી'}
              {fmt === '2:3' && '૨:૩ પોર્ટ્રેટ'}
              {fmt === 'A4' && 'A4 પ્રિન્ટ'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Studio Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive Canvas Preview (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full bg-stone-900 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center relative overflow-hidden border-4 border-stone-800">
            {/* Dimensions Pill Indicator */}
            <div className="mb-3 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-[11px] font-mono flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5 text-brand-gold" />
              <span>
                {currentDims.name} • {currentDims.gujaratiName}
              </span>
            </div>

            {/* The Actual HTML5 Rendering Canvas */}
            <div className="w-full max-w-[460px] aspect-[4/5] flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="max-h-[620px] max-w-full rounded-lg shadow-xl object-contain border border-stone-700 bg-white"
                style={{
                  aspectRatio: `${currentDims.width} / ${currentDims.height}`,
                }}
              />
            </div>

            {/* Canvas Status Indicator */}
            {isRendering && (
              <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white text-xs font-gujarati">
                <Sparkles className="w-4 h-4 animate-spin mr-2 text-brand-gold" />
                <span>કાર્ડ રી-રેન્ડર થઈ રહ્યું છે...</span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Quick Editing Controls & Download Actions (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Download Action Card */}
          <div className="bg-gradient-to-br from-brand-maroon via-brand-maroonDark to-stone-900 text-white rounded-2xl p-6 shadow-lg space-y-4">
            <div>
              <span className="text-[11px] bg-brand-gold/20 text-brand-gold px-2.5 py-0.5 rounded-full border border-brand-gold/30 font-semibold uppercase tracking-wider">
                હાઈ-રિઝોલ્યુશન ડાઉનલોડ
              </span>
              <h3 className="text-lg font-bold font-serifGujarati text-white mt-1.5">
                વોટરમાર્ક વગર મફત ડાઉનલોડ કરો
              </h3>
              <p className="text-xs text-gray-300 font-gujarati mt-0.5">
                કોઈપણ રજીસ્ટ્રેશન કે પેમેન્ટ વિના સીધું ડાઉનલોડ ઉપલબ્ધ છે.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <button
                type="button"
                disabled={isDownloading}
                onClick={() => handleDownload('png')}
                className="py-3 px-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-center transition-all hover:scale-105 active:scale-95 disabled:opacity-50 flex flex-col items-center justify-center gap-1.5"
              >
                <ImageIcon className="w-5 h-5 text-emerald-400" />
                <span className="text-xs font-bold text-white">PNG ઈમેજ</span>
                <span className="text-[10px] text-gray-300">ક્રિસ્પ ક્વોલિટી</span>
              </button>

              <button
                type="button"
                disabled={isDownloading}
                onClick={() => handleDownload('jpg')}
                className="py-3 px-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-center transition-all hover:scale-105 active:scale-95 disabled:opacity-50 flex flex-col items-center justify-center gap-1.5"
              >
                <Download className="w-5 h-5 text-brand-gold" />
                <span className="text-xs font-bold text-white">JPG ઈમેજ</span>
                <span className="text-[10px] text-gray-300">વોટ્સએપ શેર</span>
              </button>

              <button
                type="button"
                disabled={isDownloading}
                onClick={() => handleDownload('pdf')}
                className="py-3 px-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-center transition-all hover:scale-105 active:scale-95 disabled:opacity-50 flex flex-col items-center justify-center gap-1.5"
              >
                <FileText className="w-5 h-5 text-rose-400" />
                <span className="text-xs font-bold text-white">PDF ફાઇલ</span>
                <span className="text-[10px] text-gray-300">પ્રિન્ટિંગ માટે</span>
              </button>
            </div>

            {/* Success Message */}
            {downloadSuccessMessage && (
              <div className="p-3 bg-emerald-950/80 border border-emerald-500 rounded-xl flex items-center gap-2 text-xs text-emerald-200">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{downloadSuccessMessage}</span>
              </div>
            )}
          </div>

          {/* Quick Fine-Tuning Controls */}
          <div className="bg-white rounded-2xl border border-brand-sand shadow-sm p-6 space-y-4">
            <h3 className="text-sm font-bold text-gray-900 font-serifGujarati flex items-center gap-1.5 border-b border-gray-100 pb-2">
              <Layers className="w-4 h-4 text-brand-saffron" />
              <span>ટેક્સ્ટ અને ફોન્ટ ફાઈન-ટ્યુનિંગ</span>
            </h3>

            {/* Heading quick edit */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 font-gujarati">
                મુખ્ય હેડિંગ:
              </label>
              <input
                type="text"
                value={customHeading}
                onChange={(e) => {
                  setCustomHeading(e.target.value);
                  onUpdateDeceased?.({ heading: e.target.value });
                }}
                className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati font-bold text-brand-maroon"
              />
            </div>

            {/* Name quick edit */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 font-gujarati">
                સ્વર્ગસ્થનું નામ:
              </label>
              <input
                type="text"
                value={customName}
                onChange={(e) => {
                  setCustomName(e.target.value);
                  onUpdateDeceased?.({ name: e.target.value });
                }}
                className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati font-bold text-gray-900"
              />
            </div>

            {/* Font Size slider */}
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1 font-gujarati">
                <span>નામ ફોન્ટ સાઇઝ:</span>
                <span className="font-mono font-bold">
                  {template.placeholders.deceasedName.fontSize + nameFontSizeDelta} px
                </span>
              </div>
              <input
                type="range"
                min={-12}
                max={16}
                value={nameFontSizeDelta}
                onChange={(e) => setNameFontSizeDelta(parseInt(e.target.value, 10))}
                className="w-full accent-brand-saffron"
              />
            </div>

            {/* Quote quick edit */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 font-gujarati">
                સ્મૃતિ સંદેશ:
              </label>
              <textarea
                rows={2}
                value={customQuote}
                onChange={(e) => {
                  setCustomQuote(e.target.value);
                  onUpdateQuote?.(e.target.value);
                }}
                className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
              />
            </div>

            {/* Back to Steps Navigation Shortcuts */}
            <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-2 text-xs">
              <span className="text-gray-400 self-center">સુધારો:</span>
              <button
                type="button"
                onClick={() => onBackToSteps?.(2)}
                className="px-2.5 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-gujarati"
              >
                વિગતો બદલો
              </button>
              <button
                type="button"
                onClick={() => onBackToSteps?.(3)}
                className="px-2.5 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-gujarati"
              >
                સંદેશ બદલો
              </button>
              <button
                type="button"
                onClick={() => onBackToSteps?.(4)}
                className="px-2.5 py-1 rounded bg-gray-100 hover:bg-gray-200 text-gray-700 font-gujarati"
              >
                પરિવાર બદલો
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
