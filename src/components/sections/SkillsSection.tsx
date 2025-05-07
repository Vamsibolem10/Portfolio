import { useEffect, useRef } from 'react';

// Define skill categories with their skills
const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'CI/CD', level: 70 },
      { name: 'Figma', level: 60 },
    ],
  },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const barRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.style.width = `${level}%`;
          bar.classList.add('opacity-100');
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(bar);
    
    return () => {
      observer.disconnect();
    };
  }, [level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          ref={barRef}
          className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 transition-all duration-1000 ease-out"
          style={{ width: '0%' }}
        ></div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="opacity-0 transition-opacity duration-1000">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300">
              I've worked with a variety of technologies and tools throughout my career.
              Here's a snapshot of my technical expertise and proficiency levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-transform hover:-translate-y-2 duration-300"
              >
                <h3 className="text-xl font-bold mb-6 pb-3 border-b border-gray-100 dark:border-gray-700">{category.name}</h3>
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex} 
                      name={skill.name} 
                      level={skill.level} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Other Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Next.js', 'Redux', 'GraphQL', 'Webpack', 
                'Firebase', 'Redis', 'JWT', 'OAuth', 
                'REST API', 'Material UI', 'PySpark', 'CNN', 'Linear Regression'
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-300 transition-colors hover:bg-blue-100 dark:hover:bg-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;