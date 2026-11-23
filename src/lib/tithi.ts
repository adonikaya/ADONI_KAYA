export type Paksha = 'સુદ પક્ષ' | 'વદ પક્ષ';

export const GUJARATI_MONTHS = [
  'કારતક',
  'માગશર',
  'પોષ',
  'મહા',
  'ફાગણ',
  'ચૈત્ર',
  'વૈશાખ',
  'જેઠ',
  'અષાઢ',
  'શ્રાવણ',
  'ભાદરવો',
  'આસો',
] as const;

export const ADHIK_GUJARATI_MONTHS = GUJARATI_MONTHS.map((month) => `અધિક ${month}`);

const COMMON_TITHIS = [
  'એકમ',
  'બીજ',
  'ત્રીજ',
  'ચોથ',
  'પાંચમ',
  'છઠ',
  'સાતમ',
  'આઠમ',
  'નોમ',
  'દશમ',
  'અગિયારસ',
  'બારસ',
  'તેરસ',
  'ચૌદસ',
];
const TITHI_ALIASES: Record<string, string> = {
  પ્રતિપદા: 'એકમ',
  પડવો: 'એકમ',
  છઠ્ઠ: 'છઠ',
  દસમ: 'દશમ',
  અગિયારશ: 'અગિયારસ',
  ચૌદશ: 'ચૌદસ',
  પૂર્ણિમા: 'પૂનમ',
  અમાવાસ્યા: 'અમાસ',
};
const ALL_TITHIS = [...COMMON_TITHIS, 'પૂનમ', 'અમાસ', ...Object.keys(TITHI_ALIASES)];

export function normalizeTithiName(name: string): string {
  return TITHI_ALIASES[name.trim()] || name.trim();
}

export function getTithisForPaksha(paksha: Paksha | ''): string[] {
  if (!paksha) return [];
  return paksha === 'સુદ પક્ષ'
    ? [...COMMON_TITHIS, 'પૂનમ']
    : [...COMMON_TITHIS, 'અમાસ'];
}

export function parseTithi(value: string): { paksha: Paksha; name: string } | null {
  const match = /^(સુદ|વદ)\s+(.+)$/.exec(value.trim());
  if (!match) return null;
  const paksha: Paksha = match[1] === 'સુદ' ? 'સુદ પક્ષ' : 'વદ પક્ષ';
  const name = normalizeTithiName(match[2]);
  return getTithisForPaksha(paksha).includes(name)
    ? { paksha, name }
    : null;
}

export function formatTithi(
  paksha: Paksha | undefined,
  name: string | undefined,
  month?: string,
  legacyValue?: string
): string {
  if (paksha || name) {
    const normalizedName = name ? normalizeTithiName(name) : '';
    if (!paksha || !normalizedName || !getTithisForPaksha(paksha).includes(normalizedName)) return '';
    const pakshaLabel = paksha === 'સુદ પક્ષ' ? 'સુદ' : 'વદ';
    return [month?.trim(), pakshaLabel, normalizedName].filter(Boolean).join(' ');
  }
  const legacy = legacyValue?.trim() || '';
  const parsed = parseTithi(legacy);
  if (parsed) {
    const pakshaLabel = parsed.paksha === 'સુદ પક્ષ' ? 'સુદ' : 'વદ';
    return [month?.trim(), pakshaLabel, parsed.name].filter(Boolean).join(' ');
  }
  const legacyMatch = /^(સુદ|વદ)\s+(.+)$/.exec(legacy);
  return legacyMatch && ALL_TITHIS.includes(normalizeTithiName(legacyMatch[2])) ? '' : legacy;
}
