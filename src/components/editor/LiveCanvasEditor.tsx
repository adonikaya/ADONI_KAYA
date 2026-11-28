'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Download,
  FileText,
  Image as ImageIcon,
  Smartphone,
  Layers,
  Sparkles,
  Check,
  Eye,
  ChevronDown,
  X,
  Instagram,
  HeartHandshake,
} from 'lucide-react';
import {
  CardTemplate,
  DeceasedDetails,
  FamilyDetails,
  AspectRatioFormat,
  FORMAT_DIMENSIONS,
  PhotoFrameShape,
} from '../../lib/types';
import {
  calculateEffectiveFontSizes,
  FontSizeAdjustments,
  getPhotoFrameAspectRatio,
  renderCardToCanvas,
} from '../../lib/canvasRenderer';
import { exportCard, ExportFormat } from '../../lib/exportEngine';
import { trackEvent } from '../../lib/analytics';

type EditorPhotoFrameShape = Exclude<PhotoFrameShape, 'ornate'>;

function getInitialPhotoFrameShape(shape: PhotoFrameShape): EditorPhotoFrameShape {
  return shape === 'ornate' ? 'oval' : shape;
}

interface LiveCanvasEditorProps {
  template: CardTemplate;
  deceased: DeceasedDetails;
  quoteText: string;
  family: FamilyDetails;
  cardType: 'shradhanjali' | 'besna';
  currentStep: number;
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
  currentStep,
  onUpdateDeceased,
  onUpdateQuote,
  onBackToSteps,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<AspectRatioFormat>('4:5');
  const [isRendering, setIsRendering] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);
  const [downloadErrorMessage, setDownloadErrorMessage] = useState<string | null>(null);
  const [showInstagramModal, setShowInstagramModal] = useState(false);

  // Default Vertical Spacing: 28px
  const [verticalSpacing, setVerticalSpacing] = useState(28);
  const [diyaVerticalOffset, setDiyaVerticalOffset] = useState(deceased.diyaVerticalOffset ?? 0);
  const [diyaHorizontalOffset, setDiyaHorizontalOffset] = useState(deceased.diyaHorizontalOffset ?? 0);
  const [diyaScale, setDiyaScale] = useState(deceased.diyaScale ?? 100);
  const [showBranding, setShowBranding] = useState(true);

  // Editor manual adjustments
  const [customHeading, setCustomHeading] = useState(deceased.heading || '');
  const [customName, setCustomName] = useState(deceased.name || '');
  const [customQuote, setCustomQuote] = useState(quoteText || '');

  // Default font size deltas (starting at 0 for template defaults or adjustments)
  const [nameFontSizeDelta, setNameFontSizeDelta] = useState(0);
  const [headingFontSizeDelta, setHeadingFontSizeDelta] = useState(0);
  const [dateFontSizeDelta, setDateFontSizeDelta] = useState(0);
  const [tithiFontSizeDelta, setTithiFontSizeDelta] = useState(0);
  const [quoteFontSizeDelta, setQuoteFontSizeDelta] = useState(0);
  const [familyFontSizeDelta, setFamilyFontSizeDelta] = useState(0);
  const [footerFontSizeDelta, setFooterFontSizeDelta] = useState(0);

  const [photoFrameShape, setPhotoFrameShape] = useState<EditorPhotoFrameShape>(() =>
    getInitialPhotoFrameShape(template.placeholders.photo.shape)
  );

  const fontSizeAdjustments: FontSizeAdjustments = {
    heading: headingFontSizeDelta,
    name: nameFontSizeDelta,
    dates: dateFontSizeDelta,
    tithi: tithiFontSizeDelta,
    quote: quoteFontSizeDelta,
    family: familyFontSizeDelta,
    footer: footerFontSizeDelta,
  };

  const modifiedTemplate: CardTemplate = {
    ...template,
    placeholders: {
      ...template.placeholders,
      photo: {
        ...template.placeholders.photo,
        shape: photoFrameShape,
        aspectRatio: getPhotoFrameAspectRatio(
          photoFrameShape,
          template.placeholders.photo.aspectRatio
        ),
      },
    },
  };

  const effectiveFontSizes = calculateEffectiveFontSizes(
    modifiedTemplate,
    family,
    fontSizeAdjustments
  );

  // Sync state if props change
  useEffect(() => {
    setCustomHeading(deceased.heading || '');
  }, [deceased.heading]);

  useEffect(() => {
    setCustomName(deceased.name || '');
  }, [deceased.name]);

  useEffect(() => {
    setCustomQuote(quoteText || '');
  }, [quoteText]);

  useEffect(() => {
    setDiyaVerticalOffset(deceased.diyaVerticalOffset ?? 0);
  }, [deceased.diyaVerticalOffset]);

  useEffect(() => {
    setDiyaHorizontalOffset(deceased.diyaHorizontalOffset ?? 0);
  }, [deceased.diyaHorizontalOffset]);

  useEffect(() => {
    setDiyaScale(deceased.diyaScale ?? 100);
  }, [deceased.diyaScale]);

  // Re-render canvas whenever details or format changes
  const redrawCanvas = async () => {
    if (!canvasRef.current) return;
    setIsRendering(true);

    try {
      const activeDeceased: DeceasedDetails = {
        ...deceased,
        heading: customHeading,
        name: customName,
        diyaVerticalOffset,
        diyaHorizontalOffset,
        diyaScale,
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
          fontSizeAdjustments,
          verticalSpacing,
          diyaVerticalOffset,
          diyaHorizontalOffset,
          diyaScale,
          showBranding,
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
    headingFontSizeDelta,
    dateFontSizeDelta,
    quoteFontSizeDelta,
    familyFontSizeDelta,
    tithiFontSizeDelta,
    footerFontSizeDelta,
    photoFrameShape,
    verticalSpacing,
    diyaVerticalOffset,
    diyaHorizontalOffset,
    diyaScale,
    showBranding,
  ]);

  // Handle High-Res Download
  const handleDownload = async (format: ExportFormat) => {
    setIsDownloading(true);
    setDownloadSuccessMessage(null);
    setDownloadErrorMessage(null);

    trackEvent({
      eventType: 'export_attempted',
      workflowType: cardType,
      format,
      templateId: template.id,
    });

    try {
      const activeDeceased: DeceasedDetails = {
        ...deceased,
        heading: customHeading,
        name: customName,
        diyaVerticalOffset,
        diyaHorizontalOffset,
        diyaScale,
      };

      await exportCard({
        template: modifiedTemplate,
        deceased: activeDeceased,
        quoteText: customQuote,
        family,
        cardType,
        aspectFormat: selectedFormat,
        exportFormat: format,
        fontSizeAdjustments,
        verticalSpacing,
        diyaVerticalOffset,
        diyaHorizontalOffset,
        diyaScale,
        showBranding,
      });

      const formatLabel = format.toUpperCase();
      setDownloadSuccessMessage(`તમારું ${formatLabel} કાર્ડ સફળતાપૂર્વક હાઈ-રિઝોલ્યુશનમાં ડાઉનલોડ થઈ ગયું છે!`);
      setShowInstagramModal(true);
      onBackToSteps?.(6);

      trackEvent({
        eventType: 'export_success',
        workflowType: cardType,
        format,
        templateId: template.id,
        status: 'success',
      });
    } catch (err) {
      console.error('Download failed', err);
      setDownloadErrorMessage('કાર્ડ ડાઉનલોડ થઈ શક્યું નથી. કૃપા કરીને ફરી પ્રયાસ કરો.');

      trackEvent({
        eventType: 'export_failed',
        workflowType: cardType,
        format,
        templateId: template.id,
        status: 'failed',
        errorCategory: err instanceof Error ? err.name : 'UnknownError',
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const currentDims = FORMAT_DIMENSIONS[selectedFormat];

  return (
    <div className="mx-auto flex h-auto min-h-0 max-w-7xl flex-col space-y-2 sm:space-y-6">
      {/* Top Header & Aspect Ratio Selector Bar */}
      <div className="flex shrink-0 flex-col items-center justify-between gap-2 rounded-2xl border border-brand-sand bg-white p-3 shadow-xs sm:gap-4 sm:p-5 lg:flex-row">
        <div>
          <h2 className="flex items-center gap-2 font-serifGujarati text-base font-bold text-brand-maroon sm:text-xl">
            <Eye className="h-5 w-5 text-brand-saffron" />
            <span>લાઈવ પૂર્વદર્શન અને અંતિમ એડિટર</span>
          </h2>
          <p className="mt-0.5 hidden font-gujarati text-xs text-gray-500 sm:block">
            જેવું અહીં દેખાશે તેવું જ હાઈ-ડેફિનેશનમાં ડાઉનલોડ થશે.
          </p>
        </div>

        {/* Aspect Ratio / Format Selector */}
        <div className="grid w-full grid-cols-4 items-center gap-1 rounded-xl border border-gray-200 bg-gray-100 p-1 sm:flex sm:w-auto sm:gap-1.5 sm:p-1.5">
          {(['4:5', '9:16', '2:3', 'A4'] as AspectRatioFormat[]).map((fmt) => (
            <button
              key={fmt}
              type="button"
              onClick={() => setSelectedFormat(fmt)}
              className={`rounded-lg px-1 py-1.5 text-center text-[10px] font-bold leading-tight transition-all sm:px-3 sm:py-1.5 sm:text-xs ${
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

      {/* Mobile follows document flow; desktop retains the side-by-side editor layout. */}
      <div className="grid grid-cols-1 items-start gap-3 lg:grid-cols-12 lg:items-start lg:gap-8">
        {/* The mobile preview stays visible while settings scroll below it. */}
        <div
          className="sticky top-[10rem] z-30 flex min-w-0 flex-col items-center lg:top-24 lg:col-span-7 lg:sticky"
        >
          <div className="relative mx-auto flex aspect-[1/1] min-h-[300px] w-full max-w-[480px] flex-col items-center overflow-hidden rounded-2xl border-2 border-stone-800 bg-stone-900 p-3 shadow-2xl sm:aspect-[1.2/1] sm:min-h-[360px] sm:rounded-3xl sm:border-4 sm:p-6 lg:mx-0 lg:aspect-auto lg:h-auto lg:min-h-0 lg:max-w-none">
            {/* Dimensions Pill Indicator */}
            <div className="mb-1 flex shrink-0 items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md sm:mb-3">
              <Smartphone className="h-3.5 w-3.5 text-brand-gold" />
              <span>
                {currentDims.name} • {currentDims.gujaratiName}
              </span>
            </div>

            {/* Canvas Container with Proper Centering */}
            <div
              className="flex min-h-0 w-full max-w-[480px] flex-1 items-center justify-center lg:flex-none"
            >
              <canvas
                ref={canvasRef}
                data-testid="card-live-preview"
                className="max-h-full max-w-full rounded-lg border border-stone-700 bg-white object-contain shadow-xl lg:max-h-[640px]"
                style={{
                  aspectRatio: `${currentDims.width} / ${currentDims.height}`,
                }}
              />
            </div>

            {/* Canvas Status Indicator */}
            {isRendering && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 font-gujarati text-xs text-white backdrop-blur-xs">
                <Sparkles className="mr-2 h-4 w-4 animate-spin text-brand-gold" />
                <span>કાર્ડ રી-રેન્ડર થઈ રહ્યું છે...</span>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Scrollable Editing Controls Panel */}
        <div
          data-testid="editor-settings-panel"
          className="h-[calc(100dvh-23rem-env(safe-area-inset-bottom))] min-h-[15rem] space-y-6 overflow-y-auto overscroll-y-auto [scrollbar-gutter:stable] lg:col-span-5 lg:h-auto lg:min-h-0 lg:max-h-[calc(100vh-7rem)] lg:overscroll-contain lg:pr-2"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {/* Download Action Card */}
          <div className="space-y-4 rounded-2xl bg-gradient-to-br from-brand-maroon via-brand-maroonDark to-stone-900 p-4 text-white shadow-lg sm:p-6">
            <div>
              <span className="rounded-full border border-brand-gold/30 bg-brand-gold/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-gold">
                હાઈ-રિઝોલ્યુશન ડાઉનલોડ
              </span>
              <h3 className="mt-1.5 font-serifGujarati text-base font-bold text-white sm:text-lg">
                વોટરમાર્ક વગર મફત ડાઉનલોડ કરો
              </h3>
              <p className="mt-0.5 font-gujarati text-xs text-gray-300">
                કોઈપણ રજીસ્ટ્રેશન કે પેમેન્ટ વિના સીધું ડાઉનલોડ ઉપલબ્ધ છે.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="grid grid-cols-1 gap-2 pt-2 sm:grid-cols-3 sm:gap-2.5">
              <button
                type="button"
                disabled={isDownloading}
                onClick={() => handleDownload('png')}
                className="flex min-h-14 items-center justify-start gap-3 rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-left transition-colors hover:bg-white/15 active:scale-[0.99] disabled:opacity-50 sm:min-h-32 sm:flex-col sm:justify-center sm:gap-1.5 sm:px-2 sm:text-center"
              >
                <ImageIcon className="h-5 w-5 shrink-0 text-emerald-400" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs font-bold text-white">PNG ઈમેજ</span>
                  <span className="text-[10px] text-gray-300">ક્રિસ્પ ક્વોલિટી</span>
                </span>
              </button>

              <button
                type="button"
                disabled={isDownloading}
                onClick={() => handleDownload('jpg')}
                className="flex min-h-14 items-center justify-start gap-3 rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-left transition-colors hover:bg-white/15 active:scale-[0.99] disabled:opacity-50 sm:min-h-32 sm:flex-col sm:justify-center sm:gap-1.5 sm:px-2 sm:text-center"
              >
                <Download className="h-5 w-5 shrink-0 text-brand-gold" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs font-bold text-white">JPG ઈમેજ</span>
                  <span className="text-[10px] text-gray-300">વોટ્સએપ શેર</span>
                </span>
              </button>

              <button
                type="button"
                disabled={isDownloading}
                onClick={() => handleDownload('pdf')}
                className="flex min-h-14 items-center justify-start gap-3 rounded-xl border border-white/20 bg-white/10 px-3 py-3 text-left transition-colors hover:bg-white/15 active:scale-[0.99] disabled:opacity-50 sm:min-h-32 sm:flex-col sm:justify-center sm:gap-1.5 sm:px-2 sm:text-center"
              >
                <FileText className="h-5 w-5 shrink-0 text-rose-400" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs font-bold text-white">PDF ફાઇલ</span>
                  <span className="text-[10px] text-gray-300">પ્રિન્ટિંગ માટે</span>
                </span>
              </button>
            </div>

            {/* Success Message */}
            {downloadSuccessMessage && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-500 bg-emerald-950/80 p-3 text-xs text-emerald-200">
                <Check className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>{downloadSuccessMessage}</span>
              </div>
            )}
            {downloadErrorMessage && (
              <p role="alert" className="rounded-xl border border-red-400 bg-red-950/70 p-3 font-gujarati text-xs text-red-200">
                {downloadErrorMessage}
              </p>
            )}
          </div>

          {/* Controls Card: Organized Sections */}
          <div className="space-y-5 rounded-2xl border border-brand-sand bg-white p-4 sm:p-6 shadow-sm">
            <h3 className="flex items-center gap-1.5 border-b border-gray-100 pb-2 font-serifGujarati text-sm font-bold text-gray-900">
              <Layers className="h-4 w-4 text-brand-saffron" />
              <span>કાર્ડ કસ્ટમાઇઝેશન પેનલ</span>
            </h3>

            {/* SECTION 1: Quick Text Edits */}
            <div className="space-y-3">
              <span className="block font-gujarati text-xs font-bold text-brand-maroon">
                ૧. મુખ્ય લખાણ ફાઈન-ટ્યુનિંગ
              </span>
              <div>
                <label className="mb-1 block font-gujarati text-xs font-bold text-gray-700">
                  મુખ્ય હેડિંગ:
                </label>
                <input
                  type="text"
                  value={customHeading}
                  onChange={(e) => {
                    setCustomHeading(e.target.value);
                    onUpdateDeceased?.({ heading: e.target.value });
                  }}
                  className="min-h-11 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 font-gujarati text-xs font-bold text-brand-maroon focus:outline-none focus:ring-2 focus:ring-brand-saffron lg:min-h-0"
                />
              </div>

              <div>
                <label className="mb-1 block font-gujarati text-xs font-bold text-gray-700">
                  સ્વર્ગસ્થનું નામ:
                </label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => {
                    setCustomName(e.target.value);
                    onUpdateDeceased?.({ name: e.target.value });
                  }}
                  className="min-h-11 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 font-gujarati text-xs font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-saffron lg:min-h-0"
                />
              </div>

              <div>
                <label className="mb-1 block font-gujarati text-xs font-bold text-gray-700">
                  સ્મૃતિ સંદેશ:
                </label>
                <textarea
                  rows={2}
                  value={customQuote}
                  onChange={(e) => {
                    setCustomQuote(e.target.value);
                    onUpdateQuote?.(e.target.value);
                  }}
                  className="min-h-16 w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 font-gujarati text-xs focus:outline-none focus:ring-2 focus:ring-brand-saffron lg:min-h-0"
                />
              </div>
            </div>

            {/* SECTION 2: Photo Frame Shape & Real Frame Asset Toggle */}
            <div className="border-t border-gray-100 pt-4 space-y-3">
              <span className="block font-gujarati text-xs font-bold text-brand-maroon">
                ૨. ફોટો અને ફ્રેમ સેટિંગ્સ
              </span>
              <label className="block font-gujarati text-xs font-bold text-gray-700">
                📷 ફોટો ફ્રેમ આકાર:
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {([
                  { value: 'circle', label: 'ગોળ', icon: '⬤' },
                  { value: 'square', label: 'ચોરસ', icon: '■' },
                  { value: 'rect', label: 'લંબચોરસ', icon: '▬' },
                  { value: 'portrait-rect', label: 'પોર્ટ્રેટ', icon: '▮' },
                  { value: 'oval', label: 'અંડાકાર', icon: '⬭' },
                  { value: 'rounded-rect', label: 'ગોળ ખૂણા', icon: '▢' },
                ] as const).map((shape) => (
                  <button
                    key={shape.value}
                    type="button"
                    onClick={() => setPhotoFrameShape(shape.value)}
                    className={`flex min-h-14 flex-col items-center gap-0.5 rounded-lg border py-2 px-1 text-center text-xs transition-all lg:min-h-0 ${
                      photoFrameShape === shape.value
                        ? 'border-brand-saffron bg-brand-saffron/10 font-bold text-brand-maroon'
                        : 'border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <span className="text-lg leading-none">{shape.icon}</span>
                    <span className="font-gujarati text-[10px]">{shape.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* SECTION 3: Decoration Settings */}
            <div className="border-t border-gray-100 pt-4 space-y-3">
              <span className="block font-gujarati text-xs font-bold text-brand-maroon">
                ૩. દીવા અને સજાવટ નિયંત્રણ (Diya & Decorations)
              </span>

              <div className="space-y-2.5 rounded-xl border border-brand-sand bg-brand-cream/30 p-3.5">
                {/* Setting 1: Procedural Diya Checkbox */}
                <label className="flex min-h-11 items-center gap-2.5 font-gujarati text-xs font-bold text-gray-800 cursor-pointer lg:min-h-0">
                  <input
                    type="checkbox"
                    checked={deceased.includeDiya === true}
                    onChange={(e) => onUpdateDeceased?.({ includeDiya: e.target.checked })}
                    className="h-4 w-4 rounded border-gray-300 accent-brand-saffron"
                  />
                  <span>પરંપરાગત દીવો ઉમેરો (Procedural Diya)</span>
                </label>

                {/* Setting 2: Procedural Flower Checkbox */}
                <label className="flex min-h-11 items-center gap-2.5 font-gujarati text-xs font-bold text-gray-800 cursor-pointer lg:min-h-0">
                  <input
                    type="checkbox"
                    checked={deceased.includeFlowers === true}
                    onChange={(e) => onUpdateDeceased?.({ includeFlowers: e.target.checked })}
                    className="h-4 w-4 rounded border-gray-300 accent-brand-saffron"
                  />
                  <span>પરંપરાગત ફૂલો અને પાંદડીઓ ઉમેરો (Procedural Flowers)</span>
                </label>

                <div className="border-t border-brand-sand/50 my-1 pt-1" />

                {/* Setting 3: Real Diya Assets Checkbox */}
                <label className="flex min-h-11 items-center gap-2.5 font-gujarati text-xs font-bold text-brand-maroon cursor-pointer lg:min-h-0">
                  <input
                    type="checkbox"
                    checked={deceased.useRealDiyas === true}
                    onChange={(e) => onUpdateDeceased?.({ useRealDiyas: e.target.checked })}
                    className="h-4 w-4 rounded border-gray-300 accent-brand-saffron"
                  />
                  <span>વાસ્તવિક દીવડાના ડિઝાઇન ઉમેરો (Use Real Diya Assets)</span>
                </label>
                <p className="font-gujarati text-[10px] text-gray-500 pl-6.5">
                  ફોટોની બંને બાજુએ (ડાબે અને જમણે) સમપ્રમાણ પીત્તળના દીવા-સ્ટેન્ડ પ્રદર્શિત કરે છે.
                </p>

                {/* Diya Vertical Position & Spacing Option */}
                <div className="pt-2.5 border-t border-brand-sand/50">
                  <div className="mb-1 flex justify-between font-gujarati text-xs text-brand-maroon">
                    <span className="font-bold">દીવાનું ઊંચાઈ / વર્ટિકલ સ્થાન (Vertical Position):</span>
                    <span className="font-mono font-bold">
                      {diyaVerticalOffset > 0 ? `+${diyaVerticalOffset}` : diyaVerticalOffset} px
                    </span>
                  </div>
                  <input
                    type="range"
                    min={-80}
                    max={80}
                    value={diyaVerticalOffset}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setDiyaVerticalOffset(val);
                      onUpdateDeceased?.({ diyaVerticalOffset: val });
                    }}
                    className="h-10 w-full accent-brand-saffron lg:h-1.5"
                  />
                  <div className="mt-1 flex items-center justify-between text-[11px] text-gray-500 font-gujarati">
                    <span>-80 px (ઉપર)</span>
                    <button
                      type="button"
                      onClick={() => {
                        setDiyaVerticalOffset(0);
                        onUpdateDeceased?.({ diyaVerticalOffset: 0 });
                      }}
                      className="text-xs text-brand-saffron underline hover:text-brand-maroon font-bold"
                    >
                      ૦ px (રીસેટ)
                    </button>
                    <span>+80 px (નીચે)</span>
                  </div>
                </div>

                {/* Diya Horizontal Position Option */}
                <div className="pt-2 border-t border-brand-sand/50">
                  <div className="mb-1 flex justify-between font-gujarati text-xs text-brand-maroon">
                    <span className="font-bold">દીવાનું આડું સ્થાન / અંતર (Horizontal Position):</span>
                    <span className="font-mono font-bold">
                      {diyaHorizontalOffset > 0 ? `+${diyaHorizontalOffset}` : diyaHorizontalOffset} px
                    </span>
                  </div>
                  <input
                    type="range"
                    min={-60}
                    max={60}
                    value={diyaHorizontalOffset}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setDiyaHorizontalOffset(val);
                      onUpdateDeceased?.({ diyaHorizontalOffset: val });
                    }}
                    className="h-10 w-full accent-brand-saffron lg:h-1.5"
                  />
                  <div className="mt-1 flex items-center justify-between text-[11px] text-gray-500 font-gujarati">
                    <span>-60 px (ફોટોની નજીક)</span>
                    <button
                      type="button"
                      onClick={() => {
                        setDiyaHorizontalOffset(0);
                        onUpdateDeceased?.({ diyaHorizontalOffset: 0 });
                      }}
                      className="text-xs text-brand-saffron underline hover:text-brand-maroon font-bold"
                    >
                      ૦ px (રીસેટ)
                    </button>
                    <span>+60 px (ફોટોથી દૂર)</span>
                  </div>
                </div>

                {/* Diya Size / Scale Option */}
                <div className="pt-2 border-t border-brand-sand/50">
                  <div className="mb-1 flex justify-between font-gujarati text-xs text-brand-maroon">
                    <span className="font-bold">દીવાની સાઇઝ / કદ (Diya Size):</span>
                    <span className="font-mono font-bold">{diyaScale}%</span>
                  </div>
                  <input
                    type="range"
                    min={60}
                    max={150}
                    value={diyaScale}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      setDiyaScale(val);
                      onUpdateDeceased?.({ diyaScale: val });
                    }}
                    className="h-10 w-full accent-brand-saffron lg:h-1.5"
                  />
                  <div className="mt-1 flex items-center justify-between text-[11px] text-gray-500 font-gujarati">
                    <span>60% (નાનો)</span>
                    <button
                      type="button"
                      onClick={() => {
                        setDiyaScale(100);
                        onUpdateDeceased?.({ diyaScale: 100 });
                      }}
                      className="text-xs text-brand-saffron underline hover:text-brand-maroon font-bold"
                    >
                      100% (ડિફૉલ્ટ)
                    </button>
                    <span>150% (મોટો)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 4: Font Sizes & Text Sizing */}
            <div className="border-t border-gray-100 pt-4 space-y-3">
              <span className="block font-gujarati text-xs font-bold text-brand-maroon">
                ૪. ફોન્ટ સાઇઝ નિયંત્રણ (ડિફૉલ્ટ સાઇઝ સેટિંગ્સ)
              </span>

              {/* Heading font size */}
              <div>
                <div className="mb-0.5 flex justify-between font-gujarati text-xs text-gray-600">
                  <span>મુખ્ય હેડિંગ (ડિફૉલ્ટ: 38px):</span>
                  <span className="font-mono font-bold">{effectiveFontSizes.heading}px</span>
                </div>
                <input
                  type="range"
                  min={-18}
                  max={18}
                  value={headingFontSizeDelta}
                  onChange={(e) => setHeadingFontSizeDelta(parseInt(e.target.value, 10))}
                  className="h-10 w-full accent-brand-saffron lg:h-1"
                />
              </div>

              {/* Name font size */}
              <div>
                <div className="mb-0.5 flex justify-between font-gujarati text-xs text-gray-600">
                  <span>સ્વર્ગસ્થનું નામ (ડિફૉલ્ટ: 46px):</span>
                  <span className="font-mono font-bold">{effectiveFontSizes.name}px</span>
                </div>
                <input
                  type="range"
                  min={-18}
                  max={18}
                  value={nameFontSizeDelta}
                  onChange={(e) => setNameFontSizeDelta(parseInt(e.target.value, 10))}
                  className="h-10 w-full accent-brand-saffron lg:h-1"
                />
              </div>

              {/* Date font size */}
              <div>
                <div className="mb-0.5 flex justify-between font-gujarati text-xs text-gray-600">
                  <span>તારીખ / વિગત (ડિફૉલ્ટ: 24px):</span>
                  <span className="font-mono font-bold">{effectiveFontSizes.dates}px</span>
                </div>
                <input
                  type="range"
                  min={-12}
                  max={14}
                  value={dateFontSizeDelta}
                  onChange={(e) => setDateFontSizeDelta(parseInt(e.target.value, 10))}
                  className="h-10 w-full accent-brand-saffron lg:h-1"
                />
              </div>

              {/* Tithi font size */}
              <div>
                <div className="mb-0.5 flex justify-between font-gujarati text-xs text-gray-600">
                  <span>તિથિ (ડિફૉલ્ટ: 24px):</span>
                  <span className="font-mono font-bold">{effectiveFontSizes.tithi}px</span>
                </div>
                <input
                  type="range"
                  min={-10}
                  max={12}
                  value={tithiFontSizeDelta}
                  onChange={(e) => setTithiFontSizeDelta(parseInt(e.target.value, 10))}
                  className="h-10 w-full accent-brand-saffron lg:h-1"
                />
              </div>

              {/* Quote font size */}
              <div>
                <div className="mb-0.5 flex justify-between font-gujarati text-xs text-gray-600">
                  <span>સ્મૃતિ સંદેશ (ડિફૉલ્ટ: 26px):</span>
                  <span className="font-mono font-bold">{effectiveFontSizes.quote}px</span>
                </div>
                <input
                  type="range"
                  min={-12}
                  max={12}
                  value={quoteFontSizeDelta}
                  onChange={(e) => setQuoteFontSizeDelta(parseInt(e.target.value, 10))}
                  className="h-10 w-full accent-brand-saffron lg:h-1"
                />
              </div>

              {/* Family names font size */}
              <div>
                <div className="mb-0.5 flex justify-between font-gujarati text-xs text-gray-600">
                  <span>પરિવારના નામ (ડિફૉલ્ટ: 26px):</span>
                  <span className="font-mono font-bold">{effectiveFontSizes.family}px</span>
                </div>
                <input
                  type="range"
                  min={-10}
                  max={10}
                  value={familyFontSizeDelta}
                  onChange={(e) => setFamilyFontSizeDelta(parseInt(e.target.value, 10))}
                  className="h-10 w-full accent-brand-saffron lg:h-1"
                />
              </div>

              {/* Footer font size */}
              <div>
                <div className="mb-0.5 flex justify-between font-gujarati text-xs text-gray-600">
                  <span>ફૂટર (ડિફૉલ્ટ: 26px):</span>
                  <span className="font-mono font-bold">{effectiveFontSizes.footer}px</span>
                </div>
                <input
                  type="range"
                  min={-10}
                  max={10}
                  value={footerFontSizeDelta}
                  onChange={(e) => setFooterFontSizeDelta(parseInt(e.target.value, 10))}
                  className="h-10 w-full accent-brand-saffron lg:h-1"
                />
              </div>

              {/* Reset all font sizes */}
              <button
                type="button"
                onClick={() => {
                  setHeadingFontSizeDelta(0);
                  setNameFontSizeDelta(0);
                  setDateFontSizeDelta(0);
                  setTithiFontSizeDelta(0);
                  setQuoteFontSizeDelta(0);
                  setFamilyFontSizeDelta(0);
                  setFooterFontSizeDelta(0);
                }}
                className="font-gujarati text-xs text-gray-500 underline hover:text-brand-maroon"
              >
                ↺ બધા ફોન્ટ સાઇઝ ડિફૉલ્ટ પર રીસેટ કરો
              </button>
            </div>

            {/* SECTION 5: Vertical Spacing Slider (Default: 28px) */}
            <div className="border-t border-gray-100 pt-4">
              <div className="flex items-center justify-between gap-3 font-gujarati text-xs text-gray-700">
                <label htmlFor="vertical-spacing" className="font-bold text-brand-maroon">
                  ૫. ટેક્સ્ટ વચ્ચેનું અંતર (Vertical Spacing)
                </label>
                <span className="font-mono font-bold">{verticalSpacing} px</span>
              </div>
              <input
                id="vertical-spacing"
                type="range"
                min={0}
                max={100}
                value={verticalSpacing}
                onChange={(event) => setVerticalSpacing(Number(event.target.value))}
                className="mt-2 h-10 w-full accent-brand-saffron lg:h-auto"
              />
              <div className="mt-1 flex justify-between text-[11px] text-gray-500 font-gujarati">
                <span>0 px (સઘન)</span>
                <span>ડિફૉલ્ટ: 28 px</span>
                <span>100 px (વિસ્તૃત)</span>
              </div>
              <button
                type="button"
                onClick={() => setVerticalSpacing(28)}
                className="mt-1.5 font-gujarati text-xs text-gray-500 underline hover:text-brand-maroon"
              >
                અંતર ડિફૉલ્ટ (28px) પર રીસેટ કરો
              </button>
            </div>

            {/* SECTION 6: Watermark & Branding Setting */}
            <div className="border-t border-gray-100 pt-4">
              <label className="flex min-h-11 items-center gap-2.5 font-gujarati text-xs font-bold text-gray-800 cursor-pointer lg:min-h-0">
                <input
                  type="checkbox"
                  checked={showBranding}
                  onChange={(e) => setShowBranding(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 accent-brand-saffron"
                />
                <span>વોટરમાર્ક / બ્રાન્ડિંગ દર્શાવો ("By Adoni Kaya")</span>
              </label>
              <p className="mt-1 font-gujarati text-[11px] text-gray-500 pl-6.5">
                કાર્ડના નીચેના જમણા ખૂણામાં નાનું બ્રાન્ડિંગ દર્શાવે છે. જો ન રાખવું હોય તો ચેકમાર્ક દૂર કરી શકો છો.
              </p>
            </div>

            {/* Back to Steps Navigation Shortcuts */}
            <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 pt-3 text-xs">
              <span className="self-center text-gray-400">સુધારો:</span>
              <button
                type="button"
                onClick={() => onBackToSteps?.(2)}
                className="rounded-lg bg-gray-100 px-2.5 py-1 font-gujarati text-gray-700 hover:bg-gray-200"
              >
                વિગતો બદલો
              </button>
              <button
                type="button"
                onClick={() => onBackToSteps?.(3)}
                className="rounded-lg bg-gray-100 px-2.5 py-1 font-gujarati text-gray-700 hover:bg-gray-200"
              >
                સંદેશ બદલો
              </button>
              <button
                type="button"
                onClick={() => onBackToSteps?.(4)}
                className="rounded-lg bg-gray-100 px-2.5 py-1 font-gujarati text-gray-700 hover:bg-gray-200"
              >
                પરિવાર બદલો
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TASK 6: Instagram Pop-up Modal After Successful Download */}
      {showInstagramModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border-2 border-brand-gold bg-white p-6 sm:p-8 text-center shadow-2xl">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setShowInstagramModal(false)}
              className="absolute right-4 top-4 rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              aria-label="બંધ કરો"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Success Check Badge */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
              <Check className="h-10 w-10 stroke-[3]" />
            </div>

            {/* Heading */}
            <h3 className="mt-4 font-serifGujarati text-2xl font-bold text-brand-maroon">
              {cardType === 'shradhanjali'
                ? 'તમારી શ્રદ્ધાંજલિ સફળતાપૂર્વક તૈયાર થઈ ગઈ છે!'
                : 'તમારું બેસણું કાર્ડ સફળતાપૂર્વક તૈયાર થઈ ગયું છે!'}
            </h3>

            {/* Notice */}
            <p className="mt-1 font-gujarati text-sm font-semibold text-emerald-700">
              તમારું કાર્ડ ડાઉનલોડ થઈ ગયું છે.
            </p>

            {/* Message */}
            <p className="mt-3 font-gujarati text-xs leading-relaxed text-gray-600">
              અડોણી કાયા સાથે સુંદર શ્રદ્ધાંજલિ અને બેસણું કાર્ડ બનાવવા બદલ આભાર.
              <br />
              વધુ મદદ, માર્ગદર્શન અને નવા અપડેટ્સ માટે અમને Instagram પર Follow કરો.
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="https://www.instagram.com/adoni_kaya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 px-6 py-3 font-serifGujarati text-sm font-bold text-white shadow-lg transition-all hover:scale-102 hover:shadow-xl active:scale-98"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram પર Follow કરો</span>
              </a>

              <button
                type="button"
                onClick={() => setShowInstagramModal(false)}
                className="rounded-xl border border-gray-200 bg-gray-50 px-6 py-2.5 font-gujarati text-xs font-semibold text-gray-700 hover:bg-gray-100"
              >
                પાછા જાઓ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
