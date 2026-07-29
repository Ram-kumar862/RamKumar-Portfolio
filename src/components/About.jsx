import React from 'react';
import { User, MapPin, Mail, GraduationCap } from 'lucide-react';
export default function About() {
  const details = [
    { icon: <User className="text-purple-400" size={20} />, label: 'Name', value: 'Ram Kumar G' },
    { icon: <MapPin className="text-purple-400" size={20} />, label: 'Location', value: 'Tirunelveli, Tamil Nadu' },
    { icon: <Mail className="text-purple-400" size={20} />, label: 'Email', value: 'ramkumar878269@gmail.com' },
    { icon: <GraduationCap className="text-purple-400" size={20} />, label: 'Education', value: 'MCA Student' }
  ];
  return (
    <section id="about" className="py-24 bg-[#0a0915] relative overflow-hidden">
      <div className="absolute top-1/2 left-full -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex  gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#a78bfa] font-bold">About Me</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Developing MERN Stack & Python <span>Solutions</span>.
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed pt-2">
                I'm Ram Kumar G, an MCA student passionate about full-stack web development. I specialize in creating responsive and scalable web applications using the MERN Stack. I enjoy solving real-world problems through technology and continuously learning new tools and frameworks to improve my development skills.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {details.map((detail, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-xl bg-purple-500/10 group-hover:bg-purple-500/20 transition-all duration-300">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{detail.label}</p>
                    <p className="text-sm md:text-base text-gray-200 font-bold group-hover:text-white transition-colors">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}