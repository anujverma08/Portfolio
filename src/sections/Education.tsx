import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, GraduationCap, Award, ExternalLink } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
}

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const educations: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "Lovely Professional University",
    period: "Aug 22 - Present",
    description: "",
    gpa: "8.45"
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "St Xavier Public School",
    period: "Apr 20 - Mar 21",
    description: "",
    gpa: "93%"
  },
  {
    id: 3,
    degree: "Matriculation",
    institution: "St Xavier Public School",
    period: "Apr 18- Mar 19",
    description: "",
    gpa: "91%"
  }

];

const certifications: Certification[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "LinkedIn Learning",
    date: "Feb 23",
    link: "https://www.linkedin.com/learning/certificates/344945193aa33f3e6c16a0addfd3e1f00786ea1a0f8914bc8428f38c306caaca"
  },
  {
    id: 2,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google | Coursera",
    date: "Nov 24",
    link: "https://www.coursera.org/account/accomplishments/verify/9W49ZP8PZRP8"
  },
  {
    id: 3,
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "Dec 24",
    link: "https://www.hackerrank.com/certificates/417bce25532c"
  }
];

const Education: React.FC = () => {
  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { ref: certRef, inView: certInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Education & Certifications" subtitle="Academic background and learning journey" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Education
            </h3>
            
            <div 
              ref={educationRef}
              className="space-y-8"
            >
              {educations.map((edu, index) => (
                <div 
                  key={edu.id}
                  className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-600 transition-all duration-700 ${
                    educationInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-12'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{edu.period}</span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {edu.description}
                  </p>
                  
                  {edu.gpa && (
                    <div className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
                      <Award className="w-4 h-4 mr-2 text-yellow-500" />
                      <span>CGPA: {edu.gpa}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
              Certifications
            </h3>
            
            <div 
              ref={certRef}
              className="space-y-6"
            >
              {certifications.map((cert, index) => (
                <div 
                  key={cert.id}
                  className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-700 ${
                    certInView 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-12'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                    {cert.title}
                  </h4>
                  
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span>View Certificate</span>
                  </a>
                </div>
              ))}
            </div>
            
            <div 
              className={`mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md transition-all duration-700 ${
                certInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" />
                Continuous Learning
              </h4>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I'm committed to lifelong learning and regularly participate in online courses, workshops, and coding challenges to stay up-to-date with the latest technologies and best practices.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://leetcode.com/u/anujirverma/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <span>LeetCode</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <span>freeCodeCamp</span>
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <span>Udemy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;