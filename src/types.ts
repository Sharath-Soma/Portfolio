export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI / NLP' | 'Web Applications' | 'Data Science';
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  keyFeatures: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  caseStudy: {
    overview: string;
    keyChallenges: string[];
    technicalArchitecture: string;
    results: string;
  };
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Generative AI' | 'Machine Learning' | 'Data Analysis & Visualization' | 'Databases' | 'Developer Tools';
  iconName: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  points: string[];
  skillsUsed: string[];
}

export interface SimpleEducation {
  level: string; // "B.Tech", "Intermediate", "Matriculation"
  degree: string;
  institution: string;
  period: string;
  score?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeText: string;
  skills: string[];
  previewImage: string;
  downloadName: string;
  verificationUrl?: string;
  logoType?: 'oracle' | 'hackerrank' | 'nptel' | 'aicte' | 'ibm' | 'cisco';
}

export interface LeadershipActivity {
  role: string;
  details: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  year: string;
  category: 'Academic' | 'Leadership' | 'Event Management';
}
