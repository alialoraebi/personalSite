import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaProjectDiagram, FaChevronDown } from 'react-icons/fa';
import Project from './project'; 
import { projects } from '../data/projects.ts';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSectionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section text-left p-4 border-b border-slate-300" data-section="projects" onClick={handleSectionClick}>
      <h2 className="text-xl font-bold inline-flex items-center justify-between w-full cursor-pointer">
        <div className="flex items-center space-x-2">
          <FaProjectDiagram className="mr-2" />
          <span>Projects</span>
        </div>
        <FaChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </h2>
      <TransitionGroup>
        {isOpen && (
          <CSSTransition timeout={400} classNames="my-node" unmountOnExit>
            <section id="projects" className="bg-black-100">
              <div className="mb-3 container mx-auto px-3 ">
                <div className="space-y-0 ">
                    {projects.map((project, index) => (
                        <Project key={index} name={project.name} tools={project.tools} description={project.description} repoUrl={project.repoUrl} />
                    ))}
                </div>
              </div>
            </section>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default Projects;