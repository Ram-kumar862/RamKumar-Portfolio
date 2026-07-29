import React, { useState } from 'react';
import { ExternalLink, X, Check } from 'lucide-react';
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const filters = ['All', 'MERN Stack', 'React', 'PHP'];
  const projects = [
    {
      id: 1,
      title: 'Online Furniture Shop',
      category: 'MERN Stack',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      description: 'A online furniture booking platform where users can browse , view product, book Furniture services, manage bookings, and enjoy a secure authentication system.',
      image: 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)',
      img:'n',
      caseStudy: {
        problem: 'Local furniture businesses struggle with manual product selections, messy schedules, and payment/booking tracking over phones.',
        solution: 'Built a full-stack platform that showcases galleries, tracks product, manages booking schedules automatically, and integrates secure user auth dashboards.',
        features: ['Browse Freelancers & Package Options', 'Secure JWT-based Authentication', 'Real-time Booking Scheduler', 'Admin Management Panel'],
        techStack: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap']
      },
      link:'https://online-furnitures.netlify.app/'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      category: 'Tailwind CSS',
      tags: ['React', 'Tailwind CSS', 'Responsive UI'],
      description: 'A personal portfolio showcasing skills, projects, and achievements. Fully responsive and styled using glassmorphic cards.',
      image: 'linear-gradient(135deg, #a855f7 0%, #6366f1 100%)',
      //img:proj2,
      caseStudy: {
        problem: 'Need an interactive, fast, and visually spectacular portfolio to represent skills, credentials, and achievements to recruiters.',
        solution: 'Developed a high-performance single-page app utilizing Tailwind CSS v4 for clean gradients, glassmorphism, responsive menus, and custom modals.',
        features: ['Tailwind v4 Styling Architecture', 'Dynamic Project Case Studies', 'Contact Form Input Validations', 'Fluid Layout Adaptations'],
        techStack: ['React', 'Tailwind CSS', 'Lucide React', 'Vite']
      },
      link:'https://ramkumar-g.netlify.app/',
    },
    {
  id: 3,
  title: "Agro Sales and Stock Management System",
  category: "Web Application",
  tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  description:
    "A web-based agro sales and stock management system designed to manage Agro sales, customer records, inventory, and billing operations efficiently.",
  image: "linear-gradient(135deg, #d946ef 0%, #c084fc 100%)",
  //img:proj3,
  caseStudy: {
    problem:
      "Agro sales and stock management, product requests, inventory, and customer information manually can lead to errors, delays, and inefficient  operations.",
    solution:
      "Developed a centralized web application that streamlines  sales, inventory management, customer records, and billing processes through an easy-to-use interface.",
    features: [
      "Agro Sales and Stock Management",
      "Customer Management System",
      "Inventory & Stock Management",
      "Billing and Invoice Generation",
      "Admin Dashboard",
      "Product Search & Filtering",
      "Sales and Service Reports"
    ],
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL"
    ],
    systemDesign: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["PHP"],
      database: ["MySQL"]
    }
  }
}
  ];
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter || p.tags.includes(activeFilter));
  return (
    <section id="projects" className="py-24 bg-[#0a0915] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#a78bfa] font-bold">Featured Works</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Some of my recent projects
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 border-transparent text-white shadow-lg shadow-purple-500/20'
                    : 'bg-white/[0.02] border-white/5 text-gray-400 hover:text-white hover:bg-white/[0.05] hover:border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="flex flex-col rounded-3xl bg-[#121124]/40 border border-white/5 overflow-hidden hover:border-purple-500/20 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300 group"
            >
              <div 
                className="w-full aspect-[16/10] flex items-center justify-center p-8 relative overflow-hidden transition-all duration-300"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                 {/* //<img src={project.img} alt={project.title} /> */}
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors group/btn w-fit"
                >
                  View Case Study
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0 bg-[#080710]/80 backdrop-blur-md"
          ></div>
          <div className="bg-[#0e0d1f] border border-white/10 rounded-3xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative z-10 shadow-2xl animate-float" style={{ animationIterationCount: 1, animationDuration: '0.4s' }}>
            <div 
              className="w-full h-48 sm:h-56 relative flex items-center justify-center p-8"
              style={{ background: selectedProject.image }}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white text-center drop-shadow-md">
                {selectedProject.title}
              </h2>
            </div>
            <div className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold">The Problem</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.caseStudy.problem}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold">The Solution</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.caseStudy.solution}</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.caseStudy.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-gray-300 text-sm">
                      <div className="p-0.5 rounded-full bg-purple-500/20 text-[#a78bfa] mt-0.5">
                        <Check size={12} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-gray-500 font-bold">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.caseStudy.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-semibold bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold transition-colors text-sm"
                >
                  Close
                </button>
                <a 
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-500/20 text-sm"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
