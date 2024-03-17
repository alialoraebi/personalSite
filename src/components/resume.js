import React from "react";

const handleLinkClick = (e) => {
  e.stopPropagation();
}

const Resume = ({ name, pdfLink }) => {
    return (
        <div className="p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out border-b border-dashed border-gray-500" onClick={handleLinkClick}>
            <h3 className="text-2xl mb-2 font-bold">{name}</h3>
            <a href={pdfLink} className="text-blue-500 hover:text-blue-800 transition-colors duration-300 ease-in-out" target='_blank' rel='noopener noreferrer'>
                View here
            </a>
        </div>
    );
};

export default Resume;