// Core Types for ADONI KAYA (અડોણી કાયા)

export type TemplateCategory =
  | 'shradhanjali' // શ્રદ્ધાંજલિ
  | 'besna' // બેસણું
  | 'shok-sabha' // શોક સભા
  | 'tervi-dashkriya' // તેરવી / દશક્રિયા
  | 'punyatithi' // પુણ્યતિથિ
  | 'rabari-style' // રબારી શૈલી
  | 'royal-gold' // શાહી ગોલ્ડ
  | 'peaceful-floral' // શાંત પુષ્પાંજલિ
  | 'temple-sacred'; // પવિત્ર ધાર્મિક

export type AspectRatioFormat = '4:5' | '9:16' | '2:3' | 'A4';

export interface FormatDimensions {
  width: number;
  height: number;
  name: string;
  gujaratiName: string;
}

export const FORMAT_DIMENSIONS: Record<AspectRatioFormat, FormatDimensions> = {
  '4:5': { width: 1080, height: 1350, name: '1080 × 1350 (4:5 Portrait)', gujaratiName: 'સોશિયલ મીડિયા (૪:૫)' },
  '9:16': { width: 1080, height: 1920, name: '1080 × 1920 (9:16 Story)', gujaratiName: 'વોટ્સએપ સ્ટેટસ / સ્ટોરી (૯:૧૬)' },
  '2:3': { width: 1080, height: 1620, name: '1080 × 1620 (2:3 Portrait)', gujaratiName: 'પોર્ટ્રેટ કાર્ડ (૨:૩)' },
  'A4': { width: 1240, height: 1754, name: 'A4 Print (210 × 297 mm)', gujaratiName: 'પ્રિન્ટ માટે (A4)' },
};

export interface PlaceholderStyle {
  x: number; // percentage (0-100) or pixel
  y: number; // percentage (0-100)
  width: number; // percentage (0-100)
  height?: number; // percentage (0-100)
  fontSize: number; // base font size in px at 1080 width
  color: string;
  fontFamily: string;
  fontWeight?: string | number;
  align: 'left' | 'center' | 'right';
  lineHeight?: number;
  letterSpacing?: number;
  maxFontSize?: number;
  minFontSize?: number;
}

export type PhotoFrameShape =
  | 'circle'
  | 'square'
  | 'rect'
  | 'portrait-rect'
  | 'oval'
  | 'rounded-rect'
  | 'ornate';

export type TemplateComposition =
  | 'double-frame'
  | 'side-vines'
  | 'corner-bouquets'
  | 'arched-halo'
  | 'radial-halo'
  | 'lotus-medallion'
  | 'stepped-corners'
  | 'decorative-bands';

export interface PhotoFramePlaceholder {
  x: number; // center x percentage
  y: number; // center y percentage
  size: number; // width in percentage
  aspectRatio: number; // height/width ratio (1 for circle/square, 1.25 for oval)
  shape: PhotoFrameShape;
  borderWidth: number;
  borderColor: string;
  garlandStyle?: 'marigold' | 'white-rose' | 'golden-frame' | 'rose-petal' | 'pearl-gold' | 'none';
}

export interface TemplateDecorationAssets {
  diyaStand?: string;
  photoFrame?: string;
  diya?: string;
  flowerCorner?: string;
  garland?: string;
  flowers?: string;
}

export type TemplateLayoutVariant =
  | 'classic-centered'
  | 'split-horizontal'
  | 'asymmetric-left'
  | 'panel-card'
  | 'editorial'
  | 'arch-framed';

export type TemplateArtworkStyle =
  | 'jasmine-sides'
  | 'roses-opposite'
  | 'lilies-botanical'
  | 'hanging-florals'
  | 'lower-garland'
  | 'mughal-arch'
  | 'palace-frame'
  | 'carved-pillars'
  | 'parchment-scroll'
  | 'temple-arch'
  | 'sage-botanical'
  | 'olive-asymmetric'
  | 'eucalyptus-corners'
  | 'forest-panel'
  | 'floral-crescent'
  | 'minimal-clean'
  | 'modern-split'
  | 'editorial-lines'
  | 'beige-geometric'
  | 'monochrome-heritage'
  | 'golden-floral-corners'
  | 'watercolour-floral'
  | 'classic-double'
  | 'arch-and-garden'
  | 'luxury-maroon-gold';

export interface CardTemplate {
  id: string;
  name: string;
  gujaratiName: string;
  description?: string;
  category: TemplateCategory;
  tags: string[];
  thumbnailUrl: string;
  isPopular?: boolean;
  isNew?: boolean;
  isRabariStyle?: boolean;
  theme: {
    bgType: 'procedural' | 'image' | 'gradient';
    bgColor: string;
    secondaryColor?: string;
    accentColor: string;
    panelColor?: string;
    borderStyle: 'traditional' | 'rabari-embroidery' | 'royal-filigree' | 'floral-divine' | 'minimal-gold' | 'ornamental-arch' | 'sacred-mandap' | 'marigold-border';
    motif: 'om' | 'kalash' | 'diya' | 'swastik' | 'feather' | 'none';
    bgImageUrl?: string;
    decorations?: string[];
    composition?: TemplateComposition;
    layoutVariant?: TemplateLayoutVariant;
    artworkStyle?: TemplateArtworkStyle;
    decorationAssets?: TemplateDecorationAssets;
  };
  placeholders: {
    header: PlaceholderStyle;
    deceasedTitle: PlaceholderStyle;
    deceasedName: PlaceholderStyle;
    photo: PhotoFramePlaceholder;
    datesBlock: PlaceholderStyle;
    villageBlock: PlaceholderStyle;
    besnaVenueBlock?: PlaceholderStyle;
    quoteBlock: PlaceholderStyle;
    familyGridBlock: PlaceholderStyle;
    footerBlock: PlaceholderStyle;
  };
}

export interface DeceasedDetails {
  name: string;
  title: string; // 'સ્વ.' | 'ગં.સ્વ.' | 'સ્વર્ગસ્થ'
  photoUrl: string | null;
  photoScale?: number;
  photoXOffset?: number;
  photoYOffset?: number;
  includeFlowers?: boolean;
  includeDiya?: boolean;
  useRealDiyas?: boolean;
  useRealFlowers?: boolean;
  useRealFrames?: boolean;
  diyaVerticalOffset?: number;
  diyaHorizontalOffset?: number;
  diyaScale?: number;
  birthDate?: string;
  deathDate: string;
  weekday: string;
  tithi: string;
  tithiPaksha?: 'સુદ પક્ષ' | 'વદ પક્ષ';
  tithiName?: string;
  tithiMonth?: string;
  eventDate?: string; // used for calculating anniversary
  heading: string; // e.g. પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ
  isHeadingOverridden?: boolean;
  village: string;
  talukaCity?: string;
  besnaDate?: string;
  besnaWeekday?: string;
  besnaTime?: string;
  besnaVenue?: string;
  mobileNumbers?: string[];
  contactPersons?: { number: string; name?: string }[];
}

export interface FamilyMember {
  id: string;
  name: string;
  relation?: string;
  isSwargwasi?: boolean;
}

export interface FamilyDetails {
  familyName: string; // e.g. "દેસાઈ પરિવાર"
  nativeVillage: string; // e.g. "વાંકાનેર"
  extraNote?: string;
  members: FamilyMember[];
  showFooter: boolean;
  layoutStyle?: 'swargwasi-top' | 'swargwasi-columns';
  userColumns?: 1 | 2 | 3 | 4;
  userAlignment?: 'left' | 'center' | 'right';
  fontSizeDelta?: number;
  lineSpacing?: number;
  columnSpacing?: number;
  topBottomSpacing?: number;
}

export interface QuoteItem {
  id: string;
  category: string;
  categoryGujarati: string;
  text: string;
  authorOrRef?: string;
}

export interface ProjectCardState {
  cardType: 'shradhanjali' | 'besna';
  templateId: string;
  format: AspectRatioFormat;
  deceased: DeceasedDetails;
  quote: string;
  quoteCategory: string;
  family: FamilyDetails;
  customOverrides?: Record<string, Partial<PlaceholderStyle>>;
}

