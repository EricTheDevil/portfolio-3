import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import Random from "canvas-sketch-util/random";
import {
    createAttractor,
    updateAttractor,
    dadrasAttractor,
    aizawaAttractor,
    arneodoAttractor,
    dequanAttractor,
    lorenzAttractor,
    lorenzMod2Attractor,
    threeScrollAttractor,
    thomasAttractor,
} from "./attractor";

const simulation = [
    dadrasAttractor,
    aizawaAttractor,
    arneodoAttractor,
    dequanAttractor,
    lorenzAttractor,
    lorenzMod2Attractor,
    threeScrollAttractor,
    thomasAttractor,
];

function StormLine({ radius, simulation, width, color, speed }) {
    const line = useRef();

    useFrame(() => {
        if (line.current) {
            const nextPosition = updateAttractor(
                currentPosition,
                radius,
                simulation,
                speed
            ); line.current.advance(nextPosition);
        }
    }); const [positions, currentPosition] = useMemo(() => createAttractor(50), []);

    return (
        <mesh frustumCulled={false}>
            <meshLine ref={line} attach="geometry" points={positions} />
            <meshLineMaterial transparent lineWidth={width} color={color} />
        </mesh>
    );
}

/**
 * Adds the lines that move around in the scene, uses attractor and meshlines
 * @param {*} param0 
 * @returns 
 */
function SparkStorm({ count, colors, radius = 10, type = 0 }) {
    const lines = useMemo(
        () =>
            new Array(count).fill().map(() => {
                return {
                    color: Random.pick(colors),
                    width: Random.range(0.1, 0.4),
                    speed: Random.range(0.002, 0.01),
                    simulation: simulation[type],
                    radius: Random.range(2, 2.25) * radius,
                };
            }),
        [count, colors, radius, type]
    );

    return (
        <>
            {lines.map((props, index) => (
                <StormLine key={index} {...props} />
            ))}
        </>
    );
}
export default SparkStorm;