import React from 'react';
import './tailwind.css';
import ColorBar from './components/colorBar.js';
import Header from './components/Heading.js';
import AboutSection from './components/about.js';
import SkillsSection from './components/skills.tsx';
import ProjectsSection from './components/projects.tsx';
import ContactSection from './components/contactMe.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App flex flex-col h-screen bg-black text-white overflow-hidden">
      <div className="w-full mx-auto max-w-3xl p-4 flex flex-col h-full overflow-auto">
        <Header />
        <ColorBar />
        <div className="font-custom flex-1 overflow-auto">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>  
      </div>
      <Footer />
    </div>
  );
}

export default App;