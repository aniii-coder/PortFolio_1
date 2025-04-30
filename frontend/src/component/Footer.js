import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Aniket Singh. All Rights Reserved.
          </p>
        </div>
        <div className="footer-right">
          <p className="footer-contact">
            <a href="mailto:aksingh22356@gmail.com" className="text-white text-decoration-none">
              aksingh22356@gmail.com
            </a>
          </p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/aniket-v-singh/" className="text-white mx-3" target="_blank" rel="noreferrer">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://github.com/aniii-coder" className="text-white mx-3" target="_blank" rel="noreferrer">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
