export const profile = {
  name: "Naga Mohana Vamsidhar Bolem",
  title: "AI Engineer | Full Stack Architect | Blockchain Innovator",
  tagline: "Building Intelligent Systems. Engineering the Future.",
  linkedin: "https://www.linkedin.com/in/naga-mohana-vamsidhar-bolem-bb75b5221/",
};

export interface Skill {
  name: string;
  category: string;
  level: number;
  color: string;
}

export const skills: Skill[] = [
  { name: "Python", category: "Languages", level: 95, color: "#22c55e" },
  { name: "React", category: "Frontend", level: 92, color: "#2dd4bf" },
  { name: "Node.js", category: "Backend", level: 90, color: "#4ade80" },
  { name: "MongoDB", category: "Database", level: 88, color: "#34d399" },
  { name: "AWS", category: "Cloud", level: 85, color: "#f59e0b" },
  { name: "AI / ML", category: "Intelligence", level: 94, color: "#a3e635" },
  { name: "Blockchain", category: "Web3", level: 91, color: "#2dd4bf" },
  { name: "Solidity", category: "Smart Contracts", level: 87, color: "#22d3ee" },
  { name: "TypeScript", category: "Languages", level: 90, color: "#38bdf8" },
  { name: "Docker", category: "DevOps", level: 82, color: "#06b6d4" },
];

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  category: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    id: "blockchain-aml",
    title: "Blockchain AML System",
    subtitle: "Anti-Money Laundering Intelligence",
    description: "AI-powered blockchain analytics platform detecting suspicious transaction patterns across decentralized networks. Real-time monitoring with graph neural networks for anomaly detection.",
    techStack: ["Python", "Solidity", "TensorFlow", "Neo4j", "AWS"],
    category: "Blockchain + AI",
    gradient: "from-neon-blue to-neon-purple",
  },
  {
    id: "deepfake-detection",
    title: "AI Deepfake Detection",
    subtitle: "Neural Authenticity Verification",
    description: "Advanced deep learning system using attention mechanisms and frequency analysis to detect synthetic media with 98.7% accuracy across multiple manipulation techniques.",
    techStack: ["Python", "PyTorch", "OpenCV", "React", "FastAPI"],
    category: "AI / Computer Vision",
    gradient: "from-neon-purple to-neon-cyan",
  },
  {
    id: "holopass",
    title: "HoloPass Identity System",
    subtitle: "Decentralized Identity Protocol",
    description: "Blockchain-based decentralized identity verification system using zero-knowledge proofs for privacy-preserving credential validation.",
    techStack: ["Solidity", "ZK-SNARKs", "React", "Node.js", "IPFS"],
    category: "Blockchain",
    gradient: "from-neon-cyan to-neon-blue",
  },
  {
    id: "vision-pose",
    title: "Vision Pose AI",
    subtitle: "Real-time Pose Estimation",
    description: "Computer vision system for real-time human pose estimation and movement analysis using custom CNN architectures optimized for edge deployment.",
    techStack: ["Python", "TensorFlow Lite", "MediaPipe", "React Native", "AWS"],
    category: "AI / IoT",
    gradient: "from-neon-blue to-neon-purple",
  },
  {
    id: "land-registry",
    title: "Blockchain Land Registry",
    subtitle: "Immutable Property Records",
    description: "Smart contract-based land registry system ensuring tamper-proof property records with automated ownership transfers and dispute resolution.",
    techStack: ["Solidity", "Ethereum", "React", "Node.js", "MongoDB"],
    category: "Blockchain",
    gradient: "from-neon-purple to-neon-cyan",
  },
  {
    id: "fintech-dashboard",
    title: "FinTech Dashboard",
    subtitle: "Intelligent Financial Analytics",
    description: "Full-stack financial analytics dashboard with real-time data streaming, predictive modeling, and interactive visualization of complex financial instruments.",
    techStack: ["React", "Node.js", "Python", "D3.js", "PostgreSQL"],
    category: "Full Stack",
    gradient: "from-neon-cyan to-neon-blue",
  },
];

export interface Experience {
  period: string;
  title: string;
  organization: string;
  description: string;
  type: "education" | "work" | "project";
}

export const experiences: Experience[] = [
  {
    period: "2023 — Present",
    title: "AI Systems Architect",
    organization: "Advanced AI & Blockchain Projects",
    description: "Architecting enterprise-grade AI systems integrating blockchain, computer vision, and natural language processing for next-generation applications.",
    type: "work",
  },
  {
    period: "2022 — 2023",
    title: "Full Stack Blockchain Developer",
    organization: "DeFi & Web3 Ecosystem",
    description: "Developed decentralized applications including AML systems, identity protocols, and smart contract platforms on Ethereum and Polygon networks.",
    type: "work",
  },
  {
    period: "2021 — 2023",
    title: "Master of Computer Applications (MCA)",
    organization: "University Studies",
    description: "Advanced studies in AI, Machine Learning, Distributed Systems, and Blockchain Technology. Research focus on AI-powered security systems.",
    type: "education",
  },
  {
    period: "2018 — 2021",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "University Studies",
    description: "Foundation in Computer Science, Data Structures, Algorithms, and Software Engineering. Early exploration of ML and blockchain technologies.",
    type: "education",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
