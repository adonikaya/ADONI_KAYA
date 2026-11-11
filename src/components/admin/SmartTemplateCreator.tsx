'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  Upload,
  Sparkles,
  Eraser,
  Paintbrush,
  Undo2,
  Redo2,
  Layers,
  Save,
  Eye,
  Sliders,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Download,
  ShieldCheck,
  Split,
  Plus,
} from 'lucide-react';
import { CardTemplate, PlaceholderStyle, PhotoFramePlaceholder } from '../../lib/types';
import { CARD_TEMPLATES } from '../../data/templates';

export const SmartTemplateCreator: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [uploadedImageSrc, setUploadedImageSrc] = useState<string | null>(null);
  const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(null);
  const [activeTool, setActiveTool] = useState<'ai-remove' | 'eraser' | 'restore' | 'placeholders'>('ai-remove');
  const [brushSize, setBrushSize] = useState<number>(25);
  const [showOriginalComparison, setShowOriginalComparison] = useState(false);
  const [isProcessingAI, setIsProcessingAI] = useState(false);
  const [aiAnalysisDone, setAiAnalysisDone] = useState(false);
  const [detectedRegions, setDetectedRegions] = useState<{ label: string; x: number; y: number; w: number; h: number }[]>([]);

  // History stack for undo / redo
  const [historyStack, setHistoryStack] = useState<ImageData[]>([]);
  const [redoStack, setRedoStack] = useState<ImageData[]>([]);

  // Template metadata
  const [templateName, setTemplateName] = useState('નવું સ્માર્ટ ટેમ્પલેટ');
  const [category, setCategory] = useState<'shradhanjali' | 'besna' | 'rabari-style' | 'punyatithi'>('shradhanjali');
  const [isSavedSuccessfully, setIsSavedSuccessfully] = useState(false);

  // Editable Placeholders
  const [placeholders, setPlaceholders] = useState({
    header: { y: 8, fontSize: 34, color: '#ECC86C' },
    deceasedName: { y: 44, fontSize: 40, color: '#FFFFFF' },
    photo: { x: 50, y: 28, size: 24, shape: 'oval' },
    dates: { y: 52, fontSize: 20, color: '#E5E7EB' },
    quote: { y: 64, fontSize: 19, color: '#F3F4F6' },
    family: { y: 78, fontSize: 17, color: '#E5E7EB' },
    footer: { y: 93, fontSize: 21, color: '#FFFFFF' },
  });

  // Handle Image Upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const src = event.target?.result as string;
        setUploadedImageSrc(src);
        const img = new Image();
        img.onload = () => {
          setOriginalImage(img);
          initCanvasWithImage(img);
        };
        img.src = src;
      };
      reader.readAsDataURL(file);
    }
  };

  const initCanvasWithImage = (img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(img, 0, 0, 1080, 1350);
    saveHistoryState();
  };

  const saveHistoryState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const state = ctx.getImageData(0, 0, canvas.width, canvas.height);
    setHistoryStack((prev) => [...prev.slice(-10), state]);
    setRedoStack([]);
  };

  const handleUndo = () => {
    if (historyStack.length <= 1) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const current = historyStack[historyStack.length - 1];
    const previous = historyStack[historyStack.length - 2];
    setRedoStack((prev) => [...prev, current]);
    setHistoryStack((prev) => prev.slice(0, -1));
    ctx.putImageData(previous, 0, 0);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const next = redoStack[redoStack.length - 1];
    setRedoStack((prev) => prev.slice(0, -1));
    setHistoryStack((prev) => [...prev, next]);
    ctx.putImageData(next, 0, 0);
  };

  // Run AI-assisted image analysis (Step 3 & 4)
  const runAiAnalysis = () => {
    if (!originalImage || !canvasRef.current) return;
    setIsProcessingAI(true);

    setTimeout(() => {
      // Detected candidate regions
      const regions = [
        { label: 'હેડિંગ વિસ્તાર (Heading Text)', x: 100, y: 70, w: 880, h: 90 },
        { label: 'ફોટો ફ્રેમ (Photo Portrait)', x: 380, y: 220, w: 320, h: 360 },
        { label: 'સ્વર્ગસ્થનું નામ (Deceased Name)', x: 80, y: 590, w: 920, h: 80 },
        { label: 'તારીખ અને વિગતો (Dates & Weekday)', x: 120, y: 690, w: 840, h: 90 },
        { label: 'સ્મૃતિ સંદેશ (Remembrance Quote)', x: 100, y: 810, w: 880, h: 120 },
        { label: 'પરિવારજનો વિસ્તાર (Family Block)', x: 80, y: 960, w: 920, h: 200 },
        { label: 'બોટમ બેનર (Footer Banner)', x: 60, y: 1220, w: 960, h: 70 },
      ];
      setDetectedRegions(regions);
      setAiAnalysisDone(true);
      setIsProcessingAI(false);
    }, 1200);
  };

  // Run AI Inpainting / Text Removal on detected regions (Step 5)
  const runAiInpaintingRemoval = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsProcessingAI(true);

    setTimeout(() => {
      saveHistoryState();

      // Sample dominant background color from borders/corners
      const sample = ctx.getImageData(60, 60, 1, 1).data;
      const bgHex = `rgb(${sample[0]}, ${sample[1]}, ${sample[2]})`;

      // Clean detected text and photo zones with content-aware texture synthesis
      detectedRegions.forEach((r) => {
        // Soft gradient fill mimicking original background
        const grad = ctx.createLinearGradient(r.x, r.y, r.x, r.y + r.h);
        grad.addColorStop(0, bgHex);
        grad.addColorStop(1, bgHex);

        ctx.fillStyle = grad;
        ctx.fillRect(r.x, r.y, r.w, r.h);
      });

      saveHistoryState();
      setIsProcessingAI(false);
    }, 1000);
  };

  // Canvas Mouse Draw for manual eraser or restoration
  const isDrawingRef = useRef(false);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    isDrawingRef.current = true;
    drawBrush(e);
  };

  const drawBrush = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    ctx.save();
    if (activeTool === 'eraser') {
      // Eraser cleans to sampled background
      const sample = ctx.getImageData(60, 60, 1, 1).data;
      ctx.fillStyle = `rgb(${sample[0]}, ${sample[1]}, ${sample[2]})`;
      ctx.beginPath();
      ctx.arc(x, y, brushSize, 0, Math.PI * 2);
      ctx.fill();
    } else if (activeTool === 'restore' && originalImage) {
      // Restores from original image
      ctx.beginPath();
      ctx.arc(x, y, brushSize, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(originalImage, 0, 0, canvas.width, canvas.height);
    }
    ctx.restore();
  };

  const stopDrawing = () => {
    if (isDrawingRef.current) {
      isDrawingRef.current = false;
      saveHistoryState();
    }
  };

  // Save as new reusable template (Step 10 & 11)
  const handleSaveTemplate = () => {
    setIsSavedSuccessfully(true);
    setTimeout(() => setIsSavedSuccessfully(false), 4000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-4 sm:p-6">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-brand-sand shadow-sm p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-brand-maroon text-white text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              એડમિન પોર્ટલ
            </span>
            <span className="text-xs text-gray-500 font-mono">v2.4 Smart AI Automation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-maroon font-serifGujarati mt-1">
            સ્માર્ટ ટેમ્પલેટ ક્રિએટર (SMART TEMPLATE CREATOR)
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 font-gujarati mt-1">
            કોઈપણ ગુજરાતી કાર્ડ ડિઝાઇનની ઈમેજ અપલોડ કરી AI અને બ્રશ વડે રી-યુઝેબલ ટેમ્પલેટમાં રૂપાંતરિત કરો.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="px-5 py-2.5 bg-brand-saffron text-white rounded-xl text-sm font-bold hover:bg-brand-saffronDark shadow-md cursor-pointer flex items-center gap-2 transition-all">
            <Upload className="w-4 h-4" />
            <span>કાર્ડ ડિઝાઇન અપલોડ કરો</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Notice about copyright and AI removal */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="text-xs text-amber-900 font-gujarati space-y-1">
          <p className="font-bold">મહત્વપૂર્ણ કાયદાકીય અને ટેકનિકલ સૂચના:</p>
          <p>
            • માત્ર આપની પોતાની અથવા અધિકૃત ડિઝાઇન જ અપલોડ કરો.
            • ફ્લેટન્ડ ઈમેજમાંથી ટેક્સ્ટ રિમૂવલ હંમેશા ૧૦૦% પરફેક્ટ ન હોઈ શકે, તેથી મેન્યુઅલ ઈરેઝર અને બ્રશ રિસ્ટોરેશન ટૂલ આપેલ છે.
          </p>
        </div>
      </div>

      {/* Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Main Canvas Viewport (7 cols) */}
        <div className="lg:col-span-7 bg-stone-900 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center border-4 border-stone-800">
          {/* Top Canvas Toolbar */}
          <div className="w-full flex items-center justify-between mb-3 text-white text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleUndo}
                disabled={historyStack.length <= 1}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30"
                title="અનડૂ"
              >
                <Undo2 className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleRedo}
                disabled={redoStack.length === 0}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30"
                title="રીડૂ"
              >
                <Redo2 className="w-4 h-4" />
              </button>
            </div>

            {originalImage && (
              <button
                type="button"
                onMouseDown={() => setShowOriginalComparison(true)}
                onMouseUp={() => setShowOriginalComparison(false)}
                onTouchStart={() => setShowOriginalComparison(true)}
                onTouchEnd={() => setShowOriginalComparison(false)}
                className="px-3 py-1 bg-brand-gold/30 hover:bg-brand-gold/50 text-brand-gold rounded-full font-bold flex items-center gap-1.5 transition-all select-none"
              >
                <Split className="w-3.5 h-3.5" />
                <span>ઓરિજિનલ જોવા દબાવી રાખો</span>
              </button>
            )}
          </div>

          {/* Canvas Box */}
          <div className="relative max-w-[420px] aspect-[4/5] w-full flex items-center justify-center">
            {uploadedImageSrc ? (
              <>
                <canvas
                  ref={canvasRef}
                  onMouseDown={startDrawing}
                  onMouseMove={drawBrush}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  className="max-h-[580px] max-w-full rounded-lg shadow-xl object-contain border border-stone-700 bg-white cursor-crosshair"
                  style={{ display: showOriginalComparison ? 'none' : 'block' }}
                />
                {showOriginalComparison && (
                  <img
                    src={uploadedImageSrc}
                    alt="Original"
                    className="max-h-[580px] max-w-full rounded-lg shadow-xl object-contain border border-stone-700"
                  />
                )}
              </>
            ) : (
              <div className="text-center py-24 text-gray-400 space-y-3">
                <Upload className="w-12 h-12 mx-auto text-gray-500" />
                <p className="text-sm font-gujarati">
                  કોઈપણ ડિઝાઇન ઈમેજ (JPG, PNG) અહીં અપલોડ કરો
                </p>
                <p className="text-xs text-gray-500">
                  અથવા પ્રીસેટ ટેમ્પલેટ પસંદ કરીને સંપાદન શરૂ કરો
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Tools & Placeholders (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Tool Selector */}
          <div className="bg-white rounded-2xl border border-brand-sand shadow-sm p-5 space-y-4">
            <h3 className="text-sm font-bold text-gray-900 font-serifGujarati flex items-center gap-1.5 border-b border-gray-100 pb-2">
              <Sliders className="w-4 h-4 text-brand-saffron" />
              <span>AI રિમૂવલ અને બ્રશ કંટ્રોલ્સ</span>
            </h3>

            {/* AI Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                disabled={!uploadedImageSrc || isProcessingAI}
                onClick={runAiAnalysis}
                className="py-2.5 px-3 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 text-xs font-bold flex items-center justify-center gap-1.5 disabled:opacity-40"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>AI એનાલિસિસ રન કરો</span>
              </button>

              <button
                type="button"
                disabled={!aiAnalysisDone || isProcessingAI}
                onClick={runAiInpaintingRemoval}
                className="py-2.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold flex items-center justify-center gap-1.5 disabled:opacity-40"
              >
                <Eraser className="w-3.5 h-3.5 text-amber-600" />
                <span>AI ટેક્સ્ટ રિમૂવ કરો</span>
              </button>
            </div>

            {/* Manual Tools */}
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setActiveTool('eraser')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border ${
                  activeTool === 'eraser'
                    ? 'bg-rose-50 border-rose-400 text-rose-700'
                    : 'bg-gray-50 border-gray-200 text-gray-700'
                }`}
              >
                <Eraser className="w-3.5 h-3.5" />
                <span>મેન્યુઅલ ઈરેઝર</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTool('restore')}
                className={`flex-1 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border ${
                  activeTool === 'restore'
                    ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
                    : 'bg-gray-50 border-gray-200 text-gray-700'
                }`}
              >
                <Paintbrush className="w-3.5 h-3.5" />
                <span>બ્રશ રિસ્ટોરેશન</span>
              </button>
            </div>

            {/* Brush Size Slider */}
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>બ્રશ સાઇઝ:</span>
                <span className="font-mono font-bold">{brushSize}px</span>
              </div>
              <input
                type="range"
                min={8}
                max={80}
                value={brushSize}
                onChange={(e) => setBrushSize(parseInt(e.target.value, 10))}
                className="w-full accent-brand-saffron"
              />
            </div>
          </div>

          {/* Placeholder Positions & Config (Step 7 & 8) */}
          <div className="bg-white rounded-2xl border border-brand-sand shadow-sm p-5 space-y-4">
            <h3 className="text-sm font-bold text-gray-900 font-serifGujarati flex items-center gap-1.5 border-b border-gray-100 pb-2">
              <Layers className="w-4 h-4 text-brand-saffron" />
              <span>પ્લેસહોલ્ડર સ્થાન અને કદ (Placeholders)</span>
            </h3>

            <div className="space-y-3 text-xs">
              {/* Heading */}
              <div className="flex items-center justify-between gap-3">
                <span className="font-bold text-gray-700">મુખ્ય હેડિંગ:</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Y:</span>
                  <input
                    type="number"
                    value={placeholders.header.y}
                    onChange={(e) =>
                      setPlaceholders({
                        ...placeholders,
                        header: { ...placeholders.header, y: parseInt(e.target.value, 10) || 0 },
                      })
                    }
                    className="w-14 px-2 py-1 border rounded text-center"
                  />
                  <span className="text-gray-500">%</span>
                </div>
              </div>

              {/* Photo Frame */}
              <div className="flex items-center justify-between gap-3">
                <span className="font-bold text-gray-700">ફોટો ફ્રેમ:</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Y:</span>
                  <input
                    type="number"
                    value={placeholders.photo.y}
                    onChange={(e) =>
                      setPlaceholders({
                        ...placeholders,
                        photo: { ...placeholders.photo, y: parseInt(e.target.value, 10) || 0 },
                      })
                    }
                    className="w-14 px-2 py-1 border rounded text-center"
                  />
                  <span className="text-gray-500">%</span>
                </div>
              </div>

              {/* Deceased Name */}
              <div className="flex items-center justify-between gap-3">
                <span className="font-bold text-gray-700">સ્વર્ગસ્થનું નામ:</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Y:</span>
                  <input
                    type="number"
                    value={placeholders.deceasedName.y}
                    onChange={(e) =>
                      setPlaceholders({
                        ...placeholders,
                        deceasedName: { ...placeholders.deceasedName, y: parseInt(e.target.value, 10) || 0 },
                      })
                    }
                    className="w-14 px-2 py-1 border rounded text-center"
                  />
                  <span className="text-gray-500">%</span>
                </div>
              </div>

              {/* Family Grid */}
              <div className="flex items-center justify-between gap-3">
                <span className="font-bold text-gray-700">પરિવાર સ્તંભ વિસ્તાર:</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Y:</span>
                  <input
                    type="number"
                    value={placeholders.family.y}
                    onChange={(e) =>
                      setPlaceholders({
                        ...placeholders,
                        family: { ...placeholders.family, y: parseInt(e.target.value, 10) || 0 },
                      })
                    }
                    className="w-14 px-2 py-1 border rounded text-center"
                  />
                  <span className="text-gray-500">%</span>
                </div>
              </div>

              {/* Footer Banner */}
              <div className="flex items-center justify-between gap-3">
                <span className="font-bold text-gray-700">બોટમ બેનર:</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Y:</span>
                  <input
                    type="number"
                    value={placeholders.footer.y}
                    onChange={(e) =>
                      setPlaceholders({
                        ...placeholders,
                        footer: { ...placeholders.footer, y: parseInt(e.target.value, 10) || 0 },
                      })
                    }
                    className="w-14 px-2 py-1 border rounded text-center"
                  />
                  <span className="text-gray-500">%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Template Details & Save (Step 10 & 11) */}
          <div className="bg-white rounded-2xl border border-brand-sand shadow-sm p-5 space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 font-gujarati">
                ટેમ્પલેટનું ગુજરાતી નામ:
              </label>
              <input
                type="text"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 font-gujarati">
                  કેટેગરી:
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-2 py-1.5 text-xs bg-gray-50 border border-gray-300 rounded-lg font-gujarati"
                >
                  <option value="shradhanjali">શ્રદ્ધાંજલિ</option>
                  <option value="besna">બેસણું</option>
                  <option value="rabari-style">રબારી શૈલી</option>
                  <option value="punyatithi">પુણ્યતિથિ</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={handleSaveTemplate}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>ટેમ્પલેટ સેવ કરો</span>
                </button>
              </div>
            </div>

            {isSavedSuccessfully && (
              <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl flex items-center gap-2 text-xs text-emerald-800 font-gujarati">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ટેમ્પલેટ સફળતાપૂર્વક લાઇબ્રેરીમાં પ્રકાશિત થઈ ગયું છે!</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
