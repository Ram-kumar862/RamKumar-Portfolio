import React from 'react';
import { ArrowUpRight, MessageSquare, Download, Globe } from 'lucide-react';
import { downloadPDF } from './PDF';
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-[#f8fafc] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#40388b]/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-[#ffc000]/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide shadow-inner mx-auto lg:mx-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>
          <div className="space-y-4">
            <p className="text-lg md:text-xl font-medium text-[#ffc000] tracking-wide">Hi, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Ram Kumar <span className="bg-gradient-to-r from-[#7070e0] via-[#ffc000] to-[#f58a00] bg-clip-text text-transparent">G</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-gray-300">
              MCA Student | MERN Stack Developer | Python Enthusiast
            </p>
            <p className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed mx-auto lg:mx-0">
              Building modern, responsive, and user-friendly web applications with React, Node.js, Express.js, MongoDB, and Python.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
            <a 
              href="#projects" 
              className="brand-gradient brand-button group flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-semibold active:translate-y-0"
            >
              View Projects
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
            <button onClick={downloadPDF} 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 hover:translate-y-[-2px] active:translate-y-0"
            >
              Download Resume
              <Download size={16} className="text-[#a78bfa]" />
            </button>
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 hover:translate-y-[-2px] active:translate-y-0"
            >
              Contact Me
              <MessageSquare size={16} className="text-[#a78bfa]" />
            </a>
          </div>
          <div className="pt-4 space-y-3">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Follow me on</p>
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a href="https:/www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 hover:bg-[#0077b5]/10 text-gray-400 hover:text-[#0077b5] border border-white/5 hover:border-[#0077b5]/20 transition-all duration-300" title="LinkedIn">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https:/github.com/Ram-kumar862" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 hover:border-white/20 transition-all duration-300" title="GitHub">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https:/leetcode.com/u/ram-kumar862/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 hover:bg-[#ffa116]/10 text-gray-400 hover:text-[#ffa116] border border-white/5 hover:border-[#ffa116]/20 transition-all duration-300" title="LeetCode">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.411L7.116 5.826a1.373 1.373 0 0 0-.411.961v4.364m0 0l-5.63 5.63a1.376 1.376 0 0 0 0 1.947l2.84 2.84a1.376 1.376 0 0 0 1.947 0l5.629-5.63m-4.786-4.786h4.364a1.376 1.376 0 0 1 1.376 1.376v4.364m-1.376-5.74H7.116m0 0v-4.364" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </a>
              <a href="http:/localhost:5173//" className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5 hover:border-white/20 transition-all duration-300" title="Portfolio Link">
                <Globe size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[450px] rounded-3xl overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#40388b]/35 to-[#ffc000]/20 rounded-3xl blur-md pointer-events-none"></div>
            <div className="absolute inset-[-4px] brand-gradient rounded-3xl -z-10 opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[radial-gradient(circle,_#7070e0_1px,_transparent_1px)] bg-[size:16px_16px] opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[radial-gradient(circle,_#ffc000_1px,_transparent_1px)] bg-[size:16px_16px] opacity-30"></div>
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#15142d]">
             <img src="/RamKumar.png" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent opacity-70"></div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
