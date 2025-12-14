"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function FloatingCube() {
  const ref = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    ref.current.position.y = Math.cos(t * 1.1) * 0.4;
    ref.current.rotation.x += 0.004;
    ref.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={ref} position={[1.5, -0.2, -2.5]}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color={"#6EC3F4"} metalness={0.3} roughness={0.4} />
    </mesh>
  );
}
