import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowRight } from 'react-icons/fi';
import Typewriter from 'typewriter-effect';
import profileImage from './images/profilepic_1.jpg';
import cvFile from './images/CV.pdf';

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/henish47?tab=repositories', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/henish-savaliya-41954032a/', label: 'LinkedIn' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 dark:bg-primary-light/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 dark:bg-primary-light/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 dark:bg-primary-light/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-full text-sm font-medium">
                Welcome to my portfolio
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-primary-dark dark:from-primary-light dark:to-primary bg-clip-text text-transparent animate-gradient-x">
                Hi, I'm{' '}
              </span>
              <span className="text-primary dark:text-primary-light">Henish Savaliya</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold mb-6 text-gray-700 dark:text-gray-200 min-h-[4.5rem]">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Developer',
                    'ReactJS Enthusiast',
                    'MERN Stack Developer',
                    'UI/UX Designer',
                    'Problem Solver'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                  cursor: '|',
                  wrapperClassName: 'text-primary dark:text-primary-light',
                }}
              />
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              <Typewriter
                options={{
                  strings: [
                    'Crafting interactive and modern web experiences using React, Tailwind, and Node.js.',
                    'Building scalable and performant applications with the MERN stack.',
                    'Creating beautiful and responsive user interfaces.',
                    'Solving complex problems with elegant solutions.'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 30,
                  delay: 30,
                  cursor: '|',
                }}
              />
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={cvFile}
                download="Henish_Savaliya_CV.pdf"
                className="group px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                <FiDownload className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
                Download Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-primary rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700"
              >
                Contact Me
                <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <span className="text-xl text-gray-600 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      {link.icon}
                    </span>
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto flex flex-col items-center">
              {/* Polaroid/Photo Card Style */}
              <motion.div
                whileHover={{ scale: 1.04, rotate: -3 }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.8, type: 'spring' }}
                className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl border-4 border-white dark:border-gray-800 overflow-hidden flex flex-col items-center transition-all duration-300"
                style={{ width: '320px', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
              >
                <img
                  src={profileImage}
                  alt="Henish Savaliya"
                  className="w-full h-80 object-cover object-top rounded-t-lg"
                />
                <div className="w-full px-6 py-4 flex flex-col items-center bg-white/90 dark:bg-gray-900/80">
                  <div className="text-xl font-bold text-primary dark:text-primary-light mb-1">Henish Savaliya</div>
                  <div className="text-sm text-gray-500 dark:text-gray-300">Full Stack Developer</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 