import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="flex justify-between items-center p-6 text-white">
            <div className="flex items-center space-x-4">
                <img src="https://github.com/alialoraebi.png" alt="GitHub Profile Picture" className="w-16 h-16 rounded-full" />
            </div>
            <div className="text-center">
                <h1 className="text-2xl font-bold">Ali Al Aoraebi</h1>
                <h2 className="text-xl">Software Developer</h2>
                <p>Oakville, Ontario</p>
            </div>
            <div className="flex space-x-4">
                <a href="https://github.com/alialoraebi" className="text-gray-400 hover:text-white">
                    <FaGithub size={32} />
                </a>
                <a href="https://www.linkedin.com/in/ali-al-oraibi/" className="text-gray-400 hover:text-white">
                    <FaLinkedin size={32} />
                </a>
            </div>
        </header>
    );
};

export default Header;