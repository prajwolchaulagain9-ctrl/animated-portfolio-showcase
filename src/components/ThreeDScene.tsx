import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { Mesh } from "three";

export function FloatingOrb() {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.008;
      ref.current.position.y = Math.sin(Date.now() * 0.0008) * 0.5;
      ref.current.position.x = Math.cos(Date.now() * 0.0006) * 0.3;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 64, 64]} position={[0, 0, 0]}>
      <meshPhongMaterial
        color="#a855f7"
        emissive="#7c3aed"
        shininess={100}
        wireframe={false}
      />
    </Sphere>
  );
}

export function ThreeDScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
      <pointLight position={[-10, -10, 10]} intensity={1} color="#a855f7" />
      <FloatingOrb />
    </>
  );
}
