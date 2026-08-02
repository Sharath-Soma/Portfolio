import React, { useState } from 'react';
import { X, Download, Copy, Check, FileText, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, LEADERSHIP_ACTIVITIES } from '../data/portfolioData';
import { Modal } from './Modal';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const plainTextResume = `
SOMA SHARATH KUMAR
Hyderabad, India | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.phone} | LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

SUMMARY
${PERSONAL_INFO.summary}

TECHNICAL SKILLS
- Programming Languages: Python, SQL
- Data Analysis & Visualization: Pandas, NumPy, Matplotlib, Data Cleaning, Data Preprocessing, ETL
- Database: MySQL (joins, subqueries, query optimization)
- Generative AI: Large Language Models (LLMs), Short Language Models (SLMs), Retrieval-Augmented Generation (RAG), Agentic AI
- Tools & Practices: Git, GitHub, Canva, HTML5, CSS3

EXPERIENCE
Python Developer Intern — AICTE Internship Program (Feb 2025 – Apr 2025)
${EXPERIENCES[0].points.map((p) => `• ${p}`).join('\n')}

PROJECTS
${PROJECTS.map((p) => `• ${p.title} — ${p.subtitle} (${p.techStack.join(' | ')})\n  ${p.description}`).join('\n\n')}

EDUCATION
- B.Tech in Computer Science (Data Science) — CGPA: 9.01 / 10.0 (2022 – 2026) | Malla Reddy College of Engineering & Technology, Hyderabad
- Intermediate (MPC) — 96.6% (2022) | Pragati Junior College
- Matriculation — GPA: 10.0 / 10.0 (2020) | Ekalavya High School

CERTIFICATIONS & ACHIEVEMENTS
- Oracle Dev Gym — Databases for Developers: scored 98%, ranking in the top 2% globally.
- NPTEL Certified — Python Programming & Data Structures.
- AICTE Internship — Certificate of Merit for impactful, clean-code delivery of the Fitness Tracker project.
- Maintained a CGPA of 9.01 / 10.0 consistently across all semesters of B.Tech.

LEADERSHIP & ACTIVITIES
${LEADERSHIP_ACTIVITIES.map((l) => `- ${l.role}: ${l.details}`).join('\n')}
`;

    navigator.clipboard.writeText(plainTextResume.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} ariaLabel="Official Resume Document Dialog">
      {/* Header (Sticky & Always Visible) */}
      <div className="px-5 sm:px-6 py-3.5 border-b border-[#E5E0D8] bg-[#FFFFFF] flex flex-wrap items-center justify-between gap-3 shrink-0 z-10 pr-14 sm:pr-16">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-[#D97745] font-semibold mb-0.5">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Resume Document</span>
          </div>
          <h2 className="text-lg sm:text-xl font-heading font-extrabold text-[#222222]">
            {PERSONAL_INFO.name}
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#F8F5EF] hover:bg-[#FFFFFF] text-[#222222] border border-[#E5E0D8] rounded-xl text-[11px] font-heading font-bold uppercase tracking-wider btn-tactile cursor-pointer shadow-sm hover:shadow-premium"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#D97745]" />
                <span className="text-[#D97745] font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#6B6660]" />
                <span className="hidden sm:inline">Copy Plaintext</span>
                <span className="sm:hidden">Copy</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Resume%20Inquiry%20-%20Soma%20Sharath%20Kumar`}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#D97745] hover:bg-[#C56636] text-white rounded-xl text-[11px] font-heading font-bold uppercase tracking-wider btn-tactile shadow-glow"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Request PDF</span>
          </a>
        </div>

        {/* Close Button Always Sticky Top-Right */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-4 p-2 rounded-xl bg-[#F8F5EF] hover:bg-[#FFFFFF] text-[#6B6660] hover:text-[#222222] transition-colors border border-[#E5E0D8] cursor-pointer z-20 btn-tactile hover:shadow-premium"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Scrollable Document Content */}
      <div
        className="flex-1 min-h-0 bg-[#FFFFFF] p-5 sm:p-8 overflow-y-auto custom-scrollbar"
        data-lenis-prevent="true"
        data-modal-scroll
        tabIndex={0}
      >
        {/* Document Header */}
        <div className="text-center border-b border-[#E5E0D8] pb-5">
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#222222] tracking-tight">
            SOMA SHARATH KUMAR
          </h1>
          <p className="text-xs font-mono text-[#6B6660] mt-1 flex flex-wrap items-center justify-center gap-3">
            <span>{PERSONAL_INFO.location}</span>
            <span>•</span>
            <span>{PERSONAL_INFO.email}</span>
            <span>•</span>
            <span>{PERSONAL_INFO.phone}</span>
          </p>
          <div className="flex items-center justify-center gap-4 text-xs font-mono text-[#D97745] font-medium mt-2">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
              <Linkedin className="w-3 h-3" /> LinkedIn
            </a>
            <span>•</span>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
              <Github className="w-3 h-3" /> GitHub
            </a>
          </div>
        </div>

        {/* SUMMARY */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase font-bold text-[#D97745] tracking-wider mb-2 border-b border-[#E5E0D8] pb-1">
            SUMMARY
          </h3>
          <p className="text-[#55524D] leading-relaxed">{PERSONAL_INFO.summary}</p>
        </div>

        {/* TECHNICAL SKILLS */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase font-bold text-[#D97745] tracking-wider mb-2 border-b border-[#E5E0D8] pb-1">
            TECHNICAL SKILLS
          </h3>
          <div className="space-y-1.5 text-xs text-[#55524D]">
            <div><strong className="text-[#222222]">Programming Languages:</strong> Python, SQL</div>
            <div><strong className="text-[#222222]">Data Analysis & Visualization:</strong> Pandas, NumPy, Matplotlib, Data Cleaning, Data Preprocessing, ETL</div>
            <div><strong className="text-[#222222]">Database:</strong> MySQL (joins, subqueries, query optimization)</div>
            <div><strong className="text-[#222222]">Generative AI:</strong> Large Language Models (LLMs), Short Language Models (SLMs), Retrieval-Augmented Generation (RAG), Agentic AI</div>
            <div><strong className="text-[#222222]">Tools & Practices:</strong> Git, GitHub, Canva, HTML5, CSS3</div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase font-bold text-[#D97745] tracking-wider mb-2 border-b border-[#E5E0D8] pb-1">
            EXPERIENCE
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between items-baseline font-semibold text-[#222222]">
              <span>Python Developer Intern — AICTE Internship Program</span>
              <span className="text-xs font-mono font-normal text-[#6B6660]">Feb 2025 – Apr 2025</span>
            </div>
            <ul className="space-y-1.5 list-disc list-inside text-xs text-[#55524D]">
              <li>Developed a Python-based fitness tracking application that processed real-time activity data and monitored progress against personalized goals, supporting 30+ test users during evaluation.</li>
              <li>Created data-driven progress visualizations and contributed to iterative improvements through collaborative development practices, earning a Certificate of Merit for project quality and delivery.</li>
            </ul>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase font-bold text-[#D97745] tracking-wider mb-2 border-b border-[#E5E0D8] pb-1">
            PROJECTS
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-baseline font-semibold text-[#222222] mb-1">
                <span>TalentForge — AI-Based Job Portal</span>
                <span className="text-[11px] font-mono text-[#6B6660]">Python | Flask | NLP | scikit-learn | MySQL</span>
              </div>
              <ul className="space-y-1 list-disc list-inside text-xs text-[#55524D]">
                <li>Developed a full-stack AI-based job portal with intelligent resume analysis and candidate-job matching, successfully processing and matching 200+ job listings during testing.</li>
                <li>Built and optimized backend functionalities including user authentication, application tracking, and database management, improving query performance by ~30% while following structured development and version control practices.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-semibold text-[#222222] mb-1">
                <span>Digital Addressing System — QR-Based Location Platform</span>
                <span className="text-[11px] font-mono text-[#6B6660]">Python | HTML | CSS</span>
              </div>
              <ul className="space-y-1 list-disc list-inside text-xs text-[#55524D]">
                <li>Developed a QR-based system for storing and retrieving structured location data with validation logic ensuring 100% accuracy in address storage and retrieval.</li>
                <li>Built a responsive interface for seamless cross-device access; deployed and tested end-to-end functionality across 3 device types.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-semibold text-[#222222] mb-1">
                <span>Personal Fitness Tracker — Python Activity Analytics</span>
                <span className="text-[11px] font-mono text-[#6B6660]">Python | Data Processing | Matplotlib | Data Analysis</span>
              </div>
              <ul className="space-y-1 list-disc list-inside text-xs text-[#55524D]">
                <li>Developed a Python-based fitness tracking application that processed real-time activity data and monitored progress against personalized goals, supporting 30+ test users during evaluation.</li>
                <li>Created data-driven progress visualizations and earned an AICTE Internship Certificate of Merit for clean code execution.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline font-semibold text-[#222222] mb-1">
                <span>EstateFlow AI — AI Real Estate Analytics & Valuation</span>
                <span className="text-[11px] font-mono text-[#6B6660]">Python | Machine Learning | scikit-learn | Flask</span>
              </div>
              <ul className="space-y-1 list-disc list-inside text-xs text-[#55524D]">
                <li>Engineered an AI real estate analytics platform offering intelligent property valuation, market trend prediction, and automated valuation insights.</li>
                <li>Built feature vectorization pipelines and predictive machine learning models with a clean analytics interface.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase font-bold text-[#D97745] tracking-wider mb-2 border-b border-[#E5E0D8] pb-1">
            EDUCATION
          </h3>
          <div className="space-y-2 text-xs">
            <div>
              <div className="flex justify-between font-semibold text-[#222222]">
                <span>B.Tech in Computer Science (Data Science) — CGPA: 9.01 / 10.0</span>
                <span className="font-mono font-normal text-[#6B6660]">2022 – 2026</span>
              </div>
              <div className="text-[#6B6660]">Malla Reddy College of Engineering & Technology, Hyderabad</div>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-[#222222]">
                <span>Intermediate (MPC) — 96.6%</span>
                <span className="font-mono font-normal text-[#6B6660]">2022</span>
              </div>
              <div className="text-[#6B6660]">Pragati Junior College</div>
            </div>

            <div>
              <div className="flex justify-between font-semibold text-[#222222]">
                <span>Matriculation — GPA: 10.0 / 10.0</span>
                <span className="font-mono font-normal text-[#6B6660]">2020</span>
              </div>
              <div className="text-[#6B6660]">Ekalavya High School</div>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS & ACHIEVEMENTS */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase font-bold text-[#D97745] tracking-wider mb-2 border-b border-[#E5E0D8] pb-1">
            CERTIFICATIONS & ACHIEVEMENTS
          </h3>
          <ul className="space-y-1 list-disc list-inside text-xs text-[#55524D]">
            <li><strong>Oracle Dev Gym</strong> — Databases for Developers: scored 98%, ranking in the top 2% globally.</li>
            <li><strong>NPTEL Certified</strong> — Python Programming & Data Structures.</li>
            <li><strong>AICTE Internship</strong> — Certificate of Merit for impactful, clean-code delivery of the Fitness Tracker project.</li>
            <li>Maintained a CGPA of 9.01 / 10.0 consistently across all semesters of B.Tech.</li>
          </ul>
        </div>

        {/* LEADERSHIP & ACTIVITIES */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase font-bold text-[#D97745] tracking-wider mb-2 border-b border-[#E5E0D8] pb-1">
            LEADERSHIP & ACTIVITIES
          </h3>
          <ul className="space-y-1.5 list-disc list-inside text-xs text-[#55524D]">
            <li><strong>Class Representative:</strong> coordinated communication between faculty and 60+ students, resolving academic issues efficiently and on time.</li>
            <li><strong>Event Lead, Hackathon Hustle (MRCET Techfest 2024):</strong> managed participant registration, scheduling, and logistics for 100+ participants.</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
};
