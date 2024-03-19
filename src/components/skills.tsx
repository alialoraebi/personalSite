// Skills.tsx
import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaTools, FaChevronDown } from 'react-icons/fa';
import Skill from './skill';
import { skills } from '../data/skills.ts'; 

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section text-left p-4 border-b border-slate-300 cursor-pointer" data-section="skills" onClick={handleSectionClick}>
      <h2 className="text-xl font-bold inline-flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <FaTools className="mr-2" />
          <span>Skills</span>
        </div>
        <FaChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </h2>
      <TransitionGroup>
        {isOpen && (
          <CSSTransition timeout={400} classNames="my-node" unmountOnExit>
            <div className="mt-3 mb-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {skills.map((skill, index) => (
                <Skill key={index} title={skill.title} icon={skill.icon} link={skill.link} />
              ))}
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default Skills;