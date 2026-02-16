import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh, BufferGeometry, BufferAttribute, Points as ThreePoints } from "three";

function Particles() {
  const ref = useRef<ThreePoints>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05;
      ref.current.rotation.y = state.clock.elapsedTime * 0.075;
    }
  });

  const particlesGeometry = useMemo(() => {
    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 50;
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    return geometry;
  }, []);

  return (
    <points ref={ref} geometry={particlesGeometry}>
      <pointsMaterial
        color="#0ea5e9"
        size={0.15}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
      />
    </points>
  );
}

function FloatingTorus() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.4;
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 2;
      ref.current.position.z = Math.cos(state.clock.elapsedTime * 0.3) * 3;
    }
  });

  return (
    <mesh ref={ref} position={[-5, 0, -5]}>
      <torusGeometry args={[2, 0.5, 16, 100]} />
      <meshStandardMaterial
        color="#0ea5e9"
        emissive="#0284c7"
        wireframe={true}
        opacity={0.4}
        transparent
      />
    </mesh>
  );
}

function FloatingSphere() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.y = state.clock.elapsedTime * 0.35;
      ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.6) * 2.5;
      ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.4) * 3;
    }
  });

  return (
    <mesh ref={ref} position={[6, 0, -8]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color="#0ea5e9"
        emissive="#0284c7"
        wireframe={true}
        opacity={0.3}
        transparent
      />
    </mesh>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#0ea5e9" />
      <pointLight position={[-10, -10, 10]} intensity={0.8} color="#38bdf8" />
      <pointLight position={[0, 0, 15]} intensity={1.2} color="#0284c7" />
    </>
  );
}

export const Three3DBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
      <Canvas
        camera={{ position: [0, 0, 25], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <Lighting />
        <Particles />
        <FloatingTorus />
        <FloatingSphere />
      </Canvas>
    </div>
  );
};
