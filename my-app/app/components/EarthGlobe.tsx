"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RotatingEarth() {
  const earthRef = useRef<THREE.Mesh>(null!);

  // Load texture ONCE
  const earthTexture = useLoader(
    THREE.TextureLoader,
    "/EarthGlobe.jpg" // MUST be inside /public
  );

  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
  });

  return (
    <Sphere args={[2, 64, 64]} ref={earthRef}>
      <meshStandardMaterial map={earthTexture} />
    </Sphere>
  );
}

export default function EarthGlobe() {
  return (
    <div className="h-[400px] w-full max-w-md mx-auto rounded-2xl border border-white/10 bg-black">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <RotatingEarth />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
