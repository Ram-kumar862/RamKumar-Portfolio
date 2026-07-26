import React from 'react';
import { Award, Layers, Server, Database, Code, Cpu } from 'lucide-react';
export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layers className="text-[#a78bfa]" size={20} />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Redux Toolkit', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-[#a78bfa]" size={20} />,
      skills: ['Node.js', 'Express.js', 'REST API Development']
    },
    {
      title: 'Database Management',
      icon: <Database className="text-[#a78bfa]" size={20} />,
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Programming Languages',
      icon: <Code className="text-[#a78bfa]" size={20} />,
      skills: ['Python', 'JavaScript']
    },
    {
      title: 'Tools & Platforms',
      icon: <Cpu className="text-[#a78bfa]" size={20} />,
      skills: ['Git', 'GitHub', 'Postman', 'Netlify', 'Vercel', 'VS Code']
    }
  ];
  const achievements = [
    'Completed MERN Stack Internship',
    'Built Full Stack Web Applications',
    'Hosted Projects on Netlify and Vercel',
    'Secured 1st Place in a Web Design Hackathon conducted at Ayya Nadar Janaki Ammal College.'
  ];
  return (
    <section id="skills" className="py-24 bg-[#080710] relative">
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#a78bfa] font-bold">My Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Skills & Abilities
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="p-6 rounded-2xl bg-[#121124]/40 border border-white/5 hover:border-purple-500/20 shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-5 border-b border-white/5 pb-3">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-[#a78bfa]">
                  {category.icon}
                </div>
                <h3 className="font-bold text-white tracking-tight">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 hover:text-white border border-white/5 hover:border-white/10 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      
      </div>
    </section>
  );
}