import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="font-custom flex justify-between items-center p-6 text-white">
            <div className="flex items-center space-x-4">
                <img src="https://github.com/alialoraebi.png" alt="GitHub Profile" className="w-16 h-16 rounded-full" />
            </div>
            <div className="text-center xs:text-sm">
                <h1 className="text-2xl xs:text-xl font-bold">Ali Al Oraibi</h1>
                <h2 className="text-xl xs:text-lg">Software Developer</h2>
                <p className="xs:text-sm">Oakville, Ontario</p>
            </div>
            <div className="flex space-x-4">
                <a href="https://github.com/alialoraebi" className="text-gray-400 hover:text-white" target='_blank' rel='noopener noreferrer'>
                    <FaGithub size={32} />
                </a>
                <a href="https://www.linkedin.com/in/ali-al-oraibi/" className="text-gray-400 hover:text-white" target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin size={32} />
                </a>
            </div>
        </header>
    );
};

export default Header;