import React, { useState, useRef } from 'react';
import './tailwind.css';
import ColorBar from './components/colorBar.js';
import Header from './components/Heading.js';
import About from './components/about.js';
import Skills from './components/skills.js';
import Projects from './components/projects.js';
import Footer from './components/footer.js';
import { FaUser, FaTools, FaProjectDiagram, FaChevronDown } from 'react-icons/fa';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection !== section ? section : null);
  };

  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <div className="App flex flex-col h-screen bg-black text-white overflow-hidden">
      <div className="w-full mx-auto max-w-4xl p-4 flex flex-col h-full overflow-auto">
        <Header />
        <ColorBar />
        <div className="flex-1 overflow-auto">
          <div className="section text-left p-4 border-b border-white cursor-pointer" onClick={() => toggleSection('about')}>
            <h2 className="text-xl font-bold inline-flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <FaUser className="mr-2" />
                <span>About</span>
              </div>
              <FaChevronDown className={`transition-transform duration-200 ${activeSection === 'about' ? 'transform rotate-180' : ''}`} />
            </h2>
            <TransitionGroup>
              {activeSection === 'about' && (
                <CSSTransition timeout={200} classNames="my-node">
                  <div ref={aboutRef}>
                    <About />
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </div>
          <div className="section text-left p-4 border-b border-white cursor-pointer" onClick={() => toggleSection('skills')}>
            <h2 className="text-xl font-bold inline-flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <FaTools className="mr-2" />
                <span>Skills</span>
              </div>
              <FaChevronDown className={`transition-transform duration-200 ${activeSection === 'skills' ? 'transform rotate-180' : ''}`} />
            </h2>
            <TransitionGroup>
              {activeSection === 'skills' && (
                <CSSTransition timeout={200} classNames="my-node">
                  <div ref={skillsRef}>
                    <Skills />
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </div>
          <div className="section text-left p-4 border-b border-white cursor-pointer" onClick={() => toggleSection('projects')}>
            <h2 className="text-xl font-bold inline-flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <FaProjectDiagram className="mr-2" />
                <span>Projects</span>
              </div>
              <FaChevronDown className={`transition-transform duration-200 ${activeSection === 'projects' ? 'transform rotate-180' : ''}`} />
            </h2>
            <TransitionGroup>
              {activeSection === 'projects' && (
                <CSSTransition timeout={200} classNames="my-node">
                  <div ref={projectsRef}>
                    <Projects />
                  </div>
                </CSSTransition>
              )}
            </TransitionGroup>
          </div>
        </div>  
      </div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default App;