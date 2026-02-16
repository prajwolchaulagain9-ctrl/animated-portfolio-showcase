import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

interface Skill3DProps {
  skill: string;
  level: number;
}

function SkillCube({ skill, level }: Skill3DProps) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.4;
      ref.current.rotation.y = state.clock.elapsedTime * 0.6;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <mesh ref={ref} scale={[0.8, 0.8, 0.8]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#0ea5e9"
        metalness={0.8}
        roughness={0.2}
        emissive="#0284c7"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export function Skill3D({ skill, level }: Skill3DProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 mb-2">
        <Canvas camera={{ position: [0, 0, 2.5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[3, 3, 3]} intensity={1.5} color="#0ea5e9" />
          <pointLight position={[-3, -3, 3]} intensity={1} color="#38bdf8" />
          <SkillCube skill={skill} level={level} />
        </Canvas>
      </div>
      <p className="text-sm font-semibold text-center truncate w-full">{skill}</p>
      <p className="text-xs text-muted-foreground">{level}%</p>
    </div>
  );
}
