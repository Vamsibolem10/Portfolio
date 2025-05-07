import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('animate-fade-in');
          section.classList.add('opacity-100');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="opacity-0 transition-opacity duration-1000">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">About Me</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex justify-center">
            {/* About Me Card */}
            <div className="w-full max-w-3xl bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center mb-8">
                <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">
                  Bolem Naga Mohana Vamsidhar
                </h3>
                <h4 className="text-xl text-blue-500 dark:text-blue-400 mb-6">Full Stack Developer & AI/ML Engineer</h4>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                I'm a passionate developer with expertise in building modern web applications. With a strong
                background in both frontend and backend technologies, I create seamless digital experiences that are
                functional, intuitive, and visually appealing.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                My journey in tech started with a curiosity about how things work on the web, which led me to explore
                various programming languages and frameworks. From e-commerce platforms to interactive web apps, I’ve
                worked on projects that span a wide range of industries.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                When I’m not coding, I explore new technologies, contribute to open-source projects, and enjoy outdoor
                activities to maintain a healthy work-life balance.
              </p>

              <div className="flex flex-wrap gap-6 justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-gray-700 dark:text-gray-200 text-lg">Based in Visakhapatnam, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-teal-500"></div>
                  <span className="text-gray-700 dark:text-gray-200 text-lg">Available for freelance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                  <span className="text-gray-700 dark:text-gray-200 text-lg">Open to collaboration</span>
                </div>
              </div>

              {/* Resume Download Button */}
              <div className="flex justify-center mt-8">
                <a
                  href="/Resume.pdf" // Link to the resume file in the public folder
                  download
                  className="inline-block py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
