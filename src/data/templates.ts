// Authentic 100+ Template Collection for ADONI KAYA (અડોણી કાયા)
// Covering Shradhanjali, Besna, Shok Sabha, Tervi/Dashkriya, Punyatithi, and dedicated Rabari Style
import { CardTemplate } from '../lib/types';
import { createAdditionalTemplates, enhanceTemplateDesigns } from './templateDesigns';

const BASE_TEMPLATES = enhanceTemplateDesigns([
  {
    "id": "shradh-maroon-divine",
    "name": "Divine Maroon Shradhanjali",
    "gujaratiName": "દિવ્ય મરૂન શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "મરૂન",
      "અગરબત્તી",
      "ઓમ"
    ],
    "thumbnailUrl": "/templates/shradh-maroon-divine.svg",
    "isPopular": true,
    "isNew": false,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#3E0707",
      "secondaryColor": "#581111",
      "accentColor": "#E6A122",
      "borderStyle": "traditional",
      "motif": "om",
      "decorations": [
        "agarbatti",
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FBD46D",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#E6A122",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FBD46D",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-choc-gold",
    "name": "Chocolate Gold Shradhanjali",
    "gujaratiName": "ચોકલેટ સુવર્ણ શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "ચોકલેટ",
      "સોનેરી"
    ],
    "thumbnailUrl": "/templates/shradh-choc-gold.svg",
    "isPopular": true,
    "isNew": false,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#2A1810",
      "secondaryColor": "#3D2317",
      "accentColor": "#E5C378",
      "borderStyle": "royal-filigree",
      "motif": "kalash",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FCE7A2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#E5C378",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FCE7A2",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-royal-navy",
    "name": "Royal Navy Shradhanjali",
    "gujaratiName": "શાહી નેવી શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "શાહી",
      "નેવી"
    ],
    "thumbnailUrl": "/templates/shradh-royal-navy.svg",
    "isPopular": true,
    "isNew": false,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0C192E",
      "secondaryColor": "#162A45",
      "accentColor": "#E2B857",
      "borderStyle": "floral-divine",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFEAA7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#E2B857",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFEAA7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-burgundy-rose",
    "name": "Burgundy Rose Shradhanjali",
    "gujaratiName": "બર્ગન્ડી ગુલાબ શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "ગુલાબ",
      "બર્ગન્ડી"
    ],
    "thumbnailUrl": "/templates/shradh-burgundy-rose.svg",
    "isPopular": true,
    "isNew": false,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#38040E",
      "secondaryColor": "#520817",
      "accentColor": "#FDA4AF",
      "borderStyle": "floral-divine",
      "motif": "swastik",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFE4E6",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#FDA4AF",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFE4E6",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FECDD3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FECDD3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FECDD3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-forest-gold",
    "name": "Forest Gold Shradhanjali",
    "gujaratiName": "ગ્રીન ગોલ્ડ શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "ગ્રીન",
      "સોનેરી"
    ],
    "thumbnailUrl": "/templates/shradh-forest-gold.svg",
    "isPopular": true,
    "isNew": false,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0A2618",
      "secondaryColor": "#143D27",
      "accentColor": "#D4AF37",
      "borderStyle": "royal-filigree",
      "motif": "kalash",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE047",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#D4AF37",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE047",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-black-amber",
    "name": "Black Amber Memorial",
    "gujaratiName": "કૃષ્ણ અંબર શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "બ્લેક",
      "દિવો"
    ],
    "thumbnailUrl": "/templates/shradh-black-amber.svg",
    "isPopular": true,
    "isNew": false,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#121212",
      "secondaryColor": "#1E1E1E",
      "accentColor": "#F59E0B",
      "borderStyle": "minimal-gold",
      "motif": "diya",
      "decorations": [
        "diya",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#F59E0B",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-purple-antique",
    "name": "Deep Purple Memorial",
    "gujaratiName": "જાંબલી સુવર્ણ શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "જાંબલી"
    ],
    "thumbnailUrl": "/templates/shradh-purple-antique.svg",
    "isPopular": true,
    "isNew": false,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#200E3A",
      "secondaryColor": "#34145E",
      "accentColor": "#ECC86C",
      "borderStyle": "royal-filigree",
      "motif": "om",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDF4DC",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#ECC86C",
        "garlandStyle": "pearl-gold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDF4DC",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-wine-rose",
    "name": "Wine Red Rose Tribute",
    "gujaratiName": "વાઇન રેડ સ્મૃતિ વંદના",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "વાઇન રેડ"
    ],
    "thumbnailUrl": "/templates/shradh-wine-rose.svg",
    "isPopular": true,
    "isNew": false,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#4C0519",
      "secondaryColor": "#6B0B24",
      "accentColor": "#FECDD3",
      "borderStyle": "floral-divine",
      "motif": "feather",
      "decorations": [
        "rose-petals",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFE4E6",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#FECDD3",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFE4E6",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-saffron-heritage",
    "name": "Saffron Heritage Tribute",
    "gujaratiName": "કેસરી પરંપરા શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "કેસરી",
      "તોરણ"
    ],
    "thumbnailUrl": "/templates/shradh-saffron-heritage.svg",
    "isPopular": true,
    "isNew": false,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#7C2D12",
      "secondaryColor": "#9A3412",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "om",
      "decorations": [
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-olive-bronze",
    "name": "Olive Bronze Tribute",
    "gujaratiName": "ઓલિવ કાંસ્ય શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "કાંસ્ય"
    ],
    "thumbnailUrl": "/templates/shradh-olive-bronze.svg",
    "isPopular": true,
    "isNew": false,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#1C2314",
      "secondaryColor": "#2D3820",
      "accentColor": "#C29B38",
      "borderStyle": "traditional",
      "motif": "kalash",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF08A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#C29B38",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF08A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#ECFCCB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#ECFCCB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#ECFCCB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-slate-pearl",
    "name": "Slate Pearl Shradhanjali",
    "gujaratiName": "સ્લેટ મોતી શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "મોતી",
      "શાંત"
    ],
    "thumbnailUrl": "/templates/shradh-slate-pearl.svg",
    "isPopular": true,
    "isNew": false,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0F172A",
      "secondaryColor": "#1E293B",
      "accentColor": "#CBD5E1",
      "borderStyle": "minimal-gold",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#F1F5F9",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#CBD5E1",
        "garlandStyle": "pearl-gold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#F1F5F9",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-terracotta-sun",
    "name": "Terracotta Sun Shradhanjali",
    "gujaratiName": "ટેરાકોટા સૂર્ય શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "ટેરાકોટા"
    ],
    "thumbnailUrl": "/templates/shradh-terracotta-sun.svg",
    "isPopular": true,
    "isNew": false,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#431407",
      "secondaryColor": "#60210E",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "diya",
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-peacock-gold",
    "name": "Peacock Gold Shradhanjali",
    "gujaratiName": "મયૂર પંખ શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "મોરપિચ્છ"
    ],
    "thumbnailUrl": "/templates/shradh-peacock-gold.svg",
    "isPopular": true,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#062A30",
      "secondaryColor": "#0C414A",
      "accentColor": "#EAB308",
      "borderStyle": "royal-filigree",
      "motif": "feather",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF9C3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#EAB308",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF9C3",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#CCFBF1",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#CCFBF1",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#CCFBF1",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-charcoal-copper",
    "name": "Charcoal Copper Shradhanjali",
    "gujaratiName": "કોપર ચારકોલ શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "કોપર"
    ],
    "thumbnailUrl": "/templates/shradh-charcoal-copper.svg",
    "isPopular": true,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#1A1615",
      "secondaryColor": "#2B2523",
      "accentColor": "#D97706",
      "borderStyle": "traditional",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#D97706",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E7E5E4",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E7E5E4",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E7E5E4",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-plum-filigree",
    "name": "Plum Filigree Memorial",
    "gujaratiName": "શાહી પ્લમ શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "પ્લમ"
    ],
    "thumbnailUrl": "/templates/shradh-plum-filigree.svg",
    "isPopular": true,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#2E1026",
      "secondaryColor": "#45183A",
      "accentColor": "#FB7185",
      "borderStyle": "royal-filigree",
      "motif": "swastik",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFF1F2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#FB7185",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFF1F2",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-ochre-mandap",
    "name": "Ochre Mandap Shradhanjali",
    "gujaratiName": "પીતાંબર મંડપ શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "મંડપ"
    ],
    "thumbnailUrl": "/templates/shradh-ochre-mandap.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#382405",
      "secondaryColor": "#523608",
      "accentColor": "#F59E0B",
      "borderStyle": "ornamental-arch",
      "motif": "kalash",
      "decorations": [
        "diya",
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF08A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#F59E0B",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF08A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FEF9C3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FEF9C3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FEF9C3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-indigo-divine",
    "name": "Indigo Celestial Shradhanjali",
    "gujaratiName": "ઈન્ડિગો આકાશી શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "ઈન્ડિગો"
    ],
    "thumbnailUrl": "/templates/shradh-indigo-divine.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#171A38",
      "secondaryColor": "#262B57",
      "accentColor": "#FDE047",
      "borderStyle": "floral-divine",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF08A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#FDE047",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF08A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E0E7FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E0E7FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E0E7FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-crimson-garland",
    "name": "Crimson Garland Tribute",
    "gujaratiName": "કંકુ પુષ્પમાળા શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "હાર"
    ],
    "thumbnailUrl": "/templates/shradh-crimson-garland.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#450A0A",
      "secondaryColor": "#650F0F",
      "accentColor": "#FBBF24",
      "borderStyle": "traditional",
      "motif": "kalash",
      "decorations": [
        "agarbatti",
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE68A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-ivory-sacred",
    "name": "Sacred Ivory Shradhanjali",
    "gujaratiName": "પવિત્ર શ્વેત શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "શ્વેત",
      "શાંતિ"
    ],
    "thumbnailUrl": "/templates/shradh-ivory-sacred.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#FAF8F5",
      "secondaryColor": "#EFE9DE",
      "accentColor": "#92611A",
      "borderStyle": "floral-divine",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#92611A",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#451A03",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-sandalwood-kanku",
    "name": "Sandalwood Kanku Shradhanjali",
    "gujaratiName": "ચંદન કંકુ શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "શ્રદ્ધાંજલિ",
      "ચંદન"
    ],
    "thumbnailUrl": "/templates/shradh-sandalwood-kanku.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#FDFBF7",
      "secondaryColor": "#F5EBE1",
      "accentColor": "#991B1B",
      "borderStyle": "traditional",
      "motif": "swastik",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#991B1B",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#78350F",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-first-month-maroon",
    "name": "First Month Remembrance Maroon",
    "gujaratiName": "પ્રથમ માસિક મરૂન શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "પ્રથમ માસિક",
      "શ્રદ્ધાંજલિ"
    ],
    "thumbnailUrl": "/templates/shradh-first-month-maroon.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#3E0707",
      "secondaryColor": "#581111",
      "accentColor": "#E6A122",
      "borderStyle": "royal-filigree",
      "motif": "om",
      "decorations": [
        "diya",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FBD46D",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#E6A122",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FBD46D",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-first-month-ivory",
    "name": "First Month Remembrance Ivory",
    "gujaratiName": "પ્રથમ માસિક શ્વેત શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "પ્રથમ માસિક",
      "શ્વેત"
    ],
    "thumbnailUrl": "/templates/shradh-first-month-ivory.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#FAF8F5",
      "secondaryColor": "#EFE9DE",
      "accentColor": "#92611A",
      "borderStyle": "floral-divine",
      "motif": "kalash",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#92611A",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#451A03",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-family-velvet",
    "name": "Family Grand Velvet Memorial",
    "gujaratiName": "સમસ્ત પરિવાર વેલ્વેટ શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "પરિવાર",
      "શ્રદ્ધાંજલિ"
    ],
    "thumbnailUrl": "/templates/shradh-family-velvet.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#2A1810",
      "secondaryColor": "#3D2317",
      "accentColor": "#E5C378",
      "borderStyle": "traditional",
      "motif": "om",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FCE7A2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#E5C378",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FCE7A2",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-family-emerald",
    "name": "Family Grand Emerald Memorial",
    "gujaratiName": "સમસ્ત પરિવાર પન્ના શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "પરિવાર",
      "એમરાલ્ડ"
    ],
    "thumbnailUrl": "/templates/shradh-family-emerald.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0A2618",
      "secondaryColor": "#143D27",
      "accentColor": "#D4AF37",
      "borderStyle": "royal-filigree",
      "motif": "kalash",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE047",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#D4AF37",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE047",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-incense-smoke-gold",
    "name": "Sacred Incense Gold Memorial",
    "gujaratiName": "સુગંધિત ધૂપ સુવર્ણ શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "અગરબત્તી",
      "ધૂપ"
    ],
    "thumbnailUrl": "/templates/shradh-incense-smoke-gold.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#121212",
      "secondaryColor": "#1E1E1E",
      "accentColor": "#F59E0B",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "agarbatti",
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#F59E0B",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shradh-rose-petal-crimson",
    "name": "Rose Petals Crimson Tribute",
    "gujaratiName": "ગુલાબ પાંખડી કંકુ શ્રદ્ધાંજલિ",
    "category": "shradhanjali",
    "tags": [
      "ગુલાબ",
      "પાંખડી"
    ],
    "thumbnailUrl": "/templates/shradh-rose-petal-crimson.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#450A0A",
      "secondaryColor": "#650F0F",
      "accentColor": "#FBBF24",
      "borderStyle": "floral-divine",
      "motif": "feather",
      "decorations": [
        "rose-petals",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE68A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-white-jasmine",
    "name": "White Jasmine Divine Peace",
    "gujaratiName": "શ્વેત ચમેલી દિવ્ય શાંતિ",
    "category": "peaceful-floral",
    "tags": [
      "શાંતિ",
      "પુષ્પ",
      "ચમેલી"
    ],
    "thumbnailUrl": "/templates/floral-white-jasmine.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#FAF8F5",
      "secondaryColor": "#EFE9DE",
      "accentColor": "#92611A",
      "borderStyle": "floral-divine",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#92611A",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#451A03",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-sandalwood-lotus",
    "name": "Sandalwood Lotus Tribute",
    "gujaratiName": "ચંદન કમળ પુષ્પાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "કમળ",
      "ચંદન"
    ],
    "thumbnailUrl": "/templates/floral-sandalwood-lotus.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#FDFBF7",
      "secondaryColor": "#F5EBE1",
      "accentColor": "#991B1B",
      "borderStyle": "floral-divine",
      "motif": "kalash",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#991B1B",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#78350F",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-marigold-divine",
    "name": "Divine Marigold Garland",
    "gujaratiName": "દિવ્ય ગલગોટા પુષ્પાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "ગલગોટો",
      "હાર"
    ],
    "thumbnailUrl": "/templates/floral-marigold-divine.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#3E0707",
      "secondaryColor": "#581111",
      "accentColor": "#E6A122",
      "borderStyle": "traditional",
      "motif": "om",
      "decorations": [
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FBD46D",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#E6A122",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FBD46D",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-rose-garland-burgundy",
    "name": "Burgundy Rose Garland",
    "gujaratiName": "બર્ગન્ડી ગુલાબ પુષ્પાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "ગુલાબહાર"
    ],
    "thumbnailUrl": "/templates/floral-rose-garland-burgundy.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#38040E",
      "secondaryColor": "#520817",
      "accentColor": "#FDA4AF",
      "borderStyle": "floral-divine",
      "motif": "swastik",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFE4E6",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#FDA4AF",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFE4E6",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FECDD3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FECDD3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FECDD3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-emerald-spring",
    "name": "Sacred Emerald Spring",
    "gujaratiName": "શાંત હરિત પુષ્પાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "શાંતિ",
      "હરિત"
    ],
    "thumbnailUrl": "/templates/floral-emerald-spring.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0A2618",
      "secondaryColor": "#143D27",
      "accentColor": "#D4AF37",
      "borderStyle": "floral-divine",
      "motif": "feather",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE047",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#D4AF37",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE047",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-cream-marigold",
    "name": "Cream Marigold Grace",
    "gujaratiName": "ક્રીમ ગલગોટા શ્રદ્ધાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "ગલગોટો"
    ],
    "thumbnailUrl": "/templates/floral-cream-marigold.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#FAF8F5",
      "secondaryColor": "#EFE9DE",
      "accentColor": "#92611A",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "marigold-corners",
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#92611A",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#451A03",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-wine-petals",
    "name": "Wine Red Rose Blessing",
    "gujaratiName": "વાઇન રેડ ગુલાબ સ્મૃતિ",
    "category": "peaceful-floral",
    "tags": [
      "ગુલાબ"
    ],
    "thumbnailUrl": "/templates/floral-wine-petals.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#4C0519",
      "secondaryColor": "#6B0B24",
      "accentColor": "#FECDD3",
      "borderStyle": "floral-divine",
      "motif": "om",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFE4E6",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#FECDD3",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFE4E6",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-saffron-blossom",
    "name": "Saffron Temple Blossom",
    "gujaratiName": "કેસરી ધાર્મિક પુષ્પાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "કેસરી"
    ],
    "thumbnailUrl": "/templates/floral-saffron-blossom.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#7C2D12",
      "secondaryColor": "#9A3412",
      "accentColor": "#FBBF24",
      "borderStyle": "traditional",
      "motif": "kalash",
      "decorations": [
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-olive-tranquil",
    "name": "Olive Tranquil Tribute",
    "gujaratiName": "ઓલિવ શાંત પુષ્પાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "શાંતિ"
    ],
    "thumbnailUrl": "/templates/floral-olive-tranquil.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#1C2314",
      "secondaryColor": "#2D3820",
      "accentColor": "#C29B38",
      "borderStyle": "minimal-gold",
      "motif": "feather",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF08A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#C29B38",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF08A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#ECFCCB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#ECFCCB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#ECFCCB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-navy-lotus",
    "name": "Royal Navy Lotus Tribute",
    "gujaratiName": "શાહી નેવી કમળ પુષ્પાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "કમળ"
    ],
    "thumbnailUrl": "/templates/floral-navy-lotus.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0C192E",
      "secondaryColor": "#162A45",
      "accentColor": "#E2B857",
      "borderStyle": "floral-divine",
      "motif": "om",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFEAA7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#E2B857",
        "garlandStyle": "pearl-gold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFEAA7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-terracotta-garland",
    "name": "Terracotta Floral Garland",
    "gujaratiName": "ટેરાકોટા પુષ્પમાળા",
    "category": "peaceful-floral",
    "tags": [
      "ટેરાકોટા"
    ],
    "thumbnailUrl": "/templates/floral-terracotta-garland.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#431407",
      "secondaryColor": "#60210E",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "diya",
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-peacock-petals",
    "name": "Peacock Rose Petals Tribute",
    "gujaratiName": "મયૂર પંખ પુષ્પાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "મોરપંખ"
    ],
    "thumbnailUrl": "/templates/floral-peacock-petals.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#062A30",
      "secondaryColor": "#0C414A",
      "accentColor": "#EAB308",
      "borderStyle": "royal-filigree",
      "motif": "feather",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF9C3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#EAB308",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF9C3",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#CCFBF1",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#CCFBF1",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#CCFBF1",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-purple-lilac",
    "name": "Purple Lilac Divine Peace",
    "gujaratiName": "જાંબલી પુષ્પાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "જાંબલી"
    ],
    "thumbnailUrl": "/templates/floral-purple-lilac.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#200E3A",
      "secondaryColor": "#34145E",
      "accentColor": "#ECC86C",
      "borderStyle": "floral-divine",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDF4DC",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#ECC86C",
        "garlandStyle": "pearl-gold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDF4DC",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-chocolate-jasmine",
    "name": "Chocolate Jasmine Tribute",
    "gujaratiName": "ચોકલેટ ચમેલી શ્રદ્ધાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "ચમેલી"
    ],
    "thumbnailUrl": "/templates/floral-chocolate-jasmine.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#2A1810",
      "secondaryColor": "#3D2317",
      "accentColor": "#E5C378",
      "borderStyle": "traditional",
      "motif": "kalash",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FCE7A2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#E5C378",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FCE7A2",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-plum-blossom",
    "name": "Plum Blossom Tribute",
    "gujaratiName": "શાહી પ્લમ પુષ્પાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "પ્લમ"
    ],
    "thumbnailUrl": "/templates/floral-plum-blossom.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#2E1026",
      "secondaryColor": "#45183A",
      "accentColor": "#FB7185",
      "borderStyle": "floral-divine",
      "motif": "feather",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFF1F2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#FB7185",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFF1F2",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-slate-lotus",
    "name": "Slate Lotus Divine Peace",
    "gujaratiName": "સ્લેટ કમળ શ્રદ્ધાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "કમળ"
    ],
    "thumbnailUrl": "/templates/floral-slate-lotus.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0F172A",
      "secondaryColor": "#1E293B",
      "accentColor": "#CBD5E1",
      "borderStyle": "minimal-gold",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#F1F5F9",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#CBD5E1",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#F1F5F9",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-amber-marigold",
    "name": "Amber Glow Marigold Tribute",
    "gujaratiName": "અંબર જ્યોત ગલગોટો પુષ્પાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "ગલગોટો",
      "જ્યોત"
    ],
    "thumbnailUrl": "/templates/floral-amber-marigold.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#382405",
      "secondaryColor": "#523608",
      "accentColor": "#F59E0B",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "marigold-corners",
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF08A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#F59E0B",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF08A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FEF9C3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FEF9C3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FEF9C3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "floral-crimson-rose-arch",
    "name": "Crimson Rose Arch Tribute",
    "gujaratiName": "કંકુ ગુલાબ તોરણ શ્રદ્ધાંજલિ",
    "category": "peaceful-floral",
    "tags": [
      "તોરણ",
      "ગુલાબ"
    ],
    "thumbnailUrl": "/templates/floral-crimson-rose-arch.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#450A0A",
      "secondaryColor": "#650F0F",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "kalash",
      "decorations": [
        "rose-petals",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE68A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-black-gold-heritage",
    "name": "Black Gold Imperial Heritage",
    "gujaratiName": "શાહી બ્લેક ગોલ્ડ હેરિટેજ",
    "category": "royal-gold",
    "tags": [
      "શાહી",
      "ગોલ્ડ",
      "બ્લેક"
    ],
    "thumbnailUrl": "/templates/royal-black-gold-heritage.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#121212",
      "secondaryColor": "#1E1E1E",
      "accentColor": "#F59E0B",
      "borderStyle": "royal-filigree",
      "motif": "om",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#F59E0B",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-chocolate-filigree",
    "name": "Chocolate Imperial Filigree",
    "gujaratiName": "ચોકલેટ શાહી ફિલિગ્રી",
    "category": "royal-gold",
    "tags": [
      "શાહી",
      "ફિલિગ્રી"
    ],
    "thumbnailUrl": "/templates/royal-chocolate-filigree.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#2A1810",
      "secondaryColor": "#3D2317",
      "accentColor": "#E5C378",
      "borderStyle": "royal-filigree",
      "motif": "kalash",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FCE7A2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#E5C378",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FCE7A2",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-maroon-emperor",
    "name": "Maroon Emperor Gold Tribute",
    "gujaratiName": "મરૂન શાહી ગોલ્ડ સ્મૃતિ",
    "category": "royal-gold",
    "tags": [
      "શાહી",
      "મરૂન"
    ],
    "thumbnailUrl": "/templates/royal-maroon-emperor.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#3E0707",
      "secondaryColor": "#581111",
      "accentColor": "#E6A122",
      "borderStyle": "royal-filigree",
      "motif": "om",
      "decorations": [
        "diya",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FBD46D",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#E6A122",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FBD46D",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-navy-sovereign",
    "name": "Navy Sovereign Gold Tribute",
    "gujaratiName": "નેવી શાહી ગોલ્ડ શ્રદ્ધાંજલિ",
    "category": "royal-gold",
    "tags": [
      "શાહી",
      "નેવી"
    ],
    "thumbnailUrl": "/templates/royal-navy-sovereign.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0C192E",
      "secondaryColor": "#162A45",
      "accentColor": "#E2B857",
      "borderStyle": "royal-filigree",
      "motif": "om",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFEAA7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#E2B857",
        "garlandStyle": "pearl-gold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFEAA7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-emerald-crown",
    "name": "Emerald Crown Gold Tribute",
    "gujaratiName": "પન્ના શાહી મુકુટ શ્રદ્ધાંજલિ",
    "category": "royal-gold",
    "tags": [
      "શાહી",
      "પન્ના"
    ],
    "thumbnailUrl": "/templates/royal-emerald-crown.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0A2618",
      "secondaryColor": "#143D27",
      "accentColor": "#D4AF37",
      "borderStyle": "royal-filigree",
      "motif": "kalash",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE047",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#D4AF37",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE047",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-purple-regal",
    "name": "Purple Regal Gold Memorial",
    "gujaratiName": "શાહી જાંબલી સુવર્ણ સ્મૃતિ",
    "category": "royal-gold",
    "tags": [
      "શાહી",
      "જાંબલી"
    ],
    "thumbnailUrl": "/templates/royal-purple-regal.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#200E3A",
      "secondaryColor": "#34145E",
      "accentColor": "#ECC86C",
      "borderStyle": "royal-filigree",
      "motif": "swastik",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDF4DC",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#ECC86C",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDF4DC",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-wine-velvet",
    "name": "Wine Velvet Gold Memorial",
    "gujaratiName": "વાઇન વેલ્વેટ શાહી ગોલ્ડ",
    "category": "royal-gold",
    "tags": [
      "વાઇન",
      "વેલ્વેટ"
    ],
    "thumbnailUrl": "/templates/royal-wine-velvet.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#4C0519",
      "secondaryColor": "#6B0B24",
      "accentColor": "#FECDD3",
      "borderStyle": "royal-filigree",
      "motif": "om",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFE4E6",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#FECDD3",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFE4E6",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-terracotta-palace",
    "name": "Terracotta Palace Tribute",
    "gujaratiName": "ટેરાકોટા રાજમહેલ શ્રદ્ધાંજલિ",
    "category": "royal-gold",
    "tags": [
      "રાજમહેલ"
    ],
    "thumbnailUrl": "/templates/royal-terracotta-palace.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#431407",
      "secondaryColor": "#60210E",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-peacock-dynasty",
    "name": "Peacock Dynasty Gold Tribute",
    "gujaratiName": "મયૂર શાહી સુવર્ણ શ્રદ્ધાંજલિ",
    "category": "royal-gold",
    "tags": [
      "મોરપિચ્છ"
    ],
    "thumbnailUrl": "/templates/royal-peacock-dynasty.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#062A30",
      "secondaryColor": "#0C414A",
      "accentColor": "#EAB308",
      "borderStyle": "royal-filigree",
      "motif": "feather",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF9C3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#EAB308",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF9C3",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#CCFBF1",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#CCFBF1",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#CCFBF1",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-charcoal-bronze",
    "name": "Charcoal Antique Bronze",
    "gujaratiName": "ચારકોલ એન્ટિક કાંસ્ય શ્રદ્ધાંજલિ",
    "category": "royal-gold",
    "tags": [
      "એન્ટિક"
    ],
    "thumbnailUrl": "/templates/royal-charcoal-bronze.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#1A1615",
      "secondaryColor": "#2B2523",
      "accentColor": "#D97706",
      "borderStyle": "minimal-gold",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#D97706",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E7E5E4",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E7E5E4",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E7E5E4",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-saffron-monarch",
    "name": "Saffron Monarch Tribute",
    "gujaratiName": "કેસરી રાજવી શ્રદ્ધાંજલિ",
    "category": "royal-gold",
    "tags": [
      "રાજવી"
    ],
    "thumbnailUrl": "/templates/royal-saffron-monarch.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#7C2D12",
      "secondaryColor": "#9A3412",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "kalash",
      "decorations": [
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-indigo-sapphire",
    "name": "Indigo Sapphire Memorial",
    "gujaratiName": "ઈન્ડિગો નીલમ શ્રદ્ધાંજલિ",
    "category": "royal-gold",
    "tags": [
      "નીલમ"
    ],
    "thumbnailUrl": "/templates/royal-indigo-sapphire.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#171A38",
      "secondaryColor": "#262B57",
      "accentColor": "#FDE047",
      "borderStyle": "royal-filigree",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF08A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#FDE047",
        "garlandStyle": "pearl-gold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF08A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E0E7FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E0E7FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E0E7FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-crimson-kanku",
    "name": "Crimson Kanku Gold Memorial",
    "gujaratiName": "કંકુ લાલ સુવર્ણ શ્રદ્ધાંજલિ",
    "category": "royal-gold",
    "tags": [
      "કંકુ"
    ],
    "thumbnailUrl": "/templates/royal-crimson-kanku.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#450A0A",
      "secondaryColor": "#650F0F",
      "accentColor": "#FBBF24",
      "borderStyle": "royal-filigree",
      "motif": "kalash",
      "decorations": [
        "agarbatti",
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE68A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-minimal-black",
    "name": "Minimalist Black Gold Premium",
    "gujaratiName": "મિનિમલ બ્લેક ગોલ્ડ પ્રીમિયમ",
    "category": "royal-gold",
    "tags": [
      "મિનિમલ"
    ],
    "thumbnailUrl": "/templates/royal-minimal-black.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#121212",
      "secondaryColor": "#1E1E1E",
      "accentColor": "#F59E0B",
      "borderStyle": "minimal-gold",
      "motif": "diya",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#F59E0B",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-minimal-maroon",
    "name": "Minimalist Maroon Gold",
    "gujaratiName": "મિનિમલ મરૂન ગોલ્ડ",
    "category": "royal-gold",
    "tags": [
      "મિનિમલ"
    ],
    "thumbnailUrl": "/templates/royal-minimal-maroon.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#3E0707",
      "secondaryColor": "#581111",
      "accentColor": "#E6A122",
      "borderStyle": "minimal-gold",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FBD46D",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#E6A122",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FBD46D",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "royal-minimal-navy",
    "name": "Minimalist Navy Champagne",
    "gujaratiName": "મિનિમલ નેવી શેમ્પેઇન",
    "category": "royal-gold",
    "tags": [
      "મિનિમલ"
    ],
    "thumbnailUrl": "/templates/royal-minimal-navy.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0C192E",
      "secondaryColor": "#162A45",
      "accentColor": "#E2B857",
      "borderStyle": "minimal-gold",
      "motif": "om",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFEAA7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#E2B857",
        "garlandStyle": "pearl-gold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFEAA7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-sacred-diya-gold",
    "name": "Sacred Akhand Diya Memorial",
    "gujaratiName": "અખંડ જ્યોત દિવ્ય શ્રદ્ધાંજલિ",
    "category": "temple-sacred",
    "tags": [
      "દિવો",
      "જ્યોત",
      "ધાર્મિક"
    ],
    "thumbnailUrl": "/templates/temple-sacred-diya-gold.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#121212",
      "secondaryColor": "#1E1E1E",
      "accentColor": "#F59E0B",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "diya",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#F59E0B",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-incense-smoke-maroon",
    "name": "Sacred Incense Maroon Temple",
    "gujaratiName": "ધૂપ-અગરબત્તી મરૂન શ્રદ્ધાંજલિ",
    "category": "temple-sacred",
    "tags": [
      "અગરબત્તી",
      "ધૂપ"
    ],
    "thumbnailUrl": "/templates/temple-incense-smoke-maroon.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#3E0707",
      "secondaryColor": "#581111",
      "accentColor": "#E6A122",
      "borderStyle": "traditional",
      "motif": "om",
      "decorations": [
        "agarbatti",
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FBD46D",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#E6A122",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FBD46D",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-kalash-saffron",
    "name": "Sacred Kalash Saffron Tribute",
    "gujaratiName": "પવિત્ર કળશ કેસરી શ્રદ્ધાંજલિ",
    "category": "temple-sacred",
    "tags": [
      "કળશ",
      "કેસરી"
    ],
    "thumbnailUrl": "/templates/temple-kalash-saffron.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#7C2D12",
      "secondaryColor": "#9A3412",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "kalash",
      "decorations": [
        "marigold-corners",
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-ivory-omkar",
    "name": "Ivory Omkar Sacred Tribute",
    "gujaratiName": "શ્વેત ઓમકાર પવિત્ર શ્રદ્ધાંજલિ",
    "category": "temple-sacred",
    "tags": [
      "ઓમકાર",
      "શ્વેત"
    ],
    "thumbnailUrl": "/templates/temple-ivory-omkar.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#FAF8F5",
      "secondaryColor": "#EFE9DE",
      "accentColor": "#92611A",
      "borderStyle": "floral-divine",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#92611A",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#451A03",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-chocolate-diya",
    "name": "Chocolate Diya Temple Blessing",
    "gujaratiName": "ચોકલેટ દીપક ધાર્મિક શ્રદ્ધાંજલિ",
    "category": "temple-sacred",
    "tags": [
      "દીપક"
    ],
    "thumbnailUrl": "/templates/temple-chocolate-diya.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#2A1810",
      "secondaryColor": "#3D2317",
      "accentColor": "#E5C378",
      "borderStyle": "traditional",
      "motif": "diya",
      "decorations": [
        "diya",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FCE7A2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#E5C378",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FCE7A2",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-forest-sanctuary",
    "name": "Forest Green Sacred Sanctuary",
    "gujaratiName": "હરિત તપોવન શ્રદ્ધાંજલિ",
    "category": "temple-sacred",
    "tags": [
      "તપોવન"
    ],
    "thumbnailUrl": "/templates/temple-forest-sanctuary.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0A2618",
      "secondaryColor": "#143D27",
      "accentColor": "#D4AF37",
      "borderStyle": "ornamental-arch",
      "motif": "kalash",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE047",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#D4AF37",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE047",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-navy-aaradhana",
    "name": "Royal Navy Aaradhana Memorial",
    "gujaratiName": "શાહી નેવી આરાધના શ્રદ્ધાંજલિ",
    "category": "temple-sacred",
    "tags": [
      "આરાધના"
    ],
    "thumbnailUrl": "/templates/temple-navy-aaradhana.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0C192E",
      "secondaryColor": "#162A45",
      "accentColor": "#E2B857",
      "borderStyle": "royal-filigree",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFEAA7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#E2B857",
        "garlandStyle": "pearl-gold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFEAA7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-terracotta-havan",
    "name": "Terracotta Havan Sacred Tribute",
    "gujaratiName": "ટેરાકોટા હવન સ્મૃતિ વંદના",
    "category": "temple-sacred",
    "tags": [
      "હવન"
    ],
    "thumbnailUrl": "/templates/temple-terracotta-havan.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#431407",
      "secondaryColor": "#60210E",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "diya",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-crimson-prarthana",
    "name": "Crimson Sacred Prarthana",
    "gujaratiName": "કંકુ પવિત્ર પ્રાર્થના શ્રદ્ધાંજલિ",
    "category": "temple-sacred",
    "tags": [
      "પ્રાર્થના"
    ],
    "thumbnailUrl": "/templates/temple-crimson-prarthana.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#450A0A",
      "secondaryColor": "#650F0F",
      "accentColor": "#FBBF24",
      "borderStyle": "traditional",
      "motif": "om",
      "decorations": [
        "agarbatti",
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE68A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-sandalwood-shanti",
    "name": "Sandalwood Shanti Memorial",
    "gujaratiName": "ચંદન દિવ્ય શાંતિ શ્રદ્ધાંજલિ",
    "category": "temple-sacred",
    "tags": [
      "શાંતિ",
      "ચંદન"
    ],
    "thumbnailUrl": "/templates/temple-sandalwood-shanti.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#FDFBF7",
      "secondaryColor": "#F5EBE1",
      "accentColor": "#991B1B",
      "borderStyle": "floral-divine",
      "motif": "kalash",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#991B1B",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#78350F",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-purple-bhakti",
    "name": "Deep Purple Bhakti Memorial",
    "gujaratiName": "જાંબલી ભક્તિભાવ શ્રદ્ધાંજલિ",
    "category": "temple-sacred",
    "tags": [
      "ભક્તિ"
    ],
    "thumbnailUrl": "/templates/temple-purple-bhakti.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#200E3A",
      "secondaryColor": "#34145E",
      "accentColor": "#ECC86C",
      "borderStyle": "royal-filigree",
      "motif": "om",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDF4DC",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#ECC86C",
        "garlandStyle": "pearl-gold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDF4DC",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-ochre-mandir",
    "name": "Ochre Mandir Toran Tribute",
    "gujaratiName": "પીતાંબર મંદિર તોરણ શ્રદ્ધાંજલિ",
    "category": "temple-sacred",
    "tags": [
      "મંદિર",
      "તોરણ"
    ],
    "thumbnailUrl": "/templates/temple-ochre-mandir.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#382405",
      "secondaryColor": "#523608",
      "accentColor": "#F59E0B",
      "borderStyle": "ornamental-arch",
      "motif": "kalash",
      "decorations": [
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF08A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#F59E0B",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF08A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FEF9C3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FEF9C3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FEF9C3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-peacock-krishna",
    "name": "Peacock Krishna Sacred Memorial",
    "gujaratiName": "શ્રીકૃષ્ણ ચરણ શ્રદ્ધાંજલિ",
    "category": "temple-sacred",
    "tags": [
      "શ્રીકૃષ્ણ"
    ],
    "thumbnailUrl": "/templates/temple-peacock-krishna.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#062A30",
      "secondaryColor": "#0C414A",
      "accentColor": "#EAB308",
      "borderStyle": "royal-filigree",
      "motif": "feather",
      "decorations": [
        "diya",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF9C3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#EAB308",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF9C3",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#CCFBF1",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#CCFBF1",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#CCFBF1",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "temple-wine-jyoti",
    "name": "Wine Red Akhand Jyoti Tribute",
    "gujaratiName": "વાઇન અખંડ જ્યોત શ્રદ્ધાંજલિ",
    "category": "temple-sacred",
    "tags": [
      "જ્યોત"
    ],
    "thumbnailUrl": "/templates/temple-wine-jyoti.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#4C0519",
      "secondaryColor": "#6B0B24",
      "accentColor": "#FECDD3",
      "borderStyle": "traditional",
      "motif": "diya",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFE4E6",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#FECDD3",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFE4E6",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "rabari-heritage-kutch",
    "name": "Rabari Kutch Aabhla Heritage",
    "gujaratiName": "રબારી કચ્છી આભલા ભરત",
    "category": "rabari-style",
    "tags": [
      "રબારી",
      "કચ્છી",
      "આભલા"
    ],
    "thumbnailUrl": "/templates/rabari-heritage-kutch.svg",
    "isPopular": true,
    "isNew": true,
    "isRabariStyle": true,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#3E0707",
      "secondaryColor": "#581111",
      "accentColor": "#E6A122",
      "borderStyle": "rabari-embroidery",
      "motif": "om",
      "decorations": [
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FBD46D",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#E6A122",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FBD46D",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "rabari-kanku-red-folk",
    "name": "Rabari Kanku Red Folk Style",
    "gujaratiName": "રબારી કંકુ લાલ ભરતકામ",
    "category": "rabari-style",
    "tags": [
      "રબારી",
      "કંકુ લાલ"
    ],
    "thumbnailUrl": "/templates/rabari-kanku-red-folk.svg",
    "isPopular": true,
    "isNew": true,
    "isRabariStyle": true,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#450A0A",
      "secondaryColor": "#650F0F",
      "accentColor": "#FBBF24",
      "borderStyle": "rabari-embroidery",
      "motif": "kalash",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE68A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "rabari-black-mirror-royal",
    "name": "Rabari Black Velvet Mirror",
    "gujaratiName": "રબારી કાળો વેલ્વેટ આભલો",
    "category": "rabari-style",
    "tags": [
      "રબારી",
      "કાળો"
    ],
    "thumbnailUrl": "/templates/rabari-black-mirror-royal.svg",
    "isPopular": true,
    "isNew": true,
    "isRabariStyle": true,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#121212",
      "secondaryColor": "#1E1E1E",
      "accentColor": "#F59E0B",
      "borderStyle": "rabari-embroidery",
      "motif": "diya",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#F59E0B",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "rabari-saffron-saurashtra",
    "name": "Rabari Saurashtra Saffron Heritage",
    "gujaratiName": "સૌરાષ્ટ્ર રબારી કેસરી શૈલી",
    "category": "rabari-style",
    "tags": [
      "સૌરાષ્ટ્ર",
      "રબારી"
    ],
    "thumbnailUrl": "/templates/rabari-saffron-saurashtra.svg",
    "isPopular": true,
    "isNew": true,
    "isRabariStyle": true,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#7C2D12",
      "secondaryColor": "#9A3412",
      "accentColor": "#FBBF24",
      "borderStyle": "rabari-embroidery",
      "motif": "om",
      "decorations": [
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "rabari-chocolate-embroidery",
    "name": "Rabari Chocolate Traditional",
    "gujaratiName": "રબારી ચોકલેટ પરંપરાગત",
    "category": "rabari-style",
    "tags": [
      "રબારી",
      "ચોકલેટ"
    ],
    "thumbnailUrl": "/templates/rabari-chocolate-embroidery.svg",
    "isPopular": true,
    "isNew": true,
    "isRabariStyle": true,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#2A1810",
      "secondaryColor": "#3D2317",
      "accentColor": "#E5C378",
      "borderStyle": "rabari-embroidery",
      "motif": "kalash",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FCE7A2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#E5C378",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FCE7A2",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "rabari-terracotta-kutch",
    "name": "Rabari Terracotta Kutch Style",
    "gujaratiName": "રબારી ટેરાકોટા ભરતકામ",
    "category": "rabari-style",
    "tags": [
      "રબારી",
      "ટેરાકોટા"
    ],
    "thumbnailUrl": "/templates/rabari-terracotta-kutch.svg",
    "isPopular": true,
    "isNew": true,
    "isRabariStyle": true,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#431407",
      "secondaryColor": "#60210E",
      "accentColor": "#FBBF24",
      "borderStyle": "rabari-embroidery",
      "motif": "diya",
      "decorations": [
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "rabari-navy-kutchi-folk",
    "name": "Rabari Navy Kutchi Folk",
    "gujaratiName": "રબારી નેવી કચ્છી શૈલી",
    "category": "rabari-style",
    "tags": [
      "રબારી",
      "નેવી"
    ],
    "thumbnailUrl": "/templates/rabari-navy-kutchi-folk.svg",
    "isPopular": true,
    "isNew": true,
    "isRabariStyle": true,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0C192E",
      "secondaryColor": "#162A45",
      "accentColor": "#E2B857",
      "borderStyle": "rabari-embroidery",
      "motif": "om",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFEAA7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#E2B857",
        "garlandStyle": "pearl-gold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFEAA7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "rabari-forest-traditional",
    "name": "Rabari Forest Folk Heritage",
    "gujaratiName": "રબારી હરિત લોકસંસ્કૃતિ",
    "category": "rabari-style",
    "tags": [
      "રબારી",
      "હરિત"
    ],
    "thumbnailUrl": "/templates/rabari-forest-traditional.svg",
    "isPopular": true,
    "isNew": true,
    "isRabariStyle": true,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0A2618",
      "secondaryColor": "#143D27",
      "accentColor": "#D4AF37",
      "borderStyle": "rabari-embroidery",
      "motif": "kalash",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE047",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#D4AF37",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE047",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "rabari-wine-red-aabhla",
    "name": "Rabari Wine Red Aabhla Work",
    "gujaratiName": "રબારી વાઇન આભલા વર્ક",
    "category": "rabari-style",
    "tags": [
      "રબારી",
      "આભલા"
    ],
    "thumbnailUrl": "/templates/rabari-wine-red-aabhla.svg",
    "isPopular": true,
    "isNew": true,
    "isRabariStyle": true,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#4C0519",
      "secondaryColor": "#6B0B24",
      "accentColor": "#FECDD3",
      "borderStyle": "rabari-embroidery",
      "motif": "feather",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFE4E6",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#FECDD3",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFE4E6",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FCE7F3",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "rabari-sandalwood-cream",
    "name": "Rabari Sandalwood Cream Folk",
    "gujaratiName": "રબારી ચંદન ક્રીમ શૈલી",
    "category": "rabari-style",
    "tags": [
      "રબારી",
      "ચંદન"
    ],
    "thumbnailUrl": "/templates/rabari-sandalwood-cream.svg",
    "isPopular": true,
    "isNew": true,
    "isRabariStyle": true,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#FDFBF7",
      "secondaryColor": "#F5EBE1",
      "accentColor": "#991B1B",
      "borderStyle": "rabari-embroidery",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#991B1B",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#78350F",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "punyatithi-royal-smaran",
    "name": "Royal Smaran Punyatithi",
    "gujaratiName": "શાહી સ્મૃતિ વાર્ષિક પુણ્યતિથિ",
    "category": "punyatithi",
    "tags": [
      "પુણ્યતિથિ",
      "વાર્ષિક"
    ],
    "thumbnailUrl": "/templates/punyatithi-royal-smaran.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#200E3A",
      "secondaryColor": "#34145E",
      "accentColor": "#ECC86C",
      "borderStyle": "royal-filigree",
      "motif": "om",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDF4DC",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#ECC86C",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDF4DC",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3E8FF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "punyatithi-maroon-anant",
    "name": "Maroon Anant Smruti",
    "gujaratiName": "મરૂન અનંત સ્મૃતિ પુણ્યતિથિ",
    "category": "punyatithi",
    "tags": [
      "પુણ્યતિથિ",
      "મરૂન"
    ],
    "thumbnailUrl": "/templates/punyatithi-maroon-anant.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#3E0707",
      "secondaryColor": "#581111",
      "accentColor": "#E6A122",
      "borderStyle": "traditional",
      "motif": "om",
      "decorations": [
        "agarbatti",
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FBD46D",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#E6A122",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FBD46D",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "punyatithi-chocolate-varshik",
    "name": "Chocolate Varshik Smaran",
    "gujaratiName": "ચોકલેટ વાર્ષિક સ્મરણ પત્રિકા",
    "category": "punyatithi",
    "tags": [
      "પુણ્યતિથિ",
      "ચોકલેટ"
    ],
    "thumbnailUrl": "/templates/punyatithi-chocolate-varshik.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#2A1810",
      "secondaryColor": "#3D2317",
      "accentColor": "#E5C378",
      "borderStyle": "royal-filigree",
      "motif": "kalash",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FCE7A2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#E5C378",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FCE7A2",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "punyatithi-navy-pranipata",
    "name": "Royal Navy Pranipata Smaran",
    "gujaratiName": "શાહી નેવી પ્રણિપાત પુણ્યતિથિ",
    "category": "punyatithi",
    "tags": [
      "પુણ્યતિથિ",
      "નેવી"
    ],
    "thumbnailUrl": "/templates/punyatithi-navy-pranipata.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0C192E",
      "secondaryColor": "#162A45",
      "accentColor": "#E2B857",
      "borderStyle": "floral-divine",
      "motif": "om",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFEAA7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#E2B857",
        "garlandStyle": "pearl-gold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFEAA7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "punyatithi-saffron-amrut",
    "name": "Saffron Amrut Smaran",
    "gujaratiName": "કેસરી અમૃત સ્મૃતિ પુણ્યતિથિ",
    "category": "punyatithi",
    "tags": [
      "પુણ્યતિથિ",
      "કેસરી"
    ],
    "thumbnailUrl": "/templates/punyatithi-saffron-amrut.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#7C2D12",
      "secondaryColor": "#9A3412",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "punyatithi-black-divine-light",
    "name": "Black Divine Light Punyatithi",
    "gujaratiName": "દિવ્ય જ્યોત સ્મૃતિ પુણ્યતિથિ",
    "category": "punyatithi",
    "tags": [
      "પુણ્યતિથિ",
      "દિવો"
    ],
    "thumbnailUrl": "/templates/punyatithi-black-divine-light.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#121212",
      "secondaryColor": "#1E1E1E",
      "accentColor": "#F59E0B",
      "borderStyle": "minimal-gold",
      "motif": "diya",
      "decorations": [
        "diya",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#F59E0B",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "punyatithi-ivory-peaceful",
    "name": "Peaceful Ivory Punyatithi",
    "gujaratiName": "શ્વેત શાંતિ વાર્ષિક પુણ્યતિથિ",
    "category": "punyatithi",
    "tags": [
      "પુણ્યતિથિ",
      "શ્વેત"
    ],
    "thumbnailUrl": "/templates/punyatithi-ivory-peaceful.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#FAF8F5",
      "secondaryColor": "#EFE9DE",
      "accentColor": "#92611A",
      "borderStyle": "floral-divine",
      "motif": "kalash",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#92611A",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#451A03",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "punyatithi-emerald-eternal",
    "name": "Emerald Eternal Remembrance",
    "gujaratiName": "હરિત અનંત સ્મૃતિ પુણ્યતિથિ",
    "category": "punyatithi",
    "tags": [
      "પુણ્યતિથિ",
      "હરિત"
    ],
    "thumbnailUrl": "/templates/punyatithi-emerald-eternal.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0A2618",
      "secondaryColor": "#143D27",
      "accentColor": "#D4AF37",
      "borderStyle": "royal-filigree",
      "motif": "om",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE047",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#D4AF37",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE047",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "punyatithi-terracotta-smruti",
    "name": "Terracotta Smruti Vandana",
    "gujaratiName": "ટેરાકોટા સ્મૃતિ વંદના પુણ્યતિથિ",
    "category": "punyatithi",
    "tags": [
      "પુણ્યતિથિ"
    ],
    "thumbnailUrl": "/templates/punyatithi-terracotta-smruti.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#431407",
      "secondaryColor": "#60210E",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "punyatithi-crimson-kanku-smruti",
    "name": "Crimson Kanku Smruti Tribute",
    "gujaratiName": "કંકુ સ્મૃતિ પુષ્પાંજલિ પુણ્યતિથિ",
    "category": "punyatithi",
    "tags": [
      "પુણ્યતિથિ"
    ],
    "thumbnailUrl": "/templates/punyatithi-crimson-kanku-smruti.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#450A0A",
      "secondaryColor": "#650F0F",
      "accentColor": "#FBBF24",
      "borderStyle": "traditional",
      "motif": "om",
      "decorations": [
        "rose-petals",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE68A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "besna-sacred-prarthana-navy",
    "name": "Sacred Prarthana Sabha Navy",
    "gujaratiName": "પવિત્ર પ્રાર્થના સભા બેસણું",
    "category": "besna",
    "tags": [
      "બેસણું",
      "પ્રાર્થના સભા"
    ],
    "thumbnailUrl": "/templates/besna-sacred-prarthana-navy.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0C192E",
      "secondaryColor": "#162A45",
      "accentColor": "#E2B857",
      "borderStyle": "traditional",
      "motif": "diya",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFEAA7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#E2B857",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFEAA7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "besna-cream-traditional",
    "name": "Cream Serene Besna Patrika",
    "gujaratiName": "શાંત ક્રીમ બેસણું પત્રિકા",
    "category": "besna",
    "tags": [
      "બેસણું",
      "ક્રીમ"
    ],
    "thumbnailUrl": "/templates/besna-cream-traditional.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#FDFBF7",
      "secondaryColor": "#F5EBE1",
      "accentColor": "#991B1B",
      "borderStyle": "traditional",
      "motif": "diya",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#991B1B",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#78350F",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "besna-maroon-dignity",
    "name": "Maroon Dignified Besna",
    "gujaratiName": "મરૂન ગૌરવપૂર્ણ બેસણું",
    "category": "besna",
    "tags": [
      "બેસણું",
      "મરૂન"
    ],
    "thumbnailUrl": "/templates/besna-maroon-dignity.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#3E0707",
      "secondaryColor": "#581111",
      "accentColor": "#E6A122",
      "borderStyle": "royal-filigree",
      "motif": "om",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FBD46D",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#E6A122",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FBD46D",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "besna-chocolate-sabha",
    "name": "Chocolate Shok Sabha Besna",
    "gujaratiName": "ચોકલેટ શોક સભા બેસણું",
    "category": "besna",
    "tags": [
      "બેસણું",
      "ચોકલેટ"
    ],
    "thumbnailUrl": "/templates/besna-chocolate-sabha.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#2A1810",
      "secondaryColor": "#3D2317",
      "accentColor": "#E5C378",
      "borderStyle": "traditional",
      "motif": "kalash",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FCE7A2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#E5C378",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FCE7A2",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "besna-ivory-shanti",
    "name": "Ivory Divine Shanti Besna",
    "gujaratiName": "શ્વેત દિવ્ય શાંતિ બેસણું",
    "category": "besna",
    "tags": [
      "બેસણું",
      "શ્વેત"
    ],
    "thumbnailUrl": "/templates/besna-ivory-shanti.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#FAF8F5",
      "secondaryColor": "#EFE9DE",
      "accentColor": "#92611A",
      "borderStyle": "floral-divine",
      "motif": "om",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#92611A",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#451A03",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "besna-saffron-prarthana",
    "name": "Saffron Prarthana Mandap Besna",
    "gujaratiName": "કેસરી પ્રાર્થના મંડપ બેસણું",
    "category": "besna",
    "tags": [
      "બેસણું",
      "કેસરી"
    ],
    "thumbnailUrl": "/templates/besna-saffron-prarthana.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#7C2D12",
      "secondaryColor": "#9A3412",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "besna-black-gold-solemn",
    "name": "Black Gold Solemn Besna",
    "gujaratiName": "બ્લેક ગોલ્ડ પ્રાર્થના સભા",
    "category": "besna",
    "tags": [
      "બેસણું",
      "બ્લેક"
    ],
    "thumbnailUrl": "/templates/besna-black-gold-solemn.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#121212",
      "secondaryColor": "#1E1E1E",
      "accentColor": "#F59E0B",
      "borderStyle": "minimal-gold",
      "motif": "diya",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#F59E0B",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "besna-forest-serenity",
    "name": "Forest Green Serene Besna",
    "gujaratiName": "હરિત શાંતિ પ્રાર્થના સભા",
    "category": "besna",
    "tags": [
      "બેસણું",
      "હરિત"
    ],
    "thumbnailUrl": "/templates/besna-forest-serenity.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0A2618",
      "secondaryColor": "#143D27",
      "accentColor": "#D4AF37",
      "borderStyle": "traditional",
      "motif": "kalash",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE047",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#D4AF37",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE047",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#DCFCE7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "besna-terracotta-dignified",
    "name": "Terracotta Dignified Besna",
    "gujaratiName": "ટેરાકોટા પ્રાર્થના સભા",
    "category": "besna",
    "tags": [
      "બેસણું"
    ],
    "thumbnailUrl": "/templates/besna-terracotta-dignified.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#431407",
      "secondaryColor": "#60210E",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "besna-crimson-traditional",
    "name": "Crimson Traditional Besna",
    "gujaratiName": "કંકુ લાલ પરંપરાગત બેસણું",
    "category": "besna",
    "tags": [
      "બેસણું",
      "કંકુ"
    ],
    "thumbnailUrl": "/templates/besna-crimson-traditional.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#450A0A",
      "secondaryColor": "#650F0F",
      "accentColor": "#FBBF24",
      "borderStyle": "traditional",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "rose-petal"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FDE68A",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FEE2E2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shok-sabha-deep-slate",
    "name": "Deep Slate Shok Sabha",
    "gujaratiName": "ગંભીર સ્લેટ શોક સભા",
    "category": "shok-sabha",
    "tags": [
      "શોક સભા",
      "સ્લેટ"
    ],
    "thumbnailUrl": "/templates/shok-sabha-deep-slate.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0F172A",
      "secondaryColor": "#1E293B",
      "accentColor": "#CBD5E1",
      "borderStyle": "minimal-gold",
      "motif": "diya",
      "decorations": [
        "diya",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#F1F5F9",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#CBD5E1",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#F1F5F9",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shok-sabha-black-gold",
    "name": "Black Gold Shok Sabha",
    "gujaratiName": "શાહી કાળો શોક સભા પત્રિકા",
    "category": "shok-sabha",
    "tags": [
      "શોક સભા",
      "બ્લેક"
    ],
    "thumbnailUrl": "/templates/shok-sabha-black-gold.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#121212",
      "secondaryColor": "#1E1E1E",
      "accentColor": "#F59E0B",
      "borderStyle": "traditional",
      "motif": "om",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#F59E0B",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E5E7EB",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shok-sabha-maroon-solemn",
    "name": "Maroon Solemn Shok Sabha",
    "gujaratiName": "મરૂન ગંભીર શોક સભા",
    "category": "shok-sabha",
    "tags": [
      "શોક સભા",
      "મરૂન"
    ],
    "thumbnailUrl": "/templates/shok-sabha-maroon-solemn.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#3E0707",
      "secondaryColor": "#581111",
      "accentColor": "#E6A122",
      "borderStyle": "royal-filigree",
      "motif": "kalash",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FBD46D",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#E6A122",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FBD46D",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shok-sabha-navy-dignity",
    "name": "Navy Dignity Shok Sabha",
    "gujaratiName": "નેવી ગૌરવ શોક સભા",
    "category": "shok-sabha",
    "tags": [
      "શોક સભા",
      "નેવી"
    ],
    "thumbnailUrl": "/templates/shok-sabha-navy-dignity.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#0C192E",
      "secondaryColor": "#162A45",
      "accentColor": "#E2B857",
      "borderStyle": "traditional",
      "motif": "om",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FFEAA7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#E2B857",
        "garlandStyle": "pearl-gold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FFEAA7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#E2E8F0",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "shok-sabha-chocolate-tribute",
    "name": "Chocolate Dignified Shok Sabha",
    "gujaratiName": "ચોકલેટ શોક સભા પત્રિકા",
    "category": "shok-sabha",
    "tags": [
      "શોક સભા"
    ],
    "thumbnailUrl": "/templates/shok-sabha-chocolate-tribute.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#2A1810",
      "secondaryColor": "#3D2317",
      "accentColor": "#E5C378",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FCE7A2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#E5C378",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FCE7A2",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "tervi-sacred-dashkriya-maroon",
    "name": "Sacred Tervi Dashkriya Maroon",
    "gujaratiName": "તેરવી અને દશક્રિયા મરૂન પત્રિકા",
    "category": "tervi-dashkriya",
    "tags": [
      "તેરવી",
      "દશક્રિયા"
    ],
    "thumbnailUrl": "/templates/tervi-sacred-dashkriya-maroon.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#3E0707",
      "secondaryColor": "#581111",
      "accentColor": "#E6A122",
      "borderStyle": "traditional",
      "motif": "om",
      "decorations": [
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FBD46D",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#E6A122",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FBD46D",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FDE68A",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "tervi-saffron-vidhi",
    "name": "Saffron Vidhi Tervi Patrika",
    "gujaratiName": "કેસરી ધાર્મિક તેરવી પત્રિકા",
    "category": "tervi-dashkriya",
    "tags": [
      "તેરવી",
      "કેસરી"
    ],
    "thumbnailUrl": "/templates/tervi-saffron-vidhi.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#7C2D12",
      "secondaryColor": "#9A3412",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "kalash",
      "decorations": [
        "marigold-corners"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "ornate",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FFEDD5",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "tervi-chocolate-kriya",
    "name": "Chocolate Dashkriya Sabha",
    "gujaratiName": "ચોકલેટ દશક્રિયા વિધિ પત્રિકા",
    "category": "tervi-dashkriya",
    "tags": [
      "દશક્રિયા",
      "ચોકલેટ"
    ],
    "thumbnailUrl": "/templates/tervi-chocolate-kriya.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#2A1810",
      "secondaryColor": "#3D2317",
      "accentColor": "#E5C378",
      "borderStyle": "traditional",
      "motif": "diya",
      "decorations": [
        "diya"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FCE7A2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "rect",
        "borderWidth": 5,
        "borderColor": "#E5C378",
        "garlandStyle": "golden-frame"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FCE7A2",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#F3EDE2",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "tervi-ivory-dashkriya",
    "name": "Ivory Peaceful Dashkriya",
    "gujaratiName": "શ્વેત શાંતિ દશક્રિયા પત્રિકા",
    "category": "tervi-dashkriya",
    "tags": [
      "દશક્રિયા",
      "શ્વેત"
    ],
    "thumbnailUrl": "/templates/tervi-ivory-dashkriya.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#FAF8F5",
      "secondaryColor": "#EFE9DE",
      "accentColor": "#92611A",
      "borderStyle": "floral-divine",
      "motif": "om",
      "decorations": [
        "rose-petals"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "oval",
        "borderWidth": 5,
        "borderColor": "#92611A",
        "garlandStyle": "white-rose"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#451A03",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#78350F",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#1C1917",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#451A03",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  },
  {
    "id": "tervi-terracotta-kriya",
    "name": "Terracotta Tervi Vidhi Patrika",
    "gujaratiName": "ટેરાકોટા તેરવી વિધિ પત્રિકા",
    "category": "tervi-dashkriya",
    "tags": [
      "તેરવી",
      "ટેરાકોટા"
    ],
    "thumbnailUrl": "/templates/tervi-terracotta-kriya.svg",
    "isPopular": false,
    "isNew": true,
    "isRabariStyle": false,
    "theme": {
      "bgType": "procedural",
      "bgColor": "#431407",
      "secondaryColor": "#60210E",
      "accentColor": "#FBBF24",
      "borderStyle": "ornamental-arch",
      "motif": "diya",
      "decorations": [
        "diya",
        "agarbatti"
      ]
    },
    "placeholders": {
      "header": {
        "x": 50,
        "y": 8,
        "width": 80,
        "fontSize": 34,
        "color": "#FEF3C7",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.3
      },
      "deceasedTitle": {
        "x": 50,
        "y": 13.5,
        "width": 60,
        "fontSize": 22,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "600",
        "align": "center"
      },
      "photo": {
        "x": 50,
        "y": 28,
        "size": 24,
        "aspectRatio": 1.15,
        "shape": "circle",
        "borderWidth": 5,
        "borderColor": "#FBBF24",
        "garlandStyle": "marigold"
      },
      "deceasedName": {
        "x": 50,
        "y": 43,
        "width": 88,
        "fontSize": 42,
        "color": "#FEF3C7",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "fontWeight": "bold",
        "align": "center",
        "lineHeight": 1.2
      },
      "datesBlock": {
        "x": 50,
        "y": 50.5,
        "width": 85,
        "fontSize": 21,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.5
      },
      "villageBlock": {
        "x": 50,
        "y": 56.5,
        "width": 70,
        "fontSize": 20,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "besnaVenueBlock": {
        "x": 50,
        "y": 55.5,
        "width": 85,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center"
      },
      "quoteBlock": {
        "x": 50,
        "y": 64.5,
        "width": 84,
        "fontSize": 20,
        "color": "#FFFFFF",
        "fontFamily": "Noto Serif Gujarati, Georgia, serif",
        "align": "center",
        "lineHeight": 1.45
      },
      "familyGridBlock": {
        "x": 50,
        "y": 77.5,
        "width": 88,
        "height": 14,
        "fontSize": 18,
        "color": "#FED7AA",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "align": "center",
        "lineHeight": 1.4
      },
      "footerBlock": {
        "x": 50,
        "y": 93,
        "width": 90,
        "fontSize": 22,
        "color": "#1C150C",
        "fontFamily": "Noto Sans Gujarati, sans-serif",
        "fontWeight": "bold",
        "align": "center"
      }
    }
  }
]);

export const CARD_TEMPLATES: CardTemplate[] = [
  ...BASE_TEMPLATES,
  ...createAdditionalTemplates(BASE_TEMPLATES),
];
