import React, { useState } from 'react';

const Projects = () => {
    const screenshots = [
        '/images/empApp.png',
        '/images/floorInst.png',
        '/images/post-submission-css.png',
    ];

    const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0);

    function nextScreenshot() {
        setCurrentScreenshotIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
        
    }

    function previousScreenshot() {
        setCurrentScreenshotIndex((prevIndex) => {
            if (prevIndex === 0) {
                return screenshots.length - 1;
            } else {
                return prevIndex - 1;
            }
        });
    }

    return (
        <section id="projects" className="projects-section">
            <h2 className="projects-title">Projects</h2>
            <img src={screenshots[currentScreenshotIndex]} alt="screenshot" className="projects-screenshot"/>
            <button onClick={previousScreenshot} className="projects-prev-button">← Previous screenshot</button>
            <button onClick={nextScreenshot} className="projects-next-button">Next screenshot →</button>
            <a href="https://github.com/alialoraebi" className="projects-link">View more here</a>
        </section>
    );
};
export default Projects;