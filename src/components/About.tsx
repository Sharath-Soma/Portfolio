import React from 'react';
import { Brain, Code, Database, Target } from 'lucide-react';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-[#D97745]" />,
      title: "AI & RAG Engineering",
      description: "Designing retrieval-augmented generation architectures using LangChain, FAISS vector search, and context-grounded LLM prompts."
    },
    {
      icon: <Database className="w-5 h-5 text-[#D97745]" />,
      title: "Data Science & DB Architecture",
      description: "Strong relational modeling, SQL query optimization, and statistical numerical analysis using Pandas, NumPy, and MySQL."
    },
    {
      icon: <Code className="w-5 h-5 text-[#D97745]" />,
      title: "Full-Stack Development",
      description: "Building production REST APIs with Python (Flask) and modern, accessible frontend components with React and Tailwind CSS."
    },
    {
      icon: <Target className="w-5 h-5 text-[#D97745]" />,
      title: "Product Execution",
      description: "Combining clean algorithmic design with practical usability, delivering software that runs fast and solves core user tasks."
    }
  ];

  return (
    <section id="about" className="py-28 md:py-36 bg-[#F8F5EF] border-t border-[#E5E0D8] relative z-10 overflow-hidden">
      {/* Background Motif: Soft Blueprint Geometry */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.045] z-0 select-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" stroke="#222222">
          <circle cx="180" cy="220" r="220" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="180" cy="220" r="140" strokeWidth="0.75" />
          <line x1="0" y1="220" x2="1200" y2="220" strokeWidth="0.75" />
          <line x1="180" y1="0" x2="180" y2="800" strokeWidth="0.75" />
          <circle cx="1020" cy="580" r="260" strokeWidth="1" strokeDasharray="8 8" />
          <circle cx="1020" cy="580" r="160" strokeWidth="0.75" />
          <line x1="1020" y1="0" x2="1020" y2="800" strokeWidth="0.75" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header & Chapter Divider */}
        <Reveal delay={0}>
          <div className="mb-16">
            <div className="w-12 h-[2px] bg-[#D97745] mb-6" />
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#D97745] font-semibold mb-3">
              <span>01 // ARCHITECTURE & PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#222222] tracking-tight mb-4">
              Engineering Focus & Approach
            </h2>
            <p className="text-base sm:text-lg text-[#6B6660] max-w-2xl font-normal leading-relaxed">
              Building reliable AI systems through vector search indexing, structured data pipelines, and clean algorithmic engineering.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-8">
            <Reveal delay={0.1}>
              <div className="space-y-6 text-base text-[#55524D] leading-relaxed">
                <p className="text-lg text-[#222222] font-medium leading-relaxed">
                  I am a Computer Science graduate specializing in Data Science from <strong className="text-[#222222] font-bold">Malla Reddy College of Engineering & Technology</strong> with an academic record of <strong className="text-[#222222] font-bold">9.01/10.0 CGPA</strong>.
                </p>
                <p>
                  My engineering focus centers on building end-to-end intelligent applications—combining vector search indexing (FAISS), generative LLM orchestration (LangChain), and structured backend data pipelines in Python.
                </p>
                <p>
                  I ranked in the <strong className="text-[#222222] font-semibold">Top 2% globally</strong> on Oracle's Global Database Assessment and completed a Python Developer internship with AICTE.
                </p>
              </div>
            </Reveal>

            {/* Currently Researching */}
            <Reveal delay={0.25}>
              <div className="pt-6 border-t border-[#E5E0D8]/80">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#D97745] animate-pulse"></span>
                  <h3 className="text-xs font-mono uppercase text-[#D97745] font-bold tracking-wider">
                    Active Research Focus
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { topic: 'Agentic AI', detail: 'Autonomous Tools' },
                    { topic: 'Production RAG', detail: 'Hybrid Vectors' },
                    { topic: 'LLM Systems', detail: 'Eval & Fine-Tune' },
                    { topic: 'Data Analytics', detail: 'Real-Time Pipelines' },
                  ].map((item, i) => (
                    <div key={i} className="py-2 border-l-2 border-[#D97745]/40 pl-3">
                      <div className="font-heading font-bold text-xs text-[#222222] mb-0.5">{item.topic}</div>
                      <div className="text-[10px] font-mono text-[#6B6660]">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => (
              <Reveal key={idx} delay={0.15 + idx * 0.08}>
                <div className="pb-6 border-b border-[#E5E0D8]/80 sm:border-b-0 sm:border-l sm:border-[#E5E0D8]/80 sm:pl-6 space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FFFFFF] border border-[#E5E0D8] flex items-center justify-center mb-3 shadow-2xs">
                    {pillar.icon}
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#222222]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#6B6660] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
