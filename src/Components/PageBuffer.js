import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function PageBuffer() {
    const [animation, setAnimation] = useState(null);
    const imageRef = useRef(null);
    const parallaxRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Generate a random number to choose which animation to play
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        //setAnimation(randomNumber);
        setAnimation(0);
        return () => {
        };
    }, []);

    useEffect(() => {
        if (animation === 1) {
            gsap.to(imageRef.current, {
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                },
                x: '100%',
                ease: 'sine.inOut',
                y: (index, target) => {
                    return gsap.getProperty(target, 'x') * -0.3;
                },
            });
        } else if (animation === 2) {
            gsap.to(parallaxRef.current, {
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: true,
                },
                y: '-50%',
                ease: 'none',
            });
        }
    }, [animation]);

    return (
        <div className="page-buffer">
            {animation === 0 && (<div className="page-empty"></div>)}
            {animation === 1 && (
                <img
                    ref={imageRef}
                    className="page-buffer__image"
                    src="https://via.placeholder.com/350x150"
                    alt="Placeholder Image"
                />
            )}
            {animation === 2 && (
                <div ref={parallaxRef} className="page-buffer__parallax">
                    <h2 className="page-buffer__title">Parallax Animation</h2>
                    <p className="page-buffer__description">
                        This is a sample description for the parallax animation.
                    </p>
                </div>
            )}
        </div>
    );
};

export default PageBuffer;
