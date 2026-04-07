import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';
import GlowingCard from '../components/ui/GlowingCard';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading subtitle="Portfolio" align="center">Academic Projects</SectionHeading>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <GlowingCard key={project.title} delay={index * 0.1} className="!p-0 overflow-hidden group">
              <div className="relative h-48 overflow-hidden rounded-t-xl bg-card">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6 relative z-10 bg-card rounded-b-xl border-t border-white/5">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.problem}</p>
                <div className="mb-6">
                   <p className="text-neon text-xs uppercase tracking-wider mb-2 font-semibold">Technologies</p>
                   <div className="flex flex-wrap gap-2">
                     {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300 border border-white/5">{t}</span>
                     ))}
                   </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                   <span className="text-sm font-medium text-gray-500">Role: <span className="text-white">{project.role}</span></span>
                   <div className="flex gap-4">
                     <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon transition-colors duration-300">
                        <FaGithub size={20} />
                     </a>
                     <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon transition-colors duration-300">
                        <ExternalLink size={20} />
                     </a>
                   </div>
                </div>
              </div>
            </GlowingCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
