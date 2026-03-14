"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function DistortedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
  });

  return (
    <Sphere ref={meshRef} args={[1.4, 64, 64]}>
      <MeshDistortMaterial
        color="#adc178"
        attach="material"
        distort={0.45}
        speed={2.5}
        roughness={0.1}
        metalness={0.3}
        transparent
        opacity={0.85}
      />
    </Sphere>
  );
}

function RingOrbit() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.PI / 3 + clock.getElapsedTime() * 0.15;
    ref.current.rotation.z = clock.getElapsedTime() * 0.1;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2, 0.015, 16, 100]} />
      <meshBasicMaterial color="#dde5b6" transparent opacity={0.4} />
    </mesh>
  );
}

function RingOrbit2() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.PI / 5;
    ref.current.rotation.y = clock.getElapsedTime() * 0.2;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.5, 0.01, 16, 100]} />
      <meshBasicMaterial color="#a98467" transparent opacity={0.3} />
    </mesh>
  );
}

export default function FloatingOrb({ className }: { className?: string }) {
  return (
    <div className={className} style={{ pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#dde5b6" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#a98467" />
        <DistortedSphere />
        <RingOrbit />
        <RingOrbit2 />
      </Canvas>
    </div>
  );
}
