import { useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

interface ThreeDTitleProps {
  text: string;
  position?: [number, number, number];
  color?: string;
}

export function ThreeDTitle({
  text,
  position = [0, 0, 0],
  color = "#a855f7",
}: ThreeDTitleProps) {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
      ref.current.position.y += Math.sin(Date.now() * 0.001) * 0.001;
    }
  });

  return (
    <group ref={ref} position={position}>
      <Text
        font="/fonts/inter-var.woff"
        fontSize={1.5}
        color={color}
        anchorX="center"
        anchorY="middle"
        maxWidth={200}
        outlineWidth={0.002}
        outlineColor="#7c3aed"
      >
        {text}
      </Text>
    </group>
  );
}
