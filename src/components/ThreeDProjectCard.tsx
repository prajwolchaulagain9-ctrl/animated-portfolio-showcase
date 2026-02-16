import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useRef } from "react";

interface Card3DProps {
  index: number;
}

function Card3D({ index }: Card3DProps) {
  const ref = useRef<Mesh>(null);

  useFrame(({ mouse, clock }) => {
    if (ref.current) {
      ref.current.rotation.x = mouse.y * 0.2 + Math.sin(clock.elapsedTime * 0.5 + index) * 0.1;
      ref.current.rotation.y = mouse.x * 0.2 + clock.elapsedTime * 0.2;
      ref.current.position.z = Math.sin(clock.elapsedTime * 0.3 + index) * 0.2;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[2.2, 2.8, 0.15]} />
      <meshStandardMaterial
        color="#0ea5e9"
        metalness={0.9}
        roughness={0.1}
        emissive="#0284c7"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

interface ThreeDProjectCardProps {
  index?: number;
}

export const ThreeDProjectCard = ({ index = 0 }: ThreeDProjectCardProps) => {
  return (
    <div className="w-full h-48 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 3.5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#0ea5e9" />
        <pointLight position={[-5, -5, 5]} intensity={0.8} color="#38bdf8" />
        <Card3D index={index} />
      </Canvas>
    </div>
  );
};
