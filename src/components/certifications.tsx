import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaCertificate, FaChevronDown } from 'react-icons/fa';
import Certificate from './certification'; 
import { certification } from '../data/certification.ts';

const Certification = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSectionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section text-left p-4 border-b border-slate-300" data-section="certification" onClick={handleSectionClick}>
      <h2 className="text-xl font-bold inline-flex items-center justify-between w-full cursor-pointer">
        <div className="flex items-center space-x-2">
          <FaCertificate className="mr-2" />
          <span>Certifications</span>
        </div>
        <FaChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </h2>
      <TransitionGroup>
        {isOpen && (
          <CSSTransition timeout={200} classNames="my-node">
            <section id="projects" className="bg-black-100">
              <div className="mb-3 container mx-auto px-3 ">
                <div className="space-y-0 ">
                    {certification.map((certification, index) => (
                        <Certificate key={index} name={certification.name} organization={certification.organization} year={certification.year} credentialLink={certification.credentialLink} />
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

export default Certification;