import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
      <footer className=" font-custom p-4 text-left">
        © {currentYear} Ali Al Oraibi
      </footer>
    );
};

export default Footer;