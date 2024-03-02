import React from "react";

const handleLinkClick = (e) => {
  e.stopPropagation();
}

const Project = ({ name, description, repoUrl }) => {
    return (
        <div className="p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out border-b border-dashed border-gray-500" onClick={handleLinkClick}>
            <h3 className="text-2xl mb-2 font-bold">{name}</h3>
            <p className="mb-4">{description}</p>
            <a href={repoUrl} className="text-blue-600 hover:text-blue-800 transition-colors duration-300 ease-in-out" target='_blank' rel='noopener noreferrer'>
                <i className="fa fa-github" aria-hidden="true"></i> View on GitHub
            </a>
        </div>
    );
};

export default Project;