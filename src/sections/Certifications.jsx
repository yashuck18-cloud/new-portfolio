import React from 'react';
import { Award, ExternalLink, Trophy } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import GlowingCard from '../components/ui/GlowingCard';
import { certifications } from '../data';

const Certifications = () => {
  const featured = certifications.filter(c => c.featured);
  const standard = certifications.filter(c => !c.featured);

  return (
    <section id="certifications" className="py-20 px-6 md:px-12 relative z-10 bg-dark/50 border-y border-white/5">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading subtitle="Achievements" align="center">Certifications</SectionHeading>
        
        <div className={`grid gap-8 mt-12 ${featured.length === 2 && standard.length === 0 ? 'md:grid-cols-2' : 'md:grid-cols-1 lg:grid-cols-3'}`}>
          
          {/* Featured Certificate Cards */}
          {featured.map((cert, index) => (
            <GlowingCard 
              key={cert.title} 
              delay={index * 0.15} 
              className="flex flex-col items-center !p-1 border border-neon/50 shadow-[0_0_20px_rgba(57,255,20,0.15)] relative overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-neon text-dark font-bold px-4 py-2 rounded-bl-xl z-20 shadow-[0_0_10px_rgba(57,255,20,0.5)]">
                {cert.badge || "Featured"}
              </div>
              
              <div className="w-full h-full bg-card rounded-lg p-6 relative z-10 flex flex-col items-center text-center">
                <div className="mb-4 mt-4 text-neon p-4 rounded-full bg-neon/10">
                  <Trophy size={40} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-neon uppercase tracking-wider text-sm font-semibold mb-4">{cert.issuer}</p>
                
                {/* Certificate Image */}
                {cert.image && (
                  <div className="w-full relative mt-2 mb-4 rounded-lg overflow-hidden border border-white/10 group cursor-pointer">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
                  </div>
                )}

                <div className="mt-auto w-full flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-gray-400 text-sm font-medium">{cert.date}</span>
                  <a href={cert.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-neon hover:text-white transition-colors text-sm">
                    View Credential <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </GlowingCard>
          ))}

          {/* Standard Certificates (if any) */}
          {standard.map((cert, index) => (
            <GlowingCard key={cert.title} delay={0.3 + (index * 0.1)} className="flex flex-col">
              <div className="mb-4 text-neon">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{cert.issuer}</p>
              
              <div className="mt-auto flex flex-wrap items-center justify-between pt-4 border-t border-white/5">
                <span className="text-neon/80 text-sm font-semibold">{cert.date}</span>
                <a href={cert.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-neon transition-colors p-2 rounded-full hover:bg-neon/10">
                  <ExternalLink size={20} />
                </a>
              </div>
            </GlowingCard>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certifications;
