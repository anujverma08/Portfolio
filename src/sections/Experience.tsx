import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: "Squeezy 2FA System",
    company: "Authentication System",
    location: "",
    period: "Mar 25 - Present",
    description: [
      "Built secure MERN authentication system integrated with Next.js frontend.",
      "Implemented two-factor authentication and email verification for secure access.",
      "Integrated Nodemailer to send verification and 2FA setup emails.",
      "Used JWT, cookies, sessions to manage authentication and user authorization."
    ]
  },
  {
    id: 2,
    role: "CarbonTracker ",
    company: "Coal Emissions App",
    location: "Smart India Hackathon 2024",
    period: "Oct 24",
    description: [
      "Developed a Coal Emissions application that measures carbon emissions from industrial processes.",
      "Implemented data visualization tools using React and Chart.js to display emission metrics.",
      "Collaborated with cross-functional teams to gather requirements and implement features.",
      "Optimized application performance through code refactoring and improved state management."
    ]
  },
  {
    id: 3,
    role: "Video Streaming Platform",
    company: "",
    location: "",
    period: "May 24",
    description: [
      "Created video streaming platform using Angular, Node.js, and MongoDB.",
      "User-friendly video streaming platform designed to support up to 100 users.",
      "Designed and developed RESTful APIs for content management and user interactions.",
      "Integrated third-party services for video processing and storage optimization."
    ]
  }
];

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Work Experience" subtitle="My professional journey" />
        
        <div 
          ref={ref} 
          className="mt-12 relative"
        >
          {/* Timeline bar */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`mb-12 md:mb-0 relative ${
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
              } transition-all duration-1000 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms`,
                minHeight: '250px' 
              }}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-6 w-6 h-6 rounded-full bg-blue-600 shadow z-10 transform -translate-x-1/2 left-1/2"></div>
              
              {/* Content card */}
              <div 
                className={`md:w-1/2 ${
                  index % 2 === 0 ? 'md:float-left' : 'md:float-right'
                } bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 relative z-0`}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Connect to GitHub repos for each experience */}
                {exp.company === "Coal Emissions App" && (
                  <a 
                    href="https://github.com/anujverma08/coal-emissions-app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project Repository
                  </a>
                )}
                
                {exp.company === "" && (
                  <a 
                    href="https://github.com/anujverma08/Video-Streaming-Platform" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project Repository
                  </a>
                )}
                
                {exp.company === "Authentication System" && (
                  <a 
                    href="https://github.com/anujverma08/Authentication" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Project Repository
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;