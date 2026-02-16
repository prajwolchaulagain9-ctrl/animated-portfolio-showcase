import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Mesh, BufferGeometry, BufferAttribute, Points as ThreePoints } from "three";

function FloatingEnvelope() {
  const ref = useRef<Mesh>(null);

  useFrame(({ mouse, clock }) => {
    if (ref.current) {
      ref.current.rotation.x = mouse.y * 0.3 + Math.sin(clock.elapsedTime * 0.6) * 0.2;
      ref.current.rotation.y = mouse.x * 0.3 + clock.elapsedTime * 0.3;
      ref.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2.5, 1.5, 0.1]} />
      <meshStandardMaterial
        color="#0ea5e9"
        metalness={0.8}
        roughness={0.2}
        emissive="#0284c7"
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}

function ParticleField() {
  const ref = useRef<ThreePoints>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const particlesGeometry = useMemo(() => {
    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 10;
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    return geometry;
  }, []);

  return (
    <points ref={ref} geometry={particlesGeometry}>
      <pointsMaterial
        color="#38bdf8"
        size={0.08}
        sizeAttenuation={true}
        transparent
        opacity={0.6}
      />
    </points>
  );
}

export function Contact3DBackground() {
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#0ea5e9" />
        <pointLight position={[-5, -5, 5]} intensity={1} color="#38bdf8" />
        <FloatingEnvelope />
        <ParticleField />
      </Canvas>
    </div>
  );
}
