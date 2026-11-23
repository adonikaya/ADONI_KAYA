// Automated Comprehensive Acceptance Test Suite for ADONI KAYA (અડોણી કાયા)
// Validating 100+ Templates, Dynamic Family Layouts (Layout 1 & 2), Date Validations, and Formatting

import {
  calculateAnniversary,
  getGujaratiWeekday,
  formatGujaratiDate,
  formatCardDate,
  getTodayLocalDateString,
  isValidDateString,
  GUJARATI_YEAR_ORDINALS,
  GUJARATI_MONTH_ORDINALS,
  toGujaratiDigits,
} from './src/lib/anniversaryCalculator';
import {
  calculateFamilyLayout,
  calculateSwargwasiLayout,
} from './src/lib/familyLayoutEngine';
import { GUJARATI_QUOTES } from './src/data/quotes';
import { CARD_TEMPLATES } from './src/data/templates';
import { FORMAT_DIMENSIONS } from './src/lib/types';
import {
  calculateSectionGap,
  calculateEffectiveFontSizes,
  estimateFamilyBlockHeight,
  getPhotoFrameAspectRatio,
} from './src/lib/canvasRenderer';
import { resolveGallerySelection } from './src/lib/galleryNavigation';
import {
  formatTithi,
  getTithisForPaksha,
  GUJARATI_MONTHS,
  parseTithi,
} from './src/lib/tithi';
import { normalizeIndianMobileNumber, validateMobileNumbers } from './src/lib/mobileNumber';

let totalTests = 0;
let passedTests = 0;

function assert(condition: boolean, message: string) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    process.exitCode = 1;
  }
}

console.log('====================================================');
console.log('ADONI KAYA — COMPREHENSIVE STRICT ACCEPTANCE TESTS');
console.log('====================================================\n');

// ----------------------------------------------------
// 0. TITHI COMBINATIONS AND BESNA PHONE VALIDATION
// ----------------------------------------------------
console.log('--- 0. TITHI COMBINATIONS AND BESNA PHONE VALIDATION ---');
assert(getTithisForPaksha('સુદ પક્ષ').includes('પૂનમ'), 'Suda Paksha includes Punam');
assert(!getTithisForPaksha('સુદ પક્ષ').includes('અમાસ'), 'Suda Paksha excludes Amas');
assert(getTithisForPaksha('વદ પક્ષ').includes('અમાસ'), 'Vada Paksha includes Amas');
assert(!getTithisForPaksha('વદ પક્ષ').includes('પૂનમ'), 'Vada Paksha excludes Punam');
assert(getTithisForPaksha('સુદ પક્ષ').includes('એકમ'), 'Gujarati tithi list uses the familiar Ekam name');
assert(getTithisForPaksha('વદ પક્ષ').includes('ચૌદસ'), 'Gujarati tithi list includes Choudas in Vad Paksha');
assert(parseTithi('વદ પૂનમ') === null, 'Contradictory legacy Tithi combination is rejected');
assert(parseTithi('સુદ પ્રતિપદા')?.name === 'એકમ', 'Legacy Sanskrit tithi names remain supported');
assert(formatTithi('વદ પક્ષ', 'પૂનમ') === '', 'Invalid Paksha and Tithi are not rendered');
assert(
  GUJARATI_MONTHS.join(',') === 'કારતક,માગશર,પોષ,મહા,ફાગણ,ચૈત્ર,વૈશાખ,જેઠ,અષાઢ,શ્રાવણ,ભાદરવો,આસો',
  'Gujarati month list follows the Kartak-to-Aaso calendar year'
);
assert(formatTithi('સુદ પક્ષ', 'એકમ', 'કારતક') === 'કારતક સુદ એકમ', 'Tithi is rendered with its Gujarati month');
assert(formatTithi('વદ પક્ષ', 'અમાસ', 'માગશર') === 'માગશર વદ અમાસ', 'Tithi uses only the supplied month');
assert(
  formatTithi(undefined, undefined, 'અધિક કારતક', 'સુદ પ્રતિપદા') === 'અધિક કારતક સુદ એકમ',
  'Adhik month and legacy tithi are formatted correctly'
);
assert(normalizeIndianMobileNumber('+91 9876543210') === '9876543210', 'Indian country code is normalized');
assert(validateMobileNumbers(['9876543210', '9876543210']).every(Boolean), 'Duplicate mobile numbers are rejected');
assert(validateMobileNumbers(['12345'])[0] !== '', 'Invalid mobile number receives validation feedback');
assert(validateMobileNumbers([''])[0] === '', 'Empty optional mobile numbers are accepted');

// ----------------------------------------------------
// 1. TEMPLATE COLLECTION VERIFICATION (100+ NEW TEMPLATES)
// ----------------------------------------------------
console.log('--- 1. TEMPLATE COLLECTION VERIFICATION (100+ DISTINCT TEMPLATES) ---');
assert(CARD_TEMPLATES.length >= 100, `Template collection contains 100+ templates: found ${CARD_TEMPLATES.length}`);
assert(CARD_TEMPLATES.length === 154, `All 114 original and 40 new templates are available: found ${CARD_TEMPLATES.length}`);
assert(CARD_TEMPLATES.slice(114).length === 40, `Exactly 40 additional templates are present: found ${CARD_TEMPLATES.slice(114).length}`);

// Unique IDs verification
const ids = new Set<string>();
let hasDuplicateId = false;
CARD_TEMPLATES.forEach(t => {
  if (ids.has(t.id)) hasDuplicateId = true;
  ids.add(t.id);
});
assert(!hasDuplicateId, 'All template IDs are strictly unique without duplicates');

// Unique Names verification
const names = new Set<string>();
let hasDuplicateName = false;
CARD_TEMPLATES.forEach(t => {
  if (names.has(t.name)) hasDuplicateName = true;
  names.add(t.name);
});
assert(!hasDuplicateName, 'All template names are distinct');

// Rabari style verification
const rabariTemplates = CARD_TEMPLATES.filter(t => t.isRabariStyle || t.category === 'rabari-style');
assert(rabariTemplates.length >= 10, `Dedicated Rabari Style collection verified: count ${rabariTemplates.length}`);
assert(rabariTemplates[0].theme.borderStyle === 'rabari-embroidery', 'Rabari template uses authentic rabari-embroidery border');

// Category coverage verification
const categories = ['shradhanjali', 'peaceful-floral', 'royal-gold', 'temple-sacred', 'rabari-style', 'punyatithi', 'besna', 'shok-sabha', 'tervi-dashkriya'];
categories.forEach(cat => {
  const count = CARD_TEMPLATES.filter(t => t.category === cat).length;
  assert(count > 0, `Category '${cat}' has verified active templates: found ${count}`);
});

const compositions = new Set(CARD_TEMPLATES.map(template => template.theme.composition));
const photoShapes = new Set(CARD_TEMPLATES.map(template => template.placeholders.photo.shape));
const uniqueBackgrounds = new Set(CARD_TEMPLATES.map(template => template.theme.bgColor));
const lightBackgroundCount = CARD_TEMPLATES.filter(template => {
  const color = template.theme.bgColor;
  const match = /^#([0-9a-f]{6})$/i.exec(color);
  if (!match) return false;
  const channels = [0, 2, 4].map((offset) => parseInt(match[1].slice(offset, offset + 2), 16) / 255);
  const linear = channels.map((channel) =>
    channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  );
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722 >= 0.8;
}).length;
assert(compositions.size >= 8, `Distinct template compositions are available: found ${compositions.size}`);
assert(photoShapes.size >= 6, `Distinct photo frame shapes are available: found ${photoShapes.size}`);
assert(uniqueBackgrounds.size >= 20, `Template background palettes are varied: found ${uniqueBackgrounds.size}`);
assert(lightBackgroundCount >= 80, `At least 80 templates have light backgrounds: found ${lightBackgroundCount}`);

// Traditional elements verification (Agarbatti, Diya, Flowers, Garlands)
const withAgarbatti = CARD_TEMPLATES.filter(t => t.theme.decorations && t.theme.decorations.includes('agarbatti'));
const withDiya = CARD_TEMPLATES.filter(t => t.theme.decorations && t.theme.decorations.includes('diya'));
const withRosePetals = CARD_TEMPLATES.filter(t => t.theme.decorations && t.theme.decorations.includes('rose-petals'));
const withMarigold = CARD_TEMPLATES.filter(t => t.placeholders.photo.garlandStyle === 'marigold');

assert(withAgarbatti.length >= 15, `Templates with Agarbatti incense sticks: count ${withAgarbatti.length}`);
assert(withDiya.length >= 15, `Templates with sacred Diya decorations: count ${withDiya.length}`);
assert(withRosePetals.length >= 15, `Templates with Rose petal decorations: count ${withRosePetals.length}`);
assert(withMarigold.length >= 20, `Templates with Marigold floral garland: count ${withMarigold.length}`);

// ----------------------------------------------------
// 2. DATE CALCULATIONS, LEAP YEARS & LOCAL DATE
// ----------------------------------------------------
console.log('\n--- 2. DATE CALCULATIONS, LEAP YEARS & LOCAL DATE ---');

// Local date format YYYY-MM-DD
const localToday = getTodayLocalDateString();
assert(/^\d{4}-\d{2}-\d{2}$/.test(localToday), `getTodayLocalDateString() returns valid YYYY-MM-DD: '${localToday}'`);
assert(isValidDateString(localToday), `Today's date '${localToday}' is verified as valid calendar date`);

// Leap year validation
assert(isValidDateString('2024-02-29'), 'Leap year 2024-02-29 is valid');
assert(!isValidDateString('2025-02-29'), 'Non-leap year 2025-02-29 is correctly rejected');
assert(!isValidDateString('2026-06-31'), 'Invalid date 2026-06-31 (June has 30 days) is correctly rejected');
assert(isValidDateString('2026-06-30'), '2026-06-30 is valid');

// Card Date formatting DD/MM/YYYY with Gujarati numerals
const cardDateGuj = formatCardDate('2026-11-12', true);
assert(cardDateGuj === '૧૨/૧૧/૨૦૨૬', `formatCardDate 2026-11-12 to Gujarati digits: Expected '૧૨/૧૧/૨૦૨૬', got '${cardDateGuj}'`);

const cardDateEng = formatCardDate('2026-11-12', false);
assert(cardDateEng === '12/11/2026', `formatCardDate 2026-11-12 to English digits: Expected '12/11/2026', got '${cardDateEng}'`);

// Gujarati Weekdays
const w1 = getGujaratiWeekday('2025-07-31');
assert(w1 === 'ગુરુવાર', `Weekday 31 July 2025: Expected 'ગુરુવાર', got '${w1}'`);

const w2 = getGujaratiWeekday('2025-08-03');
assert(w2 === 'રવિવાર', `Weekday 03 Aug 2025: Expected 'રવિવાર', got '${w2}'`);

// Anniversary Calculations
const t1 = calculateAnniversary('2025-01-15', '2025-02-15');
assert(t1.heading === 'પ્રથમ માસિક શ્રદ્ધાંજલિ', `1st Month: Expected 'પ્રથમ માસિક શ્રદ્ધાંજલિ', got '${t1.heading}'`);

const t3 = calculateAnniversary('2025-07-31', '2026-07-31');
assert(t3.heading === 'પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ', `1st Year: Expected 'પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ', got '${t3.heading}'`);

const t5 = calculateAnniversary('2024-02-29', '2025-02-28');
assert(t5.heading === 'પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ', `Leap Year: Feb 29 to Feb 28 completes 1st year: got '${t5.heading}'`);

// Strict feminine agreement checks for Gujarati anniversary wording (Phase 4)
const expectedYearOrdinals: Record<number, string> = {
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
};

for (const [yr, expected] of Object.entries(expectedYearOrdinals)) {
  const num = parseInt(yr, 10);
  assert(GUJARATI_YEAR_ORDINALS[num] === expected, `Year ${num} ordinal matches feminine 'શ્રદ્ધાંજલિ': '${GUJARATI_YEAR_ORDINALS[num]}'`);
  assert(!GUJARATI_YEAR_ORDINALS[num].includes('મો'), `Year ${num} ordinal avoids masculine -મો suffix`);
}

// Monthly ordinals
assert(GUJARATI_MONTH_ORDINALS[1] === 'પ્રથમ માસિક શ્રદ્ધાંજલિ', '1st month: પ્રથમ માસિક શ્રદ્ધાંજલિ');
assert(GUJARATI_MONTH_ORDINALS[2] === 'બીજી માસિક શ્રદ્ધાંજલિ', '2nd month: બીજી માસિક શ્રદ્ધાંજલિ');
assert(GUJARATI_MONTH_ORDINALS[3] === 'ત્રીજી માસિક શ્રદ્ધાંજલિ', '3rd month: ત્રીજી માસિક શ્રદ્ધાંજલિ');
assert(GUJARATI_MONTH_ORDINALS[5] === 'પાંચમી માસિક શ્રદ્ધાંજલિ', '5th month: પાંચમી માસિક શ્રદ્ધાંજલિ');
assert(GUJARATI_MONTH_ORDINALS[6] === 'છઠ્ઠી માસિક શ્રદ્ધાંજલિ', '6th month: છઠ્ઠી માસિક શ્રદ્ધાંજલિ');

// Real assets in 20 templates
const templatesWithAssets = CARD_TEMPLATES.filter(t => t.theme.decorationAssets?.photoFrame || t.theme.decorationAssets?.diyaStand);
assert(templatesWithAssets.length >= 10, `Templates configured with real PNG decoration assets: found ${templatesWithAssets.length}`);

// ----------------------------------------------------
// 3. FAMILY LAYOUT ENGINE (LAYOUT 1 & LAYOUT 2)
// ----------------------------------------------------
console.log('\n--- 3. FAMILY MEMBERS LAYOUT ENGINE (LAYOUT 1 & LAYOUT 2) ---');

// Test Swargwasi Top (Layout 1) with 1 Swargwasi and 4 normal members
const membersL1 = [
  { id: '1', name: 'દેસાઈ ગોવાભાઈ', isSwargwasi: true },
  { id: '2', name: 'દેસાઈ આશાબેન', isSwargwasi: false },
  { id: '3', name: 'દેસાઈ દેવિકાબેન', isSwargwasi: false },
  { id: '4', name: 'દેસાઈ પલાબેન', isSwargwasi: false },
  { id: '5', name: 'દેસાઈ ત્રિશાબેન', isSwargwasi: false },
];

const resL1 = calculateSwargwasiLayout(membersL1, {
  layout: 'swargwasi-top',
  columns: 2,
  alignment: 'center',
});

assert(resL1.hasSwargwasi, 'Layout 1: Detects Swargwasi members');
assert(resL1.swargwasiNames.length === 1 && resL1.swargwasiNames[0] === 'દેસાઈ ગોવાભાઈ', 'Layout 1: 1 Swargwasi name placed at top');
assert(resL1.normalColumns.length === 2, 'Layout 1: Normal members split into 2 columns');
assert(resL1.normalColumns[0].length === 2 && resL1.normalColumns[1].length === 2, 'Layout 1: Balanced normal members distribution');

// Test Swargwasi Columns (Layout 2) with 2 Swargwasi and 6 normal members in 3 columns
const membersL2 = [
  { id: '1', name: 'સ્વર્ગવાસી ૧', isSwargwasi: true },
  { id: '2', name: 'સ્વર્ગવાસી ૨', isSwargwasi: true },
  { id: '3', name: 'નોર્મલ ૧' },
  { id: '4', name: 'નોર્મલ ૨' },
  { id: '5', name: 'નોર્મલ ૩' },
  { id: '6', name: 'નોર્મલ ૪' },
  { id: '7', name: 'નોર્મલ ૫' },
  { id: '8', name: 'નોર્મલ ૬' },
];

const resL2 = calculateSwargwasiLayout(membersL2, {
  layout: 'swargwasi-columns',
  columns: 3,
  alignment: 'center',
});

assert(resL2.hasSwargwasi, 'Layout 2: Has Swargwasi');
assert(resL2.swargwasiColumns.length === 2, 'Layout 2: Swargwasi distributed without empty columns');
assert(resL2.normalColumns.length === 3, 'Layout 2: 3 columns for normal members');
assert(resL2.normalColumns[0].length === 2 && resL2.normalColumns[1].length === 2 && resL2.normalColumns[2].length === 2, 'Layout 2: Balanced 6 items across 3 columns');

// Test No Swargwasi members (heading 'લી.' should not be shown)
const membersNoSwargwasi = [
  { id: '1', name: 'નોર્મલ ૧' },
  { id: '2', name: 'નોર્મલ ૨' },
];
const resNoSw = calculateSwargwasiLayout(membersNoSwargwasi, {
  layout: 'swargwasi-top',
  columns: 2,
  alignment: 'left',
});
assert(!resNoSw.hasSwargwasi, 'No Swargwasi: hasSwargwasi is false so લી. heading will be hidden');
assert(resNoSw.swargwasiNames.length === 0, 'No Swargwasi: empty swargwasi array');
assert(resNoSw.alignment === 'left', 'Alignment: Left alignment respected');

// Test Large Family List & Overflow Handling
const thirtyMembers = Array.from({ length: 30 }, (_, i) => ({
  id: `${i}`,
  name: `પરિવાર સભ્ય લાંબુ નામ ${i + 1}`,
  isSwargwasi: i < 2,
}));
const res30 = calculateSwargwasiLayout(thirtyMembers, {
  layout: 'swargwasi-top',
  columns: 4,
  alignment: 'center',
});
assert(res30.normalColumns.length === 4, '30 members: Successfully distributed across 4 columns');
assert(res30.fontSize <= 15, `30 members: Scaled down font size safely to ${res30.fontSize}px`);

// ----------------------------------------------------
// 4. DIMENSIONS & OUTPUT FORMATS
// ----------------------------------------------------
console.log('\n--- 4. MOBILE-FIRST DIMENSIONS & OUTPUT FORMATS ---');
assert(FORMAT_DIMENSIONS['4:5'].width === 1080 && FORMAT_DIMENSIONS['4:5'].height === 1350, 'Format 4:5 is 1080x1350');
assert(FORMAT_DIMENSIONS['9:16'].width === 1080 && FORMAT_DIMENSIONS['9:16'].height === 1920, 'Format 9:16 is 1080x1920');
assert(FORMAT_DIMENSIONS['2:3'].width === 1080 && FORMAT_DIMENSIONS['2:3'].height === 1620, 'Format 2:3 is 1080x1620');
assert(FORMAT_DIMENSIONS['A4'].width === 1240 && FORMAT_DIMENSIONS['A4'].height === 1754, 'Format A4 is 1240x1754 (300 DPI proportional)');

// ----------------------------------------------------
// 5. EDITOR FONT SIZES, PHOTO SHAPES & GALLERY ROUTING
// ----------------------------------------------------
console.log('\n--- 5. EDITOR FONT SIZES, PHOTO SHAPES & GALLERY ROUTING ---');
assert(calculateSectionGap([100, 100], 300, 100) === 100, 'Vertical spacing keeps its requested value when the content fits');
assert(calculateSectionGap([100, 100], 250, 100) === 50, 'Vertical spacing shrinks to prevent section overlap');
assert(calculateSectionGap([150, 150], 250, 100) === 0, 'Vertical spacing reaches zero when sections fill the available height');
assert(calculateSectionGap([100, 100], 300, 0) === 0, 'Zero-pixel vertical spacing is applied exactly');
const familyBlockLayout = calculateSwargwasiLayout(
  [
    { id: 'deceased', name: 'સ્વર્ગસ્થ સભ્ય', isSwargwasi: true },
    { id: 'member', name: 'પરિવાર સભ્ય' },
  ],
  { layout: 'swargwasi-top', columns: 2, alignment: 'center', baseFontSize: 20 }
);
const familyBlockHeaderGap = 40;
const expectedFamilyBlockHeight =
  Math.max(16, Math.round(familyBlockLayout.fontSize))
  + familyBlockHeaderGap
  + 2 * familyBlockLayout.fontSize * familyBlockLayout.lineHeight
  + 17
  + 10;
assert(
  estimateFamilyBlockHeight(familyBlockLayout, 'swargwasi-top', familyBlockHeaderGap) === expectedFamilyBlockHeight,
  'Family block reserves all rendered name, divider, and ending space before the footer'
);
const editorTemplate = CARD_TEMPLATES[0];
const emptyFamily: import('./src/lib/types').FamilyDetails = {
  familyName: '',
  nativeVillage: '',
  showFooter: false,
  members: [],
};
const defaultFontSizes = calculateEffectiveFontSizes(editorTemplate, emptyFamily);
const adjustedFontSizes = calculateEffectiveFontSizes(editorTemplate, emptyFamily, {
  heading: 3,
  name: -2,
  dates: 2,
  tithi: -3,
  quote: 4,
  family: 2,
  footer: -2,
});
assert(adjustedFontSizes.heading === defaultFontSizes.heading + 3, 'Heading font adjustment is applied independently');
assert(adjustedFontSizes.name === defaultFontSizes.name - 2, 'Deceased name font adjustment is applied independently');
assert(adjustedFontSizes.dates === defaultFontSizes.dates + 2, 'Date font adjustment is applied');
assert(adjustedFontSizes.tithi === defaultFontSizes.tithi - 3, 'Tithi font adjustment is independent of date size');
assert(adjustedFontSizes.quote === defaultFontSizes.quote + 4, 'Quote font adjustment is applied');
assert(adjustedFontSizes.family === defaultFontSizes.family + 2, 'Family font adjustment is applied');
assert(adjustedFontSizes.footer === defaultFontSizes.footer - 2, 'Footer font adjustment is applied');

const frameAspectRatios = [
  ['circle', 1],
  ['square', 1],
  ['rect', 0.75],
  ['portrait-rect', 1.4],
  ['oval', 1.3],
  ['rounded-rect', 1.1],
] as const;
frameAspectRatios.forEach(([shape, expected]) => {
  assert(
    getPhotoFrameAspectRatio(shape, 1.25) === expected,
    `${shape} photo frame uses its expected aspect ratio`
  );
});

const shradhanjaliTemplate = CARD_TEMPLATES.find((template) => template.category !== 'besna');
const besnaTemplate = CARD_TEMPLATES.find((template) => template.category === 'besna');
assert(
  !!shradhanjaliTemplate &&
    resolveGallerySelection('shradhanjali', shradhanjaliTemplate.id, CARD_TEMPLATES)?.template.id === shradhanjaliTemplate.id,
  'Gallery route resolves the exact Shradhanjali template'
);
assert(
  !!besnaTemplate &&
    resolveGallerySelection('besna', besnaTemplate.id, CARD_TEMPLATES)?.template.id === besnaTemplate.id,
  'Gallery route resolves the exact Besna template'
);
assert(resolveGallerySelection('invalid', 'missing', CARD_TEMPLATES) === null, 'Invalid gallery flow type is rejected');
assert(resolveGallerySelection('besna', 'missing', CARD_TEMPLATES) === null, 'Unknown gallery template is rejected');
assert(
  !!shradhanjaliTemplate &&
    resolveGallerySelection('besna', shradhanjaliTemplate.id, CARD_TEMPLATES) === null,
  'Gallery template belonging to a different flow is rejected'
);

// ----------------------------------------------------
// 6. GUJARATI QUOTE LIBRARY VERIFICATION
// ----------------------------------------------------
console.log('\n--- 6. GUJARATI QUOTE LIBRARY VERIFICATION ---');
assert(GUJARATI_QUOTES.length >= 200, `Quote Library has at least 200 quotes: total ${GUJARATI_QUOTES.length}`);

console.log('\n====================================================');
console.log(`TOTAL TESTS: ${totalTests} | PASSED: ${passedTests} | FAILED: ${totalTests - passedTests}`);
console.log('====================================================');

if (passedTests === totalTests) {
  console.log('\n✨ ALL TEST SUITES PASSED PERFECTLY! ✨\n');
}
