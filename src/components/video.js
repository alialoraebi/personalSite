import React from 'react';

const handleLinkClick = (e) => {
  e.stopPropagation();
}

const Video = ({ video }) => {
  return (
    <div key={video.id} onClick={handleLinkClick} className="p-4 bg-white/5 rounded-2xl shadow-lg text-white">
      <h3 className="text-sm xs:text-sm font-bold mb-2">{video.title}</h3>  
      <img src={video.icon} alt={video.title} className=" object-cover mb-2 rounded" />
      <a href={video.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-800 transition-colors duration-300 ease-in-out">
        Play Video
      </a>
    </div>
  );
};

export default Video;