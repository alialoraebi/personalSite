import React from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'Employee Management App',
            description: 'A React web application to manage employee records and schedules.',
            repoUrl: 'https://github.com/alialoraebi/emp_management_app',
        },
        {
            name: 'Study Timem Tracker App',
            description: 'A tool for tracking and storing study sessions.',
            repoUrl: 'https://github.com/alialoraebi/Study_Time_Tracker',
        },
        {
            name: 'Weather App',
            description: 'A simple weather app to check the current weather in any city.',
            repoUrl: 'https://github.com/alialoraebi/React-WeatherApp',
        },
        // Add more projects here...
    ];

    return (
        <section id="projects" className="bg-black-100 py-8">
    <div className="container mx-auto px-6 ">
        <div className="space-y-6 ">
            {projects.map((project, index) => (
                <div key={index} className="bg-black p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out border-b border-dashed border-gray-500">
                    <h3 className="text-2xl mb-2 font-bold">{project.name}</h3>
                    <p className="mb-4">{project.description}</p>
                    <a href={project.repoUrl} className="text-blue-600 hover:text-blue-800 transition-colors duration-300 ease-in-out">
                        <i className="fa fa-github" aria-hidden="true"></i> View on GitHub
                    </a>
                </div>
            ))}
        </div>
    </div>
</section>
    );
};

export default Projects;
