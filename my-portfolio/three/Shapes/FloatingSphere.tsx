"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function FloatingSphere() {
  const ref = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    ref.current.position.y = Math.sin(t * 1.2) * 0.4;
    ref.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={ref} position={[-1.5, 0.5, -2]}>
      <sphereGeometry args={[0.6, 64, 64]} />
      <meshStandardMaterial color={"#A66CFF"} metalness={0.4} roughness={0.3} />
    </mesh>
  );
}
