import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { FiMaximize2, FiMinimize2 } from 'react-icons/fi';
import certificateImg from './images/fullstackcertificate.jpg';

const Education = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const education = [
    {
      degree: 'Certificate in Full Stack Web Development',
      institution: 'Dream Spot IT Academy',
      duration: 'July 2024 – June 2025',
      description: 'Successfully completed a hands-on, project-based training program focused on full stack web development.',
      highlights: [
        'Built live projects including e-commerce websites, login systems, admin dashboards, and search features',
        'Gained practical experience in responsive web design, form validation, database integration, and real-world deployment',
        'Tech Stack: HTML5, CSS, JavaScript, React.js, Node.js, Express.js, Tailwind CSS, Bootstrap 5'
      ],
      certificate: certificateImg
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'RK University',
      duration: '2025 – Present',
      description: 'Currently pursuing diploma in Computer Engineering with focus on software development and web technologies.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg mb-8"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary dark:text-primary-light text-2xl">
                  <FaGraduationCap />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-primary dark:text-primary-light font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {edu.duration}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {edu.description}
                  </p>
                  {edu.highlights && (
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                  {edu.certificate && (
                    <div className="relative mt-4">
                      <div 
                        className="relative cursor-pointer group"
                        onClick={() => setExpandedImage(expandedImage === index ? null : index)}
                      >
                        <img
                          src={edu.certificate}
                          alt={`${edu.degree} Certificate`}
                          className={`rounded-lg shadow-md transition-all duration-300 ${
                            expandedImage === index 
                              ? 'w-full h-auto' 
                              : 'w-full max-w-md mx-auto'
                          }`}
                        />
                        <div className="absolute top-2 right-2 bg-white dark:bg-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          {expandedImage === index ? (
                            <FiMinimize2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                          ) : (
                            <FiMaximize2 className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 