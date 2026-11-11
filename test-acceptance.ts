// Automated Acceptance Test Suite for ADONI KAYA (અડોણી કાયા)
// Validating TEST A, TEST B, TEST C, TEST D, TEST E as requested in Phase 15

import {
  calculateAnniversary,
  getGujaratiWeekday,
  formatGujaratiDate,
} from './src/lib/anniversaryCalculator';
import {
  calculateFamilyLayout,
} from './src/lib/familyLayoutEngine';
import { GUJARATI_QUOTES } from './src/data/quotes';
import { CARD_TEMPLATES } from './src/data/templates';
import { FORMAT_DIMENSIONS } from './src/lib/types';

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
console.log('ADONI KAYA — PHASE 15 COMPREHENSIVE ACCEPTANCE TESTS');
console.log('====================================================\n');

// ----------------------------------------------------
// TEST E: DATE CALCULATIONS & ANNIVERSARY ENGINE
// ----------------------------------------------------
console.log('--- TEST E: DATE CALCULATIONS & ANNIVERSARY ENGINE ---');

// 1. First month calculation
const t1 = calculateAnniversary('2025-01-15', '2025-02-15');
assert(t1.heading === 'પ્રથમ માસિક શ્રદ્ધાંજલિ', `1st Month: Expected 'પ્રથમ માસિક શ્રદ્ધાંજલિ', got '${t1.heading}'`);
assert(t1.count === 1 && t1.type === 'monthly', '1st Month: Type should be monthly with count 1');

// 2. Sixth month calculation
const t2 = calculateAnniversary('2025-01-15', '2025-07-15');
assert(t2.heading === 'છઠ્ઠી માસિક શ્રદ્ધાંજલિ', `6th Month: Expected 'છઠ્ઠી માસિક શ્રદ્ધાંજલિ', got '${t2.heading}'`);
assert(t2.count === 6 && t2.type === 'monthly', '6th Month: Type should be monthly with count 6');

// 3. First year calculation (Example in prompt: 31 July 2025 -> 31 July 2026)
const t3 = calculateAnniversary('2025-07-31', '2026-07-31');
assert(t3.heading === 'પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ', `1st Year: Expected 'પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ', got '${t3.heading}'`);
assert(t3.count === 1 && t3.type === 'yearly', '1st Year: Type should be yearly with count 1');

// 4. Second year calculation
const t4 = calculateAnniversary('2024-05-10', '2026-05-10');
assert(t4.heading === 'દ્વિતીય વાર્ષિક શ્રદ્ધાંજલિ', `2nd Year: Expected 'દ્વિતીય વાર્ષિક શ્રદ્ધાંજલિ', got '${t4.heading}'`);

// 5. Leap-year dates: Death on 29 Feb 2024 (Leap year) to 28 Feb 2025 (1st year)
const t5 = calculateAnniversary('2024-02-29', '2025-02-28');
assert(t5.heading === 'પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ', `Leap Year: Feb 29 to Feb 28 completes 1st year: got '${t5.heading}'`);

// 6. Dates near end of month: Jan 31 to Feb 28 completes 1st month
const t6 = calculateAnniversary('2025-01-31', '2025-02-28');
assert(t6.heading === 'પ્રથમ માસિક શ્રદ્ધાંજલિ', `Month End: Jan 31 to Feb 28 completes 1st month: got '${t6.heading}'`);

// 7. Future event dates (Event before death date is invalid)
const t7 = calculateAnniversary('2025-08-01', '2025-05-01');
assert(t7.type === 'invalid', `Invalid: Event before death date flagged as invalid: got '${t7.type}'`);

// 8. Gujarati Weekday calculation from death date
const w1 = getGujaratiWeekday('2025-07-31');
assert(w1 === 'ગુરુવાર', `Weekday 31 July 2025: Expected 'ગુરુવાર', got '${w1}'`);

const w2 = getGujaratiWeekday('2025-08-03');
assert(w2 === 'રવિવાર', `Weekday 03 Aug 2025: Expected 'રવિવાર', got '${w2}'`);

// ----------------------------------------------------
// TEST D: AUTOMATIC FAMILY-NAME LAYOUT ENGINE
// ----------------------------------------------------
console.log('\n--- TEST D: AUTOMATIC FAMILY-NAME LAYOUT ENGINE ---');

// 1. One family member: 1 column, large font
const l1 = calculateFamilyLayout([{ id: '1', name: 'દેસાઈ ગોવાભાઈ' }]);
assert(l1.columnCount === 1, `1 Member: Expected 1 column, got ${l1.columnCount}`);
assert(l1.fontSize >= 22, `1 Member: Expected font size >= 22px, got ${l1.fontSize}px`);

// 2. Five family members: 2 columns
const l5 = calculateFamilyLayout([
  { id: '1', name: 'દેસાઈ ગોવાભાઈ' },
  { id: '2', name: 'દેસાઈ આશાબેન' },
  { id: '3', name: 'દેસાઈ દેવિકાબેન' },
  { id: '4', name: 'દેસાઈ પલાબેન' },
  { id: '5', name: 'દેસાઈ ત્રિશાબેન' },
]);
assert(l5.columnCount === 2, `5 Members: Expected 2 columns, got ${l5.columnCount}`);
assert(l5.columns[0].length === 3 && l5.columns[1].length === 2, '5 Members: Balanced distribution (3 and 2)');

// 3. Ten family members: 3 columns
const l10 = calculateFamilyLayout([
  { id: '1', name: 'દેસાઈ ગોવાભાઈ' },
  { id: '2', name: 'દેસાઈ આશાબેન' },
  { id: '3', name: 'દેસાઈ દેવિકાબેન' },
  { id: '4', name: 'દેસાઈ પલાબેન' },
  { id: '5', name: 'દેસાઈ ત્રિશાબેન' },
  { id: '6', name: 'દેસાઈ શ્રેયાબેન' },
  { id: '7', name: 'દેસાઈ હર્ષદભાઈ' },
  { id: '8', name: 'દેસાઈ કાંતિભાઈ' },
  { id: '9', name: 'દેસાઈ જગદીશભાઈ' },
  { id: '10', name: 'દેસાઈ ભાવનાબેન' },
]);
assert(l10.columnCount === 3, `10 Members: Expected 3 columns, got ${l10.columnCount}`);
assert(l10.fontSize >= 15 && l10.fontSize <= 20, `10 Members: Scaled font size between 15-20px: got ${l10.fontSize}px`);

// 4. Twenty family members: 4 columns
const twentyMembers = Array.from({ length: 20 }, (_, i) => ({
  id: `${i}`,
  name: `પરિવાર સભ્ય ${i + 1}`,
}));
const l20 = calculateFamilyLayout(twentyMembers);
assert(l20.columnCount === 4, `20 Members: Expected 4 columns, got ${l20.columnCount}`);
assert(!l20.hasOverflow, '20 Members: Fits without overflow');

// 5. Overflow handling: 45 members triggers overflow warning
const overflowMembers = Array.from({ length: 45 }, (_, i) => ({
  id: `${i}`,
  name: `પરિવાર સભ્ય લાંબુ નામ ${i + 1}`,
}));
const lOverflow = calculateFamilyLayout(overflowMembers);
assert(lOverflow.hasOverflow === true, '45 Members: Flags overflow warning properly');
assert(Boolean(lOverflow.overflowMessage), '45 Members: Provides helpful Gujarati advice message');

// ----------------------------------------------------
// TEST C: RESPONSIVENESS & MOBILE-FIRST DIMENSIONS
// ----------------------------------------------------
console.log('\n--- TEST C: MOBILE-FIRST TEMPLATE DIMENSIONS ---');

// Formats requested: 1080x1350 (4:5), 1080x1920 (9:16), 1080x1620 (2:3), A4 (print)
assert(FORMAT_DIMENSIONS['4:5'].width === 1080 && FORMAT_DIMENSIONS['4:5'].height === 1350, 'Format 4:5 is 1080x1350');
assert(FORMAT_DIMENSIONS['9:16'].width === 1080 && FORMAT_DIMENSIONS['9:16'].height === 1920, 'Format 9:16 is 1080x1920');
assert(FORMAT_DIMENSIONS['2:3'].width === 1080 && FORMAT_DIMENSIONS['2:3'].height === 1620, 'Format 2:3 is 1080x1620');
assert(FORMAT_DIMENSIONS['A4'].width === 1240 && FORMAT_DIMENSIONS['A4'].height === 1754, 'Format A4 is 1240x1754 (300 DPI proportional)');

// ----------------------------------------------------
// GUJARATI QUOTE LIBRARY VERIFICATION (Phase 7)
// ----------------------------------------------------
console.log('\n--- GUJARATI QUOTE LIBRARY VERIFICATION ---');
assert(GUJARATI_QUOTES.length >= 200, `Quote Library has at least 200 quotes: total ${GUJARATI_QUOTES.length}`);

const requiredCategories = ['mata', 'pita', 'dada', 'dadi', 'bhai', 'bahen', 'pati', 'patni', 'parivar', 'samanya', 'masik', 'varshik', 'besna'];
requiredCategories.forEach(cat => {
  const count = GUJARATI_QUOTES.filter(q => q.category === cat).length;
  assert(count > 0, `Category '${cat}' has verified messages: found ${count}`);
});

// ----------------------------------------------------
// TEMPLATE COLLECTION VERIFICATION (Phase 2)
// ----------------------------------------------------
console.log('\n--- TEMPLATE COLLECTION & RABARI STYLE VERIFICATION ---');
assert(CARD_TEMPLATES.length >= 7, `Template collection contains core templates: count ${CARD_TEMPLATES.length}`);

const rabariTemplates = CARD_TEMPLATES.filter(t => t.isRabariStyle || t.category === 'rabari-style');
assert(rabariTemplates.length >= 2, `Dedicated Rabari Style collection verified: count ${rabariTemplates.length}`);
assert(rabariTemplates[0].theme.borderStyle === 'rabari-embroidery', 'Rabari template uses authentic rabari-embroidery border');

console.log('\n====================================================');
console.log(`TOTAL TESTS: ${totalTests} | PASSED: ${passedTests} | FAILED: ${totalTests - passedTests}`);
console.log('====================================================');

if (passedTests === totalTests) {
  console.log('\n✨ ALL TEST SUITES PASSED PERFECTLY! ✨\n');
}
