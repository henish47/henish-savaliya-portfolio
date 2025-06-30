import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import project1 from './images/Web capture_28-6-2025_105110_shushrutapharmacy.test.jpeg';
import project2 from './images/expensemanagerproject.png';
import project3 from './images/admindashboard.png'; // Add this image to your /images folder

const Projects = () => {
  const projects = [
    {
      title: 'Sushruta Pharmacy',
      description:
        'Full E-commerce site with cart, checkout, and payment integration using PHP and Razorpay.',
      tech: ['PHP', 'MySQL', 'Razorpay', 'HTML/CSS'],
      // github: 'https://github.com/henishpatel/sushruta-pharmacy',
      image: project1,
    },
   
    {
      title: 'Admin Dashboard – Sushruta Pharmacy',
      description:
        'Fully dynamic admin panel built in PHP & MySQL for managing products, categories, orders, and users with secure login.',
      tech: ['PHP', 'MySQL', 'Bootstrap 5', 'AdminLTE', 'HTML/CSS'],
      // github: 'https://github.com/henishpatel/pharmacy-dashboard',
      image: project3,
    },
    {
      title: 'Expense Manager',
      description:
        'A modern web app to track personal expenses. Add, edit, delete entries with React state management.',
      tech: ['React.js', 'Tailwind CSS', 'LocalStorage'],
      // github: 'https://github.com/henishpatel/expense-manager',
      image: project2,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-primary-light mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    // href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    <FiGithub className="w-6 h-6" />
                  </motion.a>
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
