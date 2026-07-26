import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-[#f8fafc] min-h-screen text-white selection:bg-[#f59e0b]/30 selection:text-white overflow-x-hidden">
      <Header />
      <Hero />
      <div className="reveal"><About /></div>
      <div className="reveal"><Skills /></div>
      <div className="reveal"><Experience /></div>
      <div className="reveal"><Projects /></div>
      <div className="reveal"><Contact /></div>
    </div>
  );
}

export default App;
