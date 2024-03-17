import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FaVideo, FaChevronDown } from 'react-icons/fa';
import { videos } from '../data/videos.ts';
import Video from './video';

const Videos = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="section text-left p-4 border-b border-slate-300" data-section="videos" onClick={handleSectionClick}>
      <h2 className="text-xl font-bold inline-flex items-center justify-between w-full cursor-pointer">
        <div className="flex items-center space-x-2">
          <FaVideo className="mr-2" />
          <span>Videos</span>
        </div>
        <FaChevronDown className={`transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </h2>
      <TransitionGroup>
        {isOpen && (
          <CSSTransition timeout={200} classNames="my-node">
            <div className="mt-3 mb-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {videos.map((video) => (
                <Video key={video.id} video={video} />
              ))}
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default Videos;