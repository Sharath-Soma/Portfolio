import React from 'react';
import { motion } from 'motion/react';
import { FileText, MapPin, ArrowDownRight, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Reveal } from './Reveal';
import { HeroAiVisual } from './HeroAiVisual';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = () => {
    const projElem = document.getElementById('projects');
    if (projElem) {
      projElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-36 pb-20 md:pt-48 md:pb-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7">
            {/* Status & Location Badge */}
            <Reveal delay={0}>
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#6B6660] font-mono mb-8 sm:mb-10">
                <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#FFFFFF]/80 backdrop-blur-sm border border-[#E5E0D8]/80 rounded-full text-[#222222] font-medium shadow-premium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97745] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97745]"></span>
                  </span>
                  Available for Full-Time Roles
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#6B6660]">
                  <MapPin className="w-3.5 h-3.5 text-[#D97745]" />
                  {PERSONAL_INFO.location}
                </span>
                <span className="text-[#A09A90] hidden sm:inline">•</span>
                <span className="text-[#222222] font-semibold bg-[#FFFFFF] px-2.5 py-1 rounded-md border border-[#E5E0D8] text-xs shadow-sm hidden sm:inline-flex">
                  CGPA: {PERSONAL_INFO.cgpa}
                </span>
              </div>
            </Reveal>

            {/* Hero Name & Title */}
            <Reveal delay={0.1}>
              <div>
                <h1 className="text-[2.75rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] font-heading font-extrabold text-[#222222] tracking-tight mb-4">
                  Soma Sharath Kumar
                </h1>

                <p className="text-xl sm:text-2xl lg:text-3xl font-serif-editorial italic text-[#D97745] font-normal tracking-tight mb-8">
                  {PERSONAL_INFO.title}
                </p>
              </div>
            </Reveal>

            {/* Summary */}
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg lg:text-xl text-[#55524D] max-w-[54ch] leading-[1.65] font-normal mb-10">
                Computer Science (Data Science) graduate building AI-powered applications, intelligent data solutions, and analytics-driven systems with LLMs, RAG, SLMs, and Agentic AI.
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-4">
                <motion.button
                  layoutId="resume-dialog"
                  transition={{ type: 'spring', stiffness: 220, damping: 28, mass: 0.9 }}
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#D97745] hover:bg-[#C56636] btn-tactile focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97745]/50 text-white font-medium text-sm rounded-xl shadow-glow group cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                  <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200" />
                </motion.button>

                <button
                  type="button"
                  onClick={scrollToProjects}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#FFFFFF] hover:bg-[#FDFBF7] btn-tactile focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5E0D8] border border-[#E5E0D8] hover:border-[#D97745]/40 text-[#222222] font-medium text-sm rounded-xl shadow-premium-hover group cursor-pointer"
                >
                  <FolderGit2 className="w-4 h-4 text-[#222222] group-hover:text-[#D97745] transition-colors" />
                  <span>View Projects</span>
                </button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero AI Vector Artwork */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={0.25}>
              <HeroAiVisual />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
