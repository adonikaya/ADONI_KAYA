// High-Resolution Gujarati Canvas Rendering Engine
// for ADONI KAYA (અડોણી કાયા)
import { CardTemplate, DeceasedDetails, FamilyDetails, AspectRatioFormat, FORMAT_DIMENSIONS } from './types';
import { calculateFamilyLayout } from './familyLayoutEngine';

export interface RenderOptions {
  scale?: number; // 1 for display preview, 2-3 for high-res export
  selectedFormat?: AspectRatioFormat;
  overridePlaceholders?: Partial<CardTemplate['placeholders']>;
}

/**
 * Loads an image from a URL or Data URL asynchronously
 */
export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = src;
  });
}

/**
 * Draws wrapped text centered or left/right aligned on canvas
 */
export function drawWrappedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  align: 'left' | 'center' | 'right' = 'center'
): number {
  if (!text) return y;
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  ctx.textAlign = align;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, currentY);
  return currentY + lineHeight;
}

/**
 * Draws authentic Rabari embroidery border with mirrors (આભલા ભરત)
 */
function drawRabariBorder(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  accentColor: string
) {
  ctx.save();

  const margin = width * 0.035;
  const innerMargin = margin + 14;

  // Outer bold border
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 4;
  ctx.strokeRect(margin, margin, width - margin * 2, height - margin * 2);

  // Inner stitched border
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 6]);
  ctx.strokeRect(innerMargin, innerMargin, width - innerMargin * 2, height - innerMargin * 2);
  ctx.setLineDash([]);

  // Draw traditional Rabari "Aabhla" (mirrors with embroidery rings) along borders
  const mirrorRadius = 7;
  const spacing = 46;

  // Top and bottom mirror lines
  for (let x = innerMargin + 30; x < width - innerMargin - 30; x += spacing) {
    drawMirror(ctx, x, margin + 7, mirrorRadius);
    drawMirror(ctx, x, height - margin - 7, mirrorRadius);
  }

  // Left and right mirror lines
  for (let y = innerMargin + 30; y < height - innerMargin - 30; y += spacing) {
    drawMirror(ctx, margin + 7, y, mirrorRadius);
    drawMirror(ctx, width - margin - 7, y, mirrorRadius);
  }

  // Corner Rabari Peacock / Sun medallions
  drawCornerMedallion(ctx, innerMargin, innerMargin, accentColor);
  drawCornerMedallion(ctx, width - innerMargin, innerMargin, accentColor);
  drawCornerMedallion(ctx, innerMargin, height - innerMargin, accentColor);
  drawCornerMedallion(ctx, width - innerMargin, height - innerMargin, accentColor);

  ctx.restore();
}

/**
 * Draws an authentic Gujarati embroidered mirror (આભલો)
 */
function drawMirror(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  // Outer thread ring
  ctx.beginPath();
  ctx.arc(x, y, r + 2, 0, Math.PI * 2);
  ctx.fillStyle = '#E6A122';
  ctx.fill();

  // Glass mirror reflection
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = '#E8F1F5';
  ctx.fill();

  // Mirror shine highlight
  ctx.beginPath();
  ctx.arc(x - r * 0.3, y - r * 0.3, r * 0.35, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
}

/**
 * Draws traditional corner medallions
 */
function drawCornerMedallion(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string
) {
  ctx.save();
  ctx.translate(x, y);

  ctx.strokeStyle = color;
  ctx.lineWidth = 2.5;

  // Sunburst rays / floral corner
  for (let i = 0; i < 4; i++) {
    ctx.rotate(Math.PI / 2);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(16, 16);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(12, 12, 3, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }

  ctx.restore();
}

/**
 * Draws classic traditional Hindu temple gold border
 */
function drawTraditionalBorder(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  accentColor: string
) {
  ctx.save();
  const m = width * 0.032;

  // Double gold borders
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 3.5;
  ctx.strokeRect(m, m, width - m * 2, height - m * 2);

  ctx.lineWidth = 1.5;
  ctx.strokeRect(m + 8, m + 8, width - (m + 8) * 2, height - (m + 8) * 2);

  // Four corner ornate brackets
  const cornerSize = 40;
  const corners = [
    { x: m, y: m, dx: 1, dy: 1 },
    { x: width - m, y: m, dx: -1, dy: 1 },
    { x: m, y: height - m, dx: 1, dy: -1 },
    { x: width - m, y: height - m, dx: -1, dy: -1 },
  ];

  corners.forEach(c => {
    ctx.beginPath();
    ctx.moveTo(c.x, c.y + c.dy * cornerSize);
    ctx.lineTo(c.x, c.y);
    ctx.lineTo(c.x + c.dx * cornerSize, c.y);
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 5;
    ctx.stroke();
  });

  ctx.restore();
}

/**
 * Draws sacred motifs: Om, Kalash, Diya, Swastik
 */
function drawMotif(
  ctx: CanvasRenderingContext2D,
  motif: CardTemplate['theme']['motif'],
  centerX: number,
  y: number,
  color: string
) {
  if (motif === 'none') return;

  ctx.save();
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (motif === 'om') {
    ctx.font = 'bold 36px "Noto Sans Gujarati", sans-serif';
    ctx.fillText('ૐ', centerX, y);
  } else if (motif === 'swastik') {
    ctx.font = 'bold 32px "Noto Sans Gujarati", sans-serif';
    ctx.fillText('卐', centerX, y);
  } else if (motif === 'diya') {
    // Elegant procedural sacred flame / diya
    ctx.beginPath();
    // Diya base
    ctx.arc(centerX, y + 6, 14, 0, Math.PI);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();

    // Sacred flame
    ctx.beginPath();
    ctx.moveTo(centerX - 5, y + 4);
    ctx.quadraticCurveTo(centerX - 8, y - 8, centerX, y - 16);
    ctx.quadraticCurveTo(centerX + 8, y - 8, centerX + 5, y + 4);
    ctx.closePath();
    ctx.fillStyle = '#FFA000';
    ctx.fill();

    // Inner bright flame
    ctx.beginPath();
    ctx.moveTo(centerX - 2, y + 2);
    ctx.quadraticCurveTo(centerX - 4, y - 6, centerX, y - 12);
    ctx.quadraticCurveTo(centerX + 4, y - 6, centerX + 2, y + 2);
    ctx.closePath();
    ctx.fillStyle = '#FFF9C4';
    ctx.fill();
  } else if (motif === 'kalash') {
    ctx.font = 'bold 30px "Noto Sans Gujarati", sans-serif';
    ctx.fillText('॥ ૐ નમો ભગવતે વાસુદેવાય ॥', centerX, y);
  }

  ctx.restore();
}

/**
 * Draws photo with ornate garland (ગલગોટાનો હાર) and border
 */
function drawPhotoFrame(
  ctx: CanvasRenderingContext2D,
  photoImg: HTMLImageElement | null,
  frame: CardTemplate['placeholders']['photo'],
  cardWidth: number,
  cardHeight: number,
  deceased: DeceasedDetails
) {
  const cx = (frame.x / 100) * cardWidth;
  const cy = (frame.y / 100) * cardHeight;
  const frameWidth = (frame.size / 100) * cardWidth;
  const frameHeight = frameWidth * frame.aspectRatio;

  const rx = frameWidth / 2;
  const ry = frameHeight / 2;

  ctx.save();

  // Create clipping path for the photo
  ctx.beginPath();
  if (frame.shape === 'circle') {
    ctx.arc(cx, cy, rx, 0, Math.PI * 2);
  } else if (frame.shape === 'oval' || frame.shape === 'ornate') {
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  } else {
    // Rect
    ctx.rect(cx - rx, cy - ry, frameWidth, frameHeight);
  }
  ctx.closePath();

  // Draw background behind photo in case transparent
  ctx.fillStyle = '#F3F4F6';
  ctx.fill();

  ctx.clip();

  if (photoImg) {
    // Scale and position photo respecting user offsets
    const userScale = deceased.photoScale ?? 1;
    const userXOffset = deceased.photoXOffset ?? 0;
    const userYOffset = deceased.photoYOffset ?? 0;

    // Aspect fill image calculation
    const imgAspect = photoImg.width / photoImg.height;
    const frameAspect = frameWidth / frameHeight;

    let drawW, drawH;
    if (imgAspect > frameAspect) {
      drawH = frameHeight * userScale;
      drawW = drawH * imgAspect;
    } else {
      drawW = frameWidth * userScale;
      drawH = drawW / imgAspect;
    }

    const drawX = cx - drawW / 2 + (userXOffset / 100) * frameWidth;
    const drawY = cy - drawH / 2 + (userYOffset / 100) * frameHeight;

    ctx.drawImage(photoImg, drawX, drawY, drawW, drawH);
  } else {
    // Placeholder silhouette when no photo uploaded
    ctx.fillStyle = '#CBD5E1';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 22px "Noto Sans Gujarati", sans-serif';
    ctx.fillText('સ્વર્ગસ્થનો ફોટો', cx, cy);
  }

  ctx.restore();

  // Draw frame border
  ctx.save();
  ctx.beginPath();
  if (frame.shape === 'circle') {
    ctx.arc(cx, cy, rx, 0, Math.PI * 2);
  } else if (frame.shape === 'oval' || frame.shape === 'ornate') {
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  } else {
    ctx.rect(cx - rx, cy - ry, frameWidth, frameHeight);
  }
  ctx.strokeStyle = frame.borderColor;
  ctx.lineWidth = frame.borderWidth;
  ctx.stroke();

  // Draw Floral Garland (ગલગોટાનો હાર)
  if (frame.garlandStyle === 'marigold') {
    const beadCount = 38;
    for (let i = 0; i < beadCount; i++) {
      const angle = (i / beadCount) * Math.PI * 2;
      const bx = cx + (rx + 8) * Math.cos(angle);
      const by = cy + (ry + 8) * Math.sin(angle);

      // Alternate Marigold (yellow/orange) beads
      ctx.beginPath();
      ctx.arc(bx, by, 6.5, 0, Math.PI * 2);
      ctx.fillStyle = i % 2 === 0 ? '#F59E0B' : '#EA580C';
      ctx.fill();

      // Garland petal detail
      ctx.beginPath();
      ctx.arc(bx, by, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#FEF08A';
      ctx.fill();
    }
  } else if (frame.garlandStyle === 'white-rose') {
    const beadCount = 34;
    for (let i = 0; i < beadCount; i++) {
      const angle = (i / beadCount) * Math.PI * 2;
      const bx = cx + (rx + 7) * Math.cos(angle);
      const by = cy + (ry + 7) * Math.sin(angle);

      ctx.beginPath();
      ctx.arc(bx, by, 6, 0, Math.PI * 2);
      ctx.fillStyle = i % 3 === 0 ? '#F59E0B' : '#FFFFFF';
      ctx.fill();
    }
  }

  ctx.restore();
}

/**
 * Main Canvas Render Function
 */
export async function renderCardToCanvas(
  canvas: HTMLCanvasElement,
  template: CardTemplate,
  deceased: DeceasedDetails,
  quoteText: string,
  family: FamilyDetails,
  cardType: 'shradhanjali' | 'besna',
  options: RenderOptions = {}
): Promise<void> {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const format = options.selectedFormat || '4:5';
  const dimensions = FORMAT_DIMENSIONS[format];
  const scale = options.scale || 1;

  const targetWidth = dimensions.width * scale;
  const targetHeight = dimensions.height * scale;

  canvas.width = targetWidth;
  canvas.height = targetHeight;

  // Scale context so all calculations use base 1080 design coordinates
  ctx.save();
  ctx.scale(scale, scale);

  const W = dimensions.width;
  const H = dimensions.height;

  // 1. Draw Background
  if (template.theme.bgType === 'gradient' || template.theme.bgType === 'procedural') {
    const grad = ctx.createLinearGradient(0, 0, 0, H);
    grad.addColorStop(0, template.theme.bgColor);
    grad.addColorStop(1, template.theme.secondaryColor || template.theme.bgColor);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
  } else {
    ctx.fillStyle = template.theme.bgColor;
    ctx.fillRect(0, 0, W, H);
  }

  // 2. Draw Borders
  if (template.theme.borderStyle === 'rabari-embroidery') {
    drawRabariBorder(ctx, W, H, template.theme.accentColor);
  } else {
    drawTraditionalBorder(ctx, W, H, template.theme.accentColor);
  }

  // 3. Draw Top Sacred Motif
  drawMotif(ctx, template.theme.motif, W / 2, H * 0.045, template.theme.accentColor);

  // 4. Draw Header (Anniversary or Besna Heading)
  const headerStyle = template.placeholders.header;
  ctx.save();
  ctx.fillStyle = headerStyle.color;
  ctx.font = `${headerStyle.fontWeight || 'bold'} ${headerStyle.fontSize}px "Noto Sans Gujarati", sans-serif`;
  ctx.textAlign = 'center';
  const headerY = (headerStyle.y / 100) * H;
  ctx.fillText(deceased.heading || (cardType === 'shradhanjali' ? 'ભાવપૂર્ણ શ્રદ્ધાંજલિ' : 'પ્રાર્થના સભા / બેસણું'), W / 2, headerY);

  // Decorative divider line below header
  ctx.strokeStyle = template.theme.accentColor;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(W * 0.28, headerY + 12);
  ctx.lineTo(W * 0.72, headerY + 12);
  ctx.stroke();

  // Small diamond in center of divider
  ctx.fillStyle = template.theme.accentColor;
  ctx.fillRect(W / 2 - 4, headerY + 8, 8, 8);
  ctx.restore();

  // 5. Draw Deceased Title ("સ્વર્ગસ્થ", "સ્વ.", "ગં.સ્વ.")
  const titleStyle = template.placeholders.deceasedTitle;
  ctx.save();
  ctx.fillStyle = titleStyle.color;
  ctx.font = `600 ${titleStyle.fontSize}px "Noto Sans Gujarati", sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText(deceased.title || 'સ્વર્ગસ્થ', W / 2, (titleStyle.y / 100) * H);
  ctx.restore();

  // 6. Draw Photo with Garland
  let loadedPhoto: HTMLImageElement | null = null;
  if (deceased.photoUrl) {
    try {
      loadedPhoto = await loadImage(deceased.photoUrl);
    } catch (e) {
      console.warn('Failed to load user photo', e);
    }
  }
  drawPhotoFrame(ctx, loadedPhoto, template.placeholders.photo, W, H, deceased);

  // 7. Draw Deceased Full Name
  const nameStyle = template.placeholders.deceasedName;
  ctx.save();
  ctx.fillStyle = nameStyle.color;
  ctx.font = `bold ${nameStyle.fontSize}px "Noto Serif Gujarati", "Rasa", Georgia, serif`;
  ctx.textAlign = 'center';
  const nameY = (nameStyle.y / 100) * H;
  ctx.fillText(deceased.name || 'સ્વર્ગસ્થનું નામ', W / 2, nameY);
  ctx.restore();

  // 8. Draw Dates & Tithi
  const datesStyle = template.placeholders.datesBlock;
  ctx.save();
  ctx.fillStyle = datesStyle.color;
  ctx.font = `500 ${datesStyle.fontSize}px "Noto Sans Gujarati", sans-serif`;
  ctx.textAlign = 'center';
  const datesY = (datesStyle.y / 100) * H;

  let dateLine = '';
  if (cardType === 'shradhanjali') {
    const parts = [];
    if (deceased.deathDate) parts.push(`સ્વર્ગવાસ તારીખ: ${deceased.deathDate}`);
    if (deceased.weekday) parts.push(`વાર: ${deceased.weekday}`);
    if (deceased.tithi) parts.push(`તિથિ: ${deceased.tithi}`);
    dateLine = parts.join('  |  ');
  } else {
    // Besna
    const parts = [];
    if (deceased.besnaDate) parts.push(`બેસણાની તારીખ: ${deceased.besnaDate}`);
    if (deceased.besnaWeekday) parts.push(`વાર: ${deceased.besnaWeekday}`);
    if (deceased.besnaTime) parts.push(`સમય: ${deceased.besnaTime}`);
    dateLine = parts.join('  |  ');
  }
  ctx.fillText(dateLine, W / 2, datesY);

  // Besna Venue block if applicable
  if (cardType === 'besna' && deceased.besnaVenue) {
    ctx.font = `600 ${datesStyle.fontSize - 1}px "Noto Sans Gujarati", sans-serif`;
    ctx.fillText(`સ્થળ: ${deceased.besnaVenue}`, W / 2, datesY + 24);
  }

  // Village / Town
  if (deceased.village) {
    const villageText = deceased.talukaCity
      ? `ગામ: ${deceased.village} (તા. ${deceased.talukaCity})`
      : `ગામ: ${deceased.village}`;
    ctx.font = `500 ${datesStyle.fontSize - 2}px "Noto Sans Gujarati", sans-serif`;
    ctx.fillText(villageText, W / 2, datesY + (cardType === 'besna' && deceased.besnaVenue ? 48 : 26));
  }
  ctx.restore();

  // 9. Draw Remembrance Quote (શબ્દાંજલિ / સંદેશ)
  if (quoteText && quoteText.trim().length > 0) {
    const quoteStyle = template.placeholders.quoteBlock;
    ctx.save();
    ctx.fillStyle = quoteStyle.color;
    ctx.font = `italic 500 ${quoteStyle.fontSize}px "Noto Sans Gujarati", sans-serif`;
    const quoteMaxWidth = (quoteStyle.width / 100) * W;
    const quoteY = (quoteStyle.y / 100) * H;
    drawWrappedText(ctx, `“${quoteText.trim()}”`, W / 2, quoteY, quoteMaxWidth, quoteStyle.fontSize * 1.45, 'center');
    ctx.restore();
  }

  // 10. Draw Family Members Grid (Smart Layout Engine)
  if (family.members && family.members.length > 0) {
    const familyBlock = template.placeholders.familyGridBlock;
    const startY = (familyBlock.y / 100) * H;
    const containerW = (familyBlock.width / 100) * W;

    // Header label
    ctx.save();
    ctx.fillStyle = template.theme.accentColor;
    ctx.font = `bold 18px "Noto Sans Gujarati", sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText('॥ સ્નેહીજન / લિ. શોકાતુર પરિવાર ॥', W / 2, startY - 14);

    // Compute layout using our smart family layout engine
    const layout = calculateFamilyLayout(family.members);
    const colCount = layout.columnCount;
    const colWidth = containerW / colCount;
    const startX = (W - containerW) / 2;

    ctx.font = `500 ${layout.fontSize}px "Noto Sans Gujarati", sans-serif`;
    ctx.fillStyle = familyBlock.color;

    layout.columns.forEach((colItems, colIdx) => {
      const colCenterX = startX + colIdx * colWidth + colWidth / 2;
      colItems.forEach((name, rowIdx) => {
        const itemY = startY + 12 + rowIdx * (layout.fontSize * layout.lineHeight);
        ctx.fillText(name, colCenterX, itemY);
      });
    });

    ctx.restore();
  }

  // 11. Draw Family Footer Banner
  if (family.showFooter && (family.familyName || family.nativeVillage)) {
    const footerStyle = template.placeholders.footerBlock;
    const footerY = (footerStyle.y / 100) * H;

    ctx.save();
    // Banner background
    const bannerH = 46;
    ctx.fillStyle = template.theme.accentColor;
    ctx.fillRect(W * 0.05, footerY - bannerH / 2, W * 0.9, bannerH);

    // Banner border
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(W * 0.05 + 3, footerY - bannerH / 2 + 3, W * 0.9 - 6, bannerH - 6);

    // Banner Text
    ctx.fillStyle = footerStyle.color;
    ctx.font = `bold ${footerStyle.fontSize}px "Noto Sans Gujarati", sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const familyBannerText = family.nativeVillage
      ? `॥ સમસ્ત ${family.familyName || ''} પરિવાર  (ગામ: ${family.nativeVillage}) ॥`
      : `॥ સમસ્ત ${family.familyName || ''} પરિવાર ॥`;

    ctx.fillText(familyBannerText, W / 2, footerY);
    ctx.restore();
  }

  ctx.restore();
}
