import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { downloadPDF } from './PDF';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#f8fafc]/90 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">
          <a href="#home" className="text-2xl font-bold text-white tracking-tight flex items-center gap-1 group">
            Ram Kumar
            <span className="text-[#ffc000] group-hover:scale-150 transition-transform duration-300">.</span>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <button onClick={downloadPDF}
              className="brand-gradient brand-button flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full text-white active:scale-95"
            >
              Download Resume
              <Download size={14} />
            </button>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors relative z-50"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      <div className={`lg:hidden fixed inset-0 z-40 bg-[#f8fafc]/98 backdrop-blur-xl transition-all duration-300 overflow-y-auto ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <nav className="flex flex-col p-8 pt-28 pb-10 gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-semibold text-gray-300 hover:text-white transition-colors border-b border-white/5 pb-2"
            >
              {link.name}
            </a>
          ))}
          <button onClick={downloadPDF}
            className="brand-gradient brand-button flex justify-center items-center gap-2 w-full mt-4 py-3 rounded-xl text-white font-semibold"
          >
            Download Resume
            <Download size={16} />
          </button>
        </nav>
      </div>
    </>
  );
}
