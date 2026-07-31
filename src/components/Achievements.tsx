import React from 'react';
import { Award, Users, Trophy, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { AchievementItem } from '../types';
import { Reveal } from './Reveal';

export const Achievements: React.FC = () => {
  const getCategoryIcon = (category: AchievementItem['category']) => {
    switch (category) {
      case 'Academic':
        return <Award className="w-5 h-5 text-[#D97745]" />;
      case 'Leadership':
        return <Users className="w-5 h-5 text-[#D97745]" />;
      case 'Event Management':
        return <Trophy className="w-5 h-5 text-[#D97745]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#D97745]" />;
    }
  };

  return (
    <section id="achievements" className="py-28 md:py-36 bg-[#F8F5EF] border-t border-[#E5E0D8] relative z-10 overflow-hidden">
      {/* Background Motif: Subtle Technical Grid Overlay */}
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
          <div className="mb-12">
            <div className="w-12 h-[2px] bg-[#D97745] mb-6" />
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#D97745] font-semibold mb-3">
              <span>07 // ACHIEVEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#222222] tracking-tight mb-3">
              Achievements
            </h2>
            <p className="text-base text-[#6B6660] max-w-2xl font-normal leading-relaxed">
              Milestones and leadership experiences that reflect my academic consistency, responsibility, and impact beyond coursework.
            </p>
          </div>
        </Reveal>

        {/* 3-Card Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <Reveal key={item.id} delay={0.05 + idx * 0.05}>
              <div
                className="bg-[#FFFFFF] border border-[#E5E0D8] rounded-[20px] p-6 hover:border-[#D97745]/40 hover:-translate-y-1.5 hover:shadow-[0_8px_24px_-6px_rgba(34,34,34,0.08)] active:translate-y-0 transition-all duration-250 ease-out flex flex-col justify-between h-full shadow-2xs group relative overflow-hidden"
              >
                {/* Tiny Decorative Corner SVG Accent */}
                <div className="absolute top-3.5 right-3.5 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#D97745" strokeWidth="1">
                    <path d="M0 5h20M5 0v20" strokeDasharray="2 2" />
                    <circle cx="5" cy="5" r="2" fill="#D97745" stroke="none" />
                  </svg>
                </div>

                <div>
                  {/* Top: Small Icon Badge + Year Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#D97745]/10 border border-[#D97745]/20 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                      {getCategoryIcon(item.category)}
                    </div>

                    <span className="px-3 py-1 bg-[#F8F5EF] border border-[#E5E0D8] text-[#55524D] text-xs font-mono font-bold rounded-full">
                      {item.year}
                    </span>
                  </div>

                  {/* Middle: Achievement Title & Description */}
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#222222] mb-2.5 leading-snug group-hover:text-[#D97745] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#6B6660] font-normal leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom: Small Footer with Category Tag */}
                <div className="pt-4 border-t border-[#E5E0D8] flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 bg-[#D97745]/10 border border-[#D97745]/20 text-[#D97745] text-[11px] font-mono font-bold rounded-md uppercase tracking-wider">
                    {item.category}
                  </span>

                  <span className="text-[11px] text-[#A09A90] font-mono flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#D97745]" />
                    <span>Verified Milestone</span>
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