import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiExpress, SiMongodb, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      description: 'Building beautiful and responsive user interfaces',
      icon: <FaReact className="w-6 h-6" />,
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8" />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt className="w-8 h-8" />, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs className="w-8 h-8" />, color: '#F7DF1E' },
        { name: 'React', icon: <FaReact className="w-8 h-8" />, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" />, color: '#06B6D4' },
        { name: 'Bootstrap', icon: <SiBootstrap className="w-8 h-8" />, color: '#7952B3' },
      ],
    },
    {
      title: 'Backend',
      description: 'Developing robust and scalable server-side applications',
      icon: <FaNodeJs className="w-6 h-6" />,
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress className="w-8 h-8" />, color: '#000000' },
        { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, color: '#47A248' },
        { name: 'PHP', icon: <FaPhp className="w-8 h-8" />, color: '#777BB4' },
        { name: 'MySQL', icon: <SiMysql className="w-8 h-8" />, color: '#4479A1' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 dark:bg-primary-light/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 dark:bg-primary-light/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-primary-dark dark:from-primary-light dark:to-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative">
                {/* Card background with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl transform transition-transform duration-300 group-hover:scale-[1.02]" />
                
                {/* Card content */}
                <div className="relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/10 dark:bg-primary-light/10 rounded-xl text-primary dark:text-primary-light">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mt-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/skill relative"
                      >
                        {/* Skill card background with gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl transform transition-transform duration-300 group-hover/skill:scale-[1.02]" />
                        
                        {/* Skill card content */}
                        <div className="relative flex flex-col items-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                          <div 
                            className="mb-2 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:rotate-3"
                            style={{ color: skill.color }}
                          >
                            {skill.icon}
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 