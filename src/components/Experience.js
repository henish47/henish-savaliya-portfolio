import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: 'Jan 2022 - Present',
      description: [
        'Led the development of a microservices-based e-commerce platform serving 1M+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews',
        'Optimized database queries improving application performance by 40%',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      location: 'New York, NY',
      period: 'Mar 2020 - Dec 2021',
      description: [
        'Developed and maintained multiple client projects using React and Node.js',
        'Collaborated with UX designers to implement responsive designs',
        'Integrated third-party APIs and payment gateways',
        'Implemented automated testing reducing bug reports by 30%',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Web Solutions',
      location: 'Boston, MA',
      period: 'Jun 2019 - Feb 2020',
      description: [
        'Built responsive web applications using React and Redux',
        'Worked closely with backend team to integrate REST APIs',
        'Implemented modern UI/UX designs and animations',
        'Participated in agile development processes',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-lighter rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                    <FiBriefcase className="w-4 h-4 mr-2" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-1">
                    <FiCalendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <FiMapPin className="w-4 h-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 