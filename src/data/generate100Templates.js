const fs = require('fs');
const path = require('path');

// 20 rich color palettes
const PALETTES = [
  { name: 'Maroon Gold', bg: '#3E0707', sec: '#581111', acc: '#E6A122', textLight: '#FBD46D', subLight: '#FDE68A', dark: true },
  { name: 'Dark Chocolate', bg: '#2A1810', sec: '#3D2317', acc: '#E5C378', textLight: '#FCE7A2', subLight: '#F3EDE2', dark: true },
  { name: 'Royal Navy', bg: '#0C192E', sec: '#162A45', acc: '#E2B857', textLight: '#FFEAA7', subLight: '#E2E8F0', dark: true },
  { name: 'Deep Burgundy', bg: '#38040E', sec: '#520817', acc: '#FDA4AF', textLight: '#FFE4E6', subLight: '#FECDD3', dark: true },
  { name: 'Forest Green', bg: '#0A2618', sec: '#143D27', acc: '#D4AF37', textLight: '#FDE047', subLight: '#DCFCE7', dark: true },
  { name: 'Black & Gold', bg: '#121212', sec: '#1E1E1E', acc: '#F59E0B', textLight: '#FEF3C7', subLight: '#E5E7EB', dark: true },
  { name: 'Deep Purple', bg: '#200E3A', sec: '#34145E', acc: '#ECC86C', textLight: '#FDF4DC', subLight: '#F3E8FF', dark: true },
  { name: 'Wine Red Floral', bg: '#4C0519', sec: '#6B0B24', acc: '#FECDD3', textLight: '#FFE4E6', subLight: '#FCE7F3', dark: true },
  { name: 'Traditional Saffron', bg: '#7C2D12', sec: '#9A3412', acc: '#FBBF24', textLight: '#FEF3C7', subLight: '#FFEDD5', dark: true },
  { name: 'Muted Olive Bronze', bg: '#1C2314', sec: '#2D3820', acc: '#C29B38', textLight: '#FEF08A', subLight: '#ECFCCB', dark: true },
  { name: 'Midnight Slate', bg: '#0F172A', sec: '#1E293B', acc: '#CBD5E1', textLight: '#F1F5F9', subLight: '#E2E8F0', dark: true },
  { name: 'Terracotta Amber', bg: '#431407', sec: '#60210E', acc: '#FBBF24', textLight: '#FEF3C7', subLight: '#FED7AA', dark: true },
  { name: 'Peacock Teal Gold', bg: '#062A30', sec: '#0C414A', acc: '#EAB308', textLight: '#FEF9C3', subLight: '#CCFBF1', dark: true },
  { name: 'Charcoal Espresso', bg: '#1A1615', sec: '#2B2523', acc: '#D97706', textLight: '#FEF3C7', subLight: '#E7E5E4', dark: true },
  { name: 'Deep Plum Rose', bg: '#2E1026', sec: '#45183A', acc: '#FB7185', textLight: '#FFF1F2', subLight: '#FCE7F3', dark: true },
  { name: 'Vintage Ochre', bg: '#382405', sec: '#523608', acc: '#F59E0B', textLight: '#FEF08A', subLight: '#FEF9C3', dark: true },
  { name: 'Royal Indigo', bg: '#171A38', sec: '#262B57', acc: '#FDE047', textLight: '#FEF08A', subLight: '#E0E7FF', dark: true },
  { name: 'Velvet Crimson', bg: '#450A0A', sec: '#650F0F', acc: '#FBBF24', textLight: '#FDE68A', subLight: '#FEE2E2', dark: true },
  { name: 'Sacred Ivory Light', bg: '#FAF8F5', sec: '#EFE9DE', acc: '#92611A', textLight: '#451A03', subLight: '#292524', dark: false },
  { name: 'Sandalwood Cream Light', bg: '#FDFBF7', sec: '#F5EBE1', acc: '#991B1B', textLight: '#78350F', subLight: '#1C1917', dark: false },
];

const BORDER_STYLES = [
  'traditional',
  'royal-filigree',
  'floral-divine',
  'minimal-gold',
  'ornamental-arch',
  'rabari-embroidery',
];

const MOTIFS = ['om', 'kalash', 'diya', 'swastik', 'feather'];
const GARLAND_STYLES = ['marigold', 'white-rose', 'rose-petal', 'golden-frame', 'pearl-gold'];
const PHOTO_SHAPES = ['oval', 'circle', 'ornate', 'rect'];

const TEMPLATE_SPECS = [
  // 1. Shradhanjali (Classic, Floral, Divine) - 26 templates
  { id: 'shradh-maroon-divine', name: 'Divine Maroon Shradhanjali', guj: 'દિવ્ય મરૂન શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 0, b: 'traditional', m: 'om', g: 'marigold', d: ['agarbatti', 'rose-petals'], tags: ['શ્રદ્ધાંજલિ', 'મરૂન', 'અગરબત્તી', 'ઓમ'] },
  { id: 'shradh-choc-gold', name: 'Chocolate Gold Shradhanjali', guj: 'ચોકલેટ સુવર્ણ શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 1, b: 'royal-filigree', m: 'kalash', g: 'golden-frame', d: ['diya'], tags: ['શ્રદ્ધાંજલિ', 'ચોકલેટ', 'સોનેરી'] },
  { id: 'shradh-royal-navy', name: 'Royal Navy Shradhanjali', guj: 'શાહી નેવી શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 2, b: 'floral-divine', m: 'om', g: 'white-rose', d: ['agarbatti'], tags: ['શ્રદ્ધાંજલિ', 'શાહી', 'નેવી'] },
  { id: 'shradh-burgundy-rose', name: 'Burgundy Rose Shradhanjali', guj: 'બર્ગન્ડી ગુલાબ શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 3, b: 'floral-divine', m: 'swastik', g: 'rose-petal', d: ['rose-petals'], tags: ['શ્રદ્ધાંજલિ', 'ગુલાબ', 'બર્ગન્ડી'] },
  { id: 'shradh-forest-gold', name: 'Forest Gold Shradhanjali', guj: 'ગ્રીન ગોલ્ડ શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 4, b: 'royal-filigree', m: 'kalash', g: 'marigold', d: ['diya'], tags: ['શ્રદ્ધાંજલિ', 'ગ્રીન', 'સોનેરી'] },
  { id: 'shradh-black-amber', name: 'Black Amber Memorial', guj: 'કૃષ્ણ અંબર શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 5, b: 'minimal-gold', m: 'diya', g: 'golden-frame', d: ['diya', 'agarbatti'], tags: ['શ્રદ્ધાંજલિ', 'બ્લેક', 'દિવો'] },
  { id: 'shradh-purple-antique', name: 'Deep Purple Memorial', guj: 'જાંબલી સુવર્ણ શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 6, b: 'royal-filigree', m: 'om', g: 'pearl-gold', d: ['rose-petals'], tags: ['શ્રદ્ધાંજલિ', 'જાંબલી'] },
  { id: 'shradh-wine-rose', name: 'Wine Red Rose Tribute', guj: 'વાઇન રેડ સ્મૃતિ વંદના', cat: 'shradhanjali', pal: 7, b: 'floral-divine', m: 'feather', g: 'rose-petal', d: ['rose-petals', 'agarbatti'], tags: ['શ્રદ્ધાંજલિ', 'વાઇન રેડ'] },
  { id: 'shradh-saffron-heritage', name: 'Saffron Heritage Tribute', guj: 'કેસરી પરંપરા શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 8, b: 'ornamental-arch', m: 'om', g: 'marigold', d: ['marigold-corners'], tags: ['શ્રદ્ધાંજલિ', 'કેસરી', 'તોરણ'] },
  { id: 'shradh-olive-bronze', name: 'Olive Bronze Tribute', guj: 'ઓલિવ કાંસ્ય શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 9, b: 'traditional', m: 'kalash', g: 'white-rose', d: ['diya'], tags: ['શ્રદ્ધાંજલિ', 'કાંસ્ય'] },
  { id: 'shradh-slate-pearl', name: 'Slate Pearl Shradhanjali', guj: 'સ્લેટ મોતી શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 10, b: 'minimal-gold', m: 'om', g: 'pearl-gold', d: ['agarbatti'], tags: ['શ્રદ્ધાંજલિ', 'મોતી', 'શાંત'] },
  { id: 'shradh-terracotta-sun', name: 'Terracotta Sun Shradhanjali', guj: 'ટેરાકોટા સૂર્ય શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 11, b: 'ornamental-arch', m: 'diya', g: 'marigold', d: ['diya', 'marigold-corners'], tags: ['શ્રદ્ધાંજલિ', 'ટેરાકોટા'] },
  { id: 'shradh-peacock-gold', name: 'Peacock Gold Shradhanjali', guj: 'મયૂર પંખ શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 12, b: 'royal-filigree', m: 'feather', g: 'golden-frame', d: ['rose-petals'], tags: ['શ્રદ્ધાંજલિ', 'મોરપિચ્છ'] },
  { id: 'shradh-charcoal-copper', name: 'Charcoal Copper Shradhanjali', guj: 'કોપર ચારકોલ શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 13, b: 'traditional', m: 'om', g: 'golden-frame', d: ['agarbatti'], tags: ['શ્રદ્ધાંજલિ', 'કોપર'] },
  { id: 'shradh-plum-filigree', name: 'Plum Filigree Memorial', guj: 'શાહી પ્લમ શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 14, b: 'royal-filigree', m: 'swastik', g: 'rose-petal', d: ['rose-petals'], tags: ['શ્રદ્ધાંજલિ', 'પ્લમ'] },
  { id: 'shradh-ochre-mandap', name: 'Ochre Mandap Shradhanjali', guj: 'પીતાંબર મંડપ શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 15, b: 'ornamental-arch', m: 'kalash', g: 'marigold', d: ['diya', 'marigold-corners'], tags: ['શ્રદ્ધાંજલિ', 'મંડપ'] },
  { id: 'shradh-indigo-divine', name: 'Indigo Celestial Shradhanjali', guj: 'ઈન્ડિગો આકાશી શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 16, b: 'floral-divine', m: 'om', g: 'white-rose', d: ['agarbatti'], tags: ['શ્રદ્ધાંજલિ', 'ઈન્ડિગો'] },
  { id: 'shradh-crimson-garland', name: 'Crimson Garland Tribute', guj: 'કંકુ પુષ્પમાળા શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 17, b: 'traditional', m: 'kalash', g: 'marigold', d: ['agarbatti', 'rose-petals'], tags: ['શ્રદ્ધાંજલિ', 'હાર'] },
  { id: 'shradh-ivory-sacred', name: 'Sacred Ivory Shradhanjali', guj: 'પવિત્ર શ્વેત શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 18, b: 'floral-divine', m: 'om', g: 'white-rose', d: ['agarbatti'], tags: ['શ્રદ્ધાંજલિ', 'શ્વેત', 'શાંતિ'] },
  { id: 'shradh-sandalwood-kanku', name: 'Sandalwood Kanku Shradhanjali', guj: 'ચંદન કંકુ શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 19, b: 'traditional', m: 'swastik', g: 'rose-petal', d: ['rose-petals'], tags: ['શ્રદ્ધાંજલિ', 'ચંદન'] },
  { id: 'shradh-first-month-maroon', name: 'First Month Remembrance Maroon', guj: 'પ્રથમ માસિક મરૂન શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 0, b: 'royal-filigree', m: 'om', g: 'marigold', d: ['diya', 'agarbatti'], tags: ['પ્રથમ માસિક', 'શ્રદ્ધાંજલિ'] },
  { id: 'shradh-first-month-ivory', name: 'First Month Remembrance Ivory', guj: 'પ્રથમ માસિક શ્વેત શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 18, b: 'floral-divine', m: 'kalash', g: 'white-rose', d: ['rose-petals'], tags: ['પ્રથમ માસિક', 'શ્વેત'] },
  { id: 'shradh-family-velvet', name: 'Family Grand Velvet Memorial', guj: 'સમસ્ત પરિવાર વેલ્વેટ શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 1, b: 'traditional', m: 'om', g: 'golden-frame', d: ['diya'], tags: ['પરિવાર', 'શ્રદ્ધાંજલિ'] },
  { id: 'shradh-family-emerald', name: 'Family Grand Emerald Memorial', guj: 'સમસ્ત પરિવાર પન્ના શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 4, b: 'royal-filigree', m: 'kalash', g: 'marigold', d: ['agarbatti'], tags: ['પરિવાર', 'એમરાલ્ડ'] },
  { id: 'shradh-incense-smoke-gold', name: 'Sacred Incense Gold Memorial', guj: 'સુગંધિત ધૂપ સુવર્ણ શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 5, b: 'ornamental-arch', m: 'diya', g: 'golden-frame', d: ['agarbatti', 'diya'], tags: ['અગરબત્તી', 'ધૂપ'] },
  { id: 'shradh-rose-petal-crimson', name: 'Rose Petals Crimson Tribute', guj: 'ગુલાબ પાંખડી કંકુ શ્રદ્ધાંજલિ', cat: 'shradhanjali', pal: 17, b: 'floral-divine', m: 'feather', g: 'rose-petal', d: ['rose-petals', 'agarbatti'], tags: ['ગુલાબ', 'પાંખડી'] },

  // 2. Peaceful Floral (Flower Garlands, Lotus, White Rose) - 18 templates
  { id: 'floral-white-jasmine', name: 'White Jasmine Divine Peace', guj: 'શ્વેત ચમેલી દિવ્ય શાંતિ', cat: 'peaceful-floral', pal: 18, b: 'floral-divine', m: 'om', g: 'white-rose', d: ['agarbatti'], tags: ['શાંતિ', 'પુષ્પ', 'ચમેલી'] },
  { id: 'floral-sandalwood-lotus', name: 'Sandalwood Lotus Tribute', guj: 'ચંદન કમળ પુષ્પાંજલિ', cat: 'peaceful-floral', pal: 19, b: 'floral-divine', m: 'kalash', g: 'white-rose', d: ['rose-petals'], tags: ['કમળ', 'ચંદન'] },
  { id: 'floral-marigold-divine', name: 'Divine Marigold Garland', guj: 'દિવ્ય ગલગોટા પુષ્પાંજલિ', cat: 'peaceful-floral', pal: 0, b: 'traditional', m: 'om', g: 'marigold', d: ['marigold-corners'], tags: ['ગલગોટો', 'હાર'] },
  { id: 'floral-rose-garland-burgundy', name: 'Burgundy Rose Garland', guj: 'બર્ગન્ડી ગુલાબ પુષ્પાંજલિ', cat: 'peaceful-floral', pal: 3, b: 'floral-divine', m: 'swastik', g: 'rose-petal', d: ['rose-petals'], tags: ['ગુલાબહાર'] },
  { id: 'floral-emerald-spring', name: 'Sacred Emerald Spring', guj: 'શાંત હરિત પુષ્પાંજલિ', cat: 'peaceful-floral', pal: 4, b: 'floral-divine', m: 'feather', g: 'white-rose', d: ['agarbatti'], tags: ['શાંતિ', 'હરિત'] },
  { id: 'floral-cream-marigold', name: 'Cream Marigold Grace', guj: 'ક્રીમ ગલગોટા શ્રદ્ધાંજલિ', cat: 'peaceful-floral', pal: 18, b: 'ornamental-arch', m: 'diya', g: 'marigold', d: ['marigold-corners', 'diya'], tags: ['ગલગોટો'] },
  { id: 'floral-wine-petals', name: 'Wine Red Rose Blessing', guj: 'વાઇન રેડ ગુલાબ સ્મૃતિ', cat: 'peaceful-floral', pal: 7, b: 'floral-divine', m: 'om', g: 'rose-petal', d: ['rose-petals'], tags: ['ગુલાબ'] },
  { id: 'floral-saffron-blossom', name: 'Saffron Temple Blossom', guj: 'કેસરી ધાર્મિક પુષ્પાંજલિ', cat: 'peaceful-floral', pal: 8, b: 'traditional', m: 'kalash', g: 'marigold', d: ['marigold-corners'], tags: ['કેસરી'] },
  { id: 'floral-olive-tranquil', name: 'Olive Tranquil Tribute', guj: 'ઓલિવ શાંત પુષ્પાંજલિ', cat: 'peaceful-floral', pal: 9, b: 'minimal-gold', m: 'feather', g: 'white-rose', d: ['agarbatti'], tags: ['શાંતિ'] },
  { id: 'floral-navy-lotus', name: 'Royal Navy Lotus Tribute', guj: 'શાહી નેવી કમળ પુષ્પાંજલિ', cat: 'peaceful-floral', pal: 2, b: 'floral-divine', m: 'om', g: 'pearl-gold', d: ['rose-petals'], tags: ['કમળ'] },
  { id: 'floral-terracotta-garland', name: 'Terracotta Floral Garland', guj: 'ટેરાકોટા પુષ્પમાળા', cat: 'peaceful-floral', pal: 11, b: 'ornamental-arch', m: 'diya', g: 'marigold', d: ['diya', 'marigold-corners'], tags: ['ટેરાકોટા'] },
  { id: 'floral-peacock-petals', name: 'Peacock Rose Petals Tribute', guj: 'મયૂર પંખ પુષ્પાંજલિ', cat: 'peaceful-floral', pal: 12, b: 'royal-filigree', m: 'feather', g: 'rose-petal', d: ['rose-petals'], tags: ['મોરપંખ'] },
  { id: 'floral-purple-lilac', name: 'Purple Lilac Divine Peace', guj: 'જાંબલી પુષ્પાંજલિ', cat: 'peaceful-floral', pal: 6, b: 'floral-divine', m: 'om', g: 'pearl-gold', d: ['agarbatti'], tags: ['જાંબલી'] },
  { id: 'floral-chocolate-jasmine', name: 'Chocolate Jasmine Tribute', guj: 'ચોકલેટ ચમેલી શ્રદ્ધાંજલિ', cat: 'peaceful-floral', pal: 1, b: 'traditional', m: 'kalash', g: 'white-rose', d: ['agarbatti'], tags: ['ચમેલી'] },
  { id: 'floral-plum-blossom', name: 'Plum Blossom Tribute', guj: 'શાહી પ્લમ પુષ્પાંજલિ', cat: 'peaceful-floral', pal: 14, b: 'floral-divine', m: 'feather', g: 'rose-petal', d: ['rose-petals'], tags: ['પ્લમ'] },
  { id: 'floral-slate-lotus', name: 'Slate Lotus Divine Peace', guj: 'સ્લેટ કમળ શ્રદ્ધાંજલિ', cat: 'peaceful-floral', pal: 10, b: 'minimal-gold', m: 'om', g: 'white-rose', d: ['agarbatti'], tags: ['કમળ'] },
  { id: 'floral-amber-marigold', name: 'Amber Glow Marigold Tribute', guj: 'અંબર જ્યોત ગલગોટો પુષ્પાંજલિ', cat: 'peaceful-floral', pal: 15, b: 'ornamental-arch', m: 'diya', g: 'marigold', d: ['marigold-corners', 'diya'], tags: ['ગલગોટો', 'જ્યોત'] },
  { id: 'floral-crimson-rose-arch', name: 'Crimson Rose Arch Tribute', guj: 'કંકુ ગુલાબ તોરણ શ્રદ્ધાંજલિ', cat: 'peaceful-floral', pal: 17, b: 'ornamental-arch', m: 'kalash', g: 'rose-petal', d: ['rose-petals', 'agarbatti'], tags: ['તોરણ', 'ગુલાબ'] },

  // 3. Royal Gold & Dark Premium - 16 templates
  { id: 'royal-black-gold-heritage', name: 'Black Gold Imperial Heritage', guj: 'શાહી બ્લેક ગોલ્ડ હેરિટેજ', cat: 'royal-gold', pal: 5, b: 'royal-filigree', m: 'om', g: 'golden-frame', d: ['diya'], tags: ['શાહી', 'ગોલ્ડ', 'બ્લેક'] },
  { id: 'royal-chocolate-filigree', name: 'Chocolate Imperial Filigree', guj: 'ચોકલેટ શાહી ફિલિગ્રી', cat: 'royal-gold', pal: 1, b: 'royal-filigree', m: 'kalash', g: 'golden-frame', d: ['agarbatti'], tags: ['શાહી', 'ફિલિગ્રી'] },
  { id: 'royal-maroon-emperor', name: 'Maroon Emperor Gold Tribute', guj: 'મરૂન શાહી ગોલ્ડ સ્મૃતિ', cat: 'royal-gold', pal: 0, b: 'royal-filigree', m: 'om', g: 'golden-frame', d: ['diya', 'agarbatti'], tags: ['શાહી', 'મરૂન'] },
  { id: 'royal-navy-sovereign', name: 'Navy Sovereign Gold Tribute', guj: 'નેવી શાહી ગોલ્ડ શ્રદ્ધાંજલિ', cat: 'royal-gold', pal: 2, b: 'royal-filigree', m: 'om', g: 'pearl-gold', d: ['rose-petals'], tags: ['શાહી', 'નેવી'] },
  { id: 'royal-emerald-crown', name: 'Emerald Crown Gold Tribute', guj: 'પન્ના શાહી મુકુટ શ્રદ્ધાંજલિ', cat: 'royal-gold', pal: 4, b: 'royal-filigree', m: 'kalash', g: 'golden-frame', d: ['diya'], tags: ['શાહી', 'પન્ના'] },
  { id: 'royal-purple-regal', name: 'Purple Regal Gold Memorial', guj: 'શાહી જાંબલી સુવર્ણ સ્મૃતિ', cat: 'royal-gold', pal: 6, b: 'royal-filigree', m: 'swastik', g: 'golden-frame', d: ['rose-petals'], tags: ['શાહી', 'જાંબલી'] },
  { id: 'royal-wine-velvet', name: 'Wine Velvet Gold Memorial', guj: 'વાઇન વેલ્વેટ શાહી ગોલ્ડ', cat: 'royal-gold', pal: 7, b: 'royal-filigree', m: 'om', g: 'rose-petal', d: ['rose-petals'], tags: ['વાઇન', 'વેલ્વેટ'] },
  { id: 'royal-terracotta-palace', name: 'Terracotta Palace Tribute', guj: 'ટેરાકોટા રાજમહેલ શ્રદ્ધાંજલિ', cat: 'royal-gold', pal: 11, b: 'ornamental-arch', m: 'diya', g: 'golden-frame', d: ['diya'], tags: ['રાજમહેલ'] },
  { id: 'royal-peacock-dynasty', name: 'Peacock Dynasty Gold Tribute', guj: 'મયૂર શાહી સુવર્ણ શ્રદ્ધાંજલિ', cat: 'royal-gold', pal: 12, b: 'royal-filigree', m: 'feather', g: 'golden-frame', d: ['rose-petals'], tags: ['મોરપિચ્છ'] },
  { id: 'royal-charcoal-bronze', name: 'Charcoal Antique Bronze', guj: 'ચારકોલ એન્ટિક કાંસ્ય શ્રદ્ધાંજલિ', cat: 'royal-gold', pal: 13, b: 'minimal-gold', m: 'om', g: 'golden-frame', d: ['agarbatti'], tags: ['એન્ટિક'] },
  { id: 'royal-saffron-monarch', name: 'Saffron Monarch Tribute', guj: 'કેસરી રાજવી શ્રદ્ધાંજલિ', cat: 'royal-gold', pal: 8, b: 'ornamental-arch', m: 'kalash', g: 'golden-frame', d: ['marigold-corners'], tags: ['રાજવી'] },
  { id: 'royal-indigo-sapphire', name: 'Indigo Sapphire Memorial', guj: 'ઈન્ડિગો નીલમ શ્રદ્ધાંજલિ', cat: 'royal-gold', pal: 16, b: 'royal-filigree', m: 'om', g: 'pearl-gold', d: ['agarbatti'], tags: ['નીલમ'] },
  { id: 'royal-crimson-kanku', name: 'Crimson Kanku Gold Memorial', guj: 'કંકુ લાલ સુવર્ણ શ્રદ્ધાંજલિ', cat: 'royal-gold', pal: 17, b: 'royal-filigree', m: 'kalash', g: 'golden-frame', d: ['agarbatti', 'rose-petals'], tags: ['કંકુ'] },
  { id: 'royal-minimal-black', name: 'Minimalist Black Gold Premium', guj: 'મિનિમલ બ્લેક ગોલ્ડ પ્રીમિયમ', cat: 'royal-gold', pal: 5, b: 'minimal-gold', m: 'diya', g: 'golden-frame', d: ['diya'], tags: ['મિનિમલ'] },
  { id: 'royal-minimal-maroon', name: 'Minimalist Maroon Gold', guj: 'મિનિમલ મરૂન ગોલ્ડ', cat: 'royal-gold', pal: 0, b: 'minimal-gold', m: 'om', g: 'golden-frame', d: ['agarbatti'], tags: ['મિનિમલ'] },
  { id: 'royal-minimal-navy', name: 'Minimalist Navy Champagne', guj: 'મિનિમલ નેવી શેમ્પેઇન', cat: 'royal-gold', pal: 2, b: 'minimal-gold', m: 'om', g: 'pearl-gold', d: ['rose-petals'], tags: ['મિનિમલ'] },

  // 4. Temple Sacred (Diyas, Agarbatti, Incense, Bells) - 14 templates
  { id: 'temple-sacred-diya-gold', name: 'Sacred Akhand Diya Memorial', guj: 'અખંડ જ્યોત દિવ્ય શ્રદ્ધાંજલિ', cat: 'temple-sacred', pal: 5, b: 'ornamental-arch', m: 'diya', g: 'golden-frame', d: ['diya', 'agarbatti'], tags: ['દિવો', 'જ્યોત', 'ધાર્મિક'] },
  { id: 'temple-incense-smoke-maroon', name: 'Sacred Incense Maroon Temple', guj: 'ધૂપ-અગરબત્તી મરૂન શ્રદ્ધાંજલિ', cat: 'temple-sacred', pal: 0, b: 'traditional', m: 'om', g: 'marigold', d: ['agarbatti', 'diya'], tags: ['અગરબત્તી', 'ધૂપ'] },
  { id: 'temple-kalash-saffron', name: 'Sacred Kalash Saffron Tribute', guj: 'પવિત્ર કળશ કેસરી શ્રદ્ધાંજલિ', cat: 'temple-sacred', pal: 8, b: 'ornamental-arch', m: 'kalash', g: 'marigold', d: ['marigold-corners', 'diya'], tags: ['કળશ', 'કેસરી'] },
  { id: 'temple-ivory-omkar', name: 'Ivory Omkar Sacred Tribute', guj: 'શ્વેત ઓમકાર પવિત્ર શ્રદ્ધાંજલિ', cat: 'temple-sacred', pal: 18, b: 'floral-divine', m: 'om', g: 'white-rose', d: ['agarbatti'], tags: ['ઓમકાર', 'શ્વેત'] },
  { id: 'temple-chocolate-diya', name: 'Chocolate Diya Temple Blessing', guj: 'ચોકલેટ દીપક ધાર્મિક શ્રદ્ધાંજલિ', cat: 'temple-sacred', pal: 1, b: 'traditional', m: 'diya', g: 'marigold', d: ['diya', 'agarbatti'], tags: ['દીપક'] },
  { id: 'temple-forest-sanctuary', name: 'Forest Green Sacred Sanctuary', guj: 'હરિત તપોવન શ્રદ્ધાંજલિ', cat: 'temple-sacred', pal: 4, b: 'ornamental-arch', m: 'kalash', g: 'white-rose', d: ['diya'], tags: ['તપોવન'] },
  { id: 'temple-navy-aaradhana', name: 'Royal Navy Aaradhana Memorial', guj: 'શાહી નેવી આરાધના શ્રદ્ધાંજલિ', cat: 'temple-sacred', pal: 2, b: 'royal-filigree', m: 'om', g: 'pearl-gold', d: ['agarbatti'], tags: ['આરાધના'] },
  { id: 'temple-terracotta-havan', name: 'Terracotta Havan Sacred Tribute', guj: 'ટેરાકોટા હવન સ્મૃતિ વંદના', cat: 'temple-sacred', pal: 11, b: 'ornamental-arch', m: 'diya', g: 'marigold', d: ['diya', 'agarbatti'], tags: ['હવન'] },
  { id: 'temple-crimson-prarthana', name: 'Crimson Sacred Prarthana', guj: 'કંકુ પવિત્ર પ્રાર્થના શ્રદ્ધાંજલિ', cat: 'temple-sacred', pal: 17, b: 'traditional', m: 'om', g: 'rose-petal', d: ['agarbatti', 'rose-petals'], tags: ['પ્રાર્થના'] },
  { id: 'temple-sandalwood-shanti', name: 'Sandalwood Shanti Memorial', guj: 'ચંદન દિવ્ય શાંતિ શ્રદ્ધાંજલિ', cat: 'temple-sacred', pal: 19, b: 'floral-divine', m: 'kalash', g: 'white-rose', d: ['rose-petals'], tags: ['શાંતિ', 'ચંદન'] },
  { id: 'temple-purple-bhakti', name: 'Deep Purple Bhakti Memorial', guj: 'જાંબલી ભક્તિભાવ શ્રદ્ધાંજલિ', cat: 'temple-sacred', pal: 6, b: 'royal-filigree', m: 'om', g: 'pearl-gold', d: ['diya'], tags: ['ભક્તિ'] },
  { id: 'temple-ochre-mandir', name: 'Ochre Mandir Toran Tribute', guj: 'પીતાંબર મંદિર તોરણ શ્રદ્ધાંજલિ', cat: 'temple-sacred', pal: 15, b: 'ornamental-arch', m: 'kalash', g: 'marigold', d: ['marigold-corners'], tags: ['મંદિર', 'તોરણ'] },
  { id: 'temple-peacock-krishna', name: 'Peacock Krishna Sacred Memorial', guj: 'શ્રીકૃષ્ણ ચરણ શ્રદ્ધાંજલિ', cat: 'temple-sacred', pal: 12, b: 'royal-filigree', m: 'feather', g: 'marigold', d: ['diya', 'agarbatti'], tags: ['શ્રીકૃષ્ણ'] },
  { id: 'temple-wine-jyoti', name: 'Wine Red Akhand Jyoti Tribute', guj: 'વાઇન અખંડ જ્યોત શ્રદ્ધાંજલિ', cat: 'temple-sacred', pal: 7, b: 'traditional', m: 'diya', g: 'rose-petal', d: ['diya'], tags: ['જ્યોત'] },

  // 5. Rabari-Style Heritage (Ethnic embroidery, mirrors, folk) - 10 templates
  { id: 'rabari-heritage-kutch', name: 'Rabari Kutch Aabhla Heritage', guj: 'રબારી કચ્છી આભલા ભરત', cat: 'rabari-style', pal: 0, b: 'rabari-embroidery', m: 'om', g: 'marigold', d: ['marigold-corners'], isRabariStyle: true, tags: ['રબારી', 'કચ્છી', 'આભલા'] },
  { id: 'rabari-kanku-red-folk', name: 'Rabari Kanku Red Folk Style', guj: 'રબારી કંકુ લાલ ભરતકામ', cat: 'rabari-style', pal: 17, b: 'rabari-embroidery', m: 'kalash', g: 'golden-frame', d: ['rose-petals'], isRabariStyle: true, tags: ['રબારી', 'કંકુ લાલ'] },
  { id: 'rabari-black-mirror-royal', name: 'Rabari Black Velvet Mirror', guj: 'રબારી કાળો વેલ્વેટ આભલો', cat: 'rabari-style', pal: 5, b: 'rabari-embroidery', m: 'diya', g: 'marigold', d: ['diya'], isRabariStyle: true, tags: ['રબારી', 'કાળો'] },
  { id: 'rabari-saffron-saurashtra', name: 'Rabari Saurashtra Saffron Heritage', guj: 'સૌરાષ્ટ્ર રબારી કેસરી શૈલી', cat: 'rabari-style', pal: 8, b: 'rabari-embroidery', m: 'om', g: 'marigold', d: ['marigold-corners'], isRabariStyle: true, tags: ['સૌરાષ્ટ્ર', 'રબારી'] },
  { id: 'rabari-chocolate-embroidery', name: 'Rabari Chocolate Traditional', guj: 'રબારી ચોકલેટ પરંપરાગત', cat: 'rabari-style', pal: 1, b: 'rabari-embroidery', m: 'kalash', g: 'golden-frame', d: ['agarbatti'], isRabariStyle: true, tags: ['રબારી', 'ચોકલેટ'] },
  { id: 'rabari-terracotta-kutch', name: 'Rabari Terracotta Kutch Style', guj: 'રબારી ટેરાકોટા ભરતકામ', cat: 'rabari-style', pal: 11, b: 'rabari-embroidery', m: 'diya', g: 'marigold', d: ['marigold-corners'], isRabariStyle: true, tags: ['રબારી', 'ટેરાકોટા'] },
  { id: 'rabari-navy-kutchi-folk', name: 'Rabari Navy Kutchi Folk', guj: 'રબારી નેવી કચ્છી શૈલી', cat: 'rabari-style', pal: 2, b: 'rabari-embroidery', m: 'om', g: 'pearl-gold', d: ['rose-petals'], isRabariStyle: true, tags: ['રબારી', 'નેવી'] },
  { id: 'rabari-forest-traditional', name: 'Rabari Forest Folk Heritage', guj: 'રબારી હરિત લોકસંસ્કૃતિ', cat: 'rabari-style', pal: 4, b: 'rabari-embroidery', m: 'kalash', g: 'white-rose', d: ['diya'], isRabariStyle: true, tags: ['રબારી', 'હરિત'] },
  { id: 'rabari-wine-red-aabhla', name: 'Rabari Wine Red Aabhla Work', guj: 'રબારી વાઇન આભલા વર્ક', cat: 'rabari-style', pal: 7, b: 'rabari-embroidery', m: 'feather', g: 'rose-petal', d: ['rose-petals'], isRabariStyle: true, tags: ['રબારી', 'આભલા'] },
  { id: 'rabari-sandalwood-cream', name: 'Rabari Sandalwood Cream Folk', guj: 'રબારી ચંદન ક્રીમ શૈલી', cat: 'rabari-style', pal: 19, b: 'rabari-embroidery', m: 'om', g: 'white-rose', d: ['agarbatti'], isRabariStyle: true, tags: ['રબારી', 'ચંદન'] },

  // 6. Punyatithi (Annual & Monthly Remembrance) - 10 templates
  { id: 'punyatithi-royal-smaran', name: 'Royal Smaran Punyatithi', guj: 'શાહી સ્મૃતિ વાર્ષિક પુણ્યતિથિ', cat: 'punyatithi', pal: 6, b: 'royal-filigree', m: 'om', g: 'golden-frame', d: ['rose-petals'], tags: ['પુણ્યતિથિ', 'વાર્ષિક'] },
  { id: 'punyatithi-maroon-anant', name: 'Maroon Anant Smruti', guj: 'મરૂન અનંત સ્મૃતિ પુણ્યતિથિ', cat: 'punyatithi', pal: 0, b: 'traditional', m: 'om', g: 'marigold', d: ['agarbatti', 'diya'], tags: ['પુણ્યતિથિ', 'મરૂન'] },
  { id: 'punyatithi-chocolate-varshik', name: 'Chocolate Varshik Smaran', guj: 'ચોકલેટ વાર્ષિક સ્મરણ પત્રિકા', cat: 'punyatithi', pal: 1, b: 'royal-filigree', m: 'kalash', g: 'golden-frame', d: ['diya'], tags: ['પુણ્યતિથિ', 'ચોકલેટ'] },
  { id: 'punyatithi-navy-pranipata', name: 'Royal Navy Pranipata Smaran', guj: 'શાહી નેવી પ્રણિપાત પુણ્યતિથિ', cat: 'punyatithi', pal: 2, b: 'floral-divine', m: 'om', g: 'pearl-gold', d: ['rose-petals'], tags: ['પુણ્યતિથિ', 'નેવી'] },
  { id: 'punyatithi-saffron-amrut', name: 'Saffron Amrut Smaran', guj: 'કેસરી અમૃત સ્મૃતિ પુણ્યતિથિ', cat: 'punyatithi', pal: 8, b: 'ornamental-arch', m: 'diya', g: 'marigold', d: ['marigold-corners'], tags: ['પુણ્યતિથિ', 'કેસરી'] },
  { id: 'punyatithi-black-divine-light', name: 'Black Divine Light Punyatithi', guj: 'દિવ્ય જ્યોત સ્મૃતિ પુણ્યતિથિ', cat: 'punyatithi', pal: 5, b: 'minimal-gold', m: 'diya', g: 'golden-frame', d: ['diya', 'agarbatti'], tags: ['પુણ્યતિથિ', 'દિવો'] },
  { id: 'punyatithi-ivory-peaceful', name: 'Peaceful Ivory Punyatithi', guj: 'શ્વેત શાંતિ વાર્ષિક પુણ્યતિથિ', cat: 'punyatithi', pal: 18, b: 'floral-divine', m: 'kalash', g: 'white-rose', d: ['agarbatti'], tags: ['પુણ્યતિથિ', 'શ્વેત'] },
  { id: 'punyatithi-emerald-eternal', name: 'Emerald Eternal Remembrance', guj: 'હરિત અનંત સ્મૃતિ પુણ્યતિથિ', cat: 'punyatithi', pal: 4, b: 'royal-filigree', m: 'om', g: 'white-rose', d: ['rose-petals'], tags: ['પુણ્યતિથિ', 'હરિત'] },
  { id: 'punyatithi-terracotta-smruti', name: 'Terracotta Smruti Vandana', guj: 'ટેરાકોટા સ્મૃતિ વંદના પુણ્યતિથિ', cat: 'punyatithi', pal: 11, b: 'ornamental-arch', m: 'diya', g: 'marigold', d: ['diya'], tags: ['પુણ્યતિથિ'] },
  { id: 'punyatithi-crimson-kanku-smruti', name: 'Crimson Kanku Smruti Tribute', guj: 'કંકુ સ્મૃતિ પુષ્પાંજલિ પુણ્યતિથિ', cat: 'punyatithi', pal: 17, b: 'traditional', m: 'om', g: 'rose-petal', d: ['rose-petals', 'agarbatti'], tags: ['પુણ્યતિથિ'] },

  // 7. Besna / Prarthana Sabha - 10 templates
  { id: 'besna-sacred-prarthana-navy', name: 'Sacred Prarthana Sabha Navy', guj: 'પવિત્ર પ્રાર્થના સભા બેસણું', cat: 'besna', pal: 2, b: 'traditional', m: 'diya', g: 'marigold', d: ['diya'], tags: ['બેસણું', 'પ્રાર્થના સભા'] },
  { id: 'besna-cream-traditional', name: 'Cream Serene Besna Patrika', guj: 'શાંત ક્રીમ બેસણું પત્રિકા', cat: 'besna', pal: 19, b: 'traditional', m: 'diya', g: 'marigold', d: ['agarbatti'], tags: ['બેસણું', 'ક્રીમ'] },
  { id: 'besna-maroon-dignity', name: 'Maroon Dignified Besna', guj: 'મરૂન ગૌરવપૂર્ણ બેસણું', cat: 'besna', pal: 0, b: 'royal-filigree', m: 'om', g: 'golden-frame', d: ['diya'], tags: ['બેસણું', 'મરૂન'] },
  { id: 'besna-chocolate-sabha', name: 'Chocolate Shok Sabha Besna', guj: 'ચોકલેટ શોક સભા બેસણું', cat: 'besna', pal: 1, b: 'traditional', m: 'kalash', g: 'golden-frame', d: ['agarbatti'], tags: ['બેસણું', 'ચોકલેટ'] },
  { id: 'besna-ivory-shanti', name: 'Ivory Divine Shanti Besna', guj: 'શ્વેત દિવ્ય શાંતિ બેસણું', cat: 'besna', pal: 18, b: 'floral-divine', m: 'om', g: 'white-rose', d: ['rose-petals'], tags: ['બેસણું', 'શ્વેત'] },
  { id: 'besna-saffron-prarthana', name: 'Saffron Prarthana Mandap Besna', guj: 'કેસરી પ્રાર્થના મંડપ બેસણું', cat: 'besna', pal: 8, b: 'ornamental-arch', m: 'diya', g: 'marigold', d: ['marigold-corners'], tags: ['બેસણું', 'કેસરી'] },
  { id: 'besna-black-gold-solemn', name: 'Black Gold Solemn Besna', guj: 'બ્લેક ગોલ્ડ પ્રાર્થના સભા', cat: 'besna', pal: 5, b: 'minimal-gold', m: 'diya', g: 'golden-frame', d: ['diya'], tags: ['બેસણું', 'બ્લેક'] },
  { id: 'besna-forest-serenity', name: 'Forest Green Serene Besna', guj: 'હરિત શાંતિ પ્રાર્થના સભા', cat: 'besna', pal: 4, b: 'traditional', m: 'kalash', g: 'white-rose', d: ['agarbatti'], tags: ['બેસણું', 'હરિત'] },
  { id: 'besna-terracotta-dignified', name: 'Terracotta Dignified Besna', guj: 'ટેરાકોટા પ્રાર્થના સભા', cat: 'besna', pal: 11, b: 'ornamental-arch', m: 'diya', g: 'marigold', d: ['diya'], tags: ['બેસણું'] },
  { id: 'besna-crimson-traditional', name: 'Crimson Traditional Besna', guj: 'કંકુ લાલ પરંપરાગત બેસણું', cat: 'besna', pal: 17, b: 'traditional', m: 'om', g: 'rose-petal', d: ['agarbatti'], tags: ['બેસણું', 'કંકુ'] },

  // 8. Shok Sabha - 5 templates
  { id: 'shok-sabha-deep-slate', name: 'Deep Slate Shok Sabha', guj: 'ગંભીર સ્લેટ શોક સભા', cat: 'shok-sabha', pal: 10, b: 'minimal-gold', m: 'diya', g: 'golden-frame', d: ['diya', 'agarbatti'], tags: ['શોક સભા', 'સ્લેટ'] },
  { id: 'shok-sabha-black-gold', name: 'Black Gold Shok Sabha', guj: 'શાહી કાળો શોક સભા પત્રિકા', cat: 'shok-sabha', pal: 5, b: 'traditional', m: 'om', g: 'golden-frame', d: ['diya'], tags: ['શોક સભા', 'બ્લેક'] },
  { id: 'shok-sabha-maroon-solemn', name: 'Maroon Solemn Shok Sabha', guj: 'મરૂન ગંભીર શોક સભા', cat: 'shok-sabha', pal: 0, b: 'royal-filigree', m: 'kalash', g: 'marigold', d: ['agarbatti'], tags: ['શોક સભા', 'મરૂન'] },
  { id: 'shok-sabha-navy-dignity', name: 'Navy Dignity Shok Sabha', guj: 'નેવી ગૌરવ શોક સભા', cat: 'shok-sabha', pal: 2, b: 'traditional', m: 'om', g: 'pearl-gold', d: ['rose-petals'], tags: ['શોક સભા', 'નેવી'] },
  { id: 'shok-sabha-chocolate-tribute', name: 'Chocolate Dignified Shok Sabha', guj: 'ચોકલેટ શોક સભા પત્રિકા', cat: 'shok-sabha', pal: 1, b: 'ornamental-arch', m: 'diya', g: 'golden-frame', d: ['diya'], tags: ['શોક સભા'] },

  // 9. Tervi / Dashkriya - 5 templates
  { id: 'tervi-sacred-dashkriya-maroon', name: 'Sacred Tervi Dashkriya Maroon', guj: 'તેરવી અને દશક્રિયા મરૂન પત્રિકા', cat: 'tervi-dashkriya', pal: 0, b: 'traditional', m: 'om', g: 'marigold', d: ['agarbatti'], tags: ['તેરવી', 'દશક્રિયા'] },
  { id: 'tervi-saffron-vidhi', name: 'Saffron Vidhi Tervi Patrika', guj: 'કેસરી ધાર્મિક તેરવી પત્રિકા', cat: 'tervi-dashkriya', pal: 8, b: 'ornamental-arch', m: 'kalash', g: 'marigold', d: ['marigold-corners'], tags: ['તેરવી', 'કેસરી'] },
  { id: 'tervi-chocolate-kriya', name: 'Chocolate Dashkriya Sabha', guj: 'ચોકલેટ દશક્રિયા વિધિ પત્રિકા', cat: 'tervi-dashkriya', pal: 1, b: 'traditional', m: 'diya', g: 'golden-frame', d: ['diya'], tags: ['દશક્રિયા', 'ચોકલેટ'] },
  { id: 'tervi-ivory-dashkriya', name: 'Ivory Peaceful Dashkriya', guj: 'શ્વેત શાંતિ દશક્રિયા પત્રિકા', cat: 'tervi-dashkriya', pal: 18, b: 'floral-divine', m: 'om', g: 'white-rose', d: ['rose-petals'], tags: ['દશક્રિયા', 'શ્વેત'] },
  { id: 'tervi-terracotta-kriya', name: 'Terracotta Tervi Vidhi Patrika', guj: 'ટેરાકોટા તેરવી વિધિ પત્રિકા', cat: 'tervi-dashkriya', pal: 11, b: 'ornamental-arch', m: 'diya', g: 'marigold', d: ['diya', 'agarbatti'], tags: ['તેરવી', 'ટેરાકોટા'] },
];

console.log('Total predefined template specs:', TEMPLATE_SPECS.length);

// Generate template objects
const generatedTemplates = TEMPLATE_SPECS.map((spec, index) => {
  const p = PALETTES[spec.pal];
  const isDark = p.dark;
  const textColor = isDark ? '#FFFFFF' : '#1C1917';
  const headingColor = p.textLight;
  const accent = p.acc;
  const datesColor = isDark ? p.subLight : '#451A03';
  const footerTextColor = isDark ? '#1C150C' : '#FFFFFF';

  return {
    id: spec.id,
    name: spec.name,
    gujaratiName: spec.guj,
    category: spec.cat,
    tags: spec.tags,
    thumbnailUrl: `/templates/${spec.id}.svg`,
    isPopular: index < 15 || spec.cat === 'rabari-style',
    isNew: index >= 12,
    isRabariStyle: Boolean(spec.isRabariStyle),
    theme: {
      bgType: 'procedural',
      bgColor: p.bg,
      secondaryColor: p.sec,
      accentColor: accent,
      borderStyle: spec.b,
      motif: spec.m,
      decorations: spec.d || [],
    },
    placeholders: {
      header: {
        x: 50,
        y: 8,
        width: 80,
        fontSize: 34,
        color: headingColor,
        fontFamily: 'Noto Sans Gujarati, sans-serif',
        fontWeight: 'bold',
        align: 'center',
        lineHeight: 1.3,
      },
      deceasedTitle: {
        x: 50,
        y: 13.5,
        width: 60,
        fontSize: 22,
        color: textColor,
        fontFamily: 'Noto Sans Gujarati, sans-serif',
        fontWeight: '600',
        align: 'center',
      },
      photo: {
        x: 50,
        y: 28,
        size: 24,
        aspectRatio: 1.15,
        shape: PHOTO_SHAPES[index % PHOTO_SHAPES.length],
        borderWidth: 5,
        borderColor: accent,
        garlandStyle: spec.g,
      },
      deceasedName: {
        x: 50,
        y: 43,
        width: 88,
        fontSize: 42,
        color: headingColor,
        fontFamily: 'Noto Serif Gujarati, Georgia, serif',
        fontWeight: 'bold',
        align: 'center',
        lineHeight: 1.2,
      },
      datesBlock: {
        x: 50,
        y: 50.5,
        width: 85,
        fontSize: 21,
        color: datesColor,
        fontFamily: 'Noto Sans Gujarati, sans-serif',
        align: 'center',
        lineHeight: 1.5,
      },
      villageBlock: {
        x: 50,
        y: 56.5,
        width: 70,
        fontSize: 20,
        color: isDark ? p.subLight : '#78350F',
        fontFamily: 'Noto Sans Gujarati, sans-serif',
        align: 'center',
      },
      besnaVenueBlock: {
        x: 50,
        y: 55.5,
        width: 85,
        fontSize: 20,
        color: textColor,
        fontFamily: 'Noto Sans Gujarati, sans-serif',
        align: 'center',
      },
      quoteBlock: {
        x: 50,
        y: 64.5,
        width: 84,
        fontSize: 20,
        color: textColor,
        fontFamily: 'Noto Serif Gujarati, Georgia, serif',
        align: 'center',
        lineHeight: 1.45,
      },
      familyGridBlock: {
        x: 50,
        y: 77.5,
        width: 88,
        height: 14,
        fontSize: 18,
        color: datesColor,
        fontFamily: 'Noto Sans Gujarati, sans-serif',
        align: 'center',
        lineHeight: 1.4,
      },
      footerBlock: {
        x: 50,
        y: 93,
        width: 90,
        fontSize: 22,
        color: footerTextColor,
        fontFamily: 'Noto Sans Gujarati, sans-serif',
        fontWeight: 'bold',
        align: 'center',
      },
    },
  };
});

// Write to TypeScript file
const fileContent = `// Authentic 100+ Template Collection for ADONI KAYA (અડોણી કાયા)
// Covering Shradhanjali, Besna, Shok Sabha, Tervi/Dashkriya, Punyatithi, and dedicated Rabari Style
import { CardTemplate } from '../lib/types';
import { enhanceTemplateDesigns } from './templateDesigns';

export const CARD_TEMPLATES: CardTemplate[] = enhanceTemplateDesigns(${JSON.stringify(generatedTemplates, null, 2)});
`;

fs.writeFileSync(path.join(__dirname, 'templates.ts'), fileContent, 'utf8');
console.log(`Successfully generated ${generatedTemplates.length} distinct templates into templates.ts!`);
