import React from 'react';

const Projects = () => {
    const projects = [
        {
            name: 'Employee Management App',
            description: 'An application to manage employee records and schedules.',
            repoUrl: 'https://github.com/alialoraebi/emp-app',
        },
        {
            name: 'Floor Installation Planner',
            description: 'A tool for planning floor installations effectively.',
            repoUrl: 'https://github.com/alialoraebi/floor-inst',
        },
        {
            name: 'Post Submission Interface',
            description: 'A UI for submitting and reviewing posts with CSS styling.',
            repoUrl: 'https://github.com/alialoraebi/post-submission',
        },
        // Add more projects here...
    ];

    return (
        <section id="projects" className="bg-gray-100 py-8">
            <div className="container mx-auto px-6 ">
                <div className="space-y-6 ">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-black shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
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
