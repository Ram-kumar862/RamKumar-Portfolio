import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const contactMethods = [
    {
      icon: <Mail size={22} />,
      label: 'Email me',
      value: 'ramkumar878269@gmail.com',
      href: 'mailto:ramkumar878269@gmail.com'
    },
    {
      icon: <Phone size={22} />,
      label: 'Call me',
      value: '+91 77081 47489',
      href: 'tel:+917708147489'
    },
    {
      icon: <MapPin size={22} />,
      label: 'Location',
      value: 'Sivakasi, Tamil Nadu',
      href: null
    }
  ];
  return (
    <section id="contact" className="pt-24 pb-12 bg-[#080710] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#a78bfa] font-bold">Contact Info</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            I'm always open to discussing new opportunities, MERN Stack roles, or other web development projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, idx) => {
            const cardContent = (
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#121124]/40 border border-white/5 hover:border-purple-500/20 hover:bg-[#121124]/60 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300 group h-full justify-center">
                <div className="p-4 rounded-2xl bg-purple-500/10 text-[#a78bfa] group-hover:bg-[#8b5cf6] group-hover:text-white transition-all duration-300 mb-4 shrink-0">
                  {method.icon}
                </div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">{method.label}</p>
                <p className="text-sm sm:text-base text-gray-200 font-bold group-hover:text-white transition-colors break-all">{method.value}</p>
              </div>
            );
            return method.href ? (
              <a key={idx} href={method.href} className="block h-full">
                {cardContent}
              </a>
            ) : (
              <div key={idx} className="h-full">
                {cardContent}
              </div>
            );
          })}
        </div>
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
              © 2026 Ram Kumar G. All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center gap-6 justify-center flex-wrap">
            <a href="https://github.com/pandiselvan2k05" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">GitHub</a>
            <a href="https://www.linkedin.com/in/pandiselvan-r-8b093b274/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">LinkedIn</a>
            <a href="https://leetcode.com/u/HlBvs9RkFU/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider">LeetCode</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center p-3 rounded-full bg-white/5 border border-white/5 hover:border-white/10 hover:bg-[#8b5cf6] text-gray-400 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 active:scale-95 transition-all duration-300"
            aria-label="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
