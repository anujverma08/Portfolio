import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Calendar, GraduationCap, Award } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
}

const educations: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "Lovely Professional University",
    period: "Aug 22 - Present",
    description: "",
    gpa: "CGPA - 8.45"
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "St Xavier Public School",
    period: "Apr 20 - Mar 21",
    description: "",
    gpa: "Percentage - 93%"
  },
  {
    id: 3,
    degree: "Matriculation",
    institution: "St Xavier Public School",
    period: "Apr 18 - Mar 19",
    description: "",
    gpa: "Percentage - 91%"
  }
];

const Education: React.FC = () => {
  const { ref: educationRef, inView: educationInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Education" subtitle="Academic background and learning journey" />
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" />
            Education
          </h3>
          
          <div ref={educationRef} className="space-y-8">
            {educations.map((edu, index) => (
              <div
                key={edu.id}
                className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-600 transition-all duration-700 ${
                  educationInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
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

                {edu.gpa && (
                  <div className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
                    <Award className="w-4 h-4 mr-2 text-yellow-500" />
                    <span>Grade: {edu.gpa}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
