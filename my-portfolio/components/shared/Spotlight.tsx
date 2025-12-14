"use client";

import { useEffect, useState } from "react";

export default function Spotlight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-[-1]"
      style={{
        background: `radial-gradient(
          600px circle at ${pos.x}px ${pos.y}px,
          rgba(166,108,255,0.25),
          transparent 70%
        )`
      }}
    />
  );
}
