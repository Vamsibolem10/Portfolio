import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

// Define project data
const projects = [
  {
    id: 1,
    title: "Auth - Flow",
    description: "A full-stack e-commerce platform with payment integration, user authentication, and product management.",
    image: "https://static.vecteezy.com/system/resources/previews/021/919/677/original/login-icon-in-trendy-flat-style-isolated-on-white-background-approach-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-flat-style-for-graphic-design-vector.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Vamsidharbolem/Tasks/tree/main/auth-flow",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Calculator",
    description: "A modern Calculator website with smooth animations and responsive design.",
    image: "https://i.pinimg.com/originals/ad/51/33/ad513309cf3f7472d51cf51678847f72.jpg",
    tags: ["React", "TypeScript", "MUI Components"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Vamsidharbolem/Tasks/tree/main/calculator-app",
    category: "frontend"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "https://images.pexels.com/photos/3299/postit-scrabble-to-do.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Redux"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Vamsidharbolem/Tasks/tree/main/todo",
    category: "fullstack"
  },
  {
    id: 4,
    title: "Weather Forecast API",
    description: "RESTful API for weather forecasting with data aggregation from multiple sources.",
    image: "https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/Vamsidharbolem/Tasks/tree/main/weather-app1",
    category: "frontend"
  },
  {
    id: 5,
title: "Recipe Book",
description: "An interactive dashboard designed for keeping track of recipe ingredients and providing cooking demos.",
image: "https://th.bing.com/th/id/OIP.IGvPS1oIlHzn-iIV70KLkQHaJg?cb=iwp1&w=477&h=612&rs=1&pid=ImgDetMain",
tags: ["React", "Node.js"],
liveUrl: "https://example.com",
githubUrl: "https://github.com/Vamsidharbolem/Tasks/tree/main/recipe-book",
category: "frontend"
  },
];

type ProjectCardProps = {
  project: typeof projects[0];
  isVisible: boolean;
};

const ProjectCard = ({ project, isVisible }: ProjectCardProps) => {
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="relative overflow-hidden group">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex space-x-3">
            <a 
              href={project.githubUrl} 
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
            <a 
              href={project.liveUrl} 
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
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
  
  useEffect(() => {
    // Reset visible projects when filter changes
    setVisibleProjects([]);
    
    // Create staggered animation for projects
    const projectsContainer = projectsRef.current;
    if (!projectsContainer) return;
    
    const projectElements = projectsContainer.querySelectorAll('[data-project-id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const projectId = Number(entry.target.getAttribute('data-project-id'));
            setVisibleProjects(prev => [...prev, projectId]);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    projectElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      observer.disconnect();
    };
  }, [filter]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={sectionRef} className="opacity-0 transition-opacity duration-1000">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Projects</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Here are some of the projects I've worked on. Each project showcases different skills and technologies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {['all', 'frontend', 'backend', 'fullstack'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div 
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <div key={project.id} data-project-id={project.id}>
                <ProjectCard 
                  project={project} 
                  isVisible={visibleProjects.includes(project.id)}
                />
              </div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;