import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';

interface SkillCategory {
  id: number;
  name: string;
  skills: {
    name: string;
    level: number; // 1-5
    color: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "Frontend",
    skills: [
      { name: "HTML5", level: 5, color: "bg-orange-500" },
      { name: "CSS3/SCSS", level: 4, color: "bg-blue-500" },
      { name: "JavaScript", level: 5, color: "bg-yellow-500" },
      { name: "TypeScript", level: 4, color: "bg-blue-600" },
      { name: "React.js", level: 5, color: "bg-cyan-500" },
      { name: "Tailwind CSS", level: 4, color: "bg-teal-500" },
      { name: "Next.js", level: 3, color: "bg-black" }
    ]
  },
  {
    id: 2,
    name: "Backend",
    skills: [
      { name: "Node.js", level: 4, color: "bg-green-600" },
      { name: "Express.js", level: 4, color: "bg-gray-600" },
      { name: "MongoDB", level: 3, color: "bg-green-500" },
      { name: "REST API", level: 4, color: "bg-blue-500" },
      { name: "GraphQL", level: 3, color: "bg-pink-600" },
      { name: "PostgreSQL", level: 3, color: "bg-blue-700" }
    ]
  },
  {
    id: 3,
    name: "Tools & Others",
    skills: [
      { name: "Git", level: 4, color: "bg-orange-600" },
      { name: "Docker", level: 3, color: "bg-blue-600" },
      { name: "AWS", level: 3, color: "bg-yellow-600" },
      { name: "Webpack", level: 3, color: "bg-blue-500" },
      { name: "Jest", level: 3, color: "bg-red-600" },
      { name: "CI/CD", level: 3, color: "bg-gray-600" }
    ]
  }
];

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Skills & Expertise" subtitle="What I bring to the table" />
        
        <div 
          ref={ref}
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className={`bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-all duration-700 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-5 pb-3 border-b border-gray-100 dark:border-gray-700">
                {category.name}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className={`transition-all duration-700 ${
                      inView 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-8'
                    }`}
                    style={{ transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level * 20}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${skill.color}`}
                        style={{ 
                          width: `${skill.level * 20}%`,
                          transition: 'width 1s ease-in-out',
                          transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 300}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`mt-16 p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Additional Skills
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "UI/UX Design", "Responsive Design", "Progressive Web Apps", 
              "Redux", "RESTful API Design", "Problem Solving", "Team Collaboration",
              "Agile Methodology", "Performance Optimization", "Cross-Browser Compatibility",
              "Code Review", "Technical Documentation", "Figma", "Firebase", "Netlify"
            ].map((skill, index) => (
              <div 
                key={skill}
                className={`px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-500 transform hover:-translate-y-1 hover:shadow-md ${
                  inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${800 + (index * 50)}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;