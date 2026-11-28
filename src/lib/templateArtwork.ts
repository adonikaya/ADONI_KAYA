// Original Procedural Artwork & Architectural Layer for ADONI KAYA (અડોણી કાયા)
// Renders distinct, culturally respectful Gujarati memorial card decorations
// without stretching across 4:5, 9:16, 2:3, and A4 aspect ratios.

import { CardTemplate } from './types';

function drawJasmineBlossom(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  rotation: number = 0
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);

  // Subtle drop shadow for white petals on ivory
  ctx.shadowColor = 'rgba(90, 82, 65, 0.16)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetY = 1.5;

  // 5 slender jasmine petals
  for (let i = 0; i < 5; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI * 2) / 5);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(r * 0.42, -r * 0.45, 0, -r);
    ctx.quadraticCurveTo(-r * 0.42, -r * 0.45, 0, 0);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.strokeStyle = 'rgba(180, 170, 148, 0.35)';
    ctx.lineWidth = 0.7;
    ctx.stroke();
    ctx.restore();
  }

  ctx.shadowBlur = 0;
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.18, 0, Math.PI * 2);
  ctx.fillStyle = '#EAB308';
  ctx.fill();
  ctx.restore();
}

function drawLeaf(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  len: number,
  wid: number,
  angle: number,
  color: string,
  alpha: number = 0.72
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.globalAlpha = alpha;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(len * 0.5, -wid, len, 0);
  ctx.quadraticCurveTo(len * 0.5, wid, 0, 0);
  ctx.fillStyle = color;
  ctx.fill();

  // Central vein
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(len * 0.85, 0);
  ctx.strokeStyle = 'rgba(255,255,255,0.35)';
  ctx.lineWidth = 0.8;
  ctx.stroke();
  ctx.restore();
}

function drawSoftRose(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  outerColor: string,
  innerColor: string,
  centerColor: string
) {
  ctx.save();
  ctx.translate(x, y);

  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    ctx.beginPath();
    ctx.ellipse(Math.cos(a) * r * 0.48, Math.sin(a) * r * 0.48, r * 0.55, r * 0.4, a, 0, Math.PI * 2);
    ctx.fillStyle = outerColor;
    ctx.fill();
  }
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + 0.3;
    ctx.beginPath();
    ctx.ellipse(Math.cos(a) * r * 0.25, Math.sin(a) * r * 0.25, r * 0.35, r * 0.26, a, 0, Math.PI * 2);
    ctx.fillStyle = innerColor;
    ctx.fill();
  }
  ctx.beginPath();
  ctx.arc(0, 0, r * 0.2, 0, Math.PI * 2);
  ctx.fillStyle = centerColor;
  ctx.fill();
  ctx.restore();
}

function drawWhiteLily(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  rotation: number
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(rotation);
  ctx.shadowColor = 'rgba(80, 75, 60, 0.14)';
  ctx.shadowBlur = 5;

  for (let i = 0; i < 6; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI * 2) / 6);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(r * 0.36, -r * 0.35, r * 0.3, -r * 0.85, 0, -r * 1.1);
    ctx.bezierCurveTo(-r * 0.3, -r * 0.85, -r * 0.36, -r * 0.35, 0, 0);
    ctx.fillStyle = i % 2 === 0 ? '#FFFFFF' : '#FAF8F2';
    ctx.fill();
    ctx.strokeStyle = 'rgba(180, 175, 155, 0.35)';
    ctx.lineWidth = 0.7;
    ctx.stroke();
    ctx.restore();
  }

  ctx.shadowBlur = 0;
  // Stamens
  for (let i = 0; i < 3; i++) {
    const a = -Math.PI / 2 + (i - 1) * 0.35;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(a) * r * 0.42, Math.sin(a) * r * 0.42);
    ctx.strokeStyle = '#C9A227';
    ctx.lineWidth = 1.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(Math.cos(a) * r * 0.44, Math.sin(a) * r * 0.44, 2, 0, Math.PI * 2);
    ctx.fillStyle = '#B45309';
    ctx.fill();
  }
  ctx.restore();
}

function drawMughalArchPath(
  ctx: CanvasRenderingContext2D,
  left: number,
  right: number,
  top: number,
  bottom: number,
  shoulderY: number
) {
  const cx = (left + right) / 2;
  const w = right - left;
  ctx.beginPath();
  ctx.moveTo(left, bottom);
  ctx.lineTo(left, shoulderY);
  // Cusped Mughal arch left curve
  ctx.bezierCurveTo(
    left,
    shoulderY - w * 0.14,
    cx - w * 0.16,
    top + w * 0.12,
    cx,
    top
  );
  // Cusped Mughal arch right curve
  ctx.bezierCurveTo(
    cx + w * 0.16,
    top + w * 0.12,
    right,
    shoulderY - w * 0.14,
    right,
    shoulderY
  );
  ctx.lineTo(right, bottom);
}

/**
 * Draws background/border/architectural/botanical artwork specific to the 25 new designs.
 * Rendered after the base border and before text/photo sections.
 */
export function drawTemplateArtwork(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  theme: CardTemplate['theme']
) {
  const style = theme.artworkStyle;
  if (!style) return;

  const accent = theme.accentColor;
  const unit = Math.min(W, H);

  ctx.save();

  switch (style) {
    case 'jasmine-sides': {
      // Left and right white jasmine arrangements along upper-middle margins
      [-1, 1].forEach((side) => {
        const baseX = side < 0 ? W * 0.085 : W * 0.915;
        const dir = side < 0 ? 1 : -1;
        // Soft curved stem
        ctx.beginPath();
        ctx.moveTo(baseX, H * 0.14);
        ctx.quadraticCurveTo(baseX + dir * W * 0.025, H * 0.34, baseX - dir * W * 0.01, H * 0.56);
        ctx.strokeStyle = 'rgba(92, 122, 86, 0.48)';
        ctx.lineWidth = 1.6;
        ctx.stroke();

        const points = [
          { y: 0.17, r: 15, lAng: -0.5 },
          { y: 0.25, r: 18, lAng: 0.3 },
          { y: 0.34, r: 14, lAng: -0.4 },
          { y: 0.43, r: 17, lAng: 0.4 },
          { y: 0.52, r: 12, lAng: -0.3 },
        ];
        points.forEach((p, idx) => {
          const px = baseX + dir * (idx % 2 === 0 ? 6 : 16);
          const py = H * p.y;
          drawLeaf(ctx, px, py, 24, 7, side < 0 ? p.lAng : Math.PI - p.lAng, '#6B8E62', 0.55);
          drawJasmineBlossom(ctx, px, py, p.r, idx * 0.5);
        });
      });
      break;
    }

    case 'roses-opposite': {
      // Top-left & bottom-right blush rose arrangements
      const corners = [
        { x: W * 0.1, y: H * 0.08, sx: 1, sy: 1 },
        { x: W * 0.9, y: H * 0.92, sx: -1, sy: -1 },
      ];
      corners.forEach(({ x, y, sx, sy }) => {
        drawLeaf(ctx, x, y, 36, 10, sx > 0 ? 0.5 : -2.6, '#7C9473', 0.55);
        drawLeaf(ctx, x, y, 32, 9, sy > 0 ? 1.1 : -2.0, '#8FA686', 0.5);
        drawSoftRose(ctx, x, y, 22, '#E5A9B4', '#F2C6CE', '#FFF5F7');
        drawSoftRose(ctx, x + sx * 28, y + sy * 8, 15, '#DF9AA7', '#F4CFD6', '#FFF5F7');
        drawSoftRose(ctx, x + sx * 8, y + sy * 28, 14, '#DF9AA7', '#F4CFD6', '#FFF5F7');
      });
      break;
    }

    case 'lilies-botanical': {
      // Subtle white lilies at bottom corners & delicate gold top/bottom rules
      ctx.strokeStyle = accent;
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(W * 0.12, H * 0.055);
      ctx.lineTo(W * 0.88, H * 0.055);
      ctx.moveTo(W * 0.12, H * 0.945);
      ctx.lineTo(W * 0.88, H * 0.945);
      ctx.stroke();
      ctx.globalAlpha = 1;

      [-1, 1].forEach((side) => {
        const lx = side < 0 ? W * 0.11 : W * 0.89;
        const ly = H * 0.90;
        drawLeaf(ctx, lx, ly, 42, 11, side < 0 ? -0.9 : -2.2, '#5F7F5E', 0.6);
        drawLeaf(ctx, lx, ly, 36, 9, side < 0 ? -0.35 : -2.8, '#7A9978', 0.5);
        drawWhiteLily(ctx, lx, ly, 20, side < 0 ? 0.3 : -0.3);
        drawWhiteLily(ctx, lx + (side < 0 ? 26 : -26), ly + 14, 14, side < 0 ? 0.6 : -0.6);
      });
      break;
    }

    case 'hanging-florals': {
      // Hanging white blossoms & vines from top corners
      [-1, 1].forEach((side) => {
        const startX = side < 0 ? W * 0.09 : W * 0.91;
        const dir = side < 0 ? 1 : -1;
        [0, 1, 2].forEach((strand) => {
          const sx = startX + dir * strand * W * 0.052;
          const strandLen = H * (0.17 - strand * 0.035);
          ctx.beginPath();
          ctx.moveTo(sx, H * 0.035);
          ctx.quadraticCurveTo(sx + dir * 8, H * 0.035 + strandLen * 0.5, sx, H * 0.035 + strandLen);
          ctx.strokeStyle = 'rgba(110, 128, 95, 0.45)';
          ctx.lineWidth = 1.2;
          ctx.stroke();

          const steps = 3 - Math.min(1, strand);
          for (let k = 1; k <= steps; k++) {
            const fy = H * 0.035 + (strandLen * k) / (steps + 0.3);
            drawLeaf(ctx, sx, fy, 16, 5, side < 0 ? 0.8 : 2.3, '#7C9473', 0.5);
            drawJasmineBlossom(ctx, sx, fy, 11 - strand, k);
          }
        });
      });
      break;
    }

    case 'lower-garland': {
      // Subtle top & bottom corner accents; main garland hugs photo via drawPhotoSurroundingArtwork
      ctx.strokeStyle = accent;
      ctx.globalAlpha = 0.28;
      ctx.lineWidth = 1;
      ctx.strokeRect(W * 0.055, H * 0.045, W * 0.89, H * 0.91);
      break;
    }

    case 'mughal-arch': {
      // Grand symmetrical Mughal arch framing the card interior
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2.2;
      ctx.globalAlpha = 0.72;
      drawMughalArchPath(ctx, W * 0.065, W * 0.935, H * 0.048, H * 0.945, H * 0.21);
      ctx.stroke();

      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.35;
      drawMughalArchPath(ctx, W * 0.08, W * 0.92, H * 0.062, H * 0.932, H * 0.22);
      ctx.stroke();

      // Top finial ornament
      ctx.globalAlpha = 0.75;
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(W / 2, H * 0.042, 4, 0, Math.PI * 2);
      ctx.fill();
      break;
    }

    case 'palace-frame': {
      // Traditional palace jharokha scalloped top + corner brackets
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.8;
      ctx.globalAlpha = 0.65;
      const m = W * 0.055;
      ctx.strokeRect(m, H * 0.045, W - m * 2, H * 0.91);
      ctx.lineWidth = 0.9;
      ctx.globalAlpha = 0.35;
      ctx.strokeRect(m + 8, H * 0.045 + 8, W - (m + 8) * 2, H * 0.91 - 16);

      // Scalloped palace arch at top center
      ctx.globalAlpha = 0.55;
      ctx.lineWidth = 1.5;
      const archCount = 7;
      const archSpan = W * 0.56;
      const startX = (W - archSpan) / 2;
      const step = archSpan / archCount;
      ctx.beginPath();
      for (let i = 0; i < archCount; i++) {
        const ax = startX + i * step;
        ctx.arc(ax + step / 2, H * 0.055, step / 2, 0, Math.PI, false);
      }
      ctx.stroke();
      break;
    }

    case 'carved-pillars': {
      // Architectural carved pillars on left and right
      [-1, 1].forEach((side) => {
        const px = side < 0 ? W * 0.068 : W * 0.932;
        const pw = W * 0.032;
        const topY = H * 0.11;
        const botY = H * 0.89;

        ctx.save();
        ctx.strokeStyle = accent;
        ctx.fillStyle = accent;
        ctx.globalAlpha = 0.32;
        ctx.lineWidth = 1.4;

        // Pillar shaft
        ctx.strokeRect(px - pw / 2, topY, pw, botY - topY);
        // Fluting lines
        ctx.globalAlpha = 0.2;
        ctx.beginPath();
        ctx.moveTo(px - pw * 0.18, topY + 14);
        ctx.lineTo(px - pw * 0.18, botY - 14);
        ctx.moveTo(px + pw * 0.18, topY + 14);
        ctx.lineTo(px + pw * 0.18, botY - 14);
        ctx.stroke();

        // Capital & Base
        ctx.globalAlpha = 0.45;
        ctx.fillRect(px - pw * 0.85, topY - 10, pw * 1.7, 10);
        ctx.fillRect(px - pw * 0.85, botY, pw * 1.7, 10);
        ctx.restore();
      });
      break;
    }

    case 'parchment-scroll': {
      // Subtle parchment radial vignette + delicate corner scrollwork
      const vig = ctx.createRadialGradient(W / 2, H / 2, unit * 0.18, W / 2, H / 2, unit * 0.78);
      vig.addColorStop(0, 'rgba(255, 252, 244, 0)');
      vig.addColorStop(1, 'rgba(138, 104, 62, 0.13)');
      ctx.fillStyle = vig;
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = accent;
      ctx.globalAlpha = 0.45;
      ctx.lineWidth = 1.2;
      ctx.strokeRect(W * 0.05, H * 0.04, W * 0.9, H * 0.92);
      break;
    }

    case 'temple-arch': {
      // Subtle temple shikhara-inspired stepped top arch
      ctx.strokeStyle = accent;
      ctx.globalAlpha = 0.5;
      ctx.lineWidth = 1.6;
      const cx = W / 2;
      ctx.beginPath();
      ctx.moveTo(W * 0.08, H * 0.16);
      ctx.lineTo(W * 0.14, H * 0.10);
      ctx.lineTo(W * 0.25, H * 0.10);
      ctx.quadraticCurveTo(cx, H * 0.03, W * 0.75, H * 0.10);
      ctx.lineTo(W * 0.86, H * 0.10);
      ctx.lineTo(W * 0.92, H * 0.16);
      ctx.stroke();
      break;
    }

    case 'sage-botanical': {
      // Subtle translucent leaf silhouettes in background + cream content panel
      const leaves = [
        { x: W * 0.1, y: H * 0.16, a: 0.4, l: 75 },
        { x: W * 0.14, y: H * 0.22, a: 0.8, l: 60 },
        { x: W * 0.9, y: H * 0.16, a: 2.7, l: 75 },
        { x: W * 0.86, y: H * 0.22, a: 2.3, l: 60 },
      ];
      leaves.forEach((lf) => drawLeaf(ctx, lf.x, lf.y, lf.l, 22, lf.a, '#4B6B53', 0.2));

      // Translucent cream content panel below photo area
      const panelColor = theme.panelColor || 'rgba(255, 252, 245, 0.86)';
      ctx.fillStyle = panelColor;
      ctx.strokeStyle = 'rgba(165, 140, 92, 0.4)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.roundRect(W * 0.065, H * 0.42, W * 0.87, H * 0.51, 18);
      ctx.fill();
      ctx.stroke();
      break;
    }

    case 'olive-asymmetric': {
      // Asymmetric botanical branch on right margin & thin gold vertical rule on left
      ctx.strokeStyle = accent;
      ctx.globalAlpha = 0.5;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(W * 0.08, H * 0.08);
      ctx.lineTo(W * 0.08, H * 0.92);
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Olive sprig on top-right
      ctx.beginPath();
      ctx.moveTo(W * 0.94, H * 0.06);
      ctx.quadraticCurveTo(W * 0.84, H * 0.14, W * 0.81, H * 0.25);
      ctx.strokeStyle = 'rgba(197, 175, 118, 0.65)';
      ctx.lineWidth = 1.6;
      ctx.stroke();
      [0.09, 0.14, 0.19, 0.23].forEach((py, idx) => {
        drawLeaf(ctx, W * (0.91 - idx * 0.025), H * py, 26, 8, idx % 2 === 0 ? 2.4 : 3.2, '#7E8C54', 0.65);
      });
      break;
    }

    case 'eucalyptus-corners': {
      // Soft eucalyptus sprigs in top-right and bottom-left corners
      const sprig = (sx: number, sy: number, dx: number, dy: number) => {
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.quadraticCurveTo(sx + dx * 60, sy + dy * 40, sx + dx * 110, sy + dy * 110);
        ctx.strokeStyle = 'rgba(104, 130, 118, 0.55)';
        ctx.lineWidth = 1.4;
        ctx.stroke();
        for (let i = 1; i <= 5; i++) {
          const lx = sx + dx * i * 20;
          const ly = sy + dy * i * 20;
          ctx.beginPath();
          ctx.ellipse(lx + dx * 8, ly - dy * 6, 11, 7, dx * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(128, 156, 143, 0.45)';
          ctx.fill();
        }
      };
      sprig(W * 0.93, H * 0.05, -1, 1);
      sprig(W * 0.07, H * 0.95, 1, -1);
      break;
    }

    case 'forest-panel': {
      // Deep forest-green card with subtle gold botanical corners & cream inner panel
      const panelColor = theme.panelColor || '#FBF7EE';
      ctx.fillStyle = panelColor;
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(W * 0.07, H * 0.06, W * 0.86, H * 0.88, 14);
      ctx.fill();
      ctx.stroke();

      // Inner hairline gold frame
      ctx.lineWidth = 0.8;
      ctx.globalAlpha = 0.55;
      ctx.beginPath();
      ctx.roundRect(W * 0.082, H * 0.072, W * 0.836, H * 0.856, 10);
      ctx.stroke();
      break;
    }

    case 'floral-crescent': {
      // Clean subtle frame; main crescent hugs photo via drawPhotoSurroundingArtwork
      ctx.strokeStyle = accent;
      ctx.globalAlpha = 0.3;
      ctx.lineWidth = 1;
      ctx.strokeRect(W * 0.06, H * 0.05, W * 0.88, H * 0.9);
      break;
    }

    case 'minimal-clean': {
      // Hairline border only
      ctx.strokeStyle = accent;
      ctx.globalAlpha = 0.35;
      ctx.lineWidth = 1;
      ctx.strokeRect(W * 0.055, H * 0.045, W * 0.89, H * 0.91);
      break;
    }

    case 'modern-split': {
      // Subtle tinted left column accent for split layout
      ctx.fillStyle = accent;
      ctx.globalAlpha = 0.06;
      ctx.fillRect(W * 0.04, H * 0.04, W * 0.40, H * 0.92);
      ctx.globalAlpha = 0.35;
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1;
      ctx.strokeRect(W * 0.04, H * 0.04, W * 0.92, H * 0.92);
      break;
    }

    case 'editorial-lines': {
      // Magazine-inspired crisp top & bottom double rules
      ctx.strokeStyle = accent;
      ctx.globalAlpha = 0.65;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(W * 0.07, H * 0.045);
      ctx.lineTo(W * 0.93, H * 0.045);
      ctx.moveTo(W * 0.07, H * 0.955);
      ctx.lineTo(W * 0.93, H * 0.955);
      ctx.stroke();
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(W * 0.07, H * 0.052);
      ctx.lineTo(W * 0.93, H * 0.052);
      ctx.moveTo(W * 0.07, H * 0.948);
      ctx.lineTo(W * 0.93, H * 0.948);
      ctx.stroke();
      break;
    }

    case 'beige-geometric': {
      // Subtle paper texture dots + crisp geometric corner brackets
      ctx.fillStyle = accent;
      ctx.globalAlpha = 0.04;
      for (let gx = W * 0.08; gx < W * 0.92; gx += 42) {
        for (let gy = H * 0.08; gy < H * 0.92; gy += 42) {
          ctx.fillRect(gx, gy, 1.5, 1.5);
        }
      }
      ctx.globalAlpha = 0.55;
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.4;
      const m = W * 0.06;
      const l = W * 0.09;
      [[m, m, 1, 1], [W - m, m, -1, 1], [m, H - m, 1, -1], [W - m, H - m, -1, -1]].forEach(([x, y, dx, dy]) => {
        ctx.beginPath();
        ctx.moveTo(x + dx * l, y);
        ctx.lineTo(x, y);
        ctx.lineTo(x, y + dy * l);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + dx * l * 0.6, y + dy * 10);
        ctx.lineTo(x + dx * 10, y + dy * 10);
        ctx.lineTo(x + dx * 10, y + dy * l * 0.6);
        ctx.stroke();
      });
      break;
    }

    case 'monochrome-heritage': {
      // Crisp charcoal/brown double ornamental border
      ctx.strokeStyle = accent;
      ctx.lineWidth = 2.2;
      ctx.globalAlpha = 0.75;
      ctx.strokeRect(W * 0.045, H * 0.038, W * 0.91, H * 0.924);
      ctx.lineWidth = 0.8;
      ctx.globalAlpha = 0.45;
      ctx.strokeRect(W * 0.058, H * 0.05, W * 0.884, H * 0.9);
      break;
    }

    case 'golden-floral-corners': {
      // Controlled golden floral corner flourishes
      const corners = [
        { x: W * 0.055, y: H * 0.045, sx: 1, sy: 1 },
        { x: W * 0.945, y: H * 0.045, sx: -1, sy: 1 },
        { x: W * 0.055, y: H * 0.955, sx: 1, sy: -1 },
        { x: W * 0.945, y: H * 0.955, sx: -1, sy: -1 },
      ];
      corners.forEach(({ x, y, sx, sy }) => {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(sx, sy);
        ctx.strokeStyle = accent;
        ctx.fillStyle = accent;
        ctx.globalAlpha = 0.6;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(0, 82);
        ctx.bezierCurveTo(6, 36, 36, 6, 82, 0);
        ctx.stroke();
        for (let p = 0; p < 4; p++) {
          const a = (p / 3) * (Math.PI / 2);
          ctx.beginPath();
          ctx.ellipse(Math.cos(a) * 26, Math.sin(a) * 26, 9, 4.5, a, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(14, 14, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      break;
    }

    case 'watercolour-floral': {
      // Soft layered translucent watercolour washes in muted blush, sage, sand
      const washes = [
        { x: W * 0.14, y: H * 0.14, r: unit * 0.22, color: 'rgba(225, 165, 175, 0.22)' },
        { x: W * 0.86, y: H * 0.16, r: unit * 0.20, color: 'rgba(148, 178, 152, 0.22)' },
        { x: W * 0.16, y: H * 0.86, r: unit * 0.21, color: 'rgba(148, 178, 152, 0.20)' },
        { x: W * 0.85, y: H * 0.84, r: unit * 0.24, color: 'rgba(225, 165, 175, 0.22)' },
      ];
      washes.forEach((w) => {
        const g = ctx.createRadialGradient(w.x, w.y, 4, w.x, w.y, w.r);
        g.addColorStop(0, w.color);
        g.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(w.x, w.y, w.r, 0, Math.PI * 2);
        ctx.fill();
      });
      // Delicate corner blooms
      drawSoftRose(ctx, W * 0.09, H * 0.08, 17, 'rgba(205, 130, 145, 0.55)', 'rgba(235, 185, 195, 0.65)', '#FFF5F7');
      drawSoftRose(ctx, W * 0.91, H * 0.92, 17, 'rgba(205, 130, 145, 0.55)', 'rgba(235, 185, 195, 0.65)', '#FFF5F7');
      break;
    }

    case 'classic-double': {
      // Two crisp borders with corner rosettes
      ctx.strokeStyle = accent;
      ctx.globalAlpha = 0.72;
      ctx.lineWidth = 2.4;
      ctx.strokeRect(W * 0.04, H * 0.032, W * 0.92, H * 0.936);
      ctx.lineWidth = 1.1;
      ctx.strokeRect(W * 0.056, H * 0.046, W * 0.888, H * 0.908);

      [[W * 0.056, H * 0.046], [W * 0.944, H * 0.046], [W * 0.056, H * 0.954], [W * 0.944, H * 0.954]].forEach(([rx, ry]) => {
        ctx.beginPath();
        ctx.arc(rx, ry, 6, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.fill();
      });
      break;
    }

    case 'arch-and-garden': {
      // Architectural arch + lower cream information panel + botanical sprigs
      const panelColor = theme.panelColor || 'rgba(255, 252, 246, 0.9)';
      ctx.fillStyle = panelColor;
      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.roundRect(W * 0.075, H * 0.44, W * 0.85, H * 0.49, 14);
      ctx.fill();
      ctx.stroke();

      ctx.strokeStyle = accent;
      ctx.lineWidth = 1.8;
      ctx.globalAlpha = 0.65;
      drawMughalArchPath(ctx, W * 0.14, W * 0.86, H * 0.045, H * 0.44, H * 0.18);
      ctx.stroke();

      // Botanical sprigs at arch base
      drawLeaf(ctx, W * 0.14, H * 0.43, 30, 9, -0.7, '#527359', 0.65);
      drawLeaf(ctx, W * 0.86, H * 0.43, 30, 9, -2.4, '#527359', 0.65);
      break;
    }

    case 'luxury-maroon-gold': {
      // Signature dark maroon + antique gold double border + inner subtle ivory hairline
      ctx.strokeStyle = accent;
      ctx.globalAlpha = 0.85;
      ctx.lineWidth = 2.5;
      ctx.strokeRect(W * 0.04, H * 0.032, W * 0.92, H * 0.936);

      ctx.strokeStyle = '#FFF7E8';
      ctx.globalAlpha = 0.25;
      ctx.lineWidth = 0.9;
      ctx.strokeRect(W * 0.056, H * 0.046, W * 0.888, H * 0.908);
      break;
    }
  }

  ctx.restore();
}

/**
 * Draws photo-hugging floral crescents or lower garlands around the bottom arc
 * of the photo frame without ever covering the face.
 */
export function drawPhotoSurroundingArtwork(
  ctx: CanvasRenderingContext2D,
  theme: CardTemplate['theme'],
  cx: number,
  cy: number,
  frameW: number,
  frameH: number
) {
  const style = theme.artworkStyle;
  if (style !== 'lower-garland' && style !== 'floral-crescent') return;

  ctx.save();
  const rx = frameW * 0.54;
  const ry = frameH * 0.54;

  // Lower half-arc from 20 deg to 160 deg (0 is right, PI/2 is bottom, PI is left)
  const steps = style === 'lower-garland' ? 11 : 13;
  for (let i = 0; i < steps; i++) {
    const t = i / (steps - 1);
    const angle = 0.15 * Math.PI + t * 0.7 * Math.PI;
    const fx = cx + Math.cos(angle) * rx;
    const fy = cy + Math.sin(angle) * ry;
    const distFromBottom = 1 - Math.abs(t - 0.5) * 2; // 1 at bottom center, 0 at ends

    if (i % 2 === 0) {
      drawLeaf(
        ctx,
        fx,
        fy,
        16 + distFromBottom * 8,
        5.5,
        angle + (t < 0.5 ? 0.5 : -0.5),
        style === 'lower-garland' ? '#6D8B62' : '#5F7F5E',
        0.65
      );
    }

    if (style === 'lower-garland') {
      drawJasmineBlossom(ctx, fx, fy, 7 + distFromBottom * 6, angle);
    } else {
      drawSoftRose(
        ctx,
        fx,
        fy,
        6 + distFromBottom * 6,
        '#D99B9B',
        '#EFC7C7',
        '#FFF8F6'
      );
    }
  }

  ctx.restore();
}
