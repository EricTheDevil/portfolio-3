import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Shadow, MeshWobbleMaterial, Sparkles } from "@react-three/drei";

/**
 * Script for the orb and handles the creation and logic for it.
 * @param {*} props only position so far
 * @returns the orb with diamond 
 */
const Model = (props) => {
    const groupRef = useRef();
    const { nodes } = useGLTF("/geo.min.glb", true);
    const shadowRef = useRef();
    const shadowMaterial = useRef();

    const [cameraPosition, setCameraPosition] = useState([0, 0, 30]);

    // Rotation and position update logic
    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        const t = (1 + Math.sin(time * 1.5)) / 2;

        groupRef.current.position.y = t / 3;
        groupRef.current.rotation.x = groupRef.current.rotation.z += 0.0005;

        shadowMaterial.current.uniforms.scale.value = t;
    });

    // Handle camera position changes
    useEffect(() => {
        if (window.innerWidth < 600) {
            setCameraPosition([0, 0, 45]);
        }
    }, []);

    return (
        <group {...props} dispose={null}>
            <group ref={groupRef}>
                {/* Main sphere */}
                <mesh
                    scale={1.5}
                    geometry={new THREE.SphereGeometry(1, 50, 1)}
                    castShadow
                    receiveShadow
                >
                    <meshToonMaterial
                        color={"#046ec4"}
                        roughness={15}
                        metalness={3}
                        factor={15}
                        speed={3}
                        wireframe
                        wireframeLinecap={"square"}
                        wireframeLinejoin={"bevel"}
                        emissive="red"
                        emissiveIntensity={1}
                        toneMapped={false}
                    />
                </mesh>
                {/* Second mesh */}
                <mesh scale={0.5} geometry={nodes.geo.geometry}>
                    <MeshWobbleMaterial
                        ref={shadowMaterial}
                        roughness={15}
                        metalness={3}
                        factor={10}
                        speed={1.5}
                        color={"#FFFF00"}
                        emissive="red"
                        emissiveIntensity={2}
                        toneMapped={false}
                        uniforms={{ scale: { value: 1 } }}
                    />
                </mesh>
            </group>
            {/* Shadow */}
            <Shadow
                ref={shadowRef}
                opacity={2}
                position={[0, -1.51, 0]}
            />
        </group>
    );
};

export default Model;
