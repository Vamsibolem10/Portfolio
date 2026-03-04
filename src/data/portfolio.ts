export const profile = {
  name: "Bolem Naga Mohana Vamsidhar",
  title: "AI/ML Engineer & Full Stack Developer",
  linkedin: "https://www.linkedin.com/in/naga-mohana-vamsidhar-bolem-bb75b5221/",
  github: "https://github.com/Vamsibolem10",
  email: "bolemvamsi@gmail.com",
  phone: "+91 9182204314",
  location: "Visakhapatnam, India",
};

export interface Skill {
  name: string;
  category: string;
  level: number;
  color: string;
}

export const skills: Skill[] = [
  // Programming & Scripting Languages
  { name: "Python / C", category: "Languages", level: 95, color: "#18181b" },
  { name: "JavaScript / TypeScript", category: "Languages", level: 90, color: "#18181b" },

  // Frontend
  { name: "React.js / Next.js", category: "Frontend", level: 90, color: "#18181b" },
  { name: "Tailwind CSS / MUI", category: "Frontend", level: 88, color: "#18181b" },
  { name: "Redux / Webpack", category: "Frontend", level: 85, color: "#18181b" },

  // Backend
  { name: "Node.js / Express.js", category: "Backend", level: 90, color: "#18181b" },
  { name: "REST API / GraphQL", category: "Backend", level: 88, color: "#18181b" },

  // Databases
  { name: "MongoDB / PostgreSQL", category: "Database", level: 88, color: "#18181b" },
  { name: "MySQL / Redis", category: "Database", level: 85, color: "#18181b" },

  // Cloud & DevOps
  { name: "AWS (Lambda, EC2, S3)", category: "Cloud & DevOps", level: 85, color: "#18181b" },
  { name: "Docker / CI/CD", category: "Cloud & DevOps", level: 82, color: "#18181b" },

  // Machine Learning & Data Science
  { name: "ML (Reg, Class, Trees)", category: "AI / ML", level: 90, color: "#18181b" },
  { name: "CNN / TensorFlow", category: "AI / ML", level: 88, color: "#18181b" },
  { name: "PySpark / Pandas", category: "Data Science", level: 90, color: "#18181b" },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  category: string;
  gradient: string;
  demoLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: "homebite",
    title: "HomeBite",
    subtitle: "Full - Stack Web Application",
    description: "A comprehensive cloud kitchen website designed with modern web architecture.",
    techStack: ["React", "TypeScript", "Node.js", "MongoDB"],
    category: "Full Stack",
    gradient: "from-orange-500 to-red-500",
    demoLink: "https://homebite.up.railway.app/",
  },
  {
    id: "mini-researcher",
    title: "Mini Researcher",
    subtitle: "AI-Powered Research Automation",
    description: "An AI-powered research automation tool designed for data extraction and NLP-based query analysis using the Gemini API.",
    techStack: ["Python", "NLP", "Gemini API"],
    category: "AI / ML",
    gradient: "from-blue-500 to-cyan-400",
    githubLink: "https://github.com/Vamsibolem10/Mini_Researcher",
  },
  {
    id: "jd-cv-match",
    title: "JD & CV Match Score",
    subtitle: "ML-Driven Resume Alignment",
    description: "An ML-driven Flask application that calculates and scores job-resume alignment leveraging NLP techniques and Large Language Models (LLMs).",
    techStack: ["Python", "Flask", "NLP", "LLMs"],
    category: "AI / ML",
    gradient: "from-purple-500 to-blue-500",
    githubLink: "https://github.com/Vamsibolem10/JD-CV-Match-Score",
  },
  {
    id: "doc-query-chat",
    title: "Doc Query Chat",
    subtitle: "RAG-Based Document Q&A",
    description: "A Retrieval-Augmented Generation (RAG) based document Q&A system featuring semantic search utilizing LangChain and vector databases.",
    techStack: ["Python", "LangChain", "Vector DBs", "RAG"],
    category: "AI / ML",
    gradient: "from-teal-400 to-emerald-400",
  },
  {
    id: "cv-redactor",
    title: "CV Redactor",
    subtitle: "AI Sensitive Data Redaction",
    description: "A FastAPI-based AI service responsible for detecting and redacting sensitive data from resumes using Natural Language Processing.",
    techStack: ["Python", "FastAPI", "NLP"],
    category: "AI / Backend",
    gradient: "from-zinc-600 to-zinc-400",
  },
  {
    id: "ai-mock-tests",
    title: "AI Mock Tests",
    subtitle: "Adaptive Testing Platform",
    description: "An AI-driven testing platform designed to generate adaptive assessments with automated scoring mechanisms.",
    techStack: ["AI", "Full Stack", "Adaptive Algorithms"],
    category: "Full Stack / AI",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: "talk-to-resume",
    title: "Talk to Resume",
    subtitle: "Conversational Resume Insight",
    description: "A conversational AI tool built for extracting skills and valuable insights from resumes via NLP interactions.",
    techStack: ["Python", "NLP", "Conversational AI"],
    category: "AI / ML",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "recruiter-co-pilot",
    title: "Recruiter Co-Pilot",
    subtitle: "AI Recruitment Assistant",
    description: "An AI-powered recruitment assistant created for resume screening and enabling intelligent candidate shortlisting.",
    techStack: ["AI", "NLP", "Full Stack"],
    category: "AI / ML",
    gradient: "from-emerald-500 to-teal-500",
  }
];

export interface Experience {
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "work" | "project" | "certificate";
  lor?: string;
}

export const experiences: Experience[] = [
  {
    period: "March - September 2025",
    title: "SDE & AI/ML Intern",
    organization: "Hiringhood",
    description: "Worked on full-stack development using React, TypeScript, Redux, Node.js, and MongoDB, along with AWS and the Serverless framework for cloud deployment. Managed AI/ML responsibilities with production-level tasks.",
    type: "work",
    lor: "/HH_LOR.pdf",
  },
  {
    period: "2023 — 2026",
    title: "Master of Computer Applications",
    organization: "GITAM Deemed University (Vizag)",
    description: "Post-graduate studies focusing on advanced software engineering, AI/ML methodologies.",
    type: "education",
  },
  {
    period: "2020 — 2023",
    title: "Bachelor of Computer Applications",
    organization: "GITAM Deemed University (Vizag)",
    description: "Undergraduate studies with a strong foundation in computer science and programming foundations.",
    type: "education",
  },
  {
    period: "Certificate",
    title: "What is Data Science?",
    organization: "IBM",
    description: "Foundational certification covering data science concepts and the data ecosystem.",
    type: "certificate",
  },
  {
    period: "Certificate",
    title: "Introduction to TCP/IP",
    organization: "Yonsei University",
    description: "Technical certification on networking fundamentals and the TCP/IP protocol suite.",
    type: "certificate",
  },
  {
    period: "Certificate",
    title: "Python Programming Essentials",
    organization: "Rice University",
    description: "Comprehensive introduction to Python programming concepts, data structures, and algorithms.",
    type: "certificate",
  },
  {
    period: "Certificate",
    title: "Introduction to Data Analysis Using Excel",
    organization: "Rice University",
    description: "Certification covering foundational data analysis techniques using Microsoft Excel.",
    type: "certificate",
  }
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Career", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

