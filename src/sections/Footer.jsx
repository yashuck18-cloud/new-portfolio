import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, navLinks } from '../data';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-white/5 pt-16 pb-8 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-2xl font-bold tracking-tighter mb-2 inline-block">
            Yas<span className="text-neon neon-text">hu</span> <span className="text-white">Port</span><span className="text-neon neon-text">folio</span>
          </a>
          <p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0">
            Building scalable logic and beautiful interfaces with code.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {navLinks.map((link) => (
             <a 
               key={link.name} 
               href={`#${link.href}`}
               className="text-sm text-gray-400 hover:text-neon transition-colors"
             >
               {link.name}
             </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon hover:bg-neon/10 transition-all border border-white/5 hover:border-neon/30">
            <FaGithub size={18} />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon hover:bg-neon/10 transition-all border border-white/5 hover:border-neon/30">
            <FaLinkedin size={18} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-neon hover:bg-neon/10 transition-all border border-white/5 hover:border-neon/30">
            <Mail size={18} />
          </a>
        </div>
        
      </div>
      
      <div className="container mx-auto max-w-6xl mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 hover:text-neon transition-colors group"
        >
          Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
