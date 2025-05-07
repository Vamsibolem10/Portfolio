import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          heading.classList.add('animate-slide-up');
          heading.classList.add('opacity-100');
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(heading);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-40 dark:opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-200 dark:bg-teal-900/20 rounded-full filter blur-3xl opacity-40 dark:opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block relative">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
              Full Stack Developer & AI / ML Engineer
            </span>
          </div>
          
          <h1 
            ref={headingRef}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 opacity-0 transition-all duration-1000 transform translate-y-8"
          >
            Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">Bolem Naga Mohana Vamsidhar</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            A passionate Full Stack Developer & AI/ML Engineer crafting innovative solutions with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors shadow-sm"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center animate-bounce-slow">
          <a 
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="rounded-full border border-gray-300 dark:border-gray-700 p-3 text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
