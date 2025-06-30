import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* SEO Meta Tags */}
        <Helmet>
          <title>Henish Savaliya | Full Stack Developer</title>
          <meta
            name="description"
            content="Henish Savaliya is a Full Stack Developer skilled in React, Node.js, MongoDB, Express, and more."
          />
          <meta
            name="keywords"
            content="Henish Savaliya, Full Stack Developer, React, Node.js, MERN, Portfolio, Web Developer Rajkot"
          />
          <meta name="author" content="Henish Savaliya" />
          <meta property="og:title" content="Henish Savaliya | Full Stack Developer" />
          <meta
            property="og:description"
            content="Explore the portfolio of Henish Savaliya, a MERN stack developer from Rajkot."
          />
          <meta
            property="og:image"
            content="%PUBLIC_URL%/profilepic_1.jpg"
          />
          <meta property="og:type" content="website" />
        </Helmet>

        {/* Page Components */}
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
