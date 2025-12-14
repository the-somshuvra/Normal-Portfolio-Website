"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Lights from "./Lights";
import FloatingSphere from "./Shapes/FloatingSphere";
import FloatingCube from "./Shapes/FloatingCube";

export default function Scene() {
  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 0, 5], fov: 45 }}
    >
      <Suspense fallback={null}>
        <Lights />
        <FloatingSphere />
        <FloatingCube />
      </Suspense>
    </Canvas>
  );
}
