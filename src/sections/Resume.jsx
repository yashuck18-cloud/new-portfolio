import React from 'react';
import { Download, FileText } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import GlowingCard from '../components/ui/GlowingCard';
import Button from '../components/ui/Button';
import { personalInfo } from '../data';

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-4xl text-center">
        <SectionHeading subtitle="Ready for work" align="center">Resume</SectionHeading>
        
        <GlowingCard className="mt-8">
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-20 h-20 bg-neon/10 rounded-full flex items-center justify-center text-neon mb-6 mx-auto">
              <FileText size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">View My Full Credentials</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Want a comprehensive look at my academic background, projects, and technical skills? Download my complete resume below.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={personalInfo.resume} variant="primary" download="Yashwantha_CK_Resume.pdf">
                Download Resume <Download size={18} />
              </Button>
            </div>
          </div>
        </GlowingCard>
      </div>
    </section>
  );
};

export default Resume;
