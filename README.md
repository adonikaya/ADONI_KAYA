# અડોણી કાયા (ADONI KAYA)
> **ગુજરાતી ડિઝાઇન હવે સૌ માટે સરળ!**
> A browser-based Gujarati Shradhanjali, Besna, and Punyatithi card maker.

---

https://adonikaya.github.io/ADONI_KAYA/

## 🌟 Overview & Architecture

**અડોણી કાયા (ADONI KAYA)** is built specifically for Gujarati culture, empowering families and communities to design respectful, high-resolution **Shradhanjali (શ્રદ્ધાંજલિ)**, **Besna (બેસણું)**, and **Punyatithi (પુણ્યતિથિ)** cards without needing any graphic design expertise.

### 🔹 100% Free & Open
- **No registration or login required** for public users.
- **No watermarks** on exported images.
- **No payment gates**.

---

## 🛠️ Key Features Implemented

### 1. 🌺 Gujarati-First Homepage & Navigation
- Original brand identity: **અડોણી કાયા** with subtitle **ADONI KAYA**.
- Tagline: **ગુજરાતી ડિઝાઇન હવે સૌ માટે સરળ!**
- Exactly two primary creation actions:
  1. **શ્રદ્ધાંજલિ બનાવો** (Shradhanjali Card Flow)
  2. **બેસણું બનાવો** (Besna Card Flow)
- Popular templates showcase with direct creation shortcuts.
- How it works (૪ સરળ પગલાં) and FAQs (વારંવાર પૂછાતા પ્રશ્નો).

### 2. 🎨 154 Card Templates
- Shradhanjali, Besna, Punyatithi, Shok Sabha, Tervi/Dashkriya, and Rabari-style designs.
- Search, category filters, and a live card preview.

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

### 5. 📖 Gujarati Quote Library (`quotes.ts`)
- 256 Gujarati remembrance and condolence messages.
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

### 8. 🖼️ Browser-Based Card Editor
- Live canvas preview with editable card details and family layout.
- Optional photo crop and design adjustments.
- Card generation and downloads run in the browser.

### 9. 🖨️ High-Resolution Export System (`exportEngine.ts`)
- Crisp canvas rendering with 2.0x - 2.5x export scaling.
- Export formats:
  - **PNG** (lossless crisp typography)
  - **JPG** (optimized for instant WhatsApp sharing)
  - **PDF** (A4 card download)

---

  ## Search Console and Indexing

  The HTML verification tag is included in the site layout. To verify the site:

  1. In Google Search Console, add a URL-prefix property for `https://adonikaya.github.io/ADONI_KAYA/`.
  2. Push the site changes and wait for the GitHub Pages deployment to complete.
  3. Use the HTML-tag verification method and select **Verify**.
  4. Submit `https://adonikaya.github.io/ADONI_KAYA/sitemap.xml` in the Sitemaps section.
  5. Use URL Inspection to inspect the homepage and request indexing for the public guide pages.

  The generated project-level robots file is at
  `https://adonikaya.github.io/ADONI_KAYA/robots.txt`. A GitHub Pages project site cannot
  publish the domain-root `https://adonikaya.github.io/robots.txt` from this repository;
  that requires a custom domain or the account's user-site repository.

  Public guides: [Shradhanjali maker](https://adonikaya.github.io/ADONI_KAYA/shradhanjali-maker/),
  [Besna card maker](https://adonikaya.github.io/ADONI_KAYA/besna-card-maker/),
  [About](https://adonikaya.github.io/ADONI_KAYA/about/), and
  [Privacy Policy](https://adonikaya.github.io/ADONI_KAYA/privacy-policy/).
