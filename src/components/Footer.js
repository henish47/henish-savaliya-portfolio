import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/henish47', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/henish-savaliya-41954032a/', label: 'LinkedIn' },
   
    { icon: <FiMail />, url: 'mailto:henishpatel@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 dark:bg-primary-light/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 dark:bg-primary-light/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <span className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {link.icon}
                  </span>
                </div>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
              © {new Date().getFullYear()} Henish Savaliya. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 flex items-center justify-center gap-1">
              Built with{' '}
              <span className="text-primary dark:text-primary-light">React</span>
              {' '}and{' '}
              <span className="text-primary dark:text-primary-light">Tailwind CSS</span>
              {' '}with{' '}
              <FiHeart className="inline-block text-red-500 animate-pulse" />
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm"
          >
            <a href="#home" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors cursor-pointer">
              Home
            </a>
            <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors cursor-pointer">
              About
            </a>
            <a href="#skills" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors cursor-pointer">
              Projects
            </a>
            <a href="#contact" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors cursor-pointer">
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 