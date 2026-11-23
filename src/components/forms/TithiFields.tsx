'use client';

import React from 'react';
import { DeceasedDetails } from '../../lib/types';
import {
  ADHIK_GUJARATI_MONTHS,
  getTithisForPaksha,
  GUJARATI_MONTHS,
  normalizeTithiName,
  Paksha,
  parseTithi,
} from '../../lib/tithi';

interface TithiFieldsProps {
  data: DeceasedDetails;
  onChange: (updated: Partial<DeceasedDetails>) => void;
}

export const TithiFields: React.FC<TithiFieldsProps> = ({ data, onChange }) => {
  const parsed = parseTithi(data.tithi || '');
  const paksha = data.tithiPaksha || parsed?.paksha || '';
  const tithiName = normalizeTithiName(data.tithiName || parsed?.name || '');
  const tithis = getTithisForPaksha(paksha);
  const tithiLabels: Record<string, string> = {
    એકમ: 'એકમ (પડવો / પ્રતિપદા)',
    બીજ: 'બીજ (દ્વિતીયા)',
    ત્રીજ: 'ત્રીજ (તૃતીયા)',
    ચોથ: 'ચોથ (ચતુર્થી)',
    પાંચમ: 'પાંચમ (પંચમી)',
    છઠ: 'છઠ (ષષ્ઠી)',
    સાતમ: 'સાતમ (સપ્તમી)',
    આઠમ: 'આઠમ (અષ્ટમી)',
    નોમ: 'નોમ (નવમી)',
    દશમ: 'દશમ (દશમી)',
    અગિયારસ: 'અગિયારસ (એકાદશી)',
    બારસ: 'બારસ (દ્વાદશી)',
    તેરસ: 'તેરસ (ત્રયોદશી)',
    ચૌદસ: 'ચૌદસ (ચતુર્દશી)',
    પૂનમ: 'પૂનમ (પૂર્ણિમા)',
    અમાસ: 'અમાસ (અમાવાસ્યા)',
  };

  const handlePakshaChange = (nextPaksha: Paksha | '') => {
    const compatibleName = nextPaksha && getTithisForPaksha(nextPaksha).includes(tithiName)
      ? tithiName
      : '';
    onChange({
      tithiPaksha: nextPaksha || undefined,
      tithiName: compatibleName || undefined,
      tithi: nextPaksha && compatibleName
        ? `${nextPaksha === 'સુદ પક્ષ' ? 'સુદ' : 'વદ'} ${compatibleName}`
        : '',
    });
  };

  const handleTithiChange = (name: string) => {
    onChange({
      tithiName: name || undefined,
      tithi: paksha && name
        ? `${paksha === 'સુદ પક્ષ' ? 'સુદ' : 'વદ'} ${name}`
        : '',
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <div>
        <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
          ગુજરાતી મહિનો
        </label>
        <select
          value={data.tithiMonth || ''}
          onChange={(event) => onChange({ tithiMonth: event.target.value || undefined })}
          className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
        >
          <option value="">મહિનો પસંદ કરો</option>
          <optgroup label="નિયમિત મહિના">
            {GUJARATI_MONTHS.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </optgroup>
          <optgroup label="અધિક માસ">
            {ADHIK_GUJARATI_MONTHS.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </optgroup>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
          પક્ષ
        </label>
        <select
          value={paksha}
          onChange={(event) => handlePakshaChange(event.target.value as Paksha | '')}
          className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati"
        >
          <option value="">પક્ષ પસંદ કરો</option>
          <option value="સુદ પક્ષ">સુદ પક્ષ (શુક્લ પક્ષ)</option>
          <option value="વદ પક્ષ">વદ પક્ષ (કૃષ્ણ પક્ષ)</option>
        </select>
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-700 mb-1.5 font-gujarati">
          તિથિ પસંદ કરો
        </label>
        <select
          value={tithiName}
          onChange={(event) => handleTithiChange(event.target.value)}
          disabled={!paksha}
          className="w-full px-4 py-2.5 text-sm bg-brand-cream/60 border border-gray-300 rounded-xl focus:ring-2 focus:ring-brand-saffron focus:outline-none font-gujarati disabled:opacity-60"
        >
          <option value="">તિથિ પસંદ કરો</option>
          {tithis.map((tithi) => (
            <option key={tithi} value={tithi}>{tithiLabels[tithi] || tithi}</option>
          ))}
        </select>
      </div>
      <p className="md:col-span-3 text-[11px] leading-relaxed text-gray-500 font-gujarati">
        પંચાંગ મુજબ પસંદ કરો: સુદ પક્ષ અમાસ પછીથી પૂનમ સુધી અને વદ પક્ષ પૂનમ પછીથી અમાસ સુધી હોય છે. અધિક માસ હોય તો તે પસંદ કરો; તિથિ અંગ્રેજી તારીખ પરથી આપમેળે ગણાતી નથી.
      </p>
    </div>
  );
};
