import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { intro } from '../Data/data.js';

function AboutPage() {
    const [index, setIndex] = useState(0);

    const handleLeftClick = () => {
        setIndex(index === 0 ? intro.length - 1 : index - 1);
    };

    const handleRightClick = () => {
        setIndex(index === intro.length - 1 ? 0 : index + 1);
    };

    return (
        <section className="about-me">
            <div className="about-me__container">
                <figure className="about-me__image">
                    <img src={intro[index].img} alt={intro[index].alt} />
                </figure>
                <article className="about-me__intro">
                    <h1>{intro[index].heading}</h1>
                    <p>{intro[index].description}</p>
                    <nav className="about-me__navigation">
                        <button
                            type="button"
                            onClick={handleLeftClick}
                            aria-label="Previous"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <button
                            type="button"
                            onClick={handleRightClick}
                            aria-label="Next"
                        >
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </nav>
                </article>
            </div>
        </section>
    );
};

export default AboutPage;