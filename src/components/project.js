import React from "react";

const handleLinkClick = (e) => {
  e.stopPropagation();
}

const Project = ({ name, tools, description, repoUrl }) => {
    return (
        <div className="p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out border-b border-dashed border-gray-500" onClick={handleLinkClick}>
            <h3 className="text-2xl mb-2 font-bold">{name}</h3>
            <p className="text-rose-400 text-sm">{tools}</p>
            <p className="mt-5 mb-5">{description}</p>
            {repoUrl && (
                <a href={repoUrl} className="text-blue-500 hover:text-blue-800 transition-colors duration-300 ease-in-out" target='_blank' rel='noopener noreferrer'>
                    View on GitHub
                </a>
            )}
            {!repoUrl && (
                <p className="text-gray-500 italic">Private Repository</p>
            )}
        </div>
    );
};

export default Project;