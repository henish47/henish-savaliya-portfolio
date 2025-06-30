import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiUsers, FiAward, FiCoffee } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices and design patterns.',
      color: '#3B82F6',
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: 'Modern Stack',
      description: 'Using the latest technologies and frameworks to build cutting-edge applications.',
      color: '#10B981',
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'User Focused',
      description: 'Creating intuitive and engaging user experiences that solve real problems.',
      color: '#8B5CF6',
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: 'Problem Solver',
      description: 'Finding efficient solutions to complex technical challenges.',
      color: '#F59E0B',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 dark:bg-primary-light/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 dark:bg-primary-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-dark dark:from-primary-light dark:to-primary mx-auto rounded-full mb-8" />
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              I'm a passionate full-stack developer currently pursuing a diploma in Computer Engineering at RK University. 
              I love building responsive web applications using modern technologies like ReactJS, Tailwind CSS, Node.js, and MongoDB. 
              I enjoy converting ideas into real-world projects with clean code and smooth UX.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
            <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 dark:bg-primary-light/10 rounded-xl text-primary dark:text-primary-light">
                  <FiCoffee className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  My Journey
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end
                  technologies. With several years of experience in web development, I specialize in creating
                  responsive, user-friendly applications that deliver exceptional user experiences.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  My journey in software development started with a curiosity about how things work on the web.
                  This curiosity has evolved into a deep understanding of modern web technologies and best
                  practices in software development.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source
                  projects, or sharing my knowledge through technical writing and mentoring.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group/skill relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl transform transition-transform duration-300 group-hover/skill:scale-[1.02]" />
                <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div 
                    className="mb-4 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:rotate-3"
                    style={{ color: feature.color }}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 