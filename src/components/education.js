import React from "react";

const Education = ({ school, degree, graduationYear, awards }) => {
    return (
        <div className="p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out border-b border-dashed border-gray-500">
            <h3 className="text-2xl mb-2 font-bold">{school}</h3>
            <p className="mb-4">{degree}</p>
            <p className="mb-4">Year of Completion: {graduationYear}</p>
            <p className="mb-4">Awards: {awards}</p>
        </div>
    );
};

export default Education;