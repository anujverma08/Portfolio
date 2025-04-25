import React from 'react';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../components/SectionTitle';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "LinkedIn Learning",
    date: "Feb 23",
    link: "https://www.linkedin.com/learning/certificates/344945193aa33f3e6c16a0addfd3e1f00786ea1a0f8914bc8428f38c306caaca",
    image: "assets/cert_fullstack.png"
  },
  {
    id: 2,
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google | Coursera",
    date: "Nov 24",
    link: "https://www.coursera.org/account/accomplishments/verify/9W49ZP8PZRP8",
    image: "assets/cert_networking.png"
  },
  {
    id: 3,
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "Dec 24",
    link: "https://www.hackerrank.com/certificates/417bce25532c",
    image: "assets/cert_java.png"
  }
];

const Certifications: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Certifications" 
          subtitle="Verified credentials and achievements"
        />
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl transform hover:-translate-y-2 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  Issued: {cert.date}
                </p>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
