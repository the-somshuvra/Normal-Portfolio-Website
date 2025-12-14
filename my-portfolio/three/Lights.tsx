"use client";

export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 5, 3]} intensity={1.2} />
      <pointLight position={[-4, -3, -4]} intensity={0.6} />
    </>
  );
}
