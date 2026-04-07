import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import GlowingCard from '../components/ui/GlowingCard';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 relative z-10 bg-dark/50 border-y border-white/5">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading subtitle="Expertise" align="center">Technical Skills</SectionHeading>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <GlowingCard key={skillGroup.category} delay={index * 0.1}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-neon/10 rounded-lg text-neon">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item) => (
                     <span key={item} className="px-3 py-1 text-sm bg-card border border-white/5 rounded-full text-gray-300 hover:border-neon hover:text-neon/80 transition-colors duration-300 shadow-sm cursor-default">
                        {item}
                     </span>
                  ))}
                </div>
              </GlowingCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
