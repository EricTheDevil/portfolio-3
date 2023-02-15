import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__social-links">
                <a href="https://github.com/EricTheDevil" className="footer__social-link" aria-label="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.linkedin.com/in/ericthedevil/" className="footer__social-link" aria-label="GitHub">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
