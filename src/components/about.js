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
          <CSSTransition timeout={400} classNames="my-node" unmountOnExit>
            <section id="about" className='mt-3 mb-3 m-9' onClick={handleLinkClick}>
            <h2>
              Hey there, I'm Ali, a passionate full-stack web developer with a keen focus on React.js and Node.js. I thrive on the thrill of exploring new technologies, constantly seeking to broaden my skill set and deepen my understanding of the digital landscape.
            </h2>
            <br />
            <h2>
              As a developer, I embrace the philosophy of Bill Hicks: "We are the facilitators of our own creative evolution." This resonates deeply with me as I see my role not just as a coder, but as a catalyst for innovation and progress. I believe in the power of excellent communication, critical thinking, and continuous reflection to drive meaningful change in both my work and the world around me.
            </h2>
            <br />
            <h2>
              With a blend of past experiences, my current state of expertise, and ambitious future goals, I approach each project with enthusiasm and dedication. My motivation stems from a belief in my ability to make a difference, not just in my own career but in the broader tech community. Feel free to connect with me on <a href="https://www.linkedin.com/in/ali-al-oraibi/" className='text-blue-500 hover:text-blue-800 transition-colors duration-300 ease-in-out' onClick={handleLinkClick} target='_blank' rel='noopener noreferrer'>LinkedIn</a>.
            </h2>
          </section>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default About;