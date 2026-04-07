import React from 'react';
import { Activity, GitCommit } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '../components/ui/SectionHeading';
import GlowingCard from '../components/ui/GlowingCard';
import { personalInfo } from '../data';

const Github = () => {
  return (
    <section id="github" className="py-20 px-6 md:px-12 relative z-10 bg-dark/50 border-y border-white/5">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading subtitle="Open Source" align="center">GitHub Profile</SectionHeading>
        
        <div className="mt-12">
          <GlowingCard className="flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4 text-neon">
                   <FaGithub size={48} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Check Out My Code</h3>
                <p className="text-gray-400">
                  I regularly push my projects, experiments, and hackathon submissions to GitHub. 
                  Explore repositories covering React, AWS, Node.js, and more.
                </p>
                <div className="mt-6">
                  <a 
                    href={personalInfo.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-2 text-neon hover:text-white transition-colors"
                  >
                    View GitHub Profile &rarr;
                  </a>
                </div>
             </div>
             
             <div className="flex-1 w-full grid grid-cols-2 gap-4">
                <div className="glass p-6 rounded-lg flex flex-col items-center justify-center group hover:border-neon/30 transition-colors">
                  <Activity size={32} className="text-neon mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-3xl font-bold text-white">10+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">Contributions</span>
                </div>
                <div className="glass p-6 rounded-lg flex flex-col items-center justify-center group hover:border-neon/30 transition-colors">
                  <GitCommit size={32} className="text-neon mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-3xl font-bold text-white">7+</span>
                  <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">Repositories</span>
                </div>
             </div>
          </GlowingCard>
        </div>
      </div>
    </section>
  );
};

export default Github;
