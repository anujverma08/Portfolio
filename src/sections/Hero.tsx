import React, { useEffect, useState } from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation on component mount
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          {/* Background pattern */}
          <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
        </div>
      </div>

      <div className="container px-4 py-16 mx-auto z-10">
        <div className="flex flex-col items-center text-center">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <img 
              src="assets/anuj.jpg " 
              alt="Profile" 
              className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg mb-8"
            />
          </div>

          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Anuj Verma
          </h1>

          <div 
            className={`text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-[4rem] transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <TypeAnimation
              sequence={[
                'Software Developer',
                1500,
                'Frontend Engineer',
                1500,
                'Full Stack Developer',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-blue-600 dark:text-blue-400 font-medium"
            />
          </div>

          <p 
            className={`max-w-2xl text-lg text-gray-600 dark:text-gray-300 mb-10 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            Passionate about creating elegant, efficient, and user-friendly web applications.
            I specialize in building modern web experiences with React and cutting-edge technologies.
          </p>

          <div 
            className={`flex space-x-6 mb-12 transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <a 
              href="https://github.com/anujverma08" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
              aria-label="GitHub"
            >
              <GitHub className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="https://www.linkedin.com/in/anujir-verma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a 
              href="mailto:anujirverma@gmail.com" 
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>

          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <a 
              href="#about" 
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 animate-bounce"
              aria-label="Scroll down"
            >
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;