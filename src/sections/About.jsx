import React from 'react';
import { MapPin, GraduationCap, Code } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import GlowingCard from '../components/ui/GlowingCard';
import { personalInfo } from '../data';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading subtitle="Discover">About Me</SectionHeading>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <GlowingCard>
              <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neon/10 rounded-lg text-neon">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Education</h4>
                    <p className="text-gray-400 text-sm">BCA Student</p>
                    <p className="text-gray-500 text-xs mt-1">Currently pursuing</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neon/10 rounded-lg text-neon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-400 text-sm">{personalInfo.location}</p>
                    <p className="text-gray-500 text-xs mt-1">Open to remote/relocation</p>
                  </div>
                </div>
              </div>
            </GlowingCard>
          </div>
          
          <div className="md:col-span-1">
            <GlowingCard delay={0.2} className="h-full">
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-24 h-24 rounded-full bg-card flex items-center justify-center mb-6 neon-border relative overflow-hidden">
                   <Code size={40} className="text-neon" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Focus Areas</h3>
                <ul className="text-gray-400 space-y-2">
                  <li>Cloud Infrastructure</li>
                  <li>AWS & DevOps</li>
                  <li>Frontend Development</li>
                  <li>Full Stack Web Apps</li>
                </ul>
              </div>
            </GlowingCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
