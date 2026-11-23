import React from 'react';
import { Briefcase, GraduationCap, Calendar, CheckCircle } from 'lucide-react';
export default function Experience() {
  const experiences = [
    {
      role: 'MERN Stack Intern',
      company: 'Abservetech Private Limited',
      duration: 'Internship Period',
      points: [
        'Developed responsive web applications using React.js.',
        'Built REST APIs with Node.js and Express.js.',
        'Integrated MongoDB databases.',
        'Worked on both frontend and backend modules.',
        'Collaborated with development teams using Git and GitHub.'
      ]
    }
  ];
  const educations = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Ayya Nadar Janaki Ammal College",
      details:
        "Specializing in software development, system architecture, data structures, and modern web technologies with hands-on project experience."
    },

    {
      degree: "Bachelor of Computer Applications(BCA) ",
      institution: "N.M.S.S.Vellaichamy Nadar College",
      details: "Focused on Computer Applications, Web Development, Database Management, and Software Technologies. Participated in technical events and projects."
    }
  ];
  return (
    <section id="experience" className="py-24 bg-[#0a0915] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#a78bfa] font-bold">My Journey</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Education & Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-[#a78bfa]">
                <GraduationCap size={22} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Education</h3>
            </div>
            <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-3.25 sm:before:left-4.25 before:w-0.5 ">
              {educations.map((edu, idx) => (
                <div key={idx} className="relative pl-8 sm:pl-12 group">
                  <div className="absolute left-1.5 sm:left-2.5 top-2 w-4 h-4 rounded-full border-2 border-[#8b5cf6] bg-[#0a0915] z-10 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#121124]/40 border border-white/5 hover:border-purple-500/10 hover:bg-[#121124]/60 transition-all duration-300 space-y-2">
                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-purple-400/95 font-semibold">
                      {edu.institution}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-[#a78bfa]">
                <Briefcase size={22} />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Experience</h3>
            </div>
            <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-3.25 sm:before:left-4.25 before:w-0.5 ">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-8 sm:pl-12 group">
                  <div className="absolute left-1.5 sm:left-2.5 top-2 w-4 h-4 rounded-full border-2 border-indigo-500 bg-[#0a0915] z-10 group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#121124]/40 border border-white/5 hover:border-indigo-500/10 hover:bg-[#121124]/60 transition-all duration-300 space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                        {exp.role}
                      </h4>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                        <span className="text-indigo-400 font-bold">{exp.company}</span>
                        <span className="text-gray-500 font-semibold flex items-center gap-1 text-xs">
                          <Calendar size={12} />
                          {exp.duration}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-gray-400">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle size={14} className="text-[#a78bfa] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
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
