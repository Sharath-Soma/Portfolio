import React, { useState, useRef } from 'react';
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
  const [fitScale, setFitScale] = useState<number | null>(null);
  const [userZoom, setUserZoom] = useState<number>(1);
  const [naturalSize, setNaturalSize] = useState({ w: 0, h: 0 });
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateFitZoom = (natW: number, natH: number) => {
    if (!containerRef.current || !natW || !natH) return 1;
    const { clientWidth, clientHeight } = containerRef.current;
    
    // Accounts for container padding
    const availW = Math.max(100, clientWidth - 48);
    const availH = Math.max(100, clientHeight - 48);
    
    const scaleW = availW / natW;
    const scaleH = availH / natH;
    
    // Fit nicely, don't upscale beyond natural size
    return Math.min(scaleW, scaleH, 1);
  };

  const fitPreview = () => {
    if (naturalSize.w && naturalSize.h) {
      setFitScale(calculateFitZoom(naturalSize.w, naturalSize.h));
    }
    setUserZoom(1);
  };

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    setNaturalSize({ w: naturalWidth, h: naturalHeight });
    setFitScale(calculateFitZoom(naturalWidth, naturalHeight));
    setUserZoom(1);
  };

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
          <button type="button" onClick={() => setUserZoom((value) => Math.max(0.1, Number((value - 0.15).toFixed(2))))} className="p-1 hover:bg-[#F3EFE7] rounded-lg text-[#222222] transition-colors cursor-pointer btn-tactile" aria-label="Zoom out">
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="px-2 text-xs font-bold min-w-[42px] text-center select-none text-[#222222]">{Math.round(userZoom * 100)}%</span>
          <button type="button" onClick={() => setUserZoom((value) => Math.min(5.0, Number((value + 0.15).toFixed(2))))} className="p-1 hover:bg-[#F3EFE7] rounded-lg text-[#222222] transition-colors cursor-pointer btn-tactile" aria-label="Zoom in">
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

      <div 
        ref={containerRef}
        className="flex-1 min-h-0 overflow-auto overscroll-contain bg-[#F8F5EF] p-3 sm:p-6 custom-scrollbar touch-pan-y" 
        data-modal-scroll 
        data-lenis-prevent="true" 
        tabIndex={0}
      >
        {hasError ? (
          <div className="w-full h-full min-h-[240px] flex items-center justify-center text-center text-xs font-mono text-[#6B6660]">
            This certificate image could not be displayed.
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center min-h-max min-w-max">
            <img
              src={imageSrc}
              alt={`${title} - ${issuer}`}
              onLoad={handleImageLoad}
              onError={() => setHasError(true)}
              className={`rounded-2xl shadow-xl border border-[#E5E0D8] select-none transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${fitScale === null ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`}
              style={
                naturalSize.w && fitScale !== null
                  ? { width: `${naturalSize.w * fitScale * userZoom}px`, height: `${naturalSize.h * fitScale * userZoom}px` }
                  : { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }
              }
              draggable={false}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
};
