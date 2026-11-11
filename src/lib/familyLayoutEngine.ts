// Smart Family-Name Layout Engine for ADONI KAYA (અડોણી કાયા)
import { FamilyMember } from './types';

export interface LayoutResult {
  columns: string[][]; // Array of columns, each containing member names
  columnCount: number;
  fontSize: number;
  lineHeight: number;
  hasOverflow: boolean;
  overflowMessage?: string;
  recommendedTemplateCategory?: string;
  totalNames: number;
}

export interface LayoutOptions {
  containerWidth?: number; // default base 1080 * 0.84 = ~900px
  containerHeight?: number; // default base ~250px
  maxColumns?: number;
  minFontSize?: number; // minimum readable font size
  maxFontSize?: number; // maximum font size for few names
}

/**
 * Automatically calculates optimal columns, font size, and layout
 * for family members with overflow detection and readable typography.
 */
export function calculateFamilyLayout(
  members: FamilyMember[],
  options: LayoutOptions = {}
): LayoutResult {
  const totalNames = members.length;
  const validMembers = members
    .map(m => m.name.trim())
    .filter(name => name.length > 0);

  if (validMembers.length === 0) {
    return {
      columns: [],
      columnCount: 1,
      fontSize: 20,
      lineHeight: 1.4,
      hasOverflow: false,
      totalNames: 0,
    };
  }

  const minFontSize = options.minFontSize ?? 13;
  const maxFontSize = options.maxFontSize ?? 26;

  // Determine optimal column count based on name count
  let columnCount = 1;
  if (validMembers.length >= 19) {
    columnCount = 4;
  } else if (validMembers.length >= 10) {
    columnCount = 3;
  } else if (validMembers.length >= 5) {
    columnCount = 2;
  } else {
    columnCount = 1;
  }

  if (options.maxColumns && columnCount > options.maxColumns) {
    columnCount = options.maxColumns;
  }

  // Find max length of names to ensure text fits column width
  const maxCharLength = Math.max(...validMembers.map(name => name.length), 10);

  // Distribute items evenly across columns (balanced vertical column flow)
  const itemsPerCol = Math.ceil(validMembers.length / columnCount);
  const columns: string[][] = Array.from({ length: columnCount }, () => []);

  validMembers.forEach((name, idx) => {
    const colIdx = Math.floor(idx / itemsPerCol);
    if (colIdx < columnCount) {
      columns[colIdx].push(name);
    } else {
      // Put any remainder into the last column
      columns[columnCount - 1].push(name);
    }
  });

  // Calculate dynamic font size based on items per column and character length
  // 1-4 names: font size ~24-26px
  // 5-8 names: font size ~20-22px
  // 9-14 names: font size ~17-19px
  // 15-22 names: font size ~14-16px
  // 23+ names: font size ~13px
  let calculatedFontSize = maxFontSize;

  if (itemsPerCol > 10) {
    calculatedFontSize = 13;
  } else if (itemsPerCol > 7) {
    calculatedFontSize = 15;
  } else if (itemsPerCol > 5) {
    calculatedFontSize = 17;
  } else if (itemsPerCol > 3) {
    calculatedFontSize = 20;
  } else if (itemsPerCol > 2) {
    calculatedFontSize = 22;
  } else {
    calculatedFontSize = maxFontSize;
  }

  // Adjust if names are unusually long (e.g. 25+ Gujarati characters)
  if (maxCharLength > 24 && calculatedFontSize > 15) {
    calculatedFontSize -= 2;
  }

  // Enforce bounds
  const fontSize = Math.max(minFontSize, Math.min(maxFontSize, calculatedFontSize));
  const lineHeight = fontSize <= 14 ? 1.35 : 1.45;

  // Check for overflow:
  // If items per column exceeds 12 even at 4 columns, or total names > 40
  const hasOverflow = validMembers.length > 40 || (itemsPerCol > 11 && fontSize <= minFontSize);
  let overflowMessage: string | undefined;

  if (hasOverflow) {
    overflowMessage = `પરિવારના ${validMembers.length} નામો વધારે છે. બધા નામો સ્પષ્ટ દેખાય તે માટે વિશાળ પરિવાર ટેમ્પલેટ પસંદ કરો અથવા બે અલગ સ્તંભ પસંદ કરો.`;
  }

  return {
    columns,
    columnCount,
    fontSize,
    lineHeight,
    hasOverflow,
    overflowMessage,
    recommendedTemplateCategory: hasOverflow ? 'royal-gold' : undefined,
    totalNames: validMembers.length,
  };
}
