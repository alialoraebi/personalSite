import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaRegLightbulb, FaChevronDown } from 'react-icons/fa';
import Capstone from './capstone'; 
import { capstones } from '../data/capstone.ts';

const CapstoneSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleSectionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section text-left p-4 border-b border-slate-300" data-section="capstone" onClick={handleSectionClick}>
      <h2 className="text-xl font-bold inline-flex items-center justify-between w-full cursor-pointer">
        <div className="flex items-center space-x-2">
          <FaRegLightbulb className="mr-2" />
          <span>Capstone Project</span>
        </div>
        <FaChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </h2>
      <TransitionGroup>
        {isOpen && (
          <CSSTransition timeout={400} classNames="my-node" unmountOnExit>
            <section id="capstones" className="bg-black-100">
              <div className="mb-3 container mx-auto px-3 ">
                <div className="space-y-0 ">
                    {capstones.map((capstone, index) => (
                        <Capstone key={index} name={capstone.name} pdfLink={capstone.pdfLink} />
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