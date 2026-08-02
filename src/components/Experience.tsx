import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { Reveal } from './Reveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-28 md:py-36 bg-[#F8F5EF] border-t border-[#E5E0D8] relative z-10 overflow-hidden">
      {/* Background Motif: Timeline Guide */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.045] z-0 select-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" stroke="#222222">
          <line x1="80" y1="0" x2="80" y2="800" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="80" cy="120" r="5" fill="#D97745" stroke="none" />
          <circle cx="80" cy="420" r="5" fill="#D97745" stroke="none" />
          <line x1="80" y1="120" x2="1200" y2="120" strokeWidth="0.75" />
          <line x1="80" y1="420" x2="1200" y2="420" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <Reveal delay={0}>
          <div className="mb-16">
            <div className="w-12 h-[2px] bg-[#D97745] mb-6" />
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-[#D97745] font-extrabold mb-3">
              <span>04 // TIMELINE & TRACK RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-[#111111] tracking-tighter mb-4">
              Work Experience
            </h2>
            <p className="text-base sm:text-lg text-[#6B6660] max-w-2xl font-normal leading-relaxed">
              Applied software development experience in database optimization, backend scripting, and automated data pipelines.
            </p>
          </div>
        </Reveal>

        {/* Unboxed Experience Timeline List */}
        <div className="space-y-12 pl-2 sm:pl-6 border-l border-[#E5E0D8] ml-2 sm:ml-4 relative">
          {EXPERIENCES.map((exp, idx) => (
            <Reveal key={exp.id} delay={0.1 + idx * 0.1}>
              <div className="relative pl-6 sm:pl-10 group/timeline">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[29px] sm:-left-[45px] top-6 w-3.5 h-3.5 rounded-full bg-[#F8F5EF] border-2 border-[#D97745] group-hover/timeline:scale-[1.3] group-hover/timeline:bg-[#D97745] transition-all duration-300 ease-out" />

                {/* Experience Card */}
                <div className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md card-hover-effect hover:-translate-y-1 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded bg-[#D97745]/10 text-[11px] font-mono text-[#D97745] uppercase font-bold tracking-wider mb-2">
                        {exp.type}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#111111] tracking-tighter">
                        {exp.role}
                      </h3>
                      <p className="text-[15px] font-medium text-[#6B6660]">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-[#6B6660]">
                      <span className="flex items-center gap-1.5 font-medium text-[#222222]">
                        <Calendar className="w-3.5 h-3.5 text-[#D97745]" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#D97745]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-1.5 mb-6 text-[15px] text-[#55524D] leading-relaxed max-w-3xl">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3">
                        <span className="text-[#D97745] font-bold mt-[5px] text-[10px]">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills Used */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#E5E0D8]">
                    <span className="text-[11px] font-mono text-[#A09A90] mr-1 uppercase font-bold tracking-wider">Tech:</span>
                    {exp.skillsUsed.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-[11px] font-mono bg-[#FFFFFF] shadow-sm border border-[#E5E0D8] text-[#222222] rounded-lg font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};