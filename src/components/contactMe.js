import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaEnvelope, FaChevronDown, FaLink } from 'react-icons/fa';

const ContactMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section text-left p-4 border-b border-slate-300" data-section="contact">
      <h2 className="text-xl font-bold inline-flex items-center justify-between w-full cursor-pointer" onClick={handleSectionClick}>
        <div className="flex items-center space-x-2">
          <FaEnvelope className="mr-2" />
          <span>Contact Me</span>
        </div>
        <FaChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </h2>
      <TransitionGroup>
        {isOpen && (
          <CSSTransition timeout={200} classNames="my-node">
            <div className="mt-3 mb-3 flex flex-col space-y-2">
              <div className="text-emerald-500 border-b border-dashed border-gray-500 text-right hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <a
                  className="cursor-pointer hover:text-emerald-800 transition-colors duration-300 ease-in-out"
                  onClick={(event) => {
                    event.stopPropagation();
                    window.open('mailto:a.aloreabi2000@gmail.com', '_blank');
                  }}
                >
                  <FaLink className="inline mr-3 mt-5 mb-5" /> Email
                </a>
              </div>
              <div className="text-emerald-500 border-b border-dashed border-gray-500 text-right hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <a
                  className="cursor-pointer hover:text-emerald-800 transition-colors duration-300 ease-in-out"
                  onClick={(event) => {
                    event.stopPropagation();
                    window.open('https://www.linkedin.com/in/ali-al-oraibi/', '_blank');
                  }}
                >
                  <FaLink className="inline mr-3 mt-5 mb-5" /> LinkedIn
                </a>
              </div>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default ContactMe;