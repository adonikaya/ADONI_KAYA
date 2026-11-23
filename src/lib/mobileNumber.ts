export function normalizeIndianMobileNumber(value: string): string {
  const compact = value.trim().replace(/[\s-]/g, '');
  const match = /^(?:\+91|91|0)?([6-9]\d{9})$/.exec(compact);
  return match?.[1] || '';
}

export function validateMobileNumbers(numbers: string[]): string[] {
  const normalized = numbers.map(normalizeIndianMobileNumber);
  return numbers.map((number, index) => {
    if (!number.trim()) return '';
    if (!normalized[index]) return 'મોબાઇલ નંબર ૧૦ અંકનો અને ૬ થી ૯ વચ્ચે શરૂ થતો હોવો જોઈએ.';
    if (normalized.filter((value) => value === normalized[index]).length > 1) {
      return 'આ મોબાઇલ નંબર પહેલેથી ઉમેરેલો છે.';
    }
    return '';
  });
}
