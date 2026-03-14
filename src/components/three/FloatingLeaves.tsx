"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Leaf({ position, speed, rotSpeed }: {
  position: [number, number, number];
  speed: number;
  rotSpeed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.position.y = initialY + Math.sin(t * speed + position[0]) * 0.4;
    ref.current.position.x = position[0] + Math.sin(t * speed * 0.5) * 0.3;
    ref.current.rotation.z = t * rotSpeed;
    ref.current.rotation.x = Math.sin(t * rotSpeed * 0.7) * 0.5;
  });

  return (
    <mesh ref={ref} position={position}>
      <planeGeometry args={[0.15, 0.22]} />
      <meshBasicMaterial
        color={new THREE.Color().setHSL(0.22 + Math.random() * 0.06, 0.45, 0.5)}
        side={THREE.DoubleSide}
        transparent
        opacity={0.55}
      />
    </mesh>
  );
}

function LeavesScene({ count = 25 }: { count?: number }) {
  const leaves = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
      speed: 0.4 + Math.random() * 0.6,
      rotSpeed: 0.3 + Math.random() * 0.8,
    })),
    [count]
  );

  return (
    <>
      {leaves.map((leaf, i) => (
        <Leaf key={i} {...leaf} />
      ))}
    </>
  );
}

export default function FloatingLeaves({ className }: { className?: string }) {
  return (
    <div className={className} style={{ pointerEvents: "none" }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <LeavesScene count={30} />
      </Canvas>
    </div>
  );
}
