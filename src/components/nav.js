import React from 'react';


const Nav = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                <li className="navbar-item"><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
                <li className="navbar-item"><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
            </ul>
            <a href="https://github.com/alialoraebi" className="github-link">
                <img src="https://github.com/alialoraebi.png" alt="GitHub Profile Picture" className="github-image" />
            </a>
        </nav>
    );
};

export default Nav;