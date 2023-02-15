import React, { useState, useEffect } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Loader } from "@react-three/drei";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";
import { MeshLine, MeshLineMaterial } from "../Components/MeshLine";
import { Scene } from "../Components/Scene";
import "../styles.scss";
import { animateElements } from "../Components/animations";

extend({ MeshLine, MeshLineMaterial, OrbitControls, CSSRulePlugin });
function LandingPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        gsap.registerPlugin(MotionPathPlugin);
    }, []);

    const handleInViewChange = (inView) => {
        if (inView) {
            setIsLoading(false);
            animateElements();
        } else {
            setIsLoading(true);
        }
    };

    return (
        <div className="landing-page">
            <div className="loading-holders">
                <div className="loading-left" aria-hidden="true"></div>
                <div className="loading-right" aria-hidden="true"></div>
                <div className="loading-line">
                    <svg width="100%" height="100%" viewBox="6 0 10 10" aria-label="Loading">
                        <path className="svg-path" id="path" d="M 2 10 L 13 4 L 23 -2 L 2 10" />
                        <g id="rect">
                            <rect width="1" height="1" fill="dodgerblue" />
                            <text x="1" y="1" fontSize="1" aria-hidden="true"></text>
                        </g>
                    </svg>
                </div>
            </div>

            <InView onChange={handleInViewChange}>
                {({ inView, ref }) => (
                    <div ref={ref} className="landing-background">
                        <div className="landing-planet">
                            {isLoading ? (
                                <p>Loading...</p>
                            ) : (
                                <Canvas
                                    pixelratio={window.devicePixelRatio}
                                    camera={{ fov: 80, position: [0, 0, 30] }}
                                    shadows
                                    gl={{
                                        alpha: true,
                                        antialias: false,
                                        stencil: false,
                                        depth: false,
                                    }}
                                    onCreated={({ gl, size,
                                        camera }) => {
                                        if (size.width < 600) {
                                            camera.position.z = 45;
                                        }
                                    }}
                                    role="img"
                                    aria-label="Animation"
                                >
                                    <Scene />
                                </Canvas>
                            )}
                        </div>
                        <div className="landing-description">
                            <h2>
                                <span>Web Dev</span>
                            </h2>
                            <h1 className="landing-name">
                                <span>Eric</span>
                                <br />
                                <span style={{ fontSize: "0.4em" }}>Ng</span>
                            </h1>
                            <h2>
                                <span>Mobile Dev</span>
                            </h2>
                        </div>
                        <div className="layer" role="presentation" aria-hidden="true" />
                    </div>
                )}
            </InView>
            <Loader aria-label="Loading" />
        </div>
    );
};

export default LandingPage;