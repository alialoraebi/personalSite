import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaFile, FaChevronDown } from 'react-icons/fa';
import Resume from './resume'; 
import { resumes } from '../data/resume.ts';

const CapstoneSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSectionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section text-left p-4 border-b border-slate-300" data-section="capstone" onClick={handleSectionClick}>
      <h2 className="text-xl font-bold inline-flex items-center justify-between w-full cursor-pointer">
        <div className="flex items-center space-x-2">
          <FaFile className="mr-2" />
          <span>Resume/Cover Letter</span>
        </div>
        <FaChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </h2>
      <TransitionGroup>
        {isOpen && (
          <CSSTransition timeout={200} classNames="my-node">
            <section id="capstones" className="bg-black-100">
              <div className="mb-3 container mx-auto px-3 ">
                <div className="space-y-0 ">
                    {resumes.map((resume, index) => (
                        <Resume key={index} name={resume.name} pdfLink={resume.pdfLink} />
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

export default CapstoneSection;