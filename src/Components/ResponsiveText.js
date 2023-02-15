import React, { Suspense, useEffect, useState, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";

/**
 * Create a responsive 3D text in the canvas
 * Not used
 * @param {*} param0 
 * @returns 
 */
function ResponsiveText({ text, position }) {
    const { viewport } = useThree();
    const color = "#043e7d";
    const fontSize = 5;
    const maxWidth = 10;
    const lineHeight = 0.75;
    const letterSpacing = -0.08;
    const textAlign = "center";
    const [hovered, setHovered] = useState(false);

    return (
        <Text
            color={hovered ? "#043e7d" : "#800000"}
            fontSize={fontSize}
            maxWidth={(viewport.width / 100) * maxWidth}
            lineHeight={lineHeight}
            letterSpacing={letterSpacing}
            textAlign={textAlign}
            anchorX="center"
            anchorY="bottom"
            bevelEnabled={true}
            bevelThickness={4}
            bevelSize={1}
            bevelOffset={0}
            bevelSegments={16}
            position={position}
            scale={0.1}
            onPointerOut={() => setHovered(false)}
            onPointerOver={() => setHovered(true)}
        >
            {text}
        </Text>
    );
}
export default ResponsiveText;

/*
ReactDOM.render(
  <>
    <Canvas pixelRatio={[1, 2]} camera={{ position: [0, 0, 200] }}>
      <ResponsiveText />
    </Canvas>
    <Controls />
  </>,
  document.getElementById("root")
);
*/
