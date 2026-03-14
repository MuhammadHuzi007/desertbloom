"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Wire() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.getElapsedTime() * 0.15;
    ref.current.rotation.x = clock.getElapsedTime() * 0.08;
  });

  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.8, 2]} />
      <meshBasicMaterial color="#adc178" wireframe transparent opacity={0.18} />
    </mesh>
  );
}

function InnerWire() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = -clock.getElapsedTime() * 0.2;
    ref.current.rotation.z = clock.getElapsedTime() * 0.1;
  });

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[1.1, 1]} />
      <meshBasicMaterial color="#a98467" wireframe transparent opacity={0.12} />
    </mesh>
  );
}

export default function WireframeSphere({ className }: { className?: string }) {
  return (
    <div className={className} style={{ pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <Wire />
        <InnerWire />
      </Canvas>
    </div>
  );
}
