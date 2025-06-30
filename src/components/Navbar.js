import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../context/ThemeContext';
import { FiMenu, FiX, FiSun, FiMoon, FiGithub, FiLinkedin } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    { title: 'Home', to: 'home' },
    { title: 'About', to: 'about' },
    { title: 'Skills', to: 'skills' },
    { title: 'Projects', to: 'projects' },
    { title: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/henish47', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/henish-savaliya-41954032a/', label: 'LinkedIn' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative text-2xl font-heading font-bold"
            >
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                &lt;H/S&gt;
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="relative px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light transition-colors group cursor-pointer"
                >
                  {link.title}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                    <span className="text-xl text-gray-700 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                      {link.icon}
                    </span>
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {link.label}
                  </span>
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="group relative p-2 rounded-full"
              >
                <div className="absolute inset-0 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  {isDarkMode ? (
                    <FiSun className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <FiMoon className="w-5 h-5 text-gray-700" />
                  )}
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                  <span className="text-xl text-gray-700 dark:text-gray-200 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {link.icon}
                  </span>
                </div>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="group relative p-2 rounded-full"
            >
              <div className="absolute inset-0 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {isDarkMode ? (
                  <FiSun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <FiMoon className="w-5 h-5 text-gray-700" />
                )}
              </div>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="group relative p-2 rounded-full"
            >
              <div className="absolute inset-0 bg-primary/10 dark:bg-primary-light/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                {isOpen ? (
                  <FiX className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                ) : (
                  <FiMenu className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                )}
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 