// Automatic Monthly and Yearly Anniversary Calculation Engine
// for ADONI KAYA (અડોણી કાયા)

export interface AnniversaryResult {
  heading: string;
  type: 'monthly' | 'yearly' | 'recent' | 'custom' | 'invalid';
  count: number;
  explanation: string;
  isCompleted: boolean;
}

export const GUJARATI_MONTH_ORDINALS: Record<number, string> = {
  1: 'પ્રથમ માસિક શ્રદ્ધાંજલિ',
  2: 'બીજી માસિક શ્રદ્ધાંજલિ',
  3: 'ત્રીજી માસિક શ્રદ્ધાંજલિ',
  4: 'ચોથી માસિક શ્રદ્ધાંજલિ',
  5: 'પાંચમી માસિક શ્રદ્ધાંજલિ',
  6: 'છઠ્ઠી માસિક શ્રદ્ધાંજલિ',
  7: 'સાતમી માસિક શ્રદ્ધાંજલિ',
  8: 'આઠમી માસિક શ્રદ્ધાંજલિ',
  9: 'નવમી માસિક શ્રદ્ધાંજલિ',
  10: 'દસમી માસિક શ્રદ્ધાંજલિ',
  11: 'અગિયારમી માસિક શ્રદ્ધાંજલિ',
  12: 'પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ',
};

export const GUJARATI_YEAR_ORDINALS: Record<number, string> = {
  1: 'પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ',
  2: 'બીજી વાર્ષિક શ્રદ્ધાંજલિ',
  3: 'ત્રીજી વાર્ષિક શ્રદ્ધાંજલિ',
  4: 'ચોથી વાર્ષિક શ્રદ્ધાંજલિ',
  5: 'પાંચમી વાર્ષિક શ્રદ્ધાંજલિ',
  6: 'છઠ્ઠી વાર્ષિક શ્રદ્ધાંજલિ',
  7: 'સાતમી વાર્ષિક શ્રદ્ધાંજલિ',
  8: 'આઠમી વાર્ષિક શ્રદ્ધાંજલિ',
  9: 'નવમી વાર્ષિક શ્રદ્ધાંજલિ',
  10: 'દસમી વાર્ષિક શ્રદ્ધાંજલિ',
  11: '૧૧મી વાર્ષિક શ્રદ્ધાંજલિ',
  12: '૧૨મી વાર્ષિક શ્રદ્ધાંજલિ',
  15: '૧૫મી વાર્ષિક શ્રદ્ધાંજલિ',
  20: '૨૦મી વાર્ષિક શ્રદ્ધાંજલિ',
  25: '૨૫મી વાર્ષિક શ્રદ્ધાંજલિ',
  50: '૫૦મી વાર્ષિક શ્રદ્ધાંજલિ',
};

export function toGujaratiDigits(num: number | string): string {
  const gujDigits = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];
  return num.toString().replace(/\d/g, (ch) => gujDigits[parseInt(ch, 10)] ?? ch);
}

export const GUJARATI_WEEKDAYS = [
  'રવિવાર', // Sunday
  'સોમવાર', // Monday
  'મંગળવાર', // Tuesday
  'બુધવાર', // Wednesday
  'ગુરુવાર', // Thursday
  'શુક્રવાર', // Friday
  'શનિવાર', // Saturday
];

export const HINDU_MONTHS_GUJARATI = [
  'કાર્તક',
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
];

export const HINDU_PAKSHA_GUJARATI = [
  'સુદ (શુક્લ પક્ષ)',
  'વદ (કૃષ્ણ પક્ષ)',
];

export const HINDU_TITHIS_GUJARATI = [
  'એકમ (પડવો)',
  'બીજ',
  'ત્રીજ',
  'ચોથ',
  'પાંચમ',
  'છઠ્ઠ',
  'સાતમ',
  'આઠમ',
  'નોમ',
  'દસમ',
  'અગિયારસ',
  'બારસ',
  'તેરસ',
  'ચૌદશ',
  'પૂનમ / અમાસ',
];

/**
 * Returns today's local date in valid YYYY-MM-DD format based on user's local browser clock.
 * Avoids UTC timezone shift bugs.
 */
export function getTodayLocalDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Validates whether a date string is a real valid calendar date.
 * Handles month lengths and leap years (e.g. 2024-02-29 is valid, 2026-06-31 is invalid).
 */
export function isValidDateString(dateStr: string): boolean {
  if (!dateStr || typeof dateStr !== 'string') return false;
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return false;
  const year = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const day = parseInt(match[3], 10);

  if (year < 1900 || year > 2100) return false;
  if (month < 1 || month > 12) return false;

  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) return false;

  return true;
}

/**
 * Formats a date for cards as DD/MM/YYYY using Gujarati numerals.
 * e.g. "2026-11-12" -> "૧૨/૧૧/૨૦૨૬"
 */
export function formatCardDate(dateStr: string, useGujaratiDigits = true): string {
  if (!dateStr) return '';
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  let d: string, m: string, y: string;
  if (match) {
    y = match[1];
    m = match[2];
    d = match[3];
  } else {
    const dmy = dateStr.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
    if (dmy) {
      d = dmy[1].padStart(2, '0');
      m = dmy[2].padStart(2, '0');
      y = dmy[3];
    } else {
      return dateStr;
    }
  }

  const formatted = `${d}/${m}/${y}`;
  if (!useGujaratiDigits) return formatted;

  const gujDigits = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];
  return formatted.replace(/\d/g, (ch) => gujDigits[parseInt(ch, 10)] ?? ch);
}

/**
 * Calculates the day of the week in Gujarati from an ISO date string (YYYY-MM-DD).
 */
export function getGujaratiWeekday(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString + 'T00:00:00');
  if (isNaN(date.getTime())) return '';
  return GUJARATI_WEEKDAYS[date.getDay()];
}

/**
 * Formats a Gregorian date string into Gujarati format (e.g. "૩૧ જુલાઈ ૨૦૨૬")
 */
export function formatGujaratiDate(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString + 'T00:00:00');
  if (isNaN(date.getTime())) return dateString;

  const gujaratiDigits = ['૦', '૧', '૨', '૩', '૪', '૫', '૬', '૭', '૮', '૯'];
  const toGujaratiNum = (num: number) =>
    num.toString().split('').map(d => gujaratiDigits[parseInt(d, 10)] ?? d).join('');

  const monthsGujarati = [
    'જાન્યુઆરી', 'ફેબ્રુઆરી', 'માર્ચ', 'એપ્રિલ', 'મે', 'જૂન',
    'જુલાઈ', 'ઓગસ્ટ', 'સપ્ટેમ્બર', 'ઓક્ટોબર', 'નવેમ્બર', 'ડિસેમ્બર'
  ];

  const day = date.getDate();
  const month = monthsGujarati[date.getMonth()];
  const year = date.getFullYear();

  return `${toGujaratiNum(day)} ${month} ${toGujaratiNum(year)}`;
}

/**
 * Calculates the completed monthly or yearly anniversary.
 * Handles month lengths, leap years, and accurate calendar anniversary rules.
 */
export function calculateAnniversary(
  deathDateStr: string,
  eventDateStr?: string
): AnniversaryResult {
  if (!deathDateStr) {
    return {
      heading: 'ભાવપૂર્ણ શ્રદ્ધાંજલિ',
      type: 'recent',
      count: 0,
      explanation: 'તારીખ દર્શાવેલ નથી',
      isCompleted: false,
    };
  }

  const deathDate = new Date(deathDateStr + 'T00:00:00');
  if (isNaN(deathDate.getTime())) {
    return {
      heading: 'ભાવપૂર્ણ શ્રદ્ધાંજલિ',
      type: 'custom',
      count: 0,
      explanation: 'અમાન્ય તારીખ',
      isCompleted: false,
    };
  }

  const eventDate = eventDateStr
    ? new Date(eventDateStr + 'T00:00:00')
    : new Date(); // Defaults to today

  if (isNaN(eventDate.getTime())) {
    return {
      heading: 'ભાવપૂર્ણ શ્રદ્ધાંજલિ',
      type: 'custom',
      count: 0,
      explanation: 'અમાન્ય ઇવેન્ટ તારીખ',
      isCompleted: false,
    };
  }

  // Check if event date is before death date
  if (eventDate.getTime() < deathDate.getTime()) {
    return {
      heading: 'ભાવપૂર્ણ શ્રદ્ધાંજલિ',
      type: 'invalid',
      count: 0,
      explanation: 'ઇવેન્ટ તારીખ અવસાન તારીખથી આગળની હોવી જોઈએ',
      isCompleted: false,
    };
  }

  // Calculate difference in completed years and months
  const dYear = deathDate.getFullYear();
  const dMonth = deathDate.getMonth();
  const dDay = deathDate.getDate();

  const eYear = eventDate.getFullYear();
  const eMonth = eventDate.getMonth();
  const eDay = eventDate.getDate();

  // Total elapsed calendar months
  let totalMonths = (eYear - dYear) * 12 + (eMonth - dMonth);

  // If the event day hasn't reached the death day yet in the current month,
  // we haven't completed the current month.
  // Exception: handle end-of-month (e.g. death on 31 Jan, event on 28 Feb in non-leap year is a full month)
  const daysInEventMonth = new Date(eYear, eMonth + 1, 0).getDate();
  const effectiveDeathDay = Math.min(dDay, daysInEventMonth);

  if (eDay < effectiveDeathDay) {
    totalMonths--;
  }

  if (totalMonths < 1) {
    // Less than 1 month completed: Recent loss
    return {
      heading: 'ભાવપૂર્ણ શ્રદ્ધાંજલિ',
      type: 'recent',
      count: 0,
      explanation: 'અવસાનને ૧ મહિનો પૂરો થયો નથી',
      isCompleted: true,
    };
  }

  // Check if exactly full years completed (totalMonths % 12 === 0 or close on anniversary day)
  const completedYears = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  if (completedYears >= 1 && (remainingMonths === 0 || remainingMonths === 11 && eDay >= effectiveDeathDay)) {
    // Yearly anniversary
    const yearHeading = GUJARATI_YEAR_ORDINALS[completedYears] ||
      `${toGujaratiDigits(completedYears)}મી વાર્ષિક શ્રદ્ધાંજલિ`;

    return {
      heading: yearHeading,
      type: 'yearly',
      count: completedYears,
      explanation: `સંપૂર્ણ ${completedYears} વર્ષ પૂર્ણ થયેલ છે`,
      isCompleted: true,
    };
  }

  // Otherwise, monthly anniversary
  if (totalMonths <= 11) {
    const monthHeading = GUJARATI_MONTH_ORDINALS[totalMonths] || `${toGujaratiDigits(totalMonths)}મી માસિક શ્રદ્ધાંજલિ`;
    return {
      heading: monthHeading,
      type: 'monthly',
      count: totalMonths,
      explanation: `સંપૂર્ણ ${totalMonths} મહિના પૂર્ણ થયેલ છે`,
      isCompleted: true,
    };
  }

  // Multi-year with extra months (e.g. 1 year 4 months)
  return {
    heading: GUJARATI_YEAR_ORDINALS[completedYears] || `${toGujaratiDigits(completedYears)}મી વાર્ષિક શ્રદ્ધાંજલિ`,
    type: 'yearly',
    count: completedYears,
    explanation: `${completedYears} વર્ષ અને ${remainingMonths} મહિના`,
    isCompleted: true,
  };
}

