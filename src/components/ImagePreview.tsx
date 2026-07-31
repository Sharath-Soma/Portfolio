import React, { useState } from 'react';
import { Download, Printer, ZoomIn, ZoomOut } from 'lucide-react';

interface ImagePreviewProps {
  imageSrc: string;
  title: string;
  issuer: string;
  downloadName: string;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  imageSrc,
  title,
  issuer,
  downloadName,
}) => {
  const [zoom, setZoom] = useState(1);
  const [isLandscape, setIsLandscape] = useState(true);
  const [hasError, setHasError] = useState(false);

  const fitPreview = () => setZoom(1);

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`<!doctype html><html><head><title>${title}</title><style>html,body{margin:0;background:#fff}img{display:block;max-width:100%;max-height:100vh;margin:auto;object-fit:contain}@media print{img{max-width:100%;max-height:none}}</style></head><body><img src="${imageSrc}" alt="${title} - ${issuer}" onload="window.print();window.onafterprint=function(){window.close()}" /></body></html>`);
    printWindow.document.close();
  };

  return (
    <div className="w-full h-full min-h-0 flex flex-col bg-[#FFFFFF] overflow-hidden rounded-2xl border border-[#E5E0D8] shadow-sm">
      <div className="px-3 sm:px-5 py-3 bg-[#F8F5EF] border-b border-[#E5E0D8] flex flex-wrap items-center justify-between gap-3 shrink-0 text-xs font-mono text-[#55524D]">
        <span className="text-[11px] font-bold text-[#6B6660] uppercase tracking-wider">Verified document image</span>

        <div className="flex items-center gap-1.5 bg-[#FFFFFF] border border-[#E5E0D8] p-1 rounded-xl shadow-2xs">
          <button type="button" onClick={() => setZoom((value) => Math.max(0.5, Number((value - 0.15).toFixed(2))))} className="p-1 hover:bg-[#F3EFE7] rounded-lg text-[#222222] transition-colors cursor-pointer btn-tactile" aria-label="Zoom out">
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="px-2 text-xs font-bold min-w-[42px] text-center select-none text-[#222222]">{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => setZoom((value) => Math.min(2.5, Number((value + 0.15).toFixed(2))))} className="p-1 hover:bg-[#F3EFE7] rounded-lg text-[#222222] transition-colors cursor-pointer btn-tactile" aria-label="Zoom in">
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <div className="w-px h-3.5 bg-[#E5E0D8] mx-0.5" />
          <button type="button" onClick={fitPreview} className="px-2.5 py-0.5 rounded-lg text-xs font-bold bg-[#D97745] hover:bg-[#C56636] text-white cursor-pointer btn-tactile shadow-glow">Fit</button>
        </div>

        <div className="flex items-center gap-2">
          <a href={imageSrc} download={downloadName} className="p-2 bg-[#FFFFFF] hover:bg-[#F3EFE7] text-[#222222] border border-[#E5E0D8] rounded-xl transition-colors cursor-pointer shadow-sm hover:shadow-premium btn-tactile" aria-label="Download certificate">
            <Download className="w-4 h-4 text-[#6B6660]" />
          </a>
          <button type="button" onClick={handlePrint} className="p-2 bg-[#FFFFFF] hover:bg-[#F3EFE7] text-[#222222] border border-[#E5E0D8] rounded-xl transition-colors cursor-pointer shadow-sm hover:shadow-premium btn-tactile" aria-label="Print certificate">
            <Printer className="w-4 h-4 text-[#6B6660]" />
          </button>
        </div>
      </div>

      <div className="flex-1 min-h-0 overflow-auto overscroll-contain bg-[#F8F5EF] p-3 sm:p-6 custom-scrollbar touch-pan-y" data-modal-scroll data-lenis-prevent="true" tabIndex={0}>
        {hasError ? (
          <div className="w-full h-full min-h-[240px] flex items-center justify-center text-center text-xs font-mono text-[#6B6660]">
            This certificate image could not be displayed.
          </div>
        ) : (
          <div className="min-w-full min-h-full flex items-center justify-center">
            <img
              src={imageSrc}
              alt={`${title} - ${issuer}`}
              onLoad={(event) => setIsLandscape(event.currentTarget.naturalWidth >= event.currentTarget.naturalHeight)}
              onError={() => setHasError(true)}
              className={`max-w-none max-h-none rounded-2xl shadow-xl border border-[#E5E0D8] select-none ${isLandscape ? 'h-auto' : 'w-auto'}`}
              style={isLandscape ? { width: `${zoom * 100}%` } : { height: `${zoom * 100}%` }}
              draggable={false}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
};
