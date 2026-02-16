import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

interface ParticleSystemProps {
  count?: number;
  color?: string;
  speed?: number;
}

export function ParticleSystem({
  count = 1000,
  color = "#a855f7",
  speed = 1,
}: ParticleSystemProps) {
  const particlePositions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 40;
    particlePositions[i + 1] = (Math.random() - 0.5) * 40;
    particlePositions[i + 2] = (Math.random() - 0.5) * 40;
  }

  return (
    <div className="w-full h-96">
      <Canvas camera={{ position: [0, 0, 20] }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1.2} />
          <points>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={count}
                array={particlePositions}
                itemSize={3}
              />
            </bufferGeometry>
            <pointsMaterial
              color={color}
              size={0.15}
              sizeAttenuation={true}
              transparent
              opacity={0.8}
            />
          </points>
        </Suspense>
      </Canvas>
    </div>
  );
}
