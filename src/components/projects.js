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
        <div>
            <img src={screenshots[currentScreenshotIndex]} alt="screenshot" />
            <button onClick={previousScreenshot}>Previous screenshot</button>
            <button onClick={nextScreenshot}>Next screenshot</button>
            <a href="https://github.com/alialoraebi">View more here</a>
        </div>
    );
};
export default Projects;