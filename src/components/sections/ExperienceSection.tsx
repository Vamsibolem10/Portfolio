import React from 'react';

const experience = {
  role: "Software Engineer Intern",
  company: "Hiringhood · Internship",
  logo: "https://media-exp1.licdn.com/dms/image/D4E0BAQEPjuz5yQdGUQ/company-logo_200_200/0/1663844374296?e=2147483647&v=beta&t=7vGGsRjAGSTYNJ8vKvuJ0nKXhRbzM0MsE2hzAd9VXLY",
  duration: "Mar 2025 - Present",
  description:
    "As a Software Engineer Intern at Hiringhood, I contribute to full-stack development using React, TypeScript, Redux, Node.js, and MongoDB, building scalable and secure applications while following best software engineering practices. I collaborate with cross-functional teams to enhance performance and user experience, ensuring efficient and user-friendly solutions. Additionally, I work with AWS and the Serverless framework for cloud deployment and infrastructure management. My role also involves actively participating in code reviews, debugging, and optimizing software solutions to maintain high-quality standards.",
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">Work Experience</h2>
          <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Here's a glimpse of my current professional role and contributions.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full mb-3">
            {experience.duration}
          </span>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{experience.role}</h3>
          <div className="flex items-center gap-2 mb-4">
            <img
              src={experience.logo}
              alt="Hiringhood Logo"
              className="h-8 w-8 rounded-full"
            />
            <h4 className="text-xl text-blue-500 dark:text-blue-400">{experience.company}</h4>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {experience.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
