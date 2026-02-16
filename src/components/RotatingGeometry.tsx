import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface RotatingGeometryProps {
  position: [number, number, number];
  color: string;
  emissive: string;
  type: "box" | "sphere" | "torus";
  speed: number;
}

export function RotatingGeometry({
  position,
  color,
  emissive,
  type,
  speed,
}: RotatingGeometryProps) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  const geometryArgs =
    type === "box"
      ? ([1.5, 1.5, 1.5] as const)
      : type === "sphere"
        ? ([1, 32, 32] as const)
        : ([1, 0.5, 16, 100] as const);

  return (
    <mesh ref={ref} position={position}>
      {type === "box" && <boxGeometry args={geometryArgs as [number, number, number]} />}
      {type === "sphere" && <sphereGeometry args={geometryArgs as [number, number, number]} />}
      {type === "torus" && <torusGeometry args={geometryArgs as [number, number, number, number]} />}
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
        wireframe={false}
      />
    </mesh>
  );
}
