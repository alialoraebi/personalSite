import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaTools, FaChevronDown } from 'react-icons/fa';

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);

  const skills = [
    'Java',
    'Spring',
    'HTML',
    'CSS',
    'JavaScript',
    'C#',
    'React/React Native',
    'Node.js',
    'Docker',
    'MySQL',
    'MongoDB',
    'Git',
    'GitHub',
    'Android/IOS Development'
  ];

  const handleSectionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section text-left p-4 border-b border-white cursor-pointer" data-section="skills" onClick={handleSectionClick}>
      <h2 className="text-xl font-bold inline-flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <FaTools className="mr-2" />
          <span>Skills</span>
        </div>
        <FaChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </h2>
      <TransitionGroup>
        {isOpen && (
          <CSSTransition timeout={200} classNames="my-node">
            <section id="skills" className="skills-section">
              <h2 className="skills-title">Skills</h2>
              <p className="skills-description">I have been learning these skills for 3 years:</p>
              <ul className="skills-list">
                  {skills.map((skill, index) => (
                      <li key={index} className="skills-item">{skill}</li>
                  ))}
              </ul>
            </section>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default Skills;