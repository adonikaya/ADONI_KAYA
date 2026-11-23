'use client';

import React, { useState, useEffect } from 'react';
import { Upload, X, Calendar, Clock, MapPin, ZoomIn, ZoomOut, Check, Crop, Plus, Minus } from 'lucide-react';
import { DeceasedDetails } from '../../lib/types';
import { PhotoCropDialog } from './PhotoCropDialog';
import { TithiFields } from './TithiFields';
import { validateMobileNumbers } from '../../lib/mobileNumber';
import {
  getGujaratiWeekday,
  getTodayLocalDateString,
  isValidDateString,
} from '../../lib/anniversaryCalculator';

interface BesnaFormProps {
  data: DeceasedDetails;
  onChange: (updated: Partial<DeceasedDetails>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const BesnaForm: React.FC<BesnaFormProps> = ({
  data,
  onChange,
  onNext,
  onBack,
}) => {
  const [photoPreview, setPhotoPreview] = useState<string | null>(data.photoUrl || null);
  const [photoScale, setPhotoScale] = useState<number>(data.photoScale || 1);
  const [cropSource, setCropSource] = useState<string | null>(null);
  const [venueError, setVenueError] = useState<string | null>(null);
  const [nameError, setNameError] = useState<string | null>(null);
  const [customTitle, setCustomTitle] = useState('');
  const contactList = (data.contactPersons && data.contactPersons.length > 0)
    ? data.contactPersons
    : (data.mobileNumbers && data.mobileNumbers.length > 0)
      ? data.mobileNumbers.map((n) => ({ number: n, name: '' }))
      : [{ number: '', name: '' }];
  const mobileNumbers = contactList.map((c) => c.number);
  const mobileErrors = validateMobileNumbers(mobileNumbers);
  const titleOptions = ['', 'સ્વર્ગસ્થ', 'સ્વર્ગવાસી', 'સ્વ.', 'ગં. સ્વ.', 'નામ :', 'પૂજ્ય', 'દિવંગત'];
  const selectedTitle = titleOptions.includes(data.title) ? data.title : '__custom__';

  // Initialize date safely to local browser clock without overwriting user selections
  useEffect(() => {
    const today = getTodayLocalDateString();
    const updates: Partial<DeceasedDetails> = {};

    if (!data.besnaDate || !isValidDateString(data.besnaDate)) {
      updates.besnaDate = today;
      updates.besnaWeekday = getGujaratiWeekday(today);
    } else if (!data.besnaWeekday) {
      updates.besnaWeekday = getGujaratiWeekday(data.besnaDate);
    }

    if (!data.deathDate || !isValidDateString(data.deathDate)) {
      updates.deathDate = today;
    }

    if (!data.heading) {
      updates.heading = 'પ્રાર્થના સભા / બેસણું';
    }

    if (Object.keys(updates).length > 0) {
      onChange(updates);
    }
  }, []);

  const handleNext = () => {
    const name = (data.name || '').trim();
    if (!name) {
      setNameError('કૃપા કરીને સ્વર્ગસ્થ વ્યક્તિનું નામ દાખલ કરો.');
      return;
    }
    const venue = (data.besnaVenue || '').trim();
    if (venue.length === 0) {
      setVenueError('કૃપા કરીને બેસણાનું સ્થળ દાખલ કરો.');
      return;
    }
    if (mobileErrors.some(Boolean)) return;
    onChange({ name });
    setNameError(null);
    setVenueError(null);
    onNext();
  };

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

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-brand-sand shadow-sm p-6 sm:p-8 space-y-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-brand-maroon font-serifGujarati">
          બેસણા / પ્રાર્થના સભાની વિગતો ભરો
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 font-gujarati mt-1">
          બેસણાની તારીખ, સમય અને સ્થળની સચોટ માહિતી દાખલ કરો જેથી સ્નેહીજનો સમયસર પહોંચી શકે.
        </p>
      </div>

      <div className="space-y-6">
        {/* Name and Title */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="sm:col-span-1">
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              આદરવાચક
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
              <option value="ગં. સ્વ.">ગં. સ્વ.</option>
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
              className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati font-semibold"
              required
              aria-invalid={Boolean(nameError)}
            />
            {nameError && <p role="alert" className="mt-1 text-xs text-red-600 font-gujarati">{nameError}</p>}
          </div>
        </div>

        {/* Photo Upload */}
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
                    className="object-cover w-full h-full"
                    style={{ transform: `scale(${photoScale})` }}
                  />
                </div>
                <button
                  type="button"
                  onClick={removePhoto}
                  className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full p-1 shadow-md hover:bg-red-700"
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
                ફોટોગ્રાફ અપલોડ કરો (ઓપ્શનલ). જો ફોટો ન હોય તો પણ પત્રિકા સુંદર બનશે.
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

        {/* Besna Date, Weekday, Time */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              બેસણાની તારીખ <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={data.besnaDate || getTodayLocalDateString()}
              onChange={(e) => {
                const newDate = e.target.value;
                if (isValidDateString(newDate)) {
                  const weekday = getGujaratiWeekday(newDate);
                  onChange({ besnaDate: newDate, besnaWeekday: weekday });
                } else {
                  onChange({ besnaDate: newDate });
                }
              }}
              className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              બેસણાનો વાર
            </label>
            <input
              type="text"
              placeholder="ઉદા. રવિવાર"
              value={data.besnaWeekday || ''}
              onChange={(e) => onChange({ besnaWeekday: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              બેસણાનો સમય (ઓપ્શનલ)
            </label>
            <input
              type="text"
              placeholder="સમય લખો (ઉદા. બપોરે ૩:૦૦ થી ૫:૦૦)"
              value={data.besnaTime || ''}
              onChange={(e) => onChange({ besnaTime: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
            />
          </div>
        </div>

        {/* Venue and Village */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              બેસણાનું સ્થળ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="બેસણાનું સ્થળ લખો"
              value={data.besnaVenue || ''}
              onChange={(e) => {
                onChange({ besnaVenue: e.target.value });
                if (e.target.value.trim().length > 0) {
                  setVenueError(null);
                }
              }}
              className={`w-full px-4 py-2.5 text-sm bg-brand-cream/60 border rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati font-medium transition-colors ${
                venueError ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              required
            />
            {venueError && (
              <p className="mt-1.5 text-xs text-red-600 font-gujarati flex items-center gap-1">
                <span>⚠</span>
                <span>{venueError}</span>
              </p>
            )}
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

        <section className="rounded-xl border border-brand-sand bg-white p-4 space-y-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <label className="text-xs font-bold text-gray-700 font-gujarati">મોબાઇલ નંબર અને સંપર્ક વ્યક્તિનું નામ (ઓપ્શનલ)</label>
            </div>
            <button
              type="button"
              onClick={() => {
                const next = [...contactList, { number: '', name: '' }];
                onChange({
                  contactPersons: next,
                  mobileNumbers: next.map((c) => c.number),
                });
              }}
              className="inline-flex items-center gap-1 rounded-lg border border-brand-gold/50 px-2.5 py-1.5 text-xs font-gujarati hover:bg-brand-cream/40"
            >
              <Plus className="h-3.5 w-3.5 text-brand-saffron" /> બીજો નંબર ઉમેરો
            </button>
          </div>
          <div className="space-y-3">
            {contactList.map((contact, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start gap-2.5">
                <div className="flex-1 w-full">
                  <input
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="૧૦ અંકનો મોબાઇલ નંબર દાખલ કરો"
                    value={contact.number}
                    onChange={(event) => {
                      const next = [...contactList];
                      next[index] = { ...next[index], number: event.target.value };
                      onChange({
                        contactPersons: next,
                        mobileNumbers: next.map((c) => c.number),
                      });
                    }}
                    className={`w-full rounded-xl border bg-brand-cream/60 px-4 py-2.5 text-sm font-gujarati focus:outline-none focus:ring-2 focus:ring-brand-saffron ${mobileErrors[index] ? 'border-red-500' : 'border-gray-300'}`}
                    aria-invalid={Boolean(mobileErrors[index])}
                  />
                  {mobileErrors[index] && <p className="mt-1 text-xs text-red-600 font-gujarati">{mobileErrors[index]}</p>}
                </div>
                <div className="flex-1 w-full">
                  <input
                    type="text"
                    placeholder="સંપર્ક વ્યક્તિનું નામ (ઓપ્શનલ)"
                    value={contact.name || ''}
                    onChange={(event) => {
                      const next = [...contactList];
                      next[index] = { ...next[index], name: event.target.value };
                      onChange({
                        contactPersons: next,
                        mobileNumbers: next.map((c) => c.number),
                      });
                    }}
                    className="w-full rounded-xl border border-gray-300 bg-brand-cream/60 px-4 py-2.5 text-sm font-gujarati focus:outline-none focus:ring-2 focus:ring-brand-saffron"
                  />
                </div>
                {(contactList.length > 1 || contact.number || contact.name) && (
                  <button
                    type="button"
                    onClick={() => {
                      const next = contactList.filter((_, itemIndex) => itemIndex !== index);
                      const finalNext = next.length > 0 ? next : [{ number: '', name: '' }];
                      onChange({
                        contactPersons: finalNext,
                        mobileNumbers: finalNext.map((c) => c.number),
                      });
                    }}
                    className="mt-1 rounded-lg border p-2 text-red-600 hover:bg-red-50 self-end sm:self-auto"
                    aria-label="મોબાઇલ નંબર દૂર કરો"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Optional Tithi and Heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              તિથિ (ઓપ્શનલ)
            </label>
            <TithiFields data={data} onChange={onChange} />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              મુખ્ય શીર્ષક (Heading)
            </label>
            <input
              type="text"
              placeholder="પ્રાર્થના સભા / બેસણું"
              value={data.heading || 'પ્રાર્થના સભા / બેસણું'}
              onChange={(e) => onChange({ heading: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati font-bold text-brand-maroon"
            />
          </div>
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
          <span>આગળ વધો (શોક સંદેશ પસંદ કરો)</span>
          <Check className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
      {cropSource && (
        <PhotoCropDialog
          source={cropSource}
          onConfirm={confirmPhotoCrop}
          onCancel={() => setCropSource(null)}
        />
      )}
    </div>
  );
};
