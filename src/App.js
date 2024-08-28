import React from 'react';
import './tailwind.css';
import ColorBar from './components/colorBar.js';
import Header from './components/Heading.js';
import AboutSection from './components/about.js';
import SkillsSection from './components/skills.tsx';
import EducationSection from './components/educations.tsx';
import CertificationSection from './components/certifications.tsx';
import ProjectsSection from './components/projects.tsx';
import ResumeSection from './components/resumeSection.tsx';
import VideoSection from './components/videos.tsx';
import ContactSection from './components/contactMe.js';
import Footer from './components/footer.js';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App h-screen flex flex-col bg-animated text-slate-300">
      <div className="w-full mx-auto max-w-3xl p-4 flex flex-col h-screen overflow-hidden">
        <Header />
        <ColorBar />
        <div className="font-custom flex-1 overflow-auto">
          <AboutSection />
          <SkillsSection />
          <EducationSection />
          <CertificationSection />
          <ProjectsSection />
          <VideoSection />
          <ResumeSection />
          <ContactSection />
        </div>  
      </div>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;