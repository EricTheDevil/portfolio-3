import React, { lazy, Suspense, useState } from "react";
import { useThree } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";
import {
    EffectComposer,
    DepthOfField,
    Bloom,
    Noise,
    Vignette,
    Outline,
} from "@react-three/postprocessing";

const SparkStorm = lazy(() => import("./SparkStorm"));
const Geo = lazy(() => import("./Geo"));

// Random colours for the lines swerving around
// !! the colour names are not the corresponding HEX
const colors = {
    sunnyRainbow: [
        "#fbe555", // yellow
        "#fb9224", // orange
        "#f45905", // reddish-orange
        "#be8abf", // purplish-blue
        "#ffeed0", // light yellow
        "#feff89", // light yellow-green
    ],
    red: ["#00FFFF"],
    blue: ["#FFC0CB"],
    yellow: ["#6A5ACD"],
    green: ["#FF69B4"],
};

/**
 * Handles all the components on the landing page 3D canvas
 * @returns 
 */
export function Scene() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <EffectComposer>
                <Outline blur edgeStrength={100} />
                <DepthOfField
                    focusDistance={2}
                    focalLength={0.02}
                    bokehScale={0.5}
                    height={480}
                />
                <Bloom luminanceThreshold={1} luminanceSmoothing={0.9} height={300} />
                <Noise opacity={0.02} />
                <Vignette eskil={false} offset={0.1} darkness={1.1} />
            </EffectComposer>
            <pointLight position={[0, 0, 30]} intensity={2} castShadow shadow-mapSize={1024} />
            <Suspense fallback={null}>
                <Geo position={[0, 0, 27]} />
            </Suspense>
            <Suspense fallback={null}>
                <SparkStorm count={50} colors={colors.sunnyRainbow} type={1} />
            </Suspense>
            <Suspense fallback={null}>
                <SparkStorm count={30} radius={25} colors={colors.green} type={0} />
            </Suspense>
        </Suspense>
    );
}
