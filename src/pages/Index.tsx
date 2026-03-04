import Scene from "@/components/3d/Scene";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Scene />
      <Navbar />
      <main className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <div className="space-y-40 pb-40">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
