// Automatic Monthly and Yearly Anniversary Calculation Engine
// for ADONI KAYA (અડોણી કાયા)

export interface AnniversaryResult {
  heading: string;
  type: 'monthly' | 'yearly' | 'recent' | 'custom' | 'invalid';
  count: number;
  explanation: string;
  isCompleted: boolean;
}

const GUJARATI_MONTH_ORDINALS: Record<number, string> = {
  1: 'પ્રથમ માસિક શ્રદ્ધાંજલિ',
  2: 'દ્વિતીય માસિક શ્રદ્ધાંજલિ',
  3: 'તૃતીય માસિક શ્રદ્ધાંજલિ',
  4: 'ચતુર્થ માસિક શ્રદ્ધાંજલિ',
  5: 'પંચમ માસિક શ્રદ્ધાંજલિ',
  6: 'છઠ્ઠી માસિક શ્રદ્ધાંજલિ',
  7: 'સપ્તમ માસિક શ્રદ્ધાંજલિ',
  8: 'અષ્ટમ માસિક શ્રદ્ધાંજલિ',
  9: 'નવમ માસિક શ્રદ્ધાંજલિ',
  10: 'દશમ માસિક શ્રદ્ધાંજલિ',
  11: 'એકાદશ માસિક શ્રદ્ધાંજલિ',
  12: 'પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ',
};

const GUJARATI_YEAR_ORDINALS: Record<number, string> = {
  1: 'પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ',
  2: 'દ્વિતીય વાર્ષિક શ્રદ્ધાંજલિ',
  3: 'તૃતીય વાર્ષિક શ્રદ્ધાંજલિ',
  4: 'ચતુર્થ વાર્ષિક શ્રદ્ધાંજલિ',
  5: 'પંચમ વાર્ષિક શ્રદ્ધાંજલિ',
  6: 'ષષ્ઠ વાર્ષિક શ્રદ્ધાંજલિ',
  7: 'સપ્તમ વાર્ષિક શ્રદ્ધાંજલિ',
  8: 'અષ્ટમ વાર્ષિક શ્રદ્ધાંજલિ',
  9: 'નવમ વાર્ષિક શ્રદ્ધાંજલિ',
  10: 'દશમ વાર્ષિક શ્રદ્ધાંજલિ',
  11: '૧૧મી વાર્ષિક પુણ્યતિથિ',
  12: '૧૨મી વાર્ષિક પુણ્યતિથિ',
  15: '૧૫મી વાર્ષિક પુણ્યતિથિ',
  20: '૨૦મી વાર્ષિક પુણ્યતિથિ',
  25: 'રજત સ્મૃતિ પુણ્યતિથિ (૨૫ વર્ષ)',
  50: 'સુવર્ણ સ્મૃતિ પુણ્યતિથિ (૫૦ વર્ષ)',
};

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
      `${completedYears}મી વાર્ષિક પુણ્યતિથિ`;

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
    const monthHeading = GUJARATI_MONTH_ORDINALS[totalMonths] || `${totalMonths}મી માસિક શ્રદ્ધાંજલિ`;
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
    heading: GUJARATI_YEAR_ORDINALS[completedYears] || `${completedYears}મી વાર્ષિક પુણ્યતિથિ`,
    type: 'yearly',
    count: completedYears,
    explanation: `${completedYears} વર્ષ અને ${remainingMonths} મહિના`,
    isCompleted: true,
  };
}
