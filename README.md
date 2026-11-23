# અડોણી કાયા (ADONI KAYA)
> **ગુજરાતી ડિઝાઇન હવે સૌ માટે સરળ!**
> A complete Gujarati memorial design platform, smart template system, and graphic design automation engine.

---

## 🌟 Overview & Architecture

**અડોણી કાયા (ADONI KAYA)** is built specifically for Gujarati culture, empowering families and communities to design respectful, high-resolution **Shradhanjali (શ્રદ્ધાંજલિ)**, **Besna (બેસણું)**, and **Punyatithi (પુણ્યતિથિ)** cards without needing any graphic design expertise.

### 🔹 100% Free & Open
- **No registration or login required** for public users.
- **No watermarks** on exported images.
- **No payment gates**.

---

## 🛠️ Key Features Implemented

### 1. 🌺 Authentic Gujarati First Homepage & Navigation
- Original brand identity: **અડોણી કાયા** with subtitle **ADONI KAYA**.
- Tagline: **ગુજરાતી ડિઝાઇન હવે સૌ માટે સરળ!**
- Exactly two primary creation actions:
  1. **શ્રદ્ધાંજલિ બનાવો** (Shradhanjali Card Flow)
  2. **બેસણું બનાવો** (Besna Card Flow)
- Popular templates showcase with direct creation shortcuts.
- How it works (૪ સરળ પગલાં) and FAQs (વારંવાર પૂછાતા પ્રશ્નો).

### 2. 🎨 Target 1,000+ Template Gallery & Rabari Style Collection
- Separate galleries for Shradhanjali and Besna.
- Multi-category support:
  - શ્રદ્ધાંજલિ (300+ target collection)
  - બેસણું (250+ target collection)
  - શોક સભા (150+ target collection)
  - તેરવી / દશક્રિયા (100+ target collection)
  - પુણ્યતિથિ (100+ target collection)
- **Dedicated Rabari Style Collection**:
  - Kutchi & Saurashtra traditional embroidery borders.
  - Procedural "Aabhla" mirror-work with reflective circular stitch rings.
  - Geometric folk art motifs and sacred symbols (ૐ, કળશ, દીવો, સાથિયો).
- Real-time search by Gujarati and English keywords, filters, and instant card preview.

### 3. 📱 Mobile-First Template Dimensions
- **Primary Social Sharing Format**: `1080 × 1350` (4:5 portrait) — optimized for WhatsApp, Facebook, Instagram.
- **WhatsApp Status / Story**: `1080 × 1920` (9:16 portrait).
- **Portrait Card**: `1080 × 1620` (2:3 portrait).
- **Print Ready A4**: `1240 × 1754` (high-res 300 DPI proportional).
- Non-distorting aspect ratio preservation: borders, photos, and typography dynamically adapt without stretching artwork.

### 4. 🧠 Smart Anniversary Calculation Engine (`anniversaryCalculator.ts`)
- Automatically calculates the completed monthly or yearly anniversary from death date and event date:
  - પ્રથમ માસિક શ્રદ્ધાંજલિ
  - દ્વિતીય માસિક શ્રદ્ધાંજલિ
  - છઠ્ઠી માસિક શ્રદ્ધાંજલિ
  - પ્રથમ વાર્ષિક શ્રદ્ધાંજલિ
  - દ્વિતીય વાર્ષિક શ્રદ્ધાંજલિ
  - ... વાર્ષિક પુણ્યતિથિ
- Accurately handles leap years (e.g., Feb 29 to Feb 28/29) and varying month lengths (Jan 31 to Feb 28).
- Automatically calculates day of the week in Gujarati (સોમવાર, મંગળવાર, બુધવાર...).
- Gujarati Hindu Tithi picker (સુદ / વદ + ૧ થી ૧૫) + manual entry.
- Manual override support with single-click restore.

### 5. 📖 200+ Culturally Authentic Gujarati Quote Library (`quotes.ts`)
- Over 250 verified, original, grammatically reviewed Gujarati remembrance and condolence messages.
- Comprehensive categories:
  - માતા માટે શ્રદ્ધાંજલિ
  - પિતા માટે શ્રદ્ધાંજલિ
  - દાદા માટે
  - દાદી માટે
  - ભાઈ માટે
  - બહેન માટે
  - પતિ માટે
  - પત્ની માટે
  - પરિવારના સભ્યો માટે
  - સામાન્ય શ્રદ્ધાંજલિ
  - પ્રથમ માસિક શ્રદ્ધાંજલિ
  - વાર્ષિક શ્રદ્ધાંજલિ
  - બેસણું / શોક સંદેશ
- Instant search, category tabs, one-click selection, custom quote editor, and skip option.

### 6. 👥 Smart Family-Name Layout Engine (`familyLayoutEngine.ts`)
- Automatically balances family names across 1, 2, 3, or 4 columns.
- Dynamic font size calculation (scales from 26px down to readable minimum 13px).
- Line height and spacing adjustments prevent overlapping and text clipping.
- Overflow detection: warns if name count exceeds maximum density and suggests large-family templates.
- Support for single-name entry, reordering (move up/down), and bulk pasting.

### 7. 🏷️ Family Footer Banner
- Bottom banner: `|| સમસ્ત XYZ પરિવાર (ગામ: XYZ) ||`.
- Optional show/hide toggle.

### 8. 🖼️ Smart Template Creator (Admin Dashboard)
- Upload existing JPG/PNG card designs or blank backgrounds.
- AI-assisted element detection simulation (header, photo box, name, dates, quote, family grid, footer).
- Background cleanup tools:
  - AI inpainting & text removal.
  - Manual eraser brush with adjustable radius.
  - Brush restoration from original image.
  - Undo / Redo history stack.
  - Press-and-hold original image comparison.
- Interactive placeholder configuration (x, y, font size, color).
- Publish or save as draft.

### 9. 🖨️ High-Resolution Export System (`exportEngine.ts`)
- Crisp canvas rendering with 2.0x - 2.5x export scaling.
- Export formats:
  - **PNG** (lossless crisp typography)
  - **JPG** (optimized for instant WhatsApp sharing)
  - **PDF** (vector-scaled for home and commercial printing)

---
