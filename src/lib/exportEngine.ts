// High-Resolution Export Engine for ADONI KAYA (અડોણી કાયા)
// Exports to PNG, JPG, and PDF in all standard formats without watermarks or login
import { jsPDF } from 'jspdf';
import { CardTemplate, DeceasedDetails, FamilyDetails, AspectRatioFormat, FORMAT_DIMENSIONS } from './types';
import { FontSizeAdjustments, renderCardToCanvas } from './canvasRenderer';

export type ExportFormat = 'png' | 'jpg' | 'pdf';

export interface ExportCardOptions {
  template: CardTemplate;
  deceased: DeceasedDetails;
  quoteText: string;
  family: FamilyDetails;
  cardType: 'shradhanjali' | 'besna';
  aspectFormat: AspectRatioFormat;
  exportFormat: ExportFormat;
  fileName?: string;
  fontSizeAdjustments?: FontSizeAdjustments;
  verticalSpacing?: number;
  diyaVerticalOffset?: number;
  diyaHorizontalOffset?: number;
  diyaScale?: number;
  showBranding?: boolean;
}

/**
 * Triggers a browser download of a blob or data URL
 */
function downloadFile(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/**
 * Exports the card to PNG, JPG, or PDF in high resolution
 */
export async function exportCard(options: ExportCardOptions): Promise<void> {
  const {
    template,
    deceased,
    quoteText,
    family,
    cardType,
    aspectFormat,
    exportFormat,
    fileName: customFileName,
    fontSizeAdjustments,
    verticalSpacing,
    diyaVerticalOffset,
    diyaHorizontalOffset,
    diyaScale,
    showBranding,
  } = options;

  // Create an offscreen canvas
  const offscreenCanvas = document.createElement('canvas');

  // Use scale of 2.0 for pristine high-res mobile & print quality
  const renderScale = aspectFormat === 'A4' ? 2.5 : 2.0;

  await renderCardToCanvas(
    offscreenCanvas,
    template,
    deceased,
    quoteText,
    family,
    cardType,
    {
      selectedFormat: aspectFormat,
      scale: renderScale,
      fontSizeAdjustments,
      verticalSpacing,
      diyaVerticalOffset,
      diyaHorizontalOffset,
      diyaScale,
      showBranding,
    }
  );

  const cleanName = (deceased.name || 'Card').replace(/[^a-zA-Z0-9\u0A80-\u0AFF]/g, '_');
  const typeLabel = cardType === 'shradhanjali' ? 'Shradhanjali' : 'Besna';
  const defaultBaseName = `AdoniKaya_${typeLabel}_${cleanName}_${aspectFormat.replace(':', 'x')}`;
  const baseName = customFileName || defaultBaseName;

  if (exportFormat === 'png') {
    const blob = await canvasToBlob(offscreenCanvas, 'image/png');
    downloadFile(blob, `${baseName}.png`);
  } else if (exportFormat === 'jpg') {
    const blob = await canvasToBlob(offscreenCanvas, 'image/jpeg', 0.95);
    downloadFile(blob, `${baseName}.jpg`);
  } else if (exportFormat === 'pdf') {
    // Generate PDF
    const imgData = offscreenCanvas.toDataURL('image/jpeg', 0.95);
    const dims = FORMAT_DIMENSIONS[aspectFormat];

    // Determine PDF orientation and dimensions (in mm)
    let pdfWidthMm = 210;
    let pdfHeightMm = (dims.height / dims.width) * 210;

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [pdfWidthMm, pdfHeightMm],
    });

    pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidthMm, pdfHeightMm);
    await pdf.save(`${baseName}.pdf`, { returnPromise: true });
  }
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality?: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) {
        resolve(blob);
      } else {
        reject(new Error(`Unable to create ${mimeType} export.`));
      }
    }, mimeType, quality);
  });
}

