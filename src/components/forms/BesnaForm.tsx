'use client';

import React, { useState, useEffect } from 'react';
import { Upload, X, Calendar, Clock, MapPin, ZoomIn, ZoomOut, Check } from 'lucide-react';
import { DeceasedDetails } from '../../lib/types';
import { getGujaratiWeekday } from '../../lib/anniversaryCalculator';

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

  // Recalculate weekday when besnaDate changes
  useEffect(() => {
    if (data.besnaDate && !data.besnaWeekday) {
      onChange({ besnaWeekday: getGujaratiWeekday(data.besnaDate) });
    }
  }, [data.besnaDate]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setPhotoPreview(result);
        onChange({ photoUrl: result, photoScale: 1 });
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setPhotoPreview(null);
    onChange({ photoUrl: null });
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
              value={data.title}
              onChange={(e) => onChange({ title: e.target.value })}
              className="w-full px-3 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
            >
              <option value="સ્વર્ગસ્થ">સ્વર્ગસ્થ</option>
              <option value="સ્વ.">સ્વ.</option>
              <option value="ગં.સ્વ.">ગં.સ્વ.</option>
              <option value="પૂજ્ય">પૂજ્ય</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              સ્વર્ગસ્થનું પૂરું નામ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="ઉદા. પટેલ હિંમતલાલ મોહનલાલ"
              value={data.name}
              onChange={(e) => onChange({ name: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati font-semibold"
              required
            />
          </div>
        </div>

        {/* Photo Upload */}
        <div className="p-4 rounded-xl border border-dashed border-brand-gold/60 bg-brand-cream/30 space-y-3">
          <label className="block text-xs font-bold text-brand-maroon font-gujarati">
            સ્વર્ગસ્થનો ફોટોગ્રાફ
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
                <div className="flex items-center justify-center sm:justify-start gap-3 pt-1">
                  <span className="text-xs text-gray-500">ઝૂમ:</span>
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
              value={data.besnaDate || ''}
              onChange={(e) => {
                const newDate = e.target.value;
                const weekday = getGujaratiWeekday(newDate);
                onChange({ besnaDate: newDate, besnaWeekday: weekday });
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
              બેસણાનો સમય <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="ઉદા. બપોરે ૩:૦૦ થી ૫:૦૦"
              value={data.besnaTime || ''}
              onChange={(e) => onChange({ besnaTime: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
              required
            />
          </div>
        </div>

        {/* Venue and Village */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              બેસણાનું સ્થળ (Venue) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="ઉદા. પટેલ સેવા સમાજ વાડી / નિવાસસ્થાને"
              value={data.besnaVenue || ''}
              onChange={(e) => onChange({ besnaVenue: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              ગામનું નામ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="ઉદા. ગોંડલ"
              value={data.village}
              onChange={(e) => onChange({ village: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
              required
            />
          </div>
        </div>

        {/* Optional Tithi and Heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
              તિથિ (ઓપ્શનલ)
            </label>
            <input
              type="text"
              placeholder="ઉદા. કારતક વદ બીજ"
              value={data.tithi}
              onChange={(e) => onChange({ tithi: e.target.value })}
              className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
            />
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
      <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
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
          <span>આગળ વધો (શોક સંદેશ પસંદ કરો)</span>
          <Check className="w-4 h-4 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
