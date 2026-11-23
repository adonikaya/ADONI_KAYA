'use client';

import React, { useState, useEffect } from 'react';
import { Upload, X, Calendar, RefreshCw, ZoomIn, ZoomOut, Check, Crop } from 'lucide-react';
import { DeceasedDetails } from '../../lib/types';
import { PhotoCropDialog } from './PhotoCropDialog';
import { TithiFields } from './TithiFields';
import {
  calculateAnniversary,
  getGujaratiWeekday,
  getTodayLocalDateString,
  isValidDateString,
} from '../../lib/anniversaryCalculator';

interface ShradhanjaliFormProps {
  data: DeceasedDetails;
  onChange: (updated: Partial<DeceasedDetails>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const ShradhanjaliForm: React.FC<ShradhanjaliFormProps> = ({
  data,
  onChange,
  onNext,
  onBack,
}) => {
  const [photoPreview, setPhotoPreview] = useState<string | null>(data.photoUrl || null);
  const [photoScale, setPhotoScale] = useState<number>(data.photoScale || 1);
  const [cropSource, setCropSource] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [customTitle, setCustomTitle] = useState('');

  const titleOptions = ['', 'સ્વર્ગસ્થ', 'સ્વર્ગવાસી', 'સ્વ.', 'ગં. સ્વ.', 'નામ :', 'પૂજ્ય', 'દિવંગત'];
  const selectedTitle = titleOptions.includes(data.title) ? data.title : '__custom__';

  const handleNext = () => {
    const name = (data.name || '').trim();
    if (!name) {
      setNameError('કૃપા કરીને સ્વર્ગસ્થ વ્યક્તિનું નામ દાખલ કરો.');
      return;
    }
    onChange({ name });
    setNameError(null);
    onNext();
  };

  // Ensure dates are valid local browser dates without overwriting user choices
  useEffect(() => {
    const today = getTodayLocalDateString();
    const updates: Partial<DeceasedDetails> = {};

    if (!data.deathDate || !isValidDateString(data.deathDate)) {
      updates.deathDate = today;
      updates.weekday = getGujaratiWeekday(today);
    } else if (!data.weekday) {
      updates.weekday = getGujaratiWeekday(data.deathDate);
    }

    if (!data.eventDate || !isValidDateString(data.eventDate)) {
      updates.eventDate = today;
    }

    if (Object.keys(updates).length > 0) {
      onChange(updates);
    }
  }, []);

  // Recalculate anniversary heading whenever death date or event date changes
  useEffect(() => {
    const effectiveDeath = isValidDateString(data.deathDate) ? data.deathDate : getTodayLocalDateString();
    const effectiveEvent = isValidDateString(data.eventDate || '') ? (data.eventDate as string) : getTodayLocalDateString();

    if (!data.isHeadingOverridden) {
      const result = calculateAnniversary(effectiveDeath, effectiveEvent);
      if (result.heading && result.heading !== data.heading) {
        onChange({ heading: result.heading });
      }
    }
  }, [data.deathDate, data.eventDate, data.isHeadingOverridden]);

  // Handle Photo File Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setCropSource(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhotoPreview(null);
    onChange({ photoUrl: null });
  };

  const confirmPhotoCrop = (croppedPhoto: string) => {
    setPhotoPreview(croppedPhoto);
    onChange({ photoUrl: croppedPhoto, photoScale: 1, photoXOffset: 0, photoYOffset: 0 });
    setCropSource(null);
  };

  const effectiveDeathDate = isValidDateString(data.deathDate) ? data.deathDate : getTodayLocalDateString();
  const effectiveEventDate = isValidDateString(data.eventDate || '') ? (data.eventDate as string) : getTodayLocalDateString();
  const anniversaryInfo = calculateAnniversary(effectiveDeathDate, effectiveEventDate);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-brand-sand shadow-sm p-6 sm:p-8 space-y-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-brand-maroon font-serifGujarati">
          સ્વર્ગસ્થની પવિત્ર વિગતો ભરો
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-gujarati mt-1">
          કૃપા કરીને સાચી વિગતો દર્શાવો, સિસ્ટમ આપમેળે વાર અને વાર્ષિક શ્રદ્ધાંજલિની ગણતરી કરશે.
        </p>
      </div>

      <div className="space-y-6">
        {/* Name and Honorific Title */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="sm:col-span-1">
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              આદરવાચક શબ્દ
            </label>
            <select
              value={selectedTitle}
              onChange={(e) => {
                if (e.target.value === '__custom__') {
                  setCustomTitle('');
                  onChange({ title: '' });
                } else {
                  onChange({ title: e.target.value });
                }
              }}
              className="w-full px-3 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
            >
              <option value="">કોઈ ઉપસર્ગ નહીં</option>
              <option value="સ્વર્ગસ્થ">સ્વર્ગસ્થ</option>
              <option value="સ્વર્ગવાસી">સ્વર્ગવાસી</option>
              <option value="સ્વ.">સ્વ.</option>
              <option value="નામ :">નામ :</option>
              <option value="ગં. સ્વ.">ગં. સ્વ. (ગંગાસ્વરૂપ)</option>
              <option value="પૂજ્ય">પૂજ્ય</option>
              <option value="દિવંગત">દિવંગત</option>
              <option value="__custom__">અન્ય ઉપસર્ગ</option>
            </select>
            {selectedTitle === '__custom__' && (
              <input
                type="text"
                value={customTitle || data.title}
                onChange={(event) => {
                  setCustomTitle(event.target.value);
                  onChange({ title: event.target.value });
                }}
                placeholder="તમારો ઉપસર્ગ લખો"
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 text-xs font-gujarati"
              />
            )}
            <p className="mt-2 text-[11px] leading-relaxed text-gray-500 font-gujarati">
              સ્વ. એ સ્વર્ગસ્થનો સંક્ષેપ છે અને સ્ત્રી કે પુરુષ બંને માટે વાપરી શકાય છે. સ્વર્ગસ્થ / સ્વર્ગવાસી પણ પસંદ કરી શકો. ગં. સ્વ. (ગંગાસ્વરૂપ) સામાન્ય રીતે વિધવા માટે છે; આ આપમેળે લાગુ પડતું નથી. લી. માત્ર પરિવાર વિભાગનું શીર્ષક છે, નામનો ઉપસર્ગ નથી. ખાતરી ન હોય તો ઉપસર્ગ ખાલી રાખો.
            </p>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              સ્વર્ગસ્થનું પૂરું નામ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="સ્વર્ગસ્થનું પૂરું નામ દાખલ કરો"
              value={data.name || ''}
              onChange={(e) => {
                onChange({ name: e.target.value });
                if (e.target.value.trim()) setNameError(null);
              }}
              onBlur={(e) => onChange({ name: e.target.value.trim() })}
              className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati font-semibold text-gray-900"
              required
              aria-invalid={Boolean(nameError)}
            />
            {nameError && <p role="alert" className="mt-1 text-xs text-red-600 font-gujarati">{nameError}</p>}
          </div>
        </div>

        {/* Photo Upload with Zoom and Pan */}
        <div className="p-4 rounded-xl border border-dashed border-brand-gold/60 bg-brand-cream/30 space-y-3">
          <label className="block text-xs font-bold text-brand-maroon font-gujarati">
            સ્વર્ગસ્થનો ફોટોગ્રાફ (ઓપ્શનલ)
          </label>
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {photoPreview ? (
              <div className="relative group">
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-brand-gold shadow-md relative bg-gray-100 flex items-center justify-center">
                  <img
                    src={photoPreview}
                    alt="Deceased Preview"
                    className="object-cover w-full h-full transition-transform"
                    style={{ transform: `scale(${photoScale})` }}
                  />
                </div>
                <button
                  type="button"
                  onClick={removePhoto}
                  className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full p-1 shadow-md hover:bg-red-700"
                  title="ફોટો દૂર કરો"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <label className="w-28 h-28 rounded-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:border-brand-saffron hover:bg-white cursor-pointer transition-colors">
                <Upload className="w-6 h-6 mb-1" />
                <span className="text-[10px] font-gujarati">ફોટો અપલોડ</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            )}

            <div className="flex-1 space-y-2 text-center sm:text-left">
              <p className="text-xs text-gray-600 font-gujarati">
                સ્પષ્ટ ફોટોગ્રાફ અપલોડ કરો (JPG, PNG). જો ફોટો અપલોડ ન કરો તો કાર્ડ પર કોઈ ખાલી જગ્યા નહીં રહે.
              </p>
              {photoPreview && (
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setCropSource(photoPreview)}
                    className="inline-flex items-center gap-1 rounded-lg border px-2 py-1 text-xs font-gujarati"
                  >
                    <Crop className="h-4 w-4" /> ફોટો કાપો / ફેરવો
                  </button>
                  <span className="text-xs text-gray-500 font-gujarati">ઝૂમ:</span>
                  <button
                    type="button"
                    onClick={() => {
                      const next = Math.max(0.8, photoScale - 0.1);
                      setPhotoScale(next);
                      onChange({ photoScale: next });
                    }}
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200"
                  >
                    <ZoomOut className="w-4 h-4 text-gray-700" />
                  </button>
                  <span className="text-xs font-mono font-bold w-12 text-center">
                    {Math.round(photoScale * 100)}%
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const next = Math.min(2.5, photoScale + 0.1);
                      setPhotoScale(next);
                      onChange({ photoScale: next });
                    }}
                    className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200"
                  >
                    <ZoomIn className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dates & Anniversary Engine */}
        <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200/70 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-amber-900 font-serifGujarati flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-700" />
              <span>અવસાન તારીખ અને સ્માર્ટ વાર્ષિક કેલ્ક્યુલેટર</span>
            </h3>
            <span className="text-[11px] bg-amber-100 text-amber-800 font-medium px-2 py-0.5 rounded-full font-gujarati">
              ઓટોમેટિક ગણતરી
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
                અવસાન તારીખ <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={data.deathDate || getTodayLocalDateString()}
                onChange={(e) => {
                  const newDate = e.target.value;
                  if (isValidDateString(newDate)) {
                    const weekday = getGujaratiWeekday(newDate);
                    onChange({ deathDate: newDate, weekday });
                  } else {
                    onChange({ deathDate: newDate });
                  }
                }}
                className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-sans"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
                અવસાનનો વાર (આપમેળે નક્કી થશે)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={data.weekday || ''}
                  onChange={(e) => onChange({ weekday: e.target.value })}
                  placeholder="ઉદા. ગુરુવાર"
                  className="flex-1 px-3 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (data.deathDate && isValidDateString(data.deathDate)) {
                      onChange({ weekday: getGujaratiWeekday(data.deathDate) });
                    }
                  }}
                  className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600"
                  title="વાર ફરીથી ગણો"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Event Date & Calculated Anniversary Result */}
          <div className="pt-2 border-t border-amber-200/60 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 font-gujarati">
                ઇવેન્ટ / શ્રદ્ધાંજલિ તારીખ
              </label>
              <input
                type="date"
                value={data.eventDate || getTodayLocalDateString()}
                onChange={(e) => onChange({ eventDate: e.target.value })}
                className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none"
              />
              <p className="text-[11px] text-gray-500 mt-1 font-gujarati">
                {anniversaryInfo.explanation}
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 font-gujarati">
                મુખ્ય હેડિંગ (આપમેળે તૈયાર થયેલ)
              </label>
              <input
                type="text"
                value={data.heading || ''}
                onChange={(e) =>
                  onChange({ heading: e.target.value, isHeadingOverridden: true })
                }
                className="w-full px-3 py-2 text-sm bg-white border-2 border-amber-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati font-bold text-brand-maroon"
              />
              {data.isHeadingOverridden && (
                <button
                  type="button"
                  onClick={() => {
                    const result = calculateAnniversary(effectiveDeathDate, effectiveEventDate);
                    onChange({ heading: result.heading, isHeadingOverridden: false });
                  }}
                  className="text-[11px] text-amber-700 hover:underline mt-1 font-gujarati block"
                >
                  ઓટોમેટિક ગણતરી ફરી લાગુ કરો
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Hindu Tithi & Village */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              હિન્દુ તિથિ (ઓપ્શનલ)
            </label>
            <TithiFields data={data} onChange={onChange} />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              ગામનું નામ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="ગામનું નામ દાખલ કરો"
              value={data.village || ''}
              onChange={(e) => onChange({ village: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
              required
            />
          </div>
        </div>

        {/* Optional City / Taluka & Birth Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              તાલુકો / જિલ્લો / શહેર (ઓપ્શનલ)
            </label>
            <input
              type="text"
              placeholder="તાલુકો અથવા શહેર લખો"
              value={data.talukaCity || ''}
              onChange={(e) => onChange({ talukaCity: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              જન્મ તારીખ (ઓપ્શનલ)
            </label>
            <input
              type="date"
              value={data.birthDate || ''}
              onChange={(e) => onChange({ birthDate: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none"
            />
          </div>
          {cropSource && (
            <PhotoCropDialog
              source={cropSource}
              onConfirm={confirmPhotoCrop}
              onCancel={() => setCropSource(null)}
            />
          )}
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="pt-6 border-t border-gray-200 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
        <button
          type="button"
          onClick={onBack}
          className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 font-gujarati text-center"
        >
          પાછા જાઓ
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="w-full sm:w-auto px-4 sm:px-8 py-2.5 rounded-xl bg-brand-saffron text-white text-sm font-bold hover:bg-brand-saffronDark shadow-md flex items-center justify-center gap-2 font-gujarati text-center"
        >
          <span>આગળ વધો (સંદેશ પસંદ કરો)</span>
          <Check className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
