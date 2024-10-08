import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaGraduationCap, FaChevronDown } from 'react-icons/fa';
import EducationItem from './education'; 
import { education } from '../data/education.ts';

const Education = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSectionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section text-left p-4 border-b border-slate-300" data-section="education">
      <h2 className="text-xl font-bold inline-flex items-center justify-between w-full cursor-pointer" onClick={handleSectionClick}>
        <div className="flex items-center space-x-2">
          <FaGraduationCap className="mr-2" />
          <span>Education</span>
        </div>
        <FaChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </h2>
      <TransitionGroup>
        {isOpen && (
          <CSSTransition timeout={400} classNames="my-node" unmountOnExit>
            <section id="education" className="bg-black-100">
              <div className="mb-3 container mx-auto px-3 ">
                <div className="space-y-0 ">
                    {education.map((educationData, index) => (
                        <EducationItem key={index} school={educationData.school} degree={educationData.degree} Years={educationData.Years} awards={educationData.awards} />
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

export default Education;