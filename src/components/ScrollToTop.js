import React, { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-primary text-white dark:bg-primary-light dark:text-gray-900 transition-opacity duration-300 hover:bg-primary-dark dark:hover:bg-primary opacity-${visible ? '100' : '0'} pointer-events-${visible ? 'auto' : 'none'}`}
      aria-label="Scroll to top"
      style={{ transition: 'opacity 0.3s' }}
    >
      <FiArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop; 