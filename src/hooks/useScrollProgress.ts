import { useState, useEffect, useCallback } from "react";

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? scrollTop / docHeight : 0);

    const sections = ["hero", "skills", "projects", "experience", "contact"];
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return { progress, activeSection };
};
