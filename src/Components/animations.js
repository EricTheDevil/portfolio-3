import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin.js";

gsap.registerPlugin(MotionPathPlugin);

const t1 = gsap.timeline();
/**
 * GSAP parent timeline, all the timeline should be controlled from here.
 */
export const animateElements = () => {
    t1.to("#rect", {
        duration: 2,
        ease: "power1.out",
        motionPath: {
            path: "#path",
            align: "#path",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
        },
    });
    t1.to(".loading-line", { autoAlpha: 0, duration: 1 }, "<");
    t1.to(
        ".loading-left",
        {
            ease: "elastic",
            x: -150,
            y: -150,
            duration: 1,
        },
        ">"
    );
    t1.to(
        ".loading-right",
        {
            ease: "elastic",
            x: 150,
            y: 150,
            duration: 1,
        },
        "<"
    );
    t1.to(
        ".loading-left",
        {
            ease: "power1.out",
            x: -1000,
            y: -1000,
            duration: 1,
            autoAlpha: 0,
        },
        ">"
    );
    t1.to(
        ".loading-right",
        {
            ease: "power1.out",
            x: 1000,
            y: 1000,
            duration: 1,
            autoAlpha: 0,
        },
        "<"
    );
};
