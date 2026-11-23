// High-Resolution Gujarati Canvas Rendering Engine
// for ADONI KAYA (અડોણી કાયા)
import { CardTemplate, DeceasedDetails, FamilyDetails, AspectRatioFormat, FORMAT_DIMENSIONS, PhotoFrameShape } from './types';
import { calculateSwargwasiLayout } from './familyLayoutEngine';
import type { SwargwasiLayoutResult } from './familyLayoutEngine';
import { formatCardDate } from './anniversaryCalculator';
import { formatTithi } from './tithi';
import { normalizeIndianMobileNumber } from './mobileNumber';
import { getPublicAssetUrl } from './publicAssets';

export interface FontSizeAdjustments {
  heading?: number;
  name?: number;
  dates?: number;
  tithi?: number;
  quote?: number;
  family?: number;
  footer?: number;
}

export interface EffectiveFontSizes {
  heading: number;
  name: number;
  dates: number;
  tithi: number;
  quote: number;
  family: number;
  footer: number;
}

export interface RenderOptions {
  scale?: number; // 1 for display preview, 2-3 for high-res export
  selectedFormat?: AspectRatioFormat;
  overridePlaceholders?: Partial<CardTemplate['placeholders']>;
  fontSizeAdjustments?: FontSizeAdjustments;
  verticalSpacing?: number;
  diyaVerticalOffset?: number;
  diyaHorizontalOffset?: number;
  diyaScale?: number;
  showBranding?: boolean;
}

export function getPhotoFrameAspectRatio(
  shape: PhotoFrameShape,
  fallbackAspectRatio: number
): number {
  switch (shape) {
    case 'circle':
    case 'square':
      return 1;
    case 'rect':
      return 0.75;
    case 'portrait-rect':
      return 1.4;
    case 'oval':
      return 1.3;
    case 'rounded-rect':
      return 1.1;
    case 'ornate':
      return fallbackAspectRatio;
  }
}

export const DEFAULT_CARD_FONT_SIZES = {
  heading: 38,
  name: 46,
  dates: 24,
  tithi: 24,
  quote: 26,
  family: 26,
  footer: 26,
} as const;

export function calculateEffectiveFontSizes(
  template: CardTemplate,
  family: FamilyDetails,
  adjustments: FontSizeAdjustments = {}
): EffectiveFontSizes {
  const familyBaseSize = DEFAULT_CARD_FONT_SIZES.family;
  const familyFontSize = calculateSwargwasiLayout(
    (family.members || []).filter((member) => member.name.trim().length > 0),
    {
      layout: family.layoutStyle ?? 'swargwasi-top',
      columns: family.userColumns ?? 2,
      alignment: family.userAlignment ?? 'center',
      fontSizeDelta: (family.fontSizeDelta ?? 0) + (adjustments.family ?? 0),
      lineSpacing: family.lineSpacing,
      columnSpacing: family.columnSpacing,
      topBottomSpacing: family.topBottomSpacing,
      baseFontSize: familyBaseSize,
    }
  ).fontSize;

  const baseHeading = DEFAULT_CARD_FONT_SIZES.heading;
  const baseName = DEFAULT_CARD_FONT_SIZES.name;
  const baseDates = DEFAULT_CARD_FONT_SIZES.dates;
  const baseTithi = DEFAULT_CARD_FONT_SIZES.tithi;
  const baseQuote = DEFAULT_CARD_FONT_SIZES.quote;
  const baseFooter = DEFAULT_CARD_FONT_SIZES.footer;

  return {
    heading: Math.max(14, baseHeading + (adjustments.heading ?? 0)),
    name: Math.max(18, baseName + (adjustments.name ?? 0)),
    dates: Math.max(12, baseDates + (adjustments.dates ?? 0)),
    tithi: Math.max(12, baseTithi + (adjustments.tithi ?? 0)),
    quote: Math.max(10, baseQuote + (adjustments.quote ?? 0)),
    family: familyFontSize,
    footer: Math.max(10, baseFooter + (adjustments.footer ?? 0)),
  };
}

const imageCache = new Map<string, Promise<HTMLImageElement>>();

/**
 * Loads an image from a URL or Data URL asynchronously with caching
 */
export function loadImage(src: string): Promise<HTMLImageElement> {
  const cached = imageCache.get(src);
  if (cached) return cached;

  const promise = new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
    img.src = src;
  });

  imageCache.set(src, promise);
  return promise;
}

/**
 * Draws wrapped text centered or left/right aligned on canvas.
 * Handles \n newlines by splitting first, then word-wrapping each segment.
 * Returns the final Y position after all text is drawn.
 */
export function drawWrappedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  align: 'left' | 'center' | 'right' = 'center',
  strokeOnly: boolean = false
): number {
  if (!text) return y;

  ctx.textAlign = align;

  const paragraphs = text.split('\n');
  let currentY = y;

  for (const paragraph of paragraphs) {
    if (paragraph.trim() === '') {
      currentY += lineHeight;
      continue;
    }
    const words = paragraph.split(' ');
    let line = '';

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;

      if (testWidth > maxWidth && n > 0) {
        if (strokeOnly) {
          ctx.strokeText(line.trim(), x, currentY);
        } else {
          ctx.fillText(line.trim(), x, currentY);
        }
        line = words[n] + ' ';
        currentY += lineHeight;
      } else {
        line = testLine;
      }
    }
    if (strokeOnly) {
      ctx.strokeText(line.trim(), x, currentY);
    } else {
      ctx.fillText(line.trim(), x, currentY);
    }
    currentY += lineHeight;
  }

  return currentY;
}

// ---------------------------------------------------------------------------
// TRADITIONAL DECORATIONS: AGARBATTI, DIYAS, FLOWERS, BORDERS
// ---------------------------------------------------------------------------

/**
 * Draws traditional Agarbatti (incense sticks) with burning glowing tip and subtle smoke curves.
 */
export function drawAgarbatti(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angleDeg: number,
  color: string = '#E6A122',
  showSmoke: boolean = true
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate((angleDeg * Math.PI) / 180);

  const holder = ctx.createLinearGradient(-18, 0, 18, 12);
  holder.addColorStop(0, '#725137');
  holder.addColorStop(0.5, '#C7A16B');
  holder.addColorStop(1, '#5A3D2D');
  ctx.fillStyle = holder;
  ctx.beginPath();
  ctx.moveTo(-17, 0);
  ctx.quadraticCurveTo(-13, 9, 0, 10);
  ctx.quadraticCurveTo(13, 9, 17, 0);
  ctx.quadraticCurveTo(9, 4, 0, 4);
  ctx.quadraticCurveTo(-9, 4, -17, 0);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 242, 210, 0.75)';
  ctx.lineWidth = 1;
  ctx.stroke();

  [-4, 4].forEach((stickX, index) => {
    ctx.beginPath();
    ctx.moveTo(stickX, 2);
    ctx.lineTo(stickX + (index === 0 ? -3 : 3), -53);
    ctx.strokeStyle = '#4B3528';
    ctx.lineWidth = 2.2;
    ctx.lineCap = 'round';
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(stickX - 0.5, -12);
    ctx.lineTo(stickX + (index === 0 ? -3 : 3) - 0.5, -53);
    ctx.strokeStyle = '#24201D';
    ctx.lineWidth = 3.2;
    ctx.stroke();

    const emberX = stickX + (index === 0 ? -3 : 3);
    const emberGrad = ctx.createRadialGradient(emberX, -54, 1, emberX, -54, 5);
    emberGrad.addColorStop(0, '#FFF3B0');
    emberGrad.addColorStop(0.55, '#E68A35');
    emberGrad.addColorStop(1, 'rgba(211, 47, 47, 0)');
    ctx.fillStyle = emberGrad;
    ctx.beginPath();
    ctx.arc(emberX, -54, 5, 0, Math.PI * 2);
    ctx.fill();

    if (showSmoke) {
      ctx.beginPath();
      ctx.moveTo(emberX, -59);
      ctx.bezierCurveTo(emberX - 10, -71, emberX + 9, -81, emberX - 2, -96);
      ctx.bezierCurveTo(emberX - 9, -105, emberX + 5, -112, emberX + 1, -119);
      ctx.strokeStyle = 'rgba(128, 120, 110, 0.34)';
      ctx.lineWidth = 1.7;
      ctx.stroke();
    }
  });

  ctx.restore();
}

/**
 * Draws a sacred Diya (oil lamp) with tiered warm glowing flame.
 */
export function drawSacredDiya(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale: number = 1,
  color: string = '#E6A122'
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  // Outer ambient flame aura glow (subtle memorial style)
  const auraGrad = ctx.createRadialGradient(0, -14, 2, 0, -14, 18);
  auraGrad.addColorStop(0, 'rgba(255, 193, 7, 0.2)');
  auraGrad.addColorStop(0.6, 'rgba(255, 152, 0, 0.08)');
  auraGrad.addColorStop(1, 'rgba(255, 152, 0, 0)');
  ctx.fillStyle = auraGrad;
  ctx.beginPath();
  ctx.arc(0, -14, 18, 0, Math.PI * 2);
  ctx.fill();

  // Brass / Clay Diya bowl
  const bowlGrad = ctx.createLinearGradient(-18, 0, 18, 12);
  bowlGrad.addColorStop(0, color);
  bowlGrad.addColorStop(0.5, '#F59E0B');
  bowlGrad.addColorStop(1, '#92400E');
  ctx.fillStyle = bowlGrad;

  ctx.beginPath();
  ctx.moveTo(-18, 0);
  ctx.quadraticCurveTo(-16, 14, 0, 14);
  ctx.quadraticCurveTo(16, 14, 18, 0);
  ctx.quadraticCurveTo(10, 4, 0, 4);
  ctx.quadraticCurveTo(-10, 4, -18, 0);
  ctx.closePath();
  ctx.fill();

  // Bowl rim highlight
  ctx.strokeStyle = '#FEF3C7';
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 2);
  ctx.lineTo(0, -5);
  ctx.strokeStyle = '#4B3528';
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.stroke();

  const standGrad = ctx.createLinearGradient(-12, 14, 12, 22);
  standGrad.addColorStop(0, '#7C4A20');
  standGrad.addColorStop(0.5, '#E0A73C');
  standGrad.addColorStop(1, '#6F3C1C');
  ctx.fillStyle = standGrad;
  ctx.beginPath();
  ctx.moveTo(-7, 13);
  ctx.lineTo(-5, 18);
  ctx.lineTo(-13, 20);
  ctx.quadraticCurveTo(0, 24, 13, 20);
  ctx.lineTo(5, 18);
  ctx.lineTo(7, 13);
  ctx.closePath();
  ctx.fill();

  // Outer orange flame (smaller, memorial style)
  ctx.beginPath();
  ctx.moveTo(-6, -2);
  ctx.quadraticCurveTo(-10, -10, 0, -18);
  ctx.quadraticCurveTo(10, -10, 6, -2);
  ctx.closePath();
  ctx.fillStyle = '#EA580C';
  ctx.fill();

  // Inner yellow/gold flame
  ctx.beginPath();
  ctx.moveTo(-4, -2);
  ctx.quadraticCurveTo(-6, -8, 0, -15);
  ctx.quadraticCurveTo(6, -8, 4, -2);
  ctx.closePath();
  ctx.fillStyle = '#FDE047';
  ctx.fill();

  // Core white bright light
  ctx.beginPath();
  ctx.moveTo(-2, -2);
  ctx.quadraticCurveTo(-3, -6, 0, -10);
  ctx.quadraticCurveTo(3, -6, 2, -2);
  ctx.closePath();
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();

  ctx.restore();
}

/**
 * Draws a white/cream memorial flower - subtle and respectful
 */
export function drawWhiteMemorialFlower(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number = 10,
  color: string = '#F5F0E8'
) {
  ctx.save();
  ctx.translate(cx, cy);

  // 6 rounded petals
  const petalCount = 6;
  for (let i = 0; i < petalCount; i++) {
    const angle = (i / petalCount) * Math.PI * 2;
    ctx.beginPath();
    ctx.ellipse(
      Math.cos(angle) * radius * 0.55,
      Math.sin(angle) * radius * 0.55,
      radius * 0.42,
      radius * 0.28,
      angle,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = 'rgba(200,180,150,0.3)';
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  // Soft yellow center
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.22, 0, Math.PI * 2);
  ctx.fillStyle = '#F5D76E';
  ctx.fill();

  ctx.restore();
}

/**
 * Draws an elegant floral corner arrangement for memorial cards.
 * direction: 1 = left corner (opens right), -1 = right corner (opens left)
 */
export function drawFloralBottomCorner(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  direction: number = 1
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(direction, 1);

  // Small leaves (muted green teardrops)
  const leafColor = 'rgba(100, 130, 80, 0.65)';
  ctx.fillStyle = leafColor;

  // Leaf 1
  ctx.save();
  ctx.rotate(-0.6);
  ctx.beginPath();
  ctx.ellipse(28, -10, 18, 7, -0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Leaf 2
  ctx.save();
  ctx.rotate(0.3);
  ctx.beginPath();
  ctx.ellipse(14, -22, 14, 5, -0.8, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Leaf 3 (small)
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(32, -28, 10, 4, 0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // Flowers
  drawWhiteMemorialFlower(ctx, 0, 0, 13, '#EDE8DC');       // main bottom flower
  drawWhiteMemorialFlower(ctx, 22, -18, 10, '#F0EBE0');    // mid flower
  drawWhiteMemorialFlower(ctx, 38, -32, 8, '#EAE4D5');     // top-side small flower

  ctx.restore();
}

/**
 * Draws a detailed procedural Marigold flower (ગલગોટો)
 */
export function drawMarigoldFlower(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number = 14
) {
  ctx.save();
  ctx.translate(cx, cy);

  // Outer petals (orange)
  const outerPetals = 16;
  ctx.fillStyle = '#EA580C';
  for (let i = 0; i < outerPetals; i++) {
    const angle = (i / outerPetals) * Math.PI * 2;
    const px = Math.cos(angle) * (radius * 0.85);
    const py = Math.sin(angle) * (radius * 0.85);
    ctx.beginPath();
    ctx.arc(px, py, radius * 0.38, 0, Math.PI * 2);
    ctx.fill();
  }

  // Middle petals (vibrant golden yellow)
  const midPetals = 12;
  ctx.fillStyle = '#F59E0B';
  for (let i = 0; i < midPetals; i++) {
    const angle = (i / midPetals) * Math.PI * 2 + 0.2;
    const px = Math.cos(angle) * (radius * 0.55);
    const py = Math.sin(angle) * (radius * 0.55);
    ctx.beginPath();
    ctx.arc(px, py, radius * 0.32, 0, Math.PI * 2);
    ctx.fill();
  }

  // Core petals (bright yellow-cream)
  const corePetals = 8;
  ctx.fillStyle = '#FEF08A';
  for (let i = 0; i < corePetals; i++) {
    const angle = (i / corePetals) * Math.PI * 2;
    const px = Math.cos(angle) * (radius * 0.28);
    const py = Math.sin(angle) * (radius * 0.28);
    ctx.beginPath();
    ctx.arc(px, py, radius * 0.22, 0, Math.PI * 2);
    ctx.fill();
  }

  // Center bud
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.15, 0, Math.PI * 2);
  ctx.fillStyle = '#B45309';
  ctx.fill();

  ctx.restore();
}

/**
 * Draws a procedural Rose flower (ગુલાબ)
 */
export function drawRoseFlower(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number = 14,
  color: string = '#BE123C'
) {
  ctx.save();
  ctx.translate(cx, cy);

  // Outer petals
  ctx.fillStyle = color;
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    ctx.beginPath();
    ctx.ellipse(
      Math.cos(angle) * radius * 0.6,
      Math.sin(angle) * radius * 0.6,
      radius * 0.55,
      radius * 0.4,
      angle,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  // Inner spiraling petals
  ctx.fillStyle = '#E11D48';
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2 + 0.35;
    ctx.beginPath();
    ctx.ellipse(
      Math.cos(angle) * radius * 0.35,
      Math.sin(angle) * radius * 0.35,
      radius * 0.35,
      radius * 0.28,
      angle,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }

  // Center bud
  ctx.fillStyle = '#FFF1F2';
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.2, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

/**
 * Draws scattered graceful rose petals along card corners/edges.
 */
export function drawRosePetals(ctx: CanvasRenderingContext2D, W: number, H: number) {
  ctx.save();
  const petals = [
    { x: W * 0.08, y: H * 0.12, rot: 0.4, s: 8 },
    { x: W * 0.14, y: H * 0.07, rot: -0.6, s: 7 },
    { x: W * 0.88, y: H * 0.11, rot: 1.1, s: 8 },
    { x: W * 0.92, y: H * 0.16, rot: -0.3, s: 6 },
    { x: W * 0.07, y: H * 0.88, rot: 0.8, s: 8 },
    { x: W * 0.12, y: H * 0.92, rot: -0.5, s: 7 },
    { x: W * 0.88, y: H * 0.89, rot: 0.6, s: 8 },
    { x: W * 0.93, y: H * 0.84, rot: -1.2, s: 7 },
  ];

  ctx.fillStyle = '#E11D48';
  ctx.globalAlpha = 0.82;

  petals.forEach(p => {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.beginPath();
    ctx.moveTo(0, -p.s);
    ctx.quadraticCurveTo(p.s * 1.3, -p.s * 0.4, p.s * 0.8, p.s * 0.8);
    ctx.quadraticCurveTo(0, p.s * 1.3, -p.s * 0.8, p.s * 0.8);
    ctx.quadraticCurveTo(-p.s * 1.3, -p.s * 0.4, 0, -p.s);
    ctx.closePath();
    ctx.fill();

    // Highlight
    ctx.fillStyle = '#FFE4E6';
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.ellipse(0, 0, p.s * 0.4, p.s * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  });

  ctx.restore();
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

  // Inner stitched dashed border
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 6]);
  ctx.strokeRect(innerMargin, innerMargin, width - innerMargin * 2, height - innerMargin * 2);
  ctx.setLineDash([]);

  // Draw traditional Rabari "Aabhla" (mirrors with embroidery rings) along borders
  const mirrorRadius = 7;
  const spacing = 46;

  for (let x = innerMargin + 30; x < width - innerMargin - 30; x += spacing) {
    drawMirror(ctx, x, margin + 7, mirrorRadius);
    drawMirror(ctx, x, height - margin - 7, mirrorRadius);
  }

  for (let y = innerMargin + 30; y < height - innerMargin - 30; y += spacing) {
    drawMirror(ctx, margin + 7, y, mirrorRadius);
    drawMirror(ctx, width - margin - 7, y, mirrorRadius);
  }

  // Corner Rabari Sunburst Medallions
  drawCornerMedallion(ctx, innerMargin, innerMargin, accentColor);
  drawCornerMedallion(ctx, width - innerMargin, innerMargin, accentColor);
  drawCornerMedallion(ctx, innerMargin, height - innerMargin, accentColor);
  drawCornerMedallion(ctx, width - innerMargin, height - innerMargin, accentColor);

  ctx.restore();
}

function drawMirror(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.arc(x, y, r + 2.5, 0, Math.PI * 2);
  ctx.fillStyle = '#E6A122';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = '#E8F1F5';
  ctx.fill();

  ctx.beginPath();
  ctx.arc(x - r * 0.3, y - r * 0.3, r * 0.35, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
}

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

  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 3.5;
  ctx.strokeRect(m, m, width - m * 2, height - m * 2);

  ctx.lineWidth = 1.5;
  ctx.strokeRect(m + 8, m + 8, width - (m + 8) * 2, height - (m + 8) * 2);

  const cornerSize = 42;
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
 * Draws royal filigree corner scrollwork and double gold frame.
 */
function drawRoyalFiligreeBorder(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  accentColor: string
) {
  ctx.save();
  const m = W * 0.032;

  // Outer primary border
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 3;
  ctx.strokeRect(m, m, W - m * 2, H - m * 2);

  // Inner delicate frame
  ctx.lineWidth = 1;
  ctx.strokeRect(m + 10, m + 10, W - (m + 10) * 2, H - (m + 10) * 2);

  // Intricate baroque/filigree corners
  const corners = [
    { x: m, y: m, scaleX: 1, scaleY: 1 },
    { x: W - m, y: m, scaleX: -1, scaleY: 1 },
    { x: m, y: H - m, scaleX: 1, scaleY: -1 },
    { x: W - m, y: H - m, scaleX: -1, scaleY: -1 },
  ];

  corners.forEach(c => {
    ctx.save();
    ctx.translate(c.x, c.y);
    ctx.scale(c.scaleX, c.scaleY);
    ctx.strokeStyle = accentColor;
    ctx.lineWidth = 2;

    // Corner curves & flourishes
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.bezierCurveTo(20, 48, 48, 20, 50, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 32);
    ctx.quadraticCurveTo(16, 26, 26, 16);
    ctx.quadraticCurveTo(26, 16, 32, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(20, 20, 4, 0, Math.PI * 2);
    ctx.fillStyle = accentColor;
    ctx.fill();

    ctx.restore();
  });

  ctx.restore();
}

/**
 * Draws elegant curved floral divine corners with petals and vines.
 */
function drawFloralDivineBorder(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  accentColor: string
) {
  ctx.save();
  const m = W * 0.03;

  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 2;
  ctx.strokeRect(m, m, W - m * 2, H - m * 2);

  ctx.lineWidth = 0.8;
  ctx.globalAlpha = 0.5;
  ctx.strokeRect(m + 10, m + 10, W - (m + 10) * 2, H - (m + 10) * 2);
  ctx.globalAlpha = 1;

  const corners = [
    { cx: m, cy: m },
    { cx: W - m, cy: m },
    { cx: m, cy: H - m },
    { cx: W - m, cy: H - m },
  ];

  corners.forEach(({ cx, cy }) => {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.fillStyle = accentColor;

    for (let p = 0; p < 4; p++) {
      ctx.save();
      ctx.rotate((p * Math.PI) / 2);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(14, 10, 20, 24);
      ctx.quadraticCurveTo(10, 14, 0, 0);
      ctx.globalAlpha = 0.75;
      ctx.fill();
      ctx.restore();
    }

    ctx.beginPath();
    ctx.arc(0, 0, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = accentColor;
    ctx.fill();

    ctx.restore();
  });

  // Subtle vine dots along top & bottom
  ctx.fillStyle = accentColor;
  ctx.globalAlpha = 0.4;
  const vineSpacing = 48;
  for (let vx = m + 40; vx < W - m - 40; vx += vineSpacing) {
    ctx.beginPath();
    ctx.arc(vx, m + 5, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(vx, H - m - 5, 3, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  ctx.restore();
}

/**
 * Draws minimal gold border with diamond accents.
 */
function drawMinimalGoldBorder(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  accentColor: string
) {
  ctx.save();
  const m = W * 0.028;
  const diamondSize = 8;

  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(m, m, W - m * 2, H - m * 2);

  const corners = [
    { x: m, y: m },
    { x: W - m, y: m },
    { x: m, y: H - m },
    { x: W - m, y: H - m },
  ];

  ctx.fillStyle = accentColor;
  corners.forEach(({ x, y }) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI / 4);
    ctx.fillRect(-diamondSize / 2, -diamondSize / 2, diamondSize, diamondSize);
    ctx.restore();
  });

  ctx.lineWidth = 0.6;
  ctx.globalAlpha = 0.45;
  ctx.strokeRect(m + 10, m + 10, W - (m + 10) * 2, H - (m + 10) * 2);
  ctx.globalAlpha = 1;

  ctx.restore();
}

/**
 * Draws sacred temple archway / toran border.
 */
function drawOrnamentalArchBorder(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  accentColor: string
) {
  ctx.save();
  const m = W * 0.032;

  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 2.5;
  ctx.strokeRect(m, m, W - m * 2, H - m * 2);

  // Top toran curve - safely elevated inside the upper border margin so it never overlaps header text
  ctx.beginPath();
  ctx.moveTo(m + 30, m + 14);
  ctx.quadraticCurveTo(W / 2, m + 28, W - m - 30, m + 14);
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Toran swags & bells
  for (let tx = m + 60; tx < W - m - 40; tx += 65) {
    ctx.beginPath();
    ctx.arc(tx, m + 18, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = accentColor;
    ctx.fill();
  }

  // Four corner brackets
  drawTraditionalBorder(ctx, W, H, accentColor);
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
    drawSacredDiya(ctx, centerX, y + 4, 0.95, color);
  } else if (motif === 'kalash') {
    ctx.font = 'bold 28px "Noto Sans Gujarati", sans-serif';
    ctx.fillText('॥ ૐ નમો ભગવતે વાસુદેવાય ॥', centerX, y);
  }

  ctx.restore();
}

function drawTemplateComposition(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  theme: CardTemplate['theme'],
  includeFlowers: boolean
) {
    const composition = theme.composition;
    if (!composition) return;

    ctx.save();
    ctx.strokeStyle = theme.accentColor;
    ctx.fillStyle = theme.accentColor;
    ctx.globalAlpha = 0.45;

    if (composition === 'double-frame') {
      ctx.lineWidth = 1;
      ctx.strokeRect(W * 0.045, H * 0.035, W * 0.91, H * 0.93);
      ctx.globalAlpha = 0.2;
      ctx.strokeRect(W * 0.065, H * 0.055, W * 0.87, H * 0.89);
    } else if (composition === 'side-vines') {
      [-1, 1].forEach((side) => {
        const x = side < 0 ? W * 0.055 : W * 0.945;
        ctx.lineWidth = 1.3;
        ctx.beginPath();
        ctx.moveTo(x, H * 0.18);
        ctx.bezierCurveTo(x + side * 12, H * 0.35, x - side * 12, H * 0.62, x, H * 0.82);
        ctx.stroke();
        [0.28, 0.44, 0.6, 0.74].forEach((position, index) => {
          ctx.save();
          ctx.translate(x + (index % 2 ? -side * 5 : side * 5), H * position);
          ctx.rotate(side * (index % 2 ? -0.5 : 0.5));
          ctx.beginPath();
          ctx.ellipse(0, 0, 3.5, 8, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      });
    } else if (composition === 'corner-bouquets' && includeFlowers) {
      ctx.globalAlpha = 0.7;
      drawWhiteMemorialFlower(ctx, W * 0.075, H * 0.11, 12, theme.accentColor);
      drawWhiteMemorialFlower(ctx, W * 0.925, H * 0.11, 12, theme.accentColor);
      drawWhiteMemorialFlower(ctx, W * 0.075, H * 0.89, 11, theme.accentColor);
      drawWhiteMemorialFlower(ctx, W * 0.925, H * 0.89, 11, theme.accentColor);
    } else if (composition === 'arched-halo') {
      // Elegant arch halo positioned behind the photo, safely below the header text
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(W * 0.14, H * 0.44);
      ctx.quadraticCurveTo(W * 0.5, H * 0.16, W * 0.86, H * 0.44);
      ctx.stroke();
      ctx.globalAlpha = 0.22;
      ctx.beginPath();
      ctx.moveTo(W * 0.18, H * 0.45);
      ctx.quadraticCurveTo(W * 0.5, H * 0.19, W * 0.82, H * 0.45);
      ctx.stroke();
    } else if (composition === 'radial-halo') {
      const halo = ctx.createRadialGradient(W / 2, H * 0.34, 8, W / 2, H * 0.34, W * 0.25);
      halo.addColorStop(0, 'rgba(212, 175, 55, 0.12)');
      halo.addColorStop(1, 'rgba(212, 175, 55, 0)');
      ctx.globalAlpha = 1;
      ctx.fillStyle = halo;
      ctx.fillRect(W * 0.2, H * 0.1, W * 0.6, H * 0.48);
    } else if (composition === 'lotus-medallion') {
      const cx = W / 2;
      const cy = H * 0.095;
      for (let petal = 0; petal < 8; petal++) {
        const angle = (petal / 8) * Math.PI * 2;
        ctx.save();
        ctx.translate(cx + Math.cos(angle) * 9, cy + Math.sin(angle) * 9);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.ellipse(0, 0, 4, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.beginPath();
      ctx.arc(cx, cy, 5, 0, Math.PI * 2);
      ctx.fill();
    } else if (composition === 'stepped-corners') {
      const length = Math.min(W, H) * 0.055;
      const inset = Math.min(W, H) * 0.055;
      [[1, 1], [-1, 1], [1, -1], [-1, -1]].forEach(([sx, sy]) => {
        const x = sx > 0 ? inset : W - inset;
        const y = sy > 0 ? inset : H - inset;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + sx * length, y);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y + sy * length);
        ctx.stroke();
        ctx.globalAlpha = 0.22;
        ctx.beginPath();
        ctx.moveTo(x + sx * length * 1.35, y + sy * length * 0.2);
        ctx.lineTo(x + sx * length * 0.2, y + sy * length * 0.2);
        ctx.lineTo(x + sx * length * 0.2, y + sy * length * 1.35);
        ctx.stroke();
        ctx.globalAlpha = 0.45;
      });
    } else if (composition === 'decorative-bands') {
      ctx.lineWidth = 1;
      [0.075, 0.095, 0.905, 0.925].forEach((position) => {
        ctx.beginPath();
        ctx.moveTo(W * 0.12, H * position);
        ctx.lineTo(W * 0.88, H * position);
        ctx.stroke();
      });
    }

  ctx.restore();
}

/**
 * Draws photo with ornate garland (ગલગોટા / ગુલાબનો હાર) and frame.
 * Returns true if photo was drawn, false if skipped.
 */
function drawPhotoFrame(
  ctx: CanvasRenderingContext2D,
  photoImg: HTMLImageElement | null,
  photoFrameAsset: HTMLImageElement | null,
  frame: CardTemplate['placeholders']['photo'],
  cardWidth: number,
  cardHeight: number,
  deceased: DeceasedDetails
): boolean {
  if (!photoImg) return false;

  const cx = (frame.x / 100) * cardWidth;
  const cy = (frame.y / 100) * cardHeight;
  const frameWidth = (frame.size / 100) * cardWidth;
  const frameHeight = frameWidth * getPhotoFrameAspectRatio(frame.shape, frame.aspectRatio);

  const rx = frameWidth / 2;
  const ry = frameHeight / 2;
  const photoWidth = photoFrameAsset ? frameWidth * 0.72 : frameWidth;
  const photoHeight = photoFrameAsset ? frameHeight * 0.72 : frameHeight;

  ctx.save();

  tracePhotoFramePath(ctx, cx, cy, photoWidth, photoHeight, frame.shape);
  ctx.fillStyle = '#F3F4F6';
  ctx.fill();
  ctx.clip();

  // Scale and position photo respecting user zoom and pan offsets
  const userScale = deceased.photoScale ?? 1;
  const userXOffset = deceased.photoXOffset ?? 0;
  const userYOffset = deceased.photoYOffset ?? 0;

  const imgAspect = photoImg.width / photoImg.height;
  const frameAspect = photoWidth / photoHeight;

  let drawW, drawH;
  if (imgAspect > frameAspect) {
    drawH = photoHeight * userScale;
    drawW = drawH * imgAspect;
  } else {
    drawW = photoWidth * userScale;
    drawH = drawW / imgAspect;
  }

  const drawX = cx - drawW / 2 + (userXOffset / 100) * photoWidth;
  const drawY = cy - drawH / 2 + (userYOffset / 100) * photoHeight;

  ctx.drawImage(photoImg, drawX, drawY, drawW, drawH);
  ctx.restore();

  if (photoFrameAsset) {
    ctx.drawImage(
      photoFrameAsset,
      cx - frameWidth / 2,
      cy - frameHeight / 2,
      frameWidth,
      frameHeight
    );
    return true;
  }

  // Draw traditional memorial frame and garland (હાર)
  ctx.save();
  // Outer gold rim
  tracePhotoFramePath(ctx, cx, cy, frameWidth + 3, frameHeight + 3, frame.shape);
  ctx.strokeStyle = '#BFA054';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Highlight inner rim
  tracePhotoFramePath(ctx, cx, cy, frameWidth - 1, frameHeight - 1, frame.shape);
  ctx.strokeStyle = '#FFF6D8';
  ctx.lineWidth = 1.2;
  ctx.stroke();

  // Subtle inner depth rim
  tracePhotoFramePath(ctx, cx, cy, frameWidth - 3, frameHeight - 3, frame.shape);
  ctx.strokeStyle = 'rgba(100, 75, 20, 0.45)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Floral Garland (પરંપરાગત પુષ્પહાર - Mogra, Rose & Marigold)
  const garland = frame.garlandStyle || 'marigold';
  if (garland !== 'none') {
    const flowerCount = 34;

    for (let i = 0; i < flowerCount; i++) {
      const angle = (i / flowerCount) * Math.PI * 2;
      const distOffset = 7;
      const fx = cx + (rx + distOffset) * Math.cos(angle);
      const fy = cy + (ry + distOffset) * Math.sin(angle);

      // Mogra base florets (delicate layered petals)
      ctx.beginPath();
      ctx.arc(fx, fy, 5.5, 0, Math.PI * 2);
      ctx.fillStyle = i % 4 === 0 ? '#C5221F' : (i % 2 === 0 ? '#FFFFFF' : '#FFF9E6');
      ctx.fill();

      // Flower centers
      if (i % 4 !== 0) {
        ctx.beginPath();
        ctx.arc(fx, fy, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = '#E5A510';
        ctx.fill();
      } else {
        // Red rose center
        ctx.beginPath();
        ctx.arc(fx, fy, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#8B0000';
        ctx.fill();
      }
    }

    // Traditional Pendant / Haar Locket at bottom center of the garland
    const pendantY = cy + ry + 9;
    ctx.beginPath();
    ctx.arc(cx, pendantY, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#C5221F';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(cx, pendantY, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = '#F59E0B';
    ctx.fill();

    // Side flanking florets
    [-9, 9].forEach(offset => {
      ctx.beginPath();
      ctx.arc(cx + offset, pendantY - 2, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx + offset, pendantY - 2, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#F59E0B';
      ctx.fill();
    });

    // Gold tassel hanging below pendant
    ctx.beginPath();
    ctx.moveTo(cx, pendantY + 7);
    ctx.lineTo(cx, pendantY + 18);
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, pendantY + 18, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#F59E0B';
    ctx.fill();
  }

  ctx.restore();
  return true;
}

function tracePhotoFramePath(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  width: number,
  height: number,
  shape: PhotoFrameShape
) {
  const rx = width / 2;
  const ry = height / 2;
  ctx.beginPath();

  if (shape === 'circle') {
    ctx.arc(cx, cy, rx, 0, Math.PI * 2);
  } else if (shape === 'oval' || shape === 'ornate') {
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  } else if (shape === 'rounded-rect') {
    const radius = Math.min(width, height) * 0.12;
    ctx.moveTo(cx - rx + radius, cy - ry);
    ctx.lineTo(cx + rx - radius, cy - ry);
    ctx.quadraticCurveTo(cx + rx, cy - ry, cx + rx, cy - ry + radius);
    ctx.lineTo(cx + rx, cy + ry - radius);
    ctx.quadraticCurveTo(cx + rx, cy + ry, cx + rx - radius, cy + ry);
    ctx.lineTo(cx - rx + radius, cy + ry);
    ctx.quadraticCurveTo(cx - rx, cy + ry, cx - rx, cy + ry - radius);
    ctx.lineTo(cx - rx, cy - ry + radius);
    ctx.quadraticCurveTo(cx - rx, cy - ry, cx - rx + radius, cy - ry);
  } else {
    ctx.rect(cx - rx, cy - ry, width, height);
  }

  ctx.closePath();
}

/**
 * Ensures Gujarati fonts are completely loaded before rendering
 */
export async function ensureFontsLoaded(): Promise<void> {
  if (typeof document !== 'undefined' && 'fonts' in document) {
    try {
      await document.fonts.ready;
    } catch (e) {
      // Font loading fallback
    }
  }
}

// ---------------------------------------------------------------------------
// DYNAMIC FLOW LAYOUT ENGINE
// ---------------------------------------------------------------------------

interface FlowSection {
  id: string;
  estimatedHeight: number; // px at base resolution
  isVisible: boolean;
  renderFn: (y: number) => number; // receives top Y, returns final Y after drawing
}

export function calculateSectionGap(
  sectionHeights: number[],
  availableHeight: number,
  requestedGap: number
): number {
  const sectionCount = sectionHeights.length;
  const safeRequestedGap = Math.max(0, requestedGap);
  if (sectionCount < 2) return safeRequestedGap;

  const contentHeight = sectionHeights.reduce((total, height) => total + height, 0);
  const availableGap = (availableHeight - contentHeight) / (sectionCount - 1);
  return Math.max(0, Math.min(safeRequestedGap, availableGap));
}

export function estimateFamilyBlockHeight(
  layout: SwargwasiLayoutResult,
  layoutStyle: 'swargwasi-top' | 'swargwasi-columns',
  headerGap: number
): number {
  const swargwasiRows = layoutStyle === 'swargwasi-top'
    ? layout.swargwasiNames.length
    : Math.max(...layout.swargwasiColumns.map((column) => column.length), 0);
  const normalRows = Math.max(...layout.normalColumns.map((column) => column.length), 0);
  const lineHeight = layout.fontSize * layout.lineHeight;
  const swargwasiColumnSpacing =
    layoutStyle === 'swargwasi-columns' && layout.hasSwargwasi ? 4 : 0;
  const memberSectionSpacing = layout.hasSwargwasi && layout.hasNormal ? 17 : 0;

  return Math.max(16, Math.round(layout.fontSize))
    + headerGap
    + (swargwasiRows + normalRows) * lineHeight
    + swargwasiColumnSpacing
    + memberSectionSpacing
    + 10;
}

/**
 * Main Canvas Render Function — Professional Alignment and Spacing Engine
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
  await ensureFontsLoaded();
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const format = options.selectedFormat || '4:5';
  const dimensions = FORMAT_DIMENSIONS[format];
  const scale = options.scale || 1;

  const targetWidth = dimensions.width * scale;
  const targetHeight = dimensions.height * scale;

  canvas.width = targetWidth;
  canvas.height = targetHeight;

  const decorationAssets = template.theme.decorationAssets;
  const useRealDiyas = deceased.useRealDiyas ?? (deceased.includeDiya && !!(decorationAssets?.diyaStand || decorationAssets?.diya));
  const useRealFlowers = deceased.useRealFlowers ?? (deceased.includeFlowers !== false && !!(decorationAssets?.flowerCorner || decorationAssets?.garland));
  const useRealFrames = deceased.useRealFrames ?? (!!deceased.photoUrl && !!decorationAssets?.photoFrame);

  const diyaStandPath = decorationAssets?.diyaStand || '/assets/decorations/diya-stands/traditional-brass-diya-stand.png';
  const diyaPath = decorationAssets?.diya || '/assets/decorations/diyas/traditional-brass-diya.png';
  const flowerCornerPath = decorationAssets?.flowerCorner || '/assets/decorations/flower-corners/marigold-rose-corner.png';
  const garlandPath = decorationAssets?.garland || '/assets/decorations/garlands/royal-rose-marigold-toran.png';

  // Compatible photo frame asset based on shape
  let resolvedPhotoFramePath: string | null = null;
  if (useRealFrames) {
    const shape = template.placeholders.photo.shape;
    if (shape === 'circle' || shape === 'oval' || shape === 'ornate') {
      resolvedPhotoFramePath = '/assets/decorations/photo-frames/ornate-gold-oval-frame.png';
    } else if (shape === 'square') {
      resolvedPhotoFramePath = '/assets/decorations/photo-frames/royal-gold-square-frame.png';
    } else if (shape === 'portrait-rect') {
      resolvedPhotoFramePath = '/assets/decorations/photo-frames/antique-gold-portrait-frame.png';
    } else if (shape === 'rect') {
      resolvedPhotoFramePath = '/assets/decorations/photo-frames/heritage-carved-gold-frame.png';
    } else if (shape === 'rounded-rect') {
      resolvedPhotoFramePath = '/assets/decorations/photo-frames/classic-wood-gold-frame.png';
    }
  }

  const [
    diyaStandAsset,
    photoFrameAsset,
    diyaAsset,
    flowerCornerAsset,
    garlandAsset,
  ] = await Promise.all([
    useRealDiyas
      ? loadImage(getPublicAssetUrl(diyaStandPath)).catch(() => null)
      : Promise.resolve(null),
    resolvedPhotoFramePath
      ? loadImage(getPublicAssetUrl(resolvedPhotoFramePath)).catch(() => null)
      : Promise.resolve(null),
    useRealDiyas
      ? loadImage(getPublicAssetUrl(diyaPath)).catch(() => null)
      : Promise.resolve(null),
    useRealFlowers
      ? loadImage(getPublicAssetUrl(flowerCornerPath)).catch(() => null)
      : Promise.resolve(null),
    useRealFlowers
      ? loadImage(getPublicAssetUrl(garlandPath)).catch(() => null)
      : Promise.resolve(null),
  ]);

  // Scale context so all calculations use base dimensions coordinates
  ctx.save();
  ctx.scale(scale, scale);

  const W = dimensions.width;
  const H = dimensions.height;
  const effectiveFontSizes = calculateEffectiveFontSizes(
    template,
    family,
    options.fontSizeAdjustments
  );

  // ── 1. Draw Background ────────────────────────────────────────────────────
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

  // ── 2. Draw Borders ───────────────────────────────────────────────────────
  const borderStyle = template.theme.borderStyle;
  if (borderStyle === 'rabari-embroidery') {
    drawRabariBorder(ctx, W, H, template.theme.accentColor);
  } else if (borderStyle === 'floral-divine') {
    drawFloralDivineBorder(ctx, W, H, template.theme.accentColor);
  } else if (borderStyle === 'minimal-gold') {
    drawMinimalGoldBorder(ctx, W, H, template.theme.accentColor);
  } else if (borderStyle === 'royal-filigree') {
    drawRoyalFiligreeBorder(ctx, W, H, template.theme.accentColor);
  } else if (borderStyle === 'ornamental-arch' || borderStyle === 'sacred-mandap') {
    drawOrnamentalArchBorder(ctx, W, H, template.theme.accentColor);
  } else {
    drawTraditionalBorder(ctx, W, H, template.theme.accentColor);
  }

  drawTemplateComposition(ctx, W, H, template.theme, deceased.includeFlowers === true);

  // ── 3. Render Subtle Traditional Decorations ──
  // A. Floral Corners (Real Flower Assets)
  if (flowerCornerAsset && useRealFlowers) {
    const cornerW = W * 0.12;
    const cornerH = cornerW * (flowerCornerAsset.height / flowerCornerAsset.width);
    ctx.save();
    ctx.globalAlpha = 0.88;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.10)';
    ctx.shadowBlur = 8;
    ctx.drawImage(flowerCornerAsset, W * 0.055, H * 0.048, cornerW, cornerH);
    ctx.save();
    ctx.translate(W - W * 0.055, H * 0.048);
    ctx.scale(-1, 1);
    ctx.drawImage(flowerCornerAsset, 0, 0, cornerW, cornerH);
    ctx.restore();
    ctx.restore();
  }

  // B. Floral Garlands / Toran (Real Flower Assets)
  if (garlandAsset && useRealFlowers) {
    const garlandH = W * 0.058;
    ctx.save();
    ctx.globalAlpha = 0.92;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.08)';
    ctx.shadowBlur = 6;
    ctx.drawImage(garlandAsset, W * 0.08, H * 0.04, W * 0.84, garlandH);
    ctx.restore();
  }

  // C. Traditional single/paired Diyas (Real Diya Assets - bottom placement if no photo)
  if (useRealDiyas && diyaAsset && !deceased.photoUrl) {
    const diyaW = W * 0.11;
    const diyaH = diyaW * (diyaAsset.height / diyaAsset.width);
    ctx.drawImage(diyaAsset, W * 0.08 - diyaW / 2, H * 0.955 - diyaH, diyaW, diyaH);
    ctx.drawImage(diyaAsset, W * 0.92 - diyaW / 2, H * 0.955 - diyaH, diyaW, diyaH);
  }

  const decors = template.theme.decorations || [];
  const flowerDecorations = ['rose-petals', 'marigold-corners', 'white-flowers-bottom'];
  const hasFlowerDecorations = template.theme.composition === 'corner-bouquets'
    || decors.some((decoration) => flowerDecorations.includes(decoration));
  if (deceased.includeFlowers === true && decors.includes('rose-petals')) {
    drawRosePetals(ctx, W, H);
  }
  if (deceased.includeFlowers === true && decors.includes('marigold-corners')) {
    // Draw subtle marigolds only at bottom corners (not all 4)
    drawMarigoldFlower(ctx, W * 0.07, H * 0.955, 13);
    drawMarigoldFlower(ctx, W * 0.93, H * 0.955, 13);
  }
  if (deceased.includeFlowers === true && decors.includes('white-flowers-bottom')) {
    drawFloralBottomCorner(ctx, W * 0.11, H * 0.93, 1);         // bottom-left
    drawFloralBottomCorner(ctx, W * 0.89, H * 0.93, -1);        // bottom-right (mirrored)
  }
  if (decors.includes('agarbatti')) {
    drawAgarbatti(ctx, W * 0.08, H * 0.955, 18, template.theme.accentColor, true);
    drawAgarbatti(ctx, W * 0.92, H * 0.955, -18, template.theme.accentColor, true);
  }
  if (deceased.includeDiya === true && (decors.includes('diya') || decors.includes('diya-corners'))) {
    if (diyaStandAsset && !deceased.photoUrl) {
      const standHeight = H * 0.12;
      const standWidth = standHeight * (diyaStandAsset.width / diyaStandAsset.height);
      [0.08, 0.92].forEach((position) => {
        ctx.drawImage(
          diyaStandAsset,
          W * position - standWidth / 2,
          H * 0.97 - standHeight,
          standWidth,
          standHeight
        );
      });
    } else if (!diyaStandAsset && !diyaAsset && !deceased.photoUrl) {
      const isCornerPlacement = decors.includes('diya-corners');
      const decorationCount = isCornerPlacement ? 2 : 1;
      const positions = isCornerPlacement && decorationCount === 2 ? [0.1, 0.9] : [0.5];
      positions.slice(0, decorationCount).forEach((position) => {
        drawSacredDiya(ctx, W * position, H * 0.955, 0.55, template.theme.accentColor);
      });
    }
  }
  if (deceased.includeFlowers === true && !hasFlowerDecorations && !flowerCornerAsset && !garlandAsset) {
    drawFloralBottomCorner(ctx, W * 0.09, H * 0.91, 1);
    drawFloralBottomCorner(ctx, W * 0.91, H * 0.91, -1);
  }
  if (
    deceased.includeDiya === true
    && !diyaStandAsset
    && !diyaAsset
    && !decors.includes('diya')
    && !decors.includes('diya-corners')
  ) {
    drawSacredDiya(ctx, W * 0.09, H * 0.945, 0.4, template.theme.accentColor);
    drawSacredDiya(ctx, W * 0.91, H * 0.945, 0.4, template.theme.accentColor);
  }

  // ── 4. Pre-load user photo ────────────────────────────────────────────────
  let loadedPhoto: HTMLImageElement | null = null;
  if (deceased.photoUrl) {
    try {
      loadedPhoto = await loadImage(deceased.photoUrl);
    } catch (e) {
      console.warn('Failed to load user photo', e);
    }
  }

  // ── 5. Determine visibility of optional sections (STRICT REQUIREMENT) ─────
  const hasPhoto = loadedPhoto !== null;
  const hasDeceasedName = !!(deceased.name && deceased.name.trim().length > 0);
  const tithiDisplay = formatTithi(
    deceased.tithiPaksha,
    deceased.tithiName,
    deceased.tithiMonth,
    deceased.tithi
  );
  const hasTithi = tithiDisplay.length > 0;
  const mobileNumbers = (deceased.mobileNumbers || [])
    .map(normalizeIndianMobileNumber)
    .filter(Boolean);

  // Contact entries for Besna cards (supports contactPersons with name & number, or mobileNumbers)
  const contactEntries: string[] = [];
  if (deceased.contactPersons && deceased.contactPersons.length > 0) {
    deceased.contactPersons.forEach((cp) => {
      const num = normalizeIndianMobileNumber(cp.number) || cp.number?.trim();
      if (num) {
        if (cp.name && cp.name.trim()) {
          contactEntries.push(`${num} (${cp.name.trim()})`);
        } else {
          contactEntries.push(num);
        }
      }
    });
  } else if (deceased.mobileNumbers && deceased.mobileNumbers.length > 0) {
    deceased.mobileNumbers.forEach((m) => {
      const num = normalizeIndianMobileNumber(m) || m.trim();
      if (num) contactEntries.push(num);
    });
  }
  const hasBesnaContacts = cardType === 'besna' && contactEntries.length > 0;
  const hasQuote = !!(quoteText && quoteText.trim().length > 0);
  const validFamilyMembers = (family.members || []).filter(m => m.name && m.name.trim().length > 0);
  const hasFamilyMembers = validFamilyMembers.length > 0;
  const hasFooter = !!(
    family.showFooter &&
    ((family.familyName && family.familyName.trim().length > 0) ||
     (family.nativeVillage && family.nativeVillage.trim().length > 0))
  );

  // ── 6. Build height estimates and section descriptors ─────────────────────
  const photoFrameWidth = (template.placeholders.photo.size / 100) * W;
  const photoFrameHeight = photoFrameWidth * getPhotoFrameAspectRatio(
    template.placeholders.photo.shape,
    template.placeholders.photo.aspectRatio
  );
  const photoBlockHeight = hasPhoto ? photoFrameHeight + 20 : 0;

  const headerFontSize = effectiveFontSizes.heading;
  const nameFontSize = effectiveFontSizes.name;
  const datesFontSize = effectiveFontSizes.dates;
  const quoteFontSize = effectiveFontSizes.quote;
  const footerBannerHeight = 46;

  // Calculate Family layout using Swargwasi engine
  const familyLayoutStyle = family.layoutStyle ?? 'swargwasi-top';
  const familyColCount = family.userColumns ?? 2;
  const familyAlign = family.userAlignment ?? 'center';

  const familyLayoutResult = calculateSwargwasiLayout(validFamilyMembers, {
    layout: familyLayoutStyle,
    columns: familyColCount,
    alignment: familyAlign,
    fontSizeDelta: (family.fontSizeDelta ?? 0) + (options.fontSizeAdjustments?.family ?? 0),
    lineSpacing: family.lineSpacing,
    columnSpacing: family.columnSpacing,
    topBottomSpacing: family.topBottomSpacing,
    baseFontSize: template.placeholders.familyGridBlock.fontSize,
  });

  const familyHeaderGap = Math.max(8, Math.round((options.verticalSpacing ?? 28) * 0.5));
  const familyBlockHeight = hasFamilyMembers
    ? estimateFamilyBlockHeight(familyLayoutResult, familyLayoutStyle, familyHeaderGap)
    : 0;
  const motif = template.theme.motif === 'diya' && deceased.includeDiya !== true
    ? 'none'
    : template.theme.motif;
  const motifHeight = motif !== 'none' ? 48 : 0;

  // Format-adaptive vertical spacing (Default: 28px)
  const formatFactor = H / 1350;
  const requestedGap = Math.max(0, Math.round((options.verticalSpacing ?? 28) * formatFactor));

  // ── 7. Build sections array ───────────────────────────────────────────────
  const sections: FlowSection[] = [
    // ── A. Main Heading (Always visible)
    {
      id: 'header',
      estimatedHeight: headerFontSize * 2.4 + 26,
      isVisible: true,
      renderFn: (y) => {
        const headerStyle = template.placeholders.header;
        const defaultHeading = cardType === 'shradhanjali' ? 'ભાવપૂર્ણ શ્રદ્ધાંજલિ' : 'પ્રાર્થના સભા / બેસણું';
        const headingText = (deceased.heading && deceased.heading.trim().length > 0) ? deceased.heading.trim() : defaultHeading;
        const maxHeadingWidth = W * Math.min(0.9, headerStyle.width / 100);
        let fittedFontSize = effectiveFontSizes.heading;
        ctx.save();
        ctx.fillStyle = headerStyle.color;
        ctx.font = `${headerStyle.fontWeight || 'bold'} ${fittedFontSize}px "Noto Sans Gujarati", sans-serif`;
        while (ctx.measureText(headingText).width > maxHeadingWidth && fittedFontSize > 14) {
          fittedFontSize -= 1;
          ctx.font = `${headerStyle.fontWeight || 'bold'} ${fittedFontSize}px "Noto Sans Gujarati", sans-serif`;
        }
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';

        // Visual Priority: draw background halo behind header text so any border/halo underneath never obscures the text
        ctx.save();
        ctx.strokeStyle = template.theme.bgColor || '#FFFFFF';
        ctx.lineWidth = 7;
        ctx.lineJoin = 'round';
        ctx.miterLimit = 2;
        drawWrappedText(
          ctx,
          headingText,
          W / 2,
          y + fittedFontSize,
          maxHeadingWidth,
          fittedFontSize * 1.25,
          'center',
          true
        );
        ctx.restore();

        const headerBottom = drawWrappedText(
          ctx,
          headingText,
          W / 2,
          y + fittedFontSize,
          maxHeadingWidth,
          fittedFontSize * 1.25,
          'center'
        );

        // Decorative divider line below header with central motif diamond
        const dividerY = headerBottom + 6;
        ctx.strokeStyle = template.theme.accentColor;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(W * 0.28, dividerY);
        ctx.lineTo(W * 0.72, dividerY);
        ctx.stroke();

        ctx.fillStyle = template.theme.accentColor;
        ctx.save();
        ctx.translate(W / 2, dividerY);
        ctx.rotate(Math.PI / 4);
        ctx.fillRect(-4.5, -4.5, 9, 9);
        ctx.restore();

        ctx.restore();
        return dividerY + 14;
      },
    },

    // ── B. Photo (ONLY if uploaded! Completely hides and collapses space if omitted)
    {
      id: 'photo',
      estimatedHeight: photoBlockHeight,
      isVisible: hasPhoto,
      renderFn: (y) => {
        if (!hasPhoto || !loadedPhoto) return y;
        const frame = template.placeholders.photo;
        const frameW = (frame.size / 100) * W;
        const frameH = frameW * getPhotoFrameAspectRatio(frame.shape, frame.aspectRatio);
        const cy = y + frameH / 2;
        const cx = W / 2;

        const adjustedFrame = { ...frame, x: 50, y: (cy / H) * 100 };
        drawPhotoFrame(ctx, loadedPhoto, photoFrameAsset, adjustedFrame, W, H, deceased);

        // Symmetrical Diya stands flanking the photograph on LEFT and RIGHT (Real Diya Assets or Procedural with Dissolve Effect)
        const diyaOffset = (options.diyaVerticalOffset ?? deceased.diyaVerticalOffset ?? 0);
        const diyaHOffset = (options.diyaHorizontalOffset ?? deceased.diyaHorizontalOffset ?? 0);
        const diyaScale = (options.diyaScale ?? deceased.diyaScale ?? 100) / 100;

        if (useRealDiyas && diyaStandAsset) {
          const standH = frameH * 0.90 * diyaScale;
          const standW = standH * (diyaStandAsset.width / diyaStandAsset.height);
          const spaceAvailable = (cx - frameW / 2) - W * 0.05;
          const standGap = Math.max(10, Math.min(26, (spaceAvailable - standW) / 2));
          const leftStandX = (cx - frameW / 2) - standW / 2 - standGap - diyaHOffset;
          const rightStandX = (cx + frameW / 2) + standW / 2 + standGap + diyaHOffset;
          const standY = cy + frameH / 2 - standH + diyaOffset;

          if (leftStandX - standW / 2 >= W * 0.035) {
            [leftStandX, rightStandX].forEach((standCenterX) => {
              const standLeft = standCenterX - standW / 2;
              const flameCenterY = standY + standH * 0.28;

              // 1. Dissolve Warm Aura / Ambient Radial Glow behind Diya
              const glowRadius = standW * 1.15;
              const glowGrad = ctx.createRadialGradient(
                standCenterX, flameCenterY, standW * 0.05,
                standCenterX, flameCenterY, glowRadius
              );
              glowGrad.addColorStop(0, 'rgba(255, 235, 160, 0.42)');
              glowGrad.addColorStop(0.35, 'rgba(250, 185, 65, 0.20)');
              glowGrad.addColorStop(0.75, 'rgba(240, 140, 30, 0.05)');
              glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');

              ctx.save();
              ctx.fillStyle = glowGrad;
              ctx.beginPath();
              ctx.arc(standCenterX, flameCenterY, glowRadius, 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();

              // 2. Soft blend shadow for realistic surface depth
              ctx.save();
              ctx.shadowColor = 'rgba(120, 80, 20, 0.28)';
              ctx.shadowBlur = 12;
              ctx.shadowOffsetY = 4;
              ctx.drawImage(diyaStandAsset, standLeft, standY, standW, standH);
              ctx.restore();

              // 3. Soft contact shadow at base for natural dissolve into surface
              const baseGrad = ctx.createRadialGradient(
                standCenterX, standY + standH, 2,
                standCenterX, standY + standH, standW * 0.45
              );
              baseGrad.addColorStop(0, 'rgba(90, 60, 20, 0.25)');
              baseGrad.addColorStop(1, 'rgba(90, 60, 20, 0)');
              ctx.save();
              ctx.fillStyle = baseGrad;
              ctx.beginPath();
              ctx.ellipse(standCenterX, standY + standH, standW * 0.45, 6, 0, 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();
            });
          }
        } else if (deceased.includeDiya) {
          // Procedural Diya placed flanking photo with vertical/horizontal offset, scale, and warm glow
          const spaceAvailable = (cx - frameW / 2) - W * 0.05;
          const leftDiyaX = (cx - frameW / 2) - spaceAvailable * 0.5 - diyaHOffset;
          const rightDiyaX = (cx + frameW / 2) + spaceAvailable * 0.5 + diyaHOffset;
          const diyaY = cy + frameH * 0.25 + diyaOffset;
          const proceduralScale = 0.55 * diyaScale;

          [leftDiyaX, rightDiyaX].forEach((diyaX) => {
            // Warm ambient glow
            const glowGrad = ctx.createRadialGradient(diyaX, diyaY, 4, diyaX, diyaY, 48 * diyaScale);
            glowGrad.addColorStop(0, 'rgba(255, 220, 130, 0.45)');
            glowGrad.addColorStop(0.5, 'rgba(245, 160, 40, 0.18)');
            glowGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.save();
            ctx.fillStyle = glowGrad;
            ctx.beginPath();
            ctx.arc(diyaX, diyaY, 48 * diyaScale, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            drawSacredDiya(ctx, diyaX, diyaY, 0.65 * diyaScale, template.theme.accentColor);
          });
        }

        return y + frameH + 20;
      },
    },

    // ── C. Deceased Person's Name (prominent and centered)
    {
      id: 'deceasedName',
      estimatedHeight: nameFontSize + 14,
      isVisible: hasDeceasedName,
      renderFn: (y) => {
        if (!hasDeceasedName) return y;
        const nameStyle = template.placeholders.deceasedName;
        ctx.save();
        ctx.fillStyle = nameStyle.color;
        ctx.font = `bold ${effectiveFontSizes.name}px "Noto Serif Gujarati", "Rasa", Georgia, serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';

        // Title handling: support "નામ : [Name]" or "[Title] [Name]"
        let displayName = deceased.name.trim();
        const title = (deceased.title || '').trim();
        if (title === 'નામ :') {
          displayName = `નામ : ${displayName}`;
        } else if (title && !displayName.startsWith(title)) {
          displayName = `${title} ${displayName}`;
        }

        ctx.fillText(displayName, W / 2, y + effectiveFontSizes.name);
        ctx.restore();
        return y + effectiveFontSizes.name + 14;
      },
    },

    // ── D. Dates and Event Details Block
    {
      id: 'datesBlock',
      estimatedHeight: (() => {
        let lines = 1; // date line always
        if (cardType === 'shradhanjali') {
          if (hasTithi) lines++;
          if (deceased.village && !hasFooter) lines++;
        } else {
          lines = 2; // "— બેસણું —" and date line
          if (deceased.deathDate) lines++;
          if (hasTithi) lines++;
          if (deceased.besnaVenue) lines++;
          if (deceased.village && !hasFooter) lines++;
        }
        return lines * (datesFontSize * 1.5) + 12;
      })(),
      isVisible: true,
      renderFn: (y) => {
        const datesStyle = template.placeholders.datesBlock;
        ctx.save();
        ctx.fillStyle = datesStyle.color;
        ctx.font = `500 ${effectiveFontSizes.dates}px "Noto Sans Gujarati", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';

        const lineH = effectiveFontSizes.dates * 1.5;
        let curY = y + effectiveFontSizes.dates;

        if (cardType === 'shradhanjali') {
          // Line 1: Death Date and Weekday e.g. "સ્વર્ગવાસ તા. : ૧૨/૧૧/૨૦૨૬ (ગુરુવાર)"
          const formattedDate = formatCardDate(deceased.deathDate, true);
          const weekdayStr = deceased.weekday ? `(${deceased.weekday})` : '';
          const fullDateLine = formattedDate
            ? `સ્વર્ગવાસ તા. : ${formattedDate} ${weekdayStr}`.trim()
            : '';

          if (fullDateLine) {
            ctx.fillText(fullDateLine, W / 2, curY);
            curY += lineH;
          }

          // Line 2: Optional Hindu Tithi (HIDE if empty!)
          if (hasTithi) {
            ctx.font = `500 ${effectiveFontSizes.tithi}px "Noto Sans Gujarati", sans-serif`;
            ctx.fillText(`તિથિ : ${tithiDisplay}`, W / 2, curY);
            curY += lineH;
            ctx.font = `500 ${effectiveFontSizes.dates}px "Noto Sans Gujarati", sans-serif`;
          }

          // Line 3: Village / Taluka if entered and not already in footer
          if (deceased.village && !hasFooter) {
            const villageText = deceased.talukaCity
              ? `ગામ : ${deceased.village}  (તા. ${deceased.talukaCity})`
              : `ગામ : ${deceased.village}`;
            ctx.font = `500 ${effectiveFontSizes.dates - 1}px "Noto Sans Gujarati", sans-serif`;
            ctx.fillText(villageText, W / 2, curY);
            curY += lineH;
          }
        } else {
          // Besna Card Details (Dedicated Gujarati Besna layout matching SS 7)
          // 1. Optional Death Announcement
          if (deceased.deathDate) {
            const formattedDeathDate = formatCardDate(deceased.deathDate, true);
            const deathWeekdayStr = deceased.weekday ? `(${deceased.weekday})` : '';
            ctx.font = `500 ${effectiveFontSizes.dates - 1}px "Noto Sans Gujarati", sans-serif`;
            ctx.fillText(`સ્વર્ગવાસ તા. : ${formattedDeathDate} ${deathWeekdayStr}`.trim(), W / 2, curY);
            curY += lineH * 1.05;
          }

          // 2. Bold Besna Heading: — બેસણું —
          ctx.font = `bold ${effectiveFontSizes.dates + 3}px "Noto Sans Gujarati", sans-serif`;
          ctx.fillStyle = template.theme.accentColor;
          ctx.fillText('— બેસણું —', W / 2, curY);
          curY += lineH * 1.1;

          // 3. Date, Weekday & Time Line
          ctx.font = `600 ${effectiveFontSizes.dates}px "Noto Sans Gujarati", sans-serif`;
          ctx.fillStyle = datesStyle.color;
          const formattedBesnaDate = formatCardDate(deceased.besnaDate || deceased.deathDate, true);
          const besnaWeekdayStr = deceased.besnaWeekday ? `(${deceased.besnaWeekday})` : '';
          const timeStr = deceased.besnaTime && deceased.besnaTime.trim() ? `  સમય : ${deceased.besnaTime.trim()}` : '';
          const besnaMainLine = `તા. ${formattedBesnaDate} ${besnaWeekdayStr} ના રોજ${timeStr} રાખેલ છે.`;
          curY = drawWrappedText(ctx, besnaMainLine, W / 2, curY, W * 0.88, lineH, 'center');

          // 4. Hindu Tithi (if entered)
          if (hasTithi) {
            ctx.font = `500 ${effectiveFontSizes.tithi}px "Noto Sans Gujarati", sans-serif`;
            ctx.fillText(`તિથિ : ${tithiDisplay}`, W / 2, curY);
            curY += lineH;
          }

          // 5. Besna Venue (સ્થળ)
          if (deceased.besnaVenue && deceased.besnaVenue.trim().length > 0) {
            ctx.font = `600 ${effectiveFontSizes.dates}px "Noto Sans Gujarati", sans-serif`;
            curY = drawWrappedText(ctx, `સ્થળ : ${deceased.besnaVenue.trim()}`, W / 2, curY, W * 0.88, lineH, 'center');
          }

          // 6. Village / City (if entered and not already in footer)
          if (deceased.village && !hasFooter) {
            ctx.font = `500 ${effectiveFontSizes.dates - 1}px "Noto Sans Gujarati", sans-serif`;
            const vText = deceased.talukaCity
              ? `ગામ : ${deceased.village}  (તા. ${deceased.talukaCity})`
              : `ગામ : ${deceased.village}`;
            ctx.fillText(vText, W / 2, curY);
            curY += lineH;
          }
        }

        ctx.restore();
        return curY + 6;
      },
    },

    // ── E. Gujarati Remembrance Quote (ONLY if quote entered! Hides completely if empty)
    {
      id: 'quote',
      estimatedHeight: quoteFontSize * 1.5 * 2.8 + 12,
      isVisible: hasQuote,
      renderFn: (y) => {
        if (!hasQuote) return y;
        const quoteStyle = template.placeholders.quoteBlock;
        ctx.save();
        ctx.fillStyle = quoteStyle.color;
        ctx.font = `italic 500 ${effectiveFontSizes.quote}px "Noto Serif Gujarati", "Rasa", serif`;

        const quoteMaxWidth = (quoteStyle.width / 100) * W;
        const cleanQuote = quoteText.trim();
        const displayQuote = (cleanQuote.startsWith('“') || cleanQuote.startsWith('"'))
          ? cleanQuote
          : `“${cleanQuote}”`;

        const finalY = drawWrappedText(
          ctx,
          displayQuote,
          W / 2,
          y + effectiveFontSizes.quote,
          quoteMaxWidth,
          effectiveFontSizes.quote * 1.45,
          'center'
        );
        ctx.restore();
        return finalY + 8;
      },
    },

    // ── F. Family Members Section (ONLY if members added! Supports Layout 1 & 2)
    {
      id: 'familyBlock',
      estimatedHeight: familyBlockHeight,
      isVisible: hasFamilyMembers,
      renderFn: (y) => {
        if (!hasFamilyMembers) return y;
        const familyBlock = template.placeholders.familyGridBlock;
        const containerW = (familyBlock.width / 100) * W;
        const startX = (W - containerW) / 2;

        ctx.save();
        let curY = y;

        // 1. Swargwasi Section (Heading 'લી.' displayed ONLY if family names exist!)
        if (hasFamilyMembers) {
          const liSize = Math.max(16, Math.round(familyLayoutResult.fontSize));
          ctx.fillStyle = template.theme.accentColor;
          ctx.font = `bold ${liSize}px "Noto Sans Gujarati", sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'alphabetic';
          ctx.fillText('લી.', W / 2, curY + liSize);
          curY += liSize + familyHeaderGap;
        }

        if (familyLayoutResult.hasSwargwasi) {
          ctx.fillStyle = familyBlock.color;
          ctx.font = `600 ${familyLayoutResult.fontSize}px "Noto Sans Gujarati", sans-serif`;

          if (familyLayoutStyle === 'swargwasi-top') {
            // Layout 1: Centered Swargwasi names stacked at top
            familyLayoutResult.swargwasiNames.forEach(name => {
              ctx.fillText(name, W / 2, curY + familyLayoutResult.fontSize);
              curY += familyLayoutResult.fontSize * familyLayoutResult.lineHeight;
            });
          } else {
            // Layout 2: Swargwasi names in horizontal columns
            const swCols = familyLayoutResult.swargwasiColumns;
            const swColW = containerW / swCols.length;
            let maxSwRows = 0;

            swCols.forEach((colItems, colIdx) => {
              const colCenterX = startX + colIdx * swColW + swColW / 2;
              colItems.forEach((name, rowIdx) => {
                const itemY = curY + (rowIdx + 1) * (familyLayoutResult.fontSize * familyLayoutResult.lineHeight);
                ctx.fillText(name, colCenterX, itemY);
              });
              if (colItems.length > maxSwRows) maxSwRows = colItems.length;
            });
            curY += maxSwRows * (familyLayoutResult.fontSize * familyLayoutResult.lineHeight) + 4;
          }

          // Subtle divider line between Swargwasi and Normal members if both exist
          if (familyLayoutResult.hasNormal) {
            curY += 6;
            ctx.strokeStyle = template.theme.accentColor;
            ctx.lineWidth = 1;
            ctx.globalAlpha = 0.45;
            ctx.beginPath();
            ctx.moveTo(W * 0.35, curY);
            ctx.lineTo(W * 0.65, curY);
            ctx.stroke();
            ctx.globalAlpha = 1;
            curY += 10;
          }
        }

        // 2. Normal Family Members in Columns
        if (familyLayoutResult.hasNormal) {
          const normCols = familyLayoutResult.normalColumns;
          const colW = containerW / normCols.length;

          ctx.font = `500 ${familyLayoutResult.fontSize}px "Noto Sans Gujarati", sans-serif`;
          ctx.fillStyle = familyBlock.color;

          let maxNormalRows = 0;
          normCols.forEach((colItems, colIdx) => {
            let targetX = startX + colIdx * colW + colW / 2;
            let alignMode: CanvasTextAlign = 'center';

            if (familyAlign === 'left') {
              targetX = startX + colIdx * colW + 10;
              alignMode = 'left';
            } else if (familyAlign === 'right') {
              targetX = startX + (colIdx + 1) * colW - 10;
              alignMode = 'right';
            }
            ctx.textAlign = alignMode;

            colItems.forEach((name, rowIdx) => {
              const itemY = curY + (rowIdx + 1) * (familyLayoutResult.fontSize * familyLayoutResult.lineHeight);
              ctx.fillText(name, targetX, itemY);
            });
            if (colItems.length > maxNormalRows) maxNormalRows = colItems.length;
          });

          curY += maxNormalRows * (familyLayoutResult.fontSize * familyLayoutResult.lineHeight);
        }

        ctx.restore();
        return curY + 10;
      },
    },

    // ── Besna Contacts Block (Dedicated for Besna at the bottom, matching SS 7, strictly WITHOUT 'વધુ માહિતી માટે સંપર્ક:')
    {
      id: 'besnaContacts',
      estimatedHeight: hasBesnaContacts ? Math.ceil(contactEntries.length / 3) * (datesFontSize * 1.35) + 8 : 0,
      isVisible: hasBesnaContacts,
      renderFn: (y) => {
        if (!hasBesnaContacts) return y;
        ctx.save();
        ctx.fillStyle = template.placeholders.datesBlock.color;
        ctx.font = `600 ${Math.max(14, effectiveFontSizes.dates - 2)}px "Noto Sans Gujarati", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';

        const lineH = (effectiveFontSizes.dates - 2) * 1.45;
        let curY = y + Math.max(14, effectiveFontSizes.dates - 2);

        // Render contacts: e.g. "મો. 9558472154 (ધીરજભાઈ)   |   મો. 9825012345 (રણછોડભાઈ)"
        for (let i = 0; i < contactEntries.length; i += 3) {
          const slice = contactEntries.slice(i, i + 3);
          const lineStr = `મો. ${slice.join('   |   મો. ')}`;
          curY = drawWrappedText(ctx, lineStr, W / 2, curY, W * 0.88, lineH, 'center');
        }

        ctx.restore();
        return curY + 6;
      },
    },

    // ── G. Footer Banner (ONLY if enabled AND family name or village is provided!)
    {
      id: 'footer',
      estimatedHeight: footerBannerHeight + 10,
      isVisible: hasFooter,
      renderFn: (y) => {
        if (!hasFooter) return y;
        const footerStyle = template.placeholders.footerBlock;
        const bannerH = footerBannerHeight;
        const bannerY = y;

        ctx.save();
        // Decorative banner background
        ctx.fillStyle = template.theme.accentColor;
        ctx.fillRect(W * 0.05, bannerY, W * 0.9, bannerH);

        // Banner inner white border
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(W * 0.05 + 3, bannerY + 3, W * 0.9 - 6, bannerH - 6);

        // Banner Text
        ctx.fillStyle = footerStyle.color;
        ctx.font = `bold ${effectiveFontSizes.footer}px "Noto Sans Gujarati", sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const fName = (family.familyName || '').trim();
        const vName = (family.nativeVillage || '').trim();

        let familyBannerText = '';
        if (fName && vName) {
          familyBannerText = `॥ સમસ્ત ${fName} પરિવાર (${vName}) ॥`;
        } else if (fName) {
          familyBannerText = `॥ સમસ્ત ${fName} પરિવાર ॥`;
        } else if (vName) {
          familyBannerText = `॥ સમસ્ત પરિવાર (${vName}) ॥`;
        }

        ctx.fillText(familyBannerText, W / 2, bannerY + bannerH / 2);
        ctx.restore();
        return bannerY + bannerH + 10;
      },
    },
  ];

  // ── 8. Vertical Centering and Dynamic Spacing Calculation ─────────────────
  const visibleSections = sections.filter(s => s.isVisible);
  const sectionHeights = visibleSections.map((section) => section.estimatedHeight);
  const contentHeight = sectionHeights.reduce((sum, height) => sum + height, 0);

  const topOffset = Math.max(motifHeight + H * 0.045, H * 0.078);
  const hasBottomDecors = decors.some((d) =>
    ['agarbatti', 'diya', 'diya-corners', 'marigold-corners', 'white-flowers-bottom', 'rose-petals'].includes(d)
  ) || deceased.includeDiya || deceased.includeFlowers;
  const bottomMargin = hasBottomDecors ? H * 0.12 : H * 0.04;
  const availableHeight = H - topOffset - bottomMargin;
  const gap = calculateSectionGap(sectionHeights, availableHeight, requestedGap);
  const fittedContentHeight =
    contentHeight +
    Math.max(0, visibleSections.length - 1) * gap;

  // Mathematically accurate vertical centering
  const startY = topOffset + Math.max(0, (availableHeight - fittedContentHeight) / 2);

  // ── 9. Draw Sacred Motif at Top ───────────────────────────────────────────
  drawMotif(ctx, motif, W / 2, H * 0.045, template.theme.accentColor);

  // ── 10. Render visible sections in vertical sequence ──────────────────────
  let currentY = startY;
  for (let i = 0; i < visibleSections.length; i++) {
    const section = visibleSections[i];
    const nextY = section.renderFn(currentY);
    currentY = nextY + (i < visibleSections.length - 1 ? gap : 0);
  }

  // ── 11. Subtle Watermark Branding ─────────────────────────────────────────
  if (options.showBranding !== false) {
    const watermarkText = 'By અડોણી કાયા';
    const watermarkFontSize = 14;
    const paddingX = 8;
    const paddingY = 5;
    const blurPadding = 6;

    ctx.save();
    ctx.globalAlpha = 1;
    ctx.font = `600 ${watermarkFontSize}px "Noto Sans Gujarati", "Poppins", sans-serif`;
    const badgeWidth = ctx.measureText(watermarkText).width + paddingX * 2;
    const badgeHeight = watermarkFontSize + paddingY * 2;
    const badgeRight = W * 0.96;
    const badgeBottom = H * 0.985;
    const badgeLeft = badgeRight - badgeWidth;
    const badgeTop = badgeBottom - badgeHeight;

    const blurredBackground = document.createElement('canvas');
    blurredBackground.width = Math.ceil((badgeWidth + blurPadding * 2) * scale);
    blurredBackground.height = Math.ceil((badgeHeight + blurPadding * 2) * scale);
    const blurredContext = blurredBackground.getContext('2d');
    if (blurredContext) {
      blurredContext.filter = `blur(${4 * scale}px)`;
      blurredContext.drawImage(
        canvas,
        (badgeLeft - blurPadding) * scale,
        (badgeTop - blurPadding) * scale,
        blurredBackground.width,
        blurredBackground.height,
        0,
        0,
        blurredBackground.width,
        blurredBackground.height
      );
      ctx.drawImage(
        blurredBackground,
        badgeLeft - blurPadding,
        badgeTop - blurPadding,
        blurredBackground.width / scale,
        blurredBackground.height / scale
      );
    }

    const radius = 7;
    ctx.beginPath();
    ctx.moveTo(badgeLeft + radius, badgeTop);
    ctx.lineTo(badgeRight - radius, badgeTop);
    ctx.quadraticCurveTo(badgeRight, badgeTop, badgeRight, badgeTop + radius);
    ctx.lineTo(badgeRight, badgeBottom - radius);
    ctx.quadraticCurveTo(badgeRight, badgeBottom, badgeRight - radius, badgeBottom);
    ctx.lineTo(badgeLeft + radius, badgeBottom);
    ctx.quadraticCurveTo(badgeLeft, badgeBottom, badgeLeft, badgeBottom - radius);
    ctx.lineTo(badgeLeft, badgeTop + radius);
    ctx.quadraticCurveTo(badgeLeft, badgeTop, badgeLeft + radius, badgeTop);
    ctx.closePath();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.18)';
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 1;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.86)';
    ctx.fill();
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    ctx.strokeStyle = 'rgba(31, 41, 55, 0.22)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#111827';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(watermarkText, badgeLeft + badgeWidth / 2, badgeTop + badgeHeight / 2);
    ctx.restore();
  }

  ctx.restore();
}
