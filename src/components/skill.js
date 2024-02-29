import React from "react";

const Skill = ({ title, icon, link }) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="skill-link">
        <div className="cursor-pointer flex items-center overflow-hidden rounded-2xl bg-white/5 py-4 px-3 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium">
          <img src={icon} alt={title} className="w-7 h-7" />
          <p className="ml-2 text-lg">{title}</p>
        </div>
      </a>
    );
  };

  export default Skill;
  