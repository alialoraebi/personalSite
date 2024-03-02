import React from 'react';

const handleLinkClick = (e) => {
  e.stopPropagation();
}

const Video = ({ video }) => {
  return (
    <div key={video.id} onClick={handleLinkClick} className="p-4 bg-gray-800 rounded shadow-lg text-white">
      <h3 className="text-sm font-bold mb-2">{video.title}</h3>  
      <img src={video.icon} alt={video.title} className=" object-cover mb-2 rounded" />
      <a href={video.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline">
        Play Video
      </a>
    </div>
  );
};

export default Video;