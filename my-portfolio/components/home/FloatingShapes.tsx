"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/three/Scene"), { ssr: false });

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 z-[-2] opacity-40 pointer-events-none">
      <Scene />
      {/* Dark gradient at bottom for depth */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0B0B0F] to-transparent" />
    </div>
  );
}
