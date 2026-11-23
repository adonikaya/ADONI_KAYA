'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Crop, RotateCcw, RotateCw, ZoomIn, ZoomOut } from 'lucide-react';

interface PhotoCropDialogProps {
  source: string;
  onConfirm: (croppedPhoto: string) => void;
  onCancel: () => void;
}

const PREVIEW_SIZE = 320;
const OUTPUT_SIZE = 1024;

export const PhotoCropDialog: React.FC<PhotoCropDialogProps> = ({
  source,
  onConfirm,
  onCancel,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dragStart = useRef<{ x: number; y: number; panX: number; panY: number } | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [error, setError] = useState('');

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      imageRef.current = image;
      drawCrop(canvasRef.current, image, rotation, zoom, pan, PREVIEW_SIZE);
    };
    image.onerror = () => setError('ફોટો ખોલી શકાયો નથી. કૃપા કરીને બીજો ફોટો પસંદ કરો.');
    image.src = source;
  }, [source]);

  useEffect(() => {
    if (imageRef.current) {
      drawCrop(canvasRef.current, imageRef.current, rotation, zoom, pan, PREVIEW_SIZE);
    }
  }, [rotation, zoom, pan]);

  const changeZoom = (change: number) => {
    setZoom((current) => Math.min(3, Math.max(1, Number((current + change).toFixed(2)))));
  };

  const reset = () => {
    setRotation(0);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setError('');
  };

  const confirmCrop = () => {
    const image = imageRef.current;
    if (!image) {
      setError('ફોટો હજી તૈયાર નથી. થોડી વાર પછી ફરી પ્રયાસ કરો.');
      return;
    }
    const output = document.createElement('canvas');
    output.width = OUTPUT_SIZE;
    output.height = OUTPUT_SIZE;
    drawCrop(output, image, rotation, zoom, pan, OUTPUT_SIZE);
    try {
      onConfirm(output.toDataURL('image/png'));
    } catch (cropError) {
      console.error('Unable to create cropped photo', cropError);
      setError('ફોટો કાપવામાં ભૂલ થઈ. કૃપા કરીને ફરી પ્રયાસ કરો.');
    }
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = { x: event.clientX, y: event.clientY, panX: pan.x, panY: pan.y };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const start = dragStart.current;
    if (!start) return;
    const canvas = canvasRef.current;
    const displayedWidth = canvas?.getBoundingClientRect().width || PREVIEW_SIZE;
    const ratio = PREVIEW_SIZE / displayedWidth;
    const nextPan = {
      x: start.panX + (event.clientX - start.x) * ratio,
      y: start.panY + (event.clientY - start.y) * ratio,
    };
    setPan(clampPan(imageRef.current, rotation, zoom, nextPan));
  };

  const endPointer = () => {
    dragStart.current = null;
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 p-3 sm:p-6 flex items-center justify-center">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="photo-crop-title"
        className="w-full max-w-lg max-h-[95vh] overflow-y-auto rounded-2xl bg-white p-4 sm:p-6 shadow-2xl"
      >
        <h2 id="photo-crop-title" className="text-lg font-bold font-gujarati text-brand-maroon">
          ફોટો કાપો અને ગોઠવો
        </h2>
        <p className="mt-1 text-xs text-gray-600 font-gujarati">
          ફોટાને ખેંચીને ગોઠવો. આ ચોરસ કટ કાર્ડના ફોટો ફ્રેમમાં પ્રમાણસર દેખાશે.
        </p>
        <div className="mx-auto mt-4 w-full max-w-[320px] overflow-hidden rounded-xl border-2 border-brand-gold bg-gray-100">
          <canvas
            ref={canvasRef}
            width={PREVIEW_SIZE}
            height={PREVIEW_SIZE}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endPointer}
            onPointerCancel={endPointer}
            className="block h-auto w-full touch-none cursor-grab active:cursor-grabbing"
            aria-label="ફોટો ગોઠવવા માટે ખેંચો"
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <button type="button" onClick={() => setRotation((value) => value - 90)} className="rounded-lg border p-2" aria-label="90 ડિગ્રી ડાબે ફેરવો" title="ડાબે ફેરવો"><RotateCcw className="h-4 w-4" /></button>
          <button type="button" onClick={() => setRotation((value) => value + 90)} className="rounded-lg border p-2" aria-label="90 ડિગ્રી જમણે ફેરવો" title="જમણે ફેરવો"><RotateCw className="h-4 w-4" /></button>
          <button type="button" onClick={() => changeZoom(-0.1)} disabled={zoom <= 1} className="rounded-lg border p-2 disabled:opacity-40" aria-label="ઝૂમ ઓછું કરો" title="ઝૂમ ઓછું કરો"><ZoomOut className="h-4 w-4" /></button>
          <span className="min-w-12 text-center text-xs font-mono">{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => changeZoom(0.1)} disabled={zoom >= 3} className="rounded-lg border p-2 disabled:opacity-40" aria-label="ઝૂમ વધારો" title="ઝૂમ વધારો"><ZoomIn className="h-4 w-4" /></button>
          <button type="button" onClick={reset} className="flex items-center gap-1 rounded-lg border px-3 py-2 text-xs font-gujarati"><Crop className="h-4 w-4" />રીસેટ</button>
        </div>
        {error && <p role="alert" className="mt-3 text-center text-sm text-red-600 font-gujarati">{error}</p>}
        <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button type="button" onClick={onCancel} className="rounded-xl border px-5 py-2.5 text-sm font-semibold font-gujarati">રદ કરો</button>
          <button type="button" onClick={confirmCrop} className="rounded-xl bg-brand-saffron px-5 py-2.5 text-sm font-bold text-white font-gujarati">પુષ્ટિ કરો</button>
        </div>
      </section>
    </div>
  );
};

function drawCrop(
  canvas: HTMLCanvasElement | null,
  image: HTMLImageElement,
  rotation: number,
  zoom: number,
  pan: { x: number; y: number },
  size: number
) {
  if (!canvas || !image.naturalWidth || !image.naturalHeight) return;
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');
  if (!context) return;
  const isQuarterTurn = Math.abs(rotation / 90) % 2 === 1;
  const rotatedWidth = isQuarterTurn ? image.naturalHeight : image.naturalWidth;
  const rotatedHeight = isQuarterTurn ? image.naturalWidth : image.naturalHeight;
  const scale = Math.max(size / rotatedWidth, size / rotatedHeight) * zoom;
  const factor = size / PREVIEW_SIZE;
  context.clearRect(0, 0, size, size);
  context.save();
  context.translate(size / 2 + pan.x * factor, size / 2 + pan.y * factor);
  context.rotate((rotation * Math.PI) / 180);
  context.drawImage(
    image,
    (-image.naturalWidth * scale) / 2,
    (-image.naturalHeight * scale) / 2,
    image.naturalWidth * scale,
    image.naturalHeight * scale
  );
  context.restore();
}

function clampPan(
  image: HTMLImageElement | null,
  rotation: number,
  zoom: number,
  pan: { x: number; y: number }
) {
  if (!image) return pan;
  const isQuarterTurn = Math.abs(rotation / 90) % 2 === 1;
  const width = isQuarterTurn ? image.naturalHeight : image.naturalWidth;
  const height = isQuarterTurn ? image.naturalWidth : image.naturalHeight;
  const scale = Math.max(PREVIEW_SIZE / width, PREVIEW_SIZE / height) * zoom;
  const maxX = Math.max(0, (width * scale - PREVIEW_SIZE) / 2);
  const maxY = Math.max(0, (height * scale - PREVIEW_SIZE) / 2);
  return {
    x: Math.max(-maxX, Math.min(maxX, pan.x)),
    y: Math.max(-maxY, Math.min(maxY, pan.y)),
  };
}
