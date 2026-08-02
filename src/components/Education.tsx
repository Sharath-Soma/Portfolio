import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-28 md:py-36 bg-[#F8F5EF] border-t border-[#E5E0D8] relative z-10 overflow-hidden">
      {/* Background Motif: Minimal Geometric Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04] z-0 select-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" stroke="#222222">
          <line x1="0" y1="100" x2="1200" y2="700" strokeWidth="1" strokeDasharray="8 8" />
          <line x1="0" y1="700" x2="1200" y2="100" strokeWidth="0.75" />
          <rect x="200" y="150" width="800" height="500" strokeWidth="0.75" strokeDasharray="4 4" />
          <circle cx="600" cy="400" r="180" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <Reveal delay={0}>
          <div className="mb-16">
            <div className="w-12 h-[2px] bg-[#D97745] mb-6" />
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-[#D97745] font-extrabold mb-3">
              <span>05 // ACADEMICS & QUALIFICATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#111111] tracking-tighter mb-4">
              Education
            </h2>
            <p className="text-base sm:text-lg text-[#6B6660] max-w-2xl font-normal leading-relaxed">
              Strong academic grounding in Data Science, Computer Science, and mathematical analytical foundations.
            </p>
          </div>
        </Reveal>

        {/* Clean Unboxed Editorial Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {EDUCATION.map((edu, idx) => (
            <Reveal key={idx} delay={0.1 + idx * 0.08}>
              <div className="flex flex-col justify-between h-full p-6 sm:p-8 bg-[#FFFFFF] rounded-3xl border border-[#E5E0D8] shadow-sm hover:shadow-md card-hover-effect hover:-translate-y-1 transition-all duration-300 group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-mono font-bold text-[#D97745] bg-[#D97745]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {edu.level}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-[#6B6660]">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-[#111111] tracking-tight mb-3 leading-snug group-hover:text-[#D97745] transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-[#6B6660] leading-relaxed mb-6 font-medium">
                    {edu.institution}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E0D8]/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-[#6B6660] uppercase tracking-wider">Evaluation:</span>
                  <span className="text-xs font-mono font-bold text-[#D97745] bg-[#D97745]/5 px-2.5 py-1 rounded-md border border-[#D97745]/20 shadow-sm">
                    {edu.score}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};