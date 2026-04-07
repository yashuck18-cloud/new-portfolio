import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from '../components/ui/Button';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 md:px-12 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-neon mb-4 tracking-wider uppercase font-medium">Hello, I am</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Yashwantha <span className="text-neon neon-text">C K</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 font-medium mb-6">
              {personalInfo.title}
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed mx-auto md:mx-0">
              {personalInfo.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start mb-12">
              <Button href="#projects" variant="primary">
                View Projects 
                <ExternalLink size={18} />
              </Button>
              <Button href={personalInfo.resume} variant="secondary" download="Yashwantha_CK_Resume.pdf">
                Download Resume
                <Download size={18} />
              </Button>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon transition-colors duration-300">
                <FaGithub size={24} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-neon transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="order-1 md:order-2 flex justify-center items-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-neon rounded-full blur-[80px] opacity-20 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-neon/50 p-2 overflow-hidden neon-border">
              {/* Using a placeholder since user will add their profile picture */}
              <div className="w-full h-full rounded-full bg-card overflow-hidden">
                <img 
                  src="/assets/profile.jpeg" 
                  alt={personalInfo.name} 
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
