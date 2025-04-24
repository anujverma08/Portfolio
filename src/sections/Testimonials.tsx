import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    position: "Project Manager",
    company: "TechCorp Solutions",
    content: "Anujir is one of the most talented developers I've ever worked with. His attention to detail and problem-solving skills are exceptional. He delivered our project ahead of schedule and exceeded our expectations with the quality of his work.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300"
  },
  {
    id: 2,
    name: "Sarah Williams",
    position: "UI/UX Designer",
    company: "DesignHub",
    content: "Working with Anujir was a pleasure. He brought our designs to life with perfect precision and added valuable suggestions to improve the user experience. His code is clean, well-documented, and easy to maintain.",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "CTO",
    company: "Startup Innovations",
    content: "Anujir helped us rebuild our core product from the ground up. His expertise in React and performance optimization resulted in a 40% improvement in load times. He's not just a developer but a true problem solver who cares about the product.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Product Owner",
    company: "Digital Solutions Inc.",
    content: "I've worked with many developers, but Anujir stands out for his ability to understand business requirements and translate them into elegant technical solutions. He's reliable, communicative, and delivers high-quality work consistently.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handlePrevious = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Testimonials" subtitle="What people say about my work" />
        
        <div 
          ref={ref}
          className={`mt-12 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Quote icon */}
            <div className="absolute -top-10 -left-10 w-20 h-20 text-blue-200 dark:text-blue-900 opacity-50">
              <Quote className="w-full h-full" />
            </div>
            
            {/* Testimonial content */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 md:p-12">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`transition-all duration-500 ${
                    index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute'
                  }`}
                  style={{ display: index === currentIndex ? 'block' : 'none' }}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400">
                          {testimonial.position}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation buttons */}
              <div className="flex justify-between mt-8">
                <button 
                  onClick={handlePrevious}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button 
                      key={index} 
                      onClick={() => handleDotClick(index)}
                      className={`w-3 h-3 rounded-full transition ${
                        index === currentIndex 
                          ? 'bg-blue-600 dark:bg-blue-400' 
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-300 dark:hover:bg-blue-700'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;