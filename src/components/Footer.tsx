import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Reveal } from './Reveal';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8F5EF]/90 backdrop-blur-md border-t border-[#E5E0D8] py-14 text-[#6B6660] text-xs relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal delay={0}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E5E0D8]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#222222] text-[#F8F5EF] flex items-center justify-center font-mono font-bold text-xs shadow-2xs">
                SK
              </div>
              <div>
                <span className="font-heading font-extrabold text-base text-[#222222] block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs text-[#6B6660]">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#FFFFFF] hover:bg-[#F8F5EF] hover:-translate-y-[1px] active:translate-y-0 text-[#222222] border border-[#E5E0D8] rounded-xl transition-all duration-200 shadow-2xs"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#FFFFFF] hover:bg-[#F8F5EF] hover:-translate-y-[1px] active:translate-y-0 text-[#222222] border border-[#E5E0D8] rounded-xl transition-all duration-200 shadow-2xs"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 bg-[#FFFFFF] hover:bg-[#F8F5EF] hover:-translate-y-[1px] active:translate-y-0 text-[#222222] border border-[#E5E0D8] rounded-xl transition-all duration-200 shadow-2xs"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={onOpenResume}
                className="p-2.5 bg-[#FFFFFF] hover:bg-[#F8F5EF] hover:-translate-y-[1px] active:translate-y-0 text-[#222222] border border-[#E5E0D8] rounded-xl transition-all duration-200 shadow-2xs cursor-pointer"
                aria-label="Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={scrollToTop}
                className="p-2.5 bg-[#D97745] text-white hover:bg-[#C56636] hover:-translate-y-[1px] active:translate-y-0 rounded-xl transition-all duration-200 ml-2 shadow-2xs cursor-pointer"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#6B6660]">
            <div>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</div>
            <div className="text-[11px]">Personal Portfolio — Editorial Edition</div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};
