import React, { useState } from 'react';
import {
  Award,
  ShieldCheck,
  Download,
  X,
  FileText
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';
import { Reveal } from './Reveal';
import { ImagePreview } from './ImagePreview';
import { Modal } from './Modal';

export const Certifications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const certFilters = ['All', 'Databases & SQL', 'Python & Data', 'Merit & Academic', 'Networking'];

  const filteredCerts = CERTIFICATIONS.filter((cert) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Databases & SQL') return cert.logoType === 'oracle' || cert.logoType === 'hackerrank';
    if (activeFilter === 'Python & Data') return cert.logoType === 'nptel' || cert.logoType === 'ibm';
    if (activeFilter === 'Merit & Academic') return cert.logoType === 'aicte';
    if (activeFilter === 'Networking') return cert.logoType === 'cisco';
    return true;
  });

  const renderIssuerLogo = (logoType?: string) => {
    switch (logoType) {
      case 'oracle':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#F80000]/10 border border-[#F80000]/20 flex items-center justify-center font-mono font-bold text-[#F80000] text-xs shrink-0">
            ORA
          </div>
        );
      case 'hackerrank':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#2EC866]/10 border border-[#2EC866]/20 flex items-center justify-center font-mono font-bold text-[#2EC866] text-xs shrink-0">
            HR
          </div>
        );
      case 'nptel':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#00529B]/10 border border-[#00529B]/20 flex items-center justify-center font-mono font-bold text-[#00529B] text-xs shrink-0">
            IIT
          </div>
        );
      case 'aicte':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#D98457]/10 border border-[#D98457]/20 flex items-center justify-center text-[#D98457] shrink-0">
            <Award className="w-5 h-5" />
          </div>
        );
      case 'ibm':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#052FAD]/10 border border-[#052FAD]/20 flex items-center justify-center font-mono font-bold text-[#052FAD] text-xs shrink-0">
            IBM
          </div>
        );
      case 'cisco':
        return (
          <div className="w-9 h-9 rounded-xl bg-[#1BA0D7]/10 border border-[#1BA0D7]/20 flex items-center justify-center font-mono font-bold text-[#1BA0D7] text-xs shrink-0">
            CSCO
          </div>
        );
      default:
        return (
          <div className="w-9 h-9 rounded-xl bg-[#D98457]/10 border border-[#D98457]/20 flex items-center justify-center text-[#D98457] shrink-0">
            <Award className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <section id="certifications" className="py-28 md:py-36 bg-[#F8F5EF] border-t border-[#E5E0D8] relative z-10 overflow-hidden">
      {/* Background Motif: Subtle Technical Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04] z-0 select-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" stroke="#222222">
          <rect x="100" y="80" width="1000" height="640" strokeWidth="0.75" strokeDasharray="6 6" />
          <circle cx="100" cy="80" r="4" fill="#D97745" stroke="none" />
          <circle cx="1100" cy="80" r="4" fill="#D97745" stroke="none" />
          <circle cx="100" cy="720" r="4" fill="#D97745" stroke="none" />
          <circle cx="1100" cy="720" r="4" fill="#D97745" stroke="none" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <Reveal delay={0}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="w-12 h-[2px] bg-[#D97745] mb-6" />
              <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-[#D97745] font-extrabold mb-3">
                <span>06 // CREDENTIALS & MILESTONES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#111111] tracking-tighter mb-3">
                Certifications
              </h2>
              <p className="text-base text-[#6B6660] max-w-2xl font-normal leading-relaxed">
                Official industry certifications, competitive assessment ranks, and verified academic milestones. Click any credential to inspect the authentic document.
              </p>
            </div>

            {/* Certificate Filter Pills */}
            <div className="flex flex-wrap items-center p-1 bg-[#FFFFFF] border border-[#E5E0D8] rounded-2xl w-fit shadow-sm ring-1 ring-black/5 gap-1">
              {certFilters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-xl text-[11px] font-mono transition-all duration-200 select-none cursor-pointer flex items-center justify-center leading-none ${
                    activeFilter === f
                      ? 'bg-[#222222] text-white font-bold shadow-sm'
                      : 'text-[#6B6660] hover:text-[#222222] hover:bg-[#F3EFE7]/60 font-medium'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Certifications 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCerts.map((cert, idx) => (
            <Reveal key={cert.id} delay={0.05 + idx * 0.05}>
              <div
                onClick={() => setSelectedCert(cert)}
                onMouseEnter={() => {
                  const img = new Image();
                  img.src = cert.previewImage;
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${cert.title}`}
                className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-3xl p-6 sm:p-8 hover:border-[#D97745]/40 shadow-sm hover:shadow-md card-hover-effect hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-out flex flex-col justify-between h-full cursor-pointer group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {renderIssuerLogo(cert.logoType)}
                      <div>
                        <span className="text-[11px] font-mono font-bold text-[#6B6660] uppercase tracking-wider block">
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] font-mono text-[#A09A90]">{cert.date}</span>
                      </div>
                    </div>

                    <span className="px-3 py-1 bg-[#D97745]/10 border border-[#D97745]/20 text-[#D97745] text-xs font-mono font-bold rounded-full">
                      {cert.badgeText}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-[#111111] tracking-tight mb-2 leading-snug group-hover:text-[#D97745] transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 text-xs font-mono bg-[#F8F5EF] border border-[#E5E0D8] text-[#55524D] rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E0D8] flex items-center justify-between text-xs font-mono text-[#222222] font-semibold">
                  <div className="flex items-center gap-1.5 text-[#55524D] font-heading font-bold uppercase tracking-wider text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-[#D97745]" />
                    <span>Verified Credential</span>
                  </div>

                  <span className="text-[#D97745] text-[11px] font-heading font-bold uppercase tracking-wider group-hover:underline inline-flex items-center gap-1">
                    View Certificate →
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Reusable Portal Modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        ariaLabel={selectedCert ? `Certificate: ${selectedCert.title}` : 'Certificate Dialog'}
      >
        {selectedCert && (
          <>
            {/* Top Header (Sticky & Always Visible) */}
            <div className="px-4 sm:px-6 py-3 sm:py-3.5 border-b border-[#E2DFD8] bg-[#EFEDE8] flex items-center justify-between gap-3 shrink-0 z-20 sticky top-0">
              <div className="flex items-center gap-3 min-w-0 overflow-hidden">
                {renderIssuerLogo(selectedCert.logoType)}
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono text-[#D98457] font-bold uppercase tracking-wider truncate">
                    <span>{selectedCert.issuer}</span>
                    <span>•</span>
                    <span>{selectedCert.date}</span>
                    <span className="hidden md:inline">•</span>
                    <span className="text-[#6B6862] hidden md:inline">ID: {selectedCert.id.toUpperCase()}</span>
                  </div>
                  <h2 className="text-sm sm:text-base md:text-lg font-heading font-bold text-[#111111] tracking-tight truncate">
                    {selectedCert.title}
                  </h2>
                </div>
              </div>

              {/* Document Actions & Close Button */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0 z-30">
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-[#D98457]/10 border border-[#D98457]/30 text-[#D98457] rounded-lg text-xs font-mono font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>

                <a
                  href={selectedCert.previewImage}
                  download={selectedCert.downloadName}
                  className="px-5 py-2.5 bg-[#D98457] hover:bg-[#C27346] text-white rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Download</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-2.5 rounded-full bg-[#FAF8F5] hover:bg-white text-[#6B6862] hover:text-[#2D2B28] transition-colors border border-[#E2DFD8] cursor-pointer shrink-0 shadow-sm"
                  aria-label="Close certificate dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable image preview */}
            <div className="flex-1 min-h-0 bg-[#EFECE6] p-2 sm:p-4 flex flex-col h-full overflow-hidden">
              <ImagePreview
                imageSrc={selectedCert.previewImage}
                title={selectedCert.title}
                issuer={selectedCert.issuer}
                downloadName={selectedCert.downloadName}
              />
            </div>

            {/* Footer */}
            <div className="px-5 sm:px-6 py-2 bg-[#EFEDE8] border-t border-[#E2DFD8] flex items-center justify-between text-xs font-mono text-[#6B6862] shrink-0 z-10">
              <div className="flex items-center gap-2 overflow-x-auto py-0.5">
                <span className="font-bold text-[#2D2B28] uppercase shrink-0">Validated Skills:</span>
                {selectedCert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 bg-[#FAF8F5] border border-[#E2DFD8] text-[#2D2B28] rounded font-medium text-[11px] shrink-0"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="hidden md:flex items-center gap-1.5 text-[11px] text-[#8C8880] shrink-0 pl-4">
                <FileText className="w-3.5 h-3.5 text-[#D98457]" />
                <span>Official Verified Record</span>
              </div>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
};