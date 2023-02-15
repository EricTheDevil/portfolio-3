import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import ScrollTo from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTo);

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        gsap.to(window, {
            scrollTo: {
                y: 0,
            },
        });
    }, []);

    const handleNavigation = (yPos) => {
        gsap.to(window, {
            scrollTo: {
                y: yPos,
            },
        });
    };

    return (
        <header className="header">
            <button
                className="hamburger"
                onClick={() => setIsNavOpen(!isNavOpen)}
                aria-label="Toggle navigation"
            >
                <FontAwesomeIcon icon={faBars} />
            </button>
            <nav className={`nav-items ${isNavOpen ? 'open' : 'closed'}`}>
                <ul>
                    <li>
                        <p onClick={() => handleNavigation(0)}>Home</p>
                    </li>
                    <li>
                        <p onClick={() => handleNavigation('.about-me')}>About</p>
                    </li>
                    <li>
                        <p onClick={() => handleNavigation('.skills')}>Skills</p>
                    </li>
                    <li>
                        <p onClick={() => handleNavigation('.experience')}>Experience</p>
                    </li>
                    <li>
                        <p onClick={() => handleNavigation('.project')}>Projects</p>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
