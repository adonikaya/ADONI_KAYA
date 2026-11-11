'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  HeartHandshake,
  CheckCircle,
  Download,
  Calendar,
  Layers,
  Palette,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Eye,
  Star,
  Users,
} from 'lucide-react';
import { CardTemplate, DeceasedDetails, FamilyDetails, AspectRatioFormat } from '@/lib/types';
import { CARD_TEMPLATES } from '@/data/templates';
import { GUJARATI_QUOTES } from '@/data/quotes';
import { StepProgress } from '@/components/steps/StepProgress';
import { TemplateGallery } from '@/components/gallery/TemplateGallery';
import { ShradhanjaliForm } from '@/components/forms/ShradhanjaliForm';
import { BesnaForm } from '@/components/forms/BesnaForm';
import { QuoteSelector } from '@/components/forms/QuoteSelector';
import { FamilyMembersForm } from '@/components/forms/FamilyMembersForm';
import { LiveCanvasEditor } from '@/components/editor/LiveCanvasEditor';

export default function HomePage() {
  // Wizard State
  const [activeMode, setActiveMode] = useState<'landing' | 'wizard'>('landing');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [cardType, setCardType] = useState<'shradhanjali' | 'besna'>('shradhanjali');

  // Selected Template
  const [selectedTemplate, setSelectedTemplate] = useState<CardTemplate>(CARD_TEMPLATES[0]);

  // Form State
  const [deceased, setDeceased] = useState<DeceasedDetails>({
    name: 'પટેલ મોહનભાઈ કેશવલાલ',
    title: 'સ્વર્ગસ્થ',
    photoUrl: null,
    photoScale: 1,
    photoXOffset: 0,
    photoYOffset: 0,
    deathDate: '2025-07-31',
    weekday: 'ગુરુવાર',
    tithi: 'શ્રાવણ સુદ સાતમ',
    eventDate: '2026-07-31',
    heading: 'પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ',
    village: 'વાંકાનેર',
    talukaCity: 'મોરબી',
    besnaDate: '2025-08-03',
    besnaWeekday: 'રવિવાર',
    besnaTime: 'બપોરે ૩:૦૦ થી ૫:૦૦',
    besnaVenue: 'પટેલ સમાજ વાડી, સ્ટેશન રોડ',
  });

  const [selectedQuote, setSelectedQuote] = useState<string>(
    GUJARATI_QUOTES[0]?.text || 'પ્રભુ આપના દિવ્ય આત્માને ચિર શાંતિ અર્પે એવી પ્રાર્થના.'
  );

  const [family, setFamily] = useState<FamilyDetails>({
    familyName: 'પટેલ',
    nativeVillage: 'વાંકાનેર',
    showFooter: true,
    members: [
      { id: '1', name: 'દેસાઈ ગોવાભાઈ' },
      { id: '2', name: 'દેસાઈ આશાબેન' },
      { id: '3', name: 'દેસાઈ દેવિકાબેન' },
      { id: '4', name: 'દેસાઈ પલાબેન' },
      { id: '5', name: 'દેસાઈ ત્રિશાબેન' },
      { id: '6', name: 'દેસાઈ શ્રેયાબેન' },
    ],
  });

  // Load from local storage draft if available
  useEffect(() => {
    try {
      const savedDraft = localStorage.getItem('adoni_kaya_draft');
      if (savedDraft) {
        const parsed = JSON.parse(savedDraft);
        if (parsed.deceased) setDeceased(parsed.deceased);
        if (parsed.family) setFamily(parsed.family);
        if (parsed.quote) setSelectedQuote(parsed.quote);
      }
    } catch (e) {
      // Ignore
    }
  }, []);

  // Save to local storage on changes
  useEffect(() => {
    try {
      localStorage.setItem(
        'adoni_kaya_draft',
        JSON.stringify({ deceased, family, quote: selectedQuote })
      );
    } catch (e) {
      // Ignore
    }
  }, [deceased, family, selectedQuote]);

  // Start creation actions
  const startCreation = (type: 'shradhanjali' | 'besna', templateCategory?: string) => {
    setCardType(type);
    let defaultTpl = CARD_TEMPLATES.find((t) =>
      type === 'shradhanjali' ? t.category === 'shradhanjali' : t.category === 'besna'
    );
    if (templateCategory === 'rabari-style') {
      defaultTpl = CARD_TEMPLATES.find((t) => t.isRabariStyle) || defaultTpl;
    }
    if (defaultTpl) setSelectedTemplate(defaultTpl);

    // Set default appropriate heading
    if (type === 'besna') {
      setDeceased((prev) => ({
        ...prev,
        heading: 'પ્રાર્થના સભા / બેસણું',
        isHeadingOverridden: true,
      }));
    } else {
      setDeceased((prev) => ({
        ...prev,
        heading: 'પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ',
        isHeadingOverridden: false,
      }));
    }

    setCurrentStep(1);
    setActiveMode('wizard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTemplateSelect = (tpl: CardTemplate) => {
    setSelectedTemplate(tpl);
    setCurrentStep(2); // Auto navigate to info form
  };

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'શું અડોણી કાયા વાપરવા માટે લૉગિન કે પૈસા ચૂકવવા જરૂરી છે?',
      a: 'ના, બિલકુલ નહીં! અડોણી કાયા ૧૦૦% મફત છે. કોઈપણ વ્યક્તિ કોઈપણ રજીસ્ટ્રેશન, લૉગિન કે વોટરમાર્ક વગર ઉચ્ચ ગુણવત્તાવાળા કાર્ડ ડાઉનલોડ કરી શકે છે.',
    },
    {
      q: 'સ્માર્ટ વાર્ષિક શ્રદ્ધાંજલિ કેલ્ક્યુલેટર કેવી રીતે કામ કરે છે?',
      a: 'તમે માત્ર અવસાન તારીખ અને આજની અથવા ઈવેન્ટની તારીખ પસંદ કરશો, એટલે સિસ્ટમ આપમેળે કેલેન્ડરના લીપ વર્ષ અને દિવસોની ગણતરી કરીને પ્રથમ માસિક, છઠ્ઠી માસિક કે વાર્ષિક શ્રદ્ધાંજલિનું હેડિંગ બનાવી આપશે.',
    },
    {
      q: 'સ્માર્ટ પરિવાર લેઆઉટ એન્જિન શું છે?',
      a: 'જો પરિવારમાં ૫ નામો હોય કે ૨૫ નામો હોય, અમારું એન્જિન આપમેળે ૧ થી ૪ સ્તંભ (કોલમ) બનાવે છે અને ફોન્ટ સાઈઝ બેલેન્સ કરે છે જેથી કોઈ નામ કપાય નહીં અને ટેક્સ્ટ સરળતાથી વંચાય.',
    },
    {
      q: 'વોટ્સએપ સ્ટેટસ અને સોશિયલ મીડિયા માટે કઈ સાઈઝ શ્રેષ્ઠ છે?',
      a: 'અમારું ૧૦૮૦ × ૧૩૫૦ પિક્સેલ્સ (૪:૫ પોર્ટ્રેટ) ફોર્મેટ વોટ્સએપ, ફેસબુક અને ઇન્સ્ટાગ્રામ પર કોઈપણ કટ વગર સૌથી સુંદર દેખાય છે. સાથે ૯:૧૬ સ્ટોરી અને A4 પ્રિન્ટ સાઈઝ પણ ઉપલબ્ધ છે.',
    },
    {
      q: 'રબારી શૈલી કલેક્શનની ખાસિયત શું છે?',
      a: 'કચ્છ અને સૌરાષ્ટ્રના પરંપરાગત ભરતકામ, આભલા વર્ક (મિરર વર્ક) અને લોકસંસ્કૃતિના સાચા મોટિફ્સ સાથે બનાવેલા વિશેષ ડિજિટલ ફ્રેમ્સ જે આપના સ્વજનને ગૌરવપૂર્ણ શ્રદ્ધાંજલિ આપે છે.',
    },
  ];

  return (
    <div className="space-y-12 pb-16">
      {/* ========================================================
          WIZARD MODE (When user is actively creating a card)
          ======================================================== */}
      {activeMode === 'wizard' ? (
        <div className="space-y-8">
          {/* Progress Bar */}
          <div className="sticky top-20 z-40 bg-white shadow-xs">
            <StepProgress
              currentStep={currentStep}
              onStepClick={(step) => setCurrentStep(step)}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <button
                type="button"
                onClick={() => setActiveMode('landing')}
                className="text-xs font-bold text-brand-maroon hover:text-brand-saffron flex items-center gap-1 font-gujarati"
              >
                ← મુખપૃષ્ઠ પર પાછા જાઓ
              </button>

              <span className="text-xs bg-brand-goldLight text-brand-goldDark px-3 py-1 rounded-full font-bold border border-brand-gold/30">
                {cardType === 'shradhanjali' ? 'શ્રદ્ધાંજલિ કાર્ડ નિર્માણ' : 'બેસણું પત્રિકા નિર્માણ'}
              </span>
            </div>

            {/* STEP 1: Template Gallery */}
            {currentStep === 1 && (
              <TemplateGallery
                initialType={cardType}
                selectedTemplateId={selectedTemplate.id}
                onSelectTemplate={handleTemplateSelect}
              />
            )}

            {/* STEP 2: Information Form (Shradhanjali or Besna) */}
            {currentStep === 2 && (
              <>
                {cardType === 'shradhanjali' ? (
                  <ShradhanjaliForm
                    data={deceased}
                    onChange={(up) => setDeceased((prev) => ({ ...prev, ...up }))}
                    onNext={() => setCurrentStep(3)}
                    onBack={() => setCurrentStep(1)}
                  />
                ) : (
                  <BesnaForm
                    data={deceased}
                    onChange={(up) => setDeceased((prev) => ({ ...prev, ...up }))}
                    onNext={() => setCurrentStep(3)}
                    onBack={() => setCurrentStep(1)}
                  />
                )}
              </>
            )}

            {/* STEP 3: Gujarati Quote Selection */}
            {currentStep === 3 && (
              <QuoteSelector
                selectedQuote={selectedQuote}
                onSelectQuote={(q) => setSelectedQuote(q)}
                onNext={() => setCurrentStep(4)}
                onBack={() => setCurrentStep(2)}
              />
            )}

            {/* STEP 4: Family Members and Footer Form */}
            {currentStep === 4 && (
              <FamilyMembersForm
                family={family}
                onChange={(up) => setFamily((prev) => ({ ...prev, ...up }))}
                onNext={() => setCurrentStep(5)}
                onBack={() => setCurrentStep(3)}
              />
            )}

            {/* STEP 5 & 6: Live Canvas Preview & High-Res Download Editor */}
            {(currentStep === 5 || currentStep === 6) && (
              <LiveCanvasEditor
                template={selectedTemplate}
                deceased={deceased}
                quoteText={selectedQuote}
                family={family}
                cardType={cardType}
                onUpdateDeceased={(up) => setDeceased((prev) => ({ ...prev, ...up }))}
                onUpdateQuote={(q) => setSelectedQuote(q)}
                onBackToSteps={(step) => setCurrentStep(step)}
              />
            )}
          </div>
        </div>
      ) : (
        /* ========================================================
            LANDING HOMEPAGE MODE (Phase 1)
            ======================================================== */
        <>
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-b from-brand-cream via-brand-sand/30 to-brand-cream py-14 md:py-24 border-b border-brand-sand">
            {/* Traditional Decorative Motif Background Elements */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-saffron/10 blur-3xl pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
              {/* Brand Logo & Name */}
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full border border-brand-gold/40 shadow-sm">
                <span className="w-8 h-8 rounded-full bg-brand-saffron flex items-center justify-center text-white font-serifGujarati font-bold text-lg">
                  અ
                </span>
                <span className="font-serifGujarati text-2xl font-black text-brand-maroon tracking-tight">
                  અડોણી કાયા
                </span>
                <span className="text-xs uppercase text-brand-goldDark font-bold tracking-widest font-mono">
                  ADONI KAYA
                </span>
              </div>

              {/* Tagline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-brand-charcoal font-serifGujarati leading-tight tracking-tight">
                ગુજરાતી ડિઝાઇન <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-saffron via-brand-maroon to-brand-goldDark">
                  હવે સૌ માટે સરળ!
                </span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 font-gujarati max-w-2xl mx-auto leading-relaxed">
                ગ્રાફિક ડિઝાઇનિંગના કોઈપણ જ્ઞાન વિના તમારા સ્વજન માટે પવિત્ર શ્રદ્ધાંજલિ, બેસણું અને પુણ્યતિથિ કાર્ડ બનાવો. ૧૦૦% મફત, વોટરમાર્ક વગર સીધું ડાઉનલોડ.
              </p>

              {/* THE TWO PRIMARY CREATION ACTIONS (Requirement: Exactly two primary creation actions) */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto">
                {/* 1. Shradhanjali Banavo */}
                <button
                  type="button"
                  onClick={() => startCreation('shradhanjali')}
                  className="w-full sm:w-auto flex-1 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-saffron via-brand-saffronDark to-brand-maroon text-white font-bold font-serifGujarati text-lg shadow-xl shadow-brand-saffron/25 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 border border-brand-gold/30"
                >
                  <Sparkles className="w-5 h-5 text-brand-gold" />
                  <span>૧. શ્રદ્ધાંજલિ બનાવો</span>
                </button>

                {/* 2. Besna Banavo */}
                <button
                  type="button"
                  onClick={() => startCreation('besna')}
                  className="w-full sm:w-auto flex-1 px-8 py-4 rounded-2xl bg-white text-brand-maroon font-bold font-serifGujarati text-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 border-2 border-brand-gold/60"
                >
                  <HeartHandshake className="w-5 h-5 text-brand-goldDark" />
                  <span>૨. બેસણું બનાવો</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500 font-gujarati">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>કોઈપણ લૉગિન જરૂરી નથી</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>વોટરમાર્ક વગર ડાઉનલોડ</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>1080 × 1350 મોબાઇલ પરફેક્ટ</span>
                </span>
              </div>
            </div>
          </section>

          {/* Dedicated Rabari Style Spotlight Banner */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl border-2 border-amber-600/40">
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-amber-500/20 to-transparent pointer-events-none" />

              <div className="relative z-10 max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Palette className="w-3.5 h-3.5" />
                  <span>વિશેષ પરંપરાગત સંગ્રહ</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold font-serifGujarati text-white">
                  રબારી શૈલી ભરતકામ અને આભલા વર્ક કલેક્શન
                </h2>

                <p className="text-sm text-gray-300 font-gujarati leading-relaxed">
                  કચ્છ અને સૌરાષ્ટ્રના પરંપરાગત ભરતકામ, કાચ-આભલા અને સોનેરી બોર્ડર સાથે વિશેષ શ્રદ્ધાંજલિ કાર્ડ બનાવો. અધિકૃત ગુજરાતી લોકસંસ્કૃતિની અમર પરંપરા.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => startCreation('shradhanjali', 'rabari-style')}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold font-gujarati text-sm transition-all shadow-md flex items-center gap-2"
                  >
                    <span>રબારી શૈલીમાં કાર્ડ બનાવો</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Popular Templates Gallery Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-brand-saffron uppercase tracking-wider font-mono">
                  POPULAR DESIGNS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon font-serifGujarati mt-1">
                  લોકપ્રિય ગુજરાતી ટેમ્પલેટ્સ
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 font-gujarati">
                  હજારો પરિવારો દ્વારા પસંદ કરાયેલ શ્રેષ્ઠ પવિત્ર ડિઝાઇન્સ
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setCurrentStep(1);
                  setActiveMode('wizard');
                }}
                className="text-xs sm:text-sm font-bold text-brand-saffron hover:underline flex items-center gap-1 font-gujarati self-start sm:self-auto"
              >
                <span>તમામ ૧,૦૦૦+ ટેમ્પલેટ્સ જુઓ</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Template Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CARD_TEMPLATES.slice(0, 3).map((tpl) => (
                <div
                  key={tpl.id}
                  className="bg-white rounded-2xl border border-brand-sand overflow-hidden shadow-xs hover:shadow-card transition-all flex flex-col group"
                >
                  <div
                    className="aspect-[4/5] p-5 flex flex-col justify-between items-center text-center relative overflow-hidden"
                    style={{ backgroundColor: tpl.theme.bgColor }}
                  >
                    <div
                      className="absolute inset-2 border rounded-lg pointer-events-none"
                      style={{
                        borderColor: tpl.theme.accentColor,
                        borderStyle: tpl.isRabariStyle ? 'dashed' : 'solid',
                        borderWidth: '2px',
                      }}
                    />

                    <span className="text-xs font-bold font-serifGujarati z-10" style={{ color: tpl.placeholders.header.color }}>
                      {tpl.category === 'besna' ? 'પ્રાર્થના સભા / બેસણું' : 'ભાવપૂર્ણ શ્રદ્ધાંજલિ'}
                    </span>

                    <div
                      className="w-20 h-20 rounded-full border-2 flex items-center justify-center my-auto z-10 shadow-md"
                      style={{
                        borderColor: tpl.placeholders.photo.borderColor,
                        backgroundColor: '#374151',
                      }}
                    >
                      <span className="text-xs text-white">ફોટો</span>
                    </div>

                    <div className="z-10 w-full space-y-1">
                      <div className="text-base font-bold font-serifGujarati" style={{ color: tpl.placeholders.deceasedName.color }}>
                        સ્વર્ગસ્થનું નામ
                      </div>
                      <div
                        className="w-full py-1 text-[10px] font-bold rounded"
                        style={{
                          backgroundColor: tpl.theme.accentColor,
                          color: tpl.placeholders.footerBlock.color,
                        }}
                      >
                        ॥ સમસ્ત પરિવાર ॥
                      </div>
                    </div>
                  </div>

                  <div className="p-4 flex items-center justify-between gap-3 bg-white border-t border-gray-100">
                    <div>
                      <h4 className="font-bold text-gray-900 font-serifGujarati text-sm">
                        {tpl.gujaratiName}
                      </h4>
                      <p className="text-[11px] text-gray-500 font-mono">{tpl.name}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedTemplate(tpl);
                        setCardType(tpl.category === 'besna' ? 'besna' : 'shradhanjali');
                        setCurrentStep(2);
                        setActiveMode('wizard');
                      }}
                      className="px-4 py-2 rounded-xl bg-brand-saffron hover:bg-brand-saffronDark text-white font-bold text-xs shadow-sm transition-all"
                    >
                      આ બનાવો
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works (૪ સરળ પગલાં) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-white rounded-3xl border border-brand-sand p-8 sm:p-12 shadow-sm space-y-8">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <span className="text-xs font-bold text-brand-saffron uppercase tracking-wider font-mono">
                  EASY PROCESS
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon font-serifGujarati">
                  માત્ર ૪ સરળ પગલાંમાં કાર્ડ તૈયાર
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 font-gujarati">
                  કોઈપણ ડિઝાઇનરની જરૂર વિના ૨ મિનિટમાં મોબાઇલ પરથી બનાવો
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    step: '૧',
                    title: 'ટેમ્પલેટ પસંદ કરો',
                    desc: 'શ્રદ્ધાંજલિ, બેસણું કે રબારી શૈલીમાંથી મનપસંદ પરંપરાગત ડિઝાઇન પસંદ કરો.',
                    icon: Palette,
                  },
                  {
                    step: '૨',
                    title: 'વિગતો ભરો',
                    desc: 'સ્વર્ગસ્થનું નામ, ફોટો અને અવસાન તારીખ લખો. વાર અને પુણ્યતિથિ આપમેળે ગણાશે.',
                    icon: Calendar,
                  },
                  {
                    step: '૩',
                    title: 'સંદેશ અને પરિવાર',
                    desc: '૨૦૦+ સંદેશાઓમાંથી યોગ્ય શબ્દાંજલિ પસંદ કરો અને પરિવારજનોનાં નામ ઉમેરો.',
                    icon: Users,
                  },
                  {
                    step: '૪',
                    title: 'મફત ડાઉનલોડ',
                    desc: 'વોટ્સએપ સાઇઝ (1080x1350) અથવા પ્રિન્ટિંગ માટે A4 PDF સીધું ડાઉનલોડ કરો.',
                    icon: Download,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-brand-cream/40 border border-brand-sand/70 space-y-3 relative overflow-hidden"
                  >
                    <span className="text-4xl font-black text-brand-gold/30 font-serifGujarati absolute right-4 top-4">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-brand-saffron/10 text-brand-saffron flex items-center justify-center font-bold">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-brand-maroon font-serifGujarati">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 font-gujarati leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Adoni Kaya */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-bold text-brand-saffron uppercase tracking-wider font-mono">
                WHY CHOOSE US
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon font-serifGujarati">
                શા માટે અડોણી કાયા?
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-gujarati">
                ગુજરાતી લાગણીઓ અને સંસ્કૃતિને સમર્પિત ભારતનું અગ્રણી પ્લેટફોર્મ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'ઓટોમેટિક વાર્ષિક કેલ્ક્યુલેટર',
                  desc: 'અવસાન તારીખના આધારે પ્રથમ માસિક કે ૧ લી, ૨ જી, ૫ મી વાર્ષિક પુણ્યતિથિ આપમેળે નક્કી થાય છે.',
                  icon: Sparkles,
                },
                {
                  title: 'સ્માર્ટ પરિવાર લેઆઉટ એન્જિન',
                  desc: '૫ સભ્યો હોય કે ૨૫, નામો આપમેળે યોગ્ય સ્તંભોમાં સુંદર ફોન્ટ સાઈઝ સાથે ગોઠવાઈ જાય છે.',
                  icon: Layers,
                },
                {
                  title: '૧૦૦% મફત અને કોઈ વોટરમાર્ક નહીં',
                  desc: 'કોઈપણ છૂપો ચાર્જ નથી. પવિત્ર પ્રસંગે દરેક પરિવાર માટે આ સેવા સંપૂર્ણ નિઃશુલ્ક છે.',
                  icon: ShieldCheck,
                },
              ].map((feature, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-brand-sand shadow-sm space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-saffron to-brand-gold text-white flex items-center justify-center shadow-sm">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-maroon font-serifGujarati">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600 font-gujarati leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs (વારંવાર પૂછાતા પ્રશ્નો) */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold text-brand-saffron uppercase tracking-wider font-mono">
                FAQS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-maroon font-serifGujarati">
                વારંવાર પૂછાતા પ્રશ્નો
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-brand-sand overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span className="font-bold text-brand-charcoal font-serifGujarati text-sm sm:text-base">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-brand-saffron shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 font-gujarati leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
