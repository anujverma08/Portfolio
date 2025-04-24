import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        {subtitle}
      </p>
      <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;