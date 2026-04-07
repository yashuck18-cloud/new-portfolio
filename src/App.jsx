import React, { Suspense, lazy } from 'react';
import ParticleBackground from './components/ui/ParticleBackground';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';

// Lazy load sections below the fold
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Certifications = lazy(() => import('./sections/Certifications'));
const Resume = lazy(() => import('./sections/Resume'));
const Github = lazy(() => import('./sections/Github'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

// Minimal loading fallback
const LoadingSection = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-neon/20 border-t-neon rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden selection:bg-neon selection:text-black">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSection />}>
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Resume />
          <Github />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
