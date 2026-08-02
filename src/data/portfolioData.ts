import { Project, Skill, Experience, SimpleEducation, Certification, LeadershipActivity, AchievementItem } from '../types';
import { certificateAssets } from '../lib/certificateAssets';

export const PERSONAL_INFO = {
  name: "Soma Sharath Kumar",
  title: "AI Engineer & Data Scientist",
  role: "Computer Science (Data Science) Graduate",
  shortTitle: "Computer Science (Data Science) Graduate",
  location: "Hyderabad, India",
  email: "somakanny@gmail.com",
  phone: "+91 79936 43245",
  github: "https://github.com/Sharath-Soma",
  linkedin: "https://linkedin.com/in/sharath-kumar-soma",
  cgpa: "9.01 / 10.0",
  summary: "Computer Science (Data Science) graduate with a CGPA of 9.01/10 and hands-on experience building AI-powered applications, intelligent data solutions, and analytics-driven systems. Skilled in Python, SQL, machine learning, data analysis, and Generative AI technologies including LLMs, RAG, SLMs, and Agentic AI. Experienced in developing full-stack AI applications, resume matching systems, recommendation engines, and data processing pipelines. Recognized with the AICTE Certificate of Merit and ranked among the top 2% globally in Oracle's Databases for Developers assessment."
};

export const PROJECTS: Project[] = [
  {
    id: "talentforge",
    title: "TalentForge",
    subtitle: "AI-Based Job Portal",
    category: "AI / NLP",
    featured: true,
    description: "Developed a full-stack AI-based job portal with intelligent resume analysis and candidate-job matching, successfully processing and matching 200+ job listings during testing.",
    problem: "Traditional job platforms rely on rigid keyword searches, leading to poor relevance in applicant evaluation and slow screening workflows.",
    solution: "Engineered an AI candidate-job matching system utilizing Flask, NLP, scikit-learn feature vectorization, and optimized MySQL queries.",
    techStack: ["Python", "Flask", "NLP", "scikit-learn", "MySQL"],
    keyFeatures: [
      "Intelligent resume analysis and automated candidate-job matching",
      "Successfully processed and matched 200+ job listings during evaluation",
      "User authentication, application tracking, and relational database management",
      "Improved query performance by ~30% with structured database architecture"
    ],
    githubUrl: "https://github.com/Sharath-Soma/TalentForge",
    caseStudy: {
      overview: "TalentForge is a full-stack AI-based job portal that replaces keyword scanners with intelligent resume analysis and TF-IDF candidate matching.",
      keyChallenges: [
        "Parsing complex resume formats to accurately extract candidate competencies and skills.",
        "Optimizing relational database join queries in MySQL to speed up job-applicant matching under heavy query loads."
      ],
      technicalArchitecture: "Flask REST backend in Python, scikit-learn NLP feature vectorizers, structured MySQL database schema with custom indexes.",
      results: "Improved database query performance by ~30% and processed 200+ job listings with accurate candidate matching."
    }
  },
  {
    id: "digital-addressing-system",
    title: "Digital Addressing System",
    subtitle: "QR-Based Location Platform",
    category: "Web Applications",
    featured: true,
    description: "Developed a QR-based system for storing and retrieving structured location data with validation logic ensuring 100% accuracy in address storage and retrieval.",
    problem: "Unstructured or ambiguous physical address details lead to delivery errors and difficult location lookups.",
    solution: "Built a QR-code encoding and decoding platform in Python with client validation logic and cross-device responsive user interfaces.",
    techStack: ["Python", "HTML", "CSS"],
    keyFeatures: [
      "QR-based system for storing and retrieving structured location data",
      "Validation logic ensuring 100% accuracy in address storage and retrieval",
      "Responsive interface for seamless cross-device access",
      "Deployed and tested end-to-end functionality across 3 device types"
    ],
    githubUrl: "https://github.com/Sharath-Soma/Digital_Addressing_System",
    caseStudy: {
      overview: "The Digital Addressing System generates standardized QR tokens for location data, making address lookup quick, reliable, and error-free.",
      keyChallenges: [
        "Ensuring input data sanitization and strict validation logic before QR generation.",
        "Guaranteeing uniform layout rendering and scanner accessibility across diverse mobile screens."
      ],
      technicalArchitecture: "Python backend location processing engine combined with lightweight HTML5/CSS3 responsive views.",
      results: "Achieved 100% accuracy in location storage/retrieval and seamless deployment across 3 target device categories."
    }
  },
  {
    id: "personal-fitness-tracker",
    title: "Personal Fitness Tracker",
    subtitle: "Python Activity & Health Analytics",
    category: "Data Science",
    featured: true,
    description: "Developed a Python-based fitness tracking application that processed real-time activity data and monitored progress against personalized goals, supporting 30+ test users during evaluation.",
    problem: "Individuals struggle to maintain health goals without automated tracking, data visualizations, and progress feedback.",
    solution: "Engineered an end-to-end Python fitness analytics application with interactive progress visualizations and goal monitoring.",
    techStack: ["Python", "Data Processing", "Matplotlib", "Data Analysis"],
    keyFeatures: [
      "Processed real-time activity data and monitored progress against personalized goals",
      "Supported 30+ test users during evaluation with high user retention and feedback",
      "Data-driven progress visualizations using Python and Matplotlib",
      "Awarded AICTE Internship Certificate of Merit for project execution"
    ],
    githubUrl: "https://github.com/Sharath-Soma/Implementation-of-Personal-Fitness-Tracker-using-Python",
    caseStudy: {
      overview: "Personal Fitness Tracker is a data-driven health application designed during the AICTE Internship to analyze user fitness metrics and generate visual goal progress reports.",
      keyChallenges: [
        "Structuring variable activity logs and sanitizing irregular health metric inputs.",
        "Creating intuitive progress charts and feedback indicators for non-technical users."
      ],
      technicalArchitecture: "Python backend analytics engine, Matplotlib data visualizer, and structured data processing pipelines.",
      results: "Tested with 30+ users, delivering reliable activity tracking and earning AICTE Certificate of Merit."
    }
  },
  {
    id: "estateflow-ai",
    title: "EstateFlow AI",
    subtitle: "AI Real Estate Analytics & Valuation",
    category: "AI / NLP",
    featured: true,
    description: "AI-driven real estate platform offering intelligent property valuation, market predictive analytics, and automated valuation insights.",
    problem: "Property buyers and investors lack real-time predictive pricing models and automated market trend analysis.",
    solution: "Engineered EstateFlow AI to analyze property features, market trends, and valuation models with an intuitive analytics dashboard.",
    techStack: ["Python", "Machine Learning", "scikit-learn", "Flask", "Data Science"],
    keyFeatures: [
      "Predictive property valuation model trained on structured market feature vectors",
      "Interactive dashboard for real-time property analytics and price estimations",
      "Automated insights on neighborhood metrics and price trend predictions",
      "Clean modular architecture with robust feature vectorization pipelines"
    ],
    githubUrl: "https://github.com/Sharath-Soma/EstateFlow-AI",
    caseStudy: {
      overview: "EstateFlow AI leverages machine learning and property feature analytics to estimate market valuations and supply predictive real estate insights.",
      keyChallenges: [
        "Feature engineering on heterogeneous location and property condition variables.",
        "Balancing predictive model accuracy against real-time API response speeds."
      ],
      technicalArchitecture: "Python machine learning pipeline, scikit-learn regression models, and Flask REST API backend.",
      results: "Delivers fast, accurate property valuations with automated insight summaries."
    }
  }
];

export const SKILLS: Skill[] = [
  // Programming
  { name: "Python", category: "Programming", iconName: "python" },
  { name: "SQL", category: "Programming", iconName: "database" },

  // Generative AI
  { name: "Large Language Models (LLMs)", category: "Generative AI", iconName: "brain" },
  { name: "Short Language Models (SLMs)", category: "Generative AI", iconName: "cpu" },
  { name: "Retrieval-Augmented Generation (RAG)", category: "Generative AI", iconName: "network" },
  { name: "Agentic AI", category: "Generative AI", iconName: "sparkles" },

  // Machine Learning
  { name: "Machine Learning", category: "Machine Learning", iconName: "cpu" },
  { name: "scikit-learn", category: "Machine Learning", iconName: "activity" },
  { name: "NLP", category: "Machine Learning", iconName: "layers" },

  // Data Analysis & Visualization
  { name: "Pandas", category: "Data Analysis & Visualization", iconName: "table" },
  { name: "NumPy", category: "Data Analysis & Visualization", iconName: "activity" },
  { name: "Matplotlib", category: "Data Analysis & Visualization", iconName: "bar-chart" },
  { name: "Data Cleaning", category: "Data Analysis & Visualization", iconName: "layers" },
  { name: "Data Preprocessing", category: "Data Analysis & Visualization", iconName: "layers" },
  { name: "ETL", category: "Data Analysis & Visualization", iconName: "network" },
  { name: "Power BI", category: "Data Analysis & Visualization", iconName: "pie-chart" },
  { name: "Excel", category: "Data Analysis & Visualization", iconName: "table" },

  // Databases
  { name: "MySQL", category: "Databases", iconName: "database" },

  // Developer Tools
  { name: "Git", category: "Developer Tools", iconName: "git-branch" },
  { name: "GitHub", category: "Developer Tools", iconName: "github" },
  { name: "Canva", category: "Developer Tools", iconName: "palette" },
  { name: "HTML5", category: "Programming", iconName: "code" },
  { name: "CSS3", category: "Programming", iconName: "layout" }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "aicte-python-intern",
    company: "AICTE Internship Program",
    role: "Python Developer Intern",
    location: "Remote",
    period: "Feb 2025 — Apr 2025",
    type: "Internship",
    points: [
      "Developed a Python-based fitness tracking application that processed real-time activity data and monitored progress against personalized goals, supporting 30+ test users during evaluation.",
      "Created data-driven progress visualizations and contributed to iterative improvements through collaborative development practices, earning a Certificate of Merit for project quality and delivery."
    ],
    skillsUsed: ["Python", "Data Processing", "Data Visualization", "Git", "Agile/Scrum"]
  }
];

export const EDUCATION: SimpleEducation[] = [
  {
    level: "B.Tech",
    degree: "Computer Science (Data Science)",
    institution: "Malla Reddy College of Engineering & Technology, Hyderabad",
    period: "2022 — 2026",
    score: "CGPA: 9.01 / 10.0"
  },
  {
    level: "Intermediate",
    degree: "Intermediate (MPC)",
    institution: "Pragati Junior College",
    period: "2022",
    score: "96.6%"
  },
  {
    level: "Matriculation",
    degree: "Secondary School Certificate (SSC)",
    institution: "Ekalavya High School",
    period: "2020",
    score: "GPA: 10.0 / 10.0"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "oracle-dev-gym",
    title: "Databases for Developers: Foundations",
    issuer: "Oracle Corporation",
    date: "2024",
    badgeText: "Top 2% Globally (Grade 98%)",
    skills: ["MySQL", "Joins & Subqueries", "Query Optimization", "Database Design"],
    previewImage: certificateAssets.oracle,
    downloadName: 'Oracle Dev Gym.webp',
    verificationUrl: "https://devgym.oracle.com",
    logoType: "oracle"
  },
  {
    id: "hackerrank-sql-advanced",
    title: "SQL (Advanced)",
    issuer: "HackerRank",
    date: "2025",
    badgeText: "SQL Advanced Certified",
    skills: ["Advanced SQL", "Window Functions", "Performance Tuning", "CTEs"],
    previewImage: certificateAssets.hackerrank,
    downloadName: 'SQL Hackerrank.webp',
    verificationUrl: "https://www.hackerrank.com/certificates/0699D94E1860",
    logoType: "hackerrank"
  },
  {
    id: "nptel-python",
    title: "Programming, Data Structures And Algorithms Using Python",
    issuer: "NPTEL / IIT Madras",
    date: "2025",
    badgeText: "Elite NPTEL Certified (63%)",
    skills: ["Python", "Data Structures", "Algorithms", "Problem Solving"],
    previewImage: certificateAssets.nptel,
    downloadName: 'NPTEL.webp',
    verificationUrl: "https://nptel.ac.in",
    logoType: "nptel"
  },
  {
    id: "aicte-internship",
    title: "AI: Transformative Learning with TechSaksham",
    issuer: "AICTE & Edunet Foundation (Microsoft & SAP)",
    date: "Apr 2025",
    badgeText: "Certificate of Internship",
    skills: ["AI", "TechSaksham", "Python", "Data Analytics"],
    previewImage: certificateAssets.aicte,
    downloadName: 'AICTE Sharath.webp',
    logoType: "aicte"
  },
  {
    id: "ibm-coursera",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM (via Coursera)",
    date: "2023",
    badgeText: "IBM Professional Certificate",
    skills: ["Data Science", "Python for AI", "Pandas", "Data Analytics"],
    previewImage: certificateAssets.ibm,
    downloadName: 'IBM Coursera.webp',
    verificationUrl: "https://coursera.org/verify/ONHZAO9AXFFR",
    logoType: "ibm"
  },
  {
    id: "cisco-ccna",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2025",
    badgeText: "Cisco Certified",
    skills: ["Networking Protocols", "TCP/IP", "Network Security", "Routing"],
    previewImage: certificateAssets.cisco,
    downloadName: 'CCNA Sharath.webp',
    verificationUrl: "https://www.credly.com/org/cisco",
    logoType: "cisco"
  }
];

export const LEADERSHIP_ACTIVITIES: LeadershipActivity[] = [
  {
    role: "Class Representative",
    details: "Coordinated communication between faculty and 60+ students, resolving academic issues efficiently and on time."
  },
  {
    role: "Event Lead, Hackathon Hustle (MRCET Techfest 2024)",
    details: "Managed participant registration, scheduling, and logistics for 100+ participants."
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "academic-excellence",
    title: "Consistent Academic Excellence",
    description: "Maintained a CGPA of 9.01/10.0 consistently throughout my B.Tech.",
    year: "2022–2026",
    category: "Academic"
  },
  {
    id: "class-representative",
    title: "Class Representative",
    description: "Coordinated communication between faculty and more than 60 students while resolving academic issues efficiently.",
    year: "2023–2024",
    category: "Leadership"
  },
  {
    id: "event-lead-hackathon",
    title: "Event Lead – Hackathon Hustle",
    description: "Managed participant registration, scheduling, and logistics for over 100 participants during MRCET Techfest 2025.",
    year: "2025",
    category: "Event Management"
  }
];
