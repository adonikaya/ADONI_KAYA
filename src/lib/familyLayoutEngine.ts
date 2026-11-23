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

export interface SwargwasiLayoutOptions {
  layout: 'swargwasi-top' | 'swargwasi-columns';
  columns: 1 | 2 | 3 | 4;
  alignment: 'left' | 'center' | 'right';
  fontSize?: number;
  fontSizeDelta?: number;
  lineSpacing?: number;
  columnSpacing?: number;
  topBottomSpacing?: number;
  baseFontSize?: number;
}

export interface SwargwasiLayoutResult {
  swargwasiNames: string[];      // names of swargwasi members
  normalColumns: string[][];     // normal members in columns
  swargwasiColumns: string[][];  // for layout 'swargwasi-columns': swargwasi in col arrangement
  columnCount: number;
  fontSize: number;
  lineHeight: number;
  alignment: 'left' | 'center' | 'right';
  hasSwargwasi: boolean;
  hasNormal: boolean;
  hasOverflow: boolean;
  overflowMessage?: string;
  totalNames: number;
  estimatedHeight: number;
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

/**
 * Calculates layout for cards that separate swargwasi (deceased) members
 * from normal (living) family members, with configurable column layout.
 */
export function calculateSwargwasiLayout(
  members: FamilyMember[],
  options: SwargwasiLayoutOptions
): SwargwasiLayoutResult {
  // Separate swargwasi (marked via isSwargwasi flag or relation === 'swargwasi')
  const swargwasiMembers = members.filter(
    m => m.isSwargwasi === true || m.relation === 'swargwasi'
  );
  const normalMembers = members.filter(
    m => !m.isSwargwasi && m.relation !== 'swargwasi'
  );

  const swargwasiNames = swargwasiMembers
    .map(m => m.name.trim())
    .filter(n => n.length > 0);

  const normalNames = normalMembers
    .map(m => m.name.trim())
    .filter(n => n.length > 0);

  const totalNames = swargwasiNames.length + normalNames.length;
  const columnCount = options.columns || 2;
  const alignment = options.alignment || 'center';

  // --- Dynamic font size calculation ---
  const totalNormal = normalNames.length;
  let baseCalc = 20;
  if (totalNormal > 24) baseCalc = 13;
  else if (totalNormal > 16) baseCalc = 14;
  else if (totalNormal > 10) baseCalc = 16;
  else if (totalNormal > 5) baseCalc = 18;
  else baseCalc = 21;

  // If a baseFontSize is provided from template placeholder, use it as the starting point
  if (options.baseFontSize != null) {
    baseCalc = options.baseFontSize;
  }

  // Apply user font size delta
  const delta = options.fontSizeDelta || 0;
  let fontSize = options.fontSize ?? (baseCalc + delta);

  // Measure max character length to prevent horizontal clipping
  const allNames = [...swargwasiNames, ...normalNames];
  const maxCharLength = allNames.length > 0 ? Math.max(...allNames.map(n => n.length)) : 0;
  if (maxCharLength > 24 && fontSize > 14) {
    fontSize -= 2;
  }
  if (maxCharLength > 30 && fontSize > 12) {
    fontSize -= 1;
  }
  fontSize = Math.max(11, Math.min(36, fontSize));

  const lineHeight = options.lineSpacing ?? (fontSize <= 14 ? 1.35 : 1.45);

  // --- Distribute normal members into columns ---
  const normalColumns: string[][] = Array.from({ length: columnCount }, () => []);
  if (normalNames.length > 0) {
    const itemsPerCol = Math.ceil(normalNames.length / columnCount);
    normalNames.forEach((name, idx) => {
      const colIdx = Math.floor(idx / itemsPerCol);
      const targetCol = colIdx < columnCount ? colIdx : columnCount - 1;
      normalColumns[targetCol].push(name);
    });
  }

  // --- Distribute swargwasi members into columns (for 'swargwasi-columns' layout) ---
  // Ensure we don't create unnecessary empty columns if swargwasiNames < columnCount
  const swargwasiColCount = Math.min(swargwasiNames.length || 1, columnCount);
  const swargwasiColumns: string[][] = Array.from({ length: swargwasiColCount }, () => []);
  if (options.layout === 'swargwasi-columns' && swargwasiNames.length > 0) {
    const swItemsPerCol = Math.ceil(swargwasiNames.length / swargwasiColCount);
    swargwasiNames.forEach((name, idx) => {
      const colIdx = Math.floor(idx / swItemsPerCol);
      const targetCol = colIdx < swargwasiColCount ? colIdx : swargwasiColCount - 1;
      swargwasiColumns[targetCol].push(name);
    });
  }

  // --- Calculate estimated height for flow engine ---
  let estHeight = 0;
  const hasSwargwasi = swargwasiNames.length > 0;
  const hasNormal = normalNames.length > 0;

  if (hasSwargwasi) {
    // Heading 'લી.' height ~ 22px
    estHeight += 24;
    if (options.layout === 'swargwasi-top') {
      // Swargwasi lines
      estHeight += swargwasiNames.length * (fontSize * lineHeight) + 12;
    } else {
      // Swargwasi columns max rows
      const maxSwRows = Math.max(...swargwasiColumns.map(c => c.length), 1);
      estHeight += maxSwRows * (fontSize * lineHeight) + 12;
    }
  }

  if (hasNormal) {
    const maxNormalRows = Math.max(...normalColumns.map(c => c.length), 0);
    estHeight += maxNormalRows * (fontSize * lineHeight);
  }

  // Extra padding
  estHeight += (options.topBottomSpacing ?? 10);

  // --- Overflow detection ---
  const itemsPerColNormal = normalNames.length > 0 ? Math.ceil(normalNames.length / columnCount) : 0;
  const hasOverflow = totalNames > 36 || (itemsPerColNormal > 10 && fontSize <= 13);
  let overflowMessage: string | undefined;
  if (hasOverflow) {
    overflowMessage = `કુલ ${totalNames} નામો વધારે છે. બધા નામો સ્પષ્ટ રહે તે માટે 3 અથવા 4 સ્તંભ પસંદ કરો અથવા ફોન્ટ સાઈઝ થોડી ઘટાડો.`;
  }

  return {
    swargwasiNames,
    normalColumns,
    swargwasiColumns,
    columnCount,
    fontSize,
    lineHeight,
    alignment,
    hasSwargwasi,
    hasNormal,
    hasOverflow,
    overflowMessage,
    totalNames,
    estimatedHeight: estHeight,
  };
}
