import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaUser, FaChevronDown } from 'react-icons/fa';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="section text-left p-4 border-b border-slate-300" data-section="about" onClick={handleSectionClick}>
      <h2 className="text-xl font-bold inline-flex items-center justify-between w-full cursor-pointer">
        <div className="flex items-center space-x-2">
          <FaUser className="mr-2" />
          <span>About</span>
        </div>
        <FaChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </h2>
      <TransitionGroup>
        {isOpen && (
          <CSSTransition timeout={200} classNames="my-node">
            <section id="about" className='mt-3 mb-3' onClick={handleLinkClick}>
              <h2>
                Hello, I'm Ali. I'm a full-stack web developer who's proficient in React.js and Node.js. 
                I'm also exploring many different technologies to help enhance my skills. 
                Feel free to reach out to me on <a href="https://www.linkedin.com/in/ali-al-oraibi/" className='text-blue-500 hover:text-blue-800 transition-colors duration-300 ease-in-out' onClick={handleLinkClick} target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
              </h2>
            </section>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default About;