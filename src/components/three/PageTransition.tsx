"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import * as THREE from "three";

export default function PageTransition() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Three.js setup
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Full-screen quad with custom shader
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uProgress;
        uniform vec2 uResolution;
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          vec2 center = vec2(0.5, 0.5);
          float dist = distance(uv, center);

          // Ripple wave
          float wave = sin(dist * 30.0 - uTime * 8.0) * 0.5 + 0.5;
          float ripple = smoothstep(uProgress - 0.3, uProgress, dist) *
                         (1.0 - smoothstep(uProgress, uProgress + 0.05, dist));

          // Olive green → warm brown palette
          vec3 colorA = vec3(0.678, 0.757, 0.471); // #adc178 olive
          vec3 colorB = vec3(0.663, 0.518, 0.404); // #a98467 brown
          vec3 color = mix(colorA, colorB, wave * 0.5);
          float alpha = ripple * wave * (1.0 - uProgress) * 2.5;

          gl_FragColor = vec4(color, alpha * 0.9);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animate the transition
    let start = performance.now();
    const duration = 900;

    const animate = () => {
      const elapsed = performance.now() - start;
      const t = Math.min(elapsed / duration, 1);
      material.uniforms.uProgress.value = t;
      material.uniforms.uTime.value = elapsed / 1000;
      renderer.render(scene, camera);
      if (t < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        renderer.render(scene, camera);
      }
    };

    cancelAnimationFrame(animRef.current);
    start = performance.now();
    animRef.current = requestAnimationFrame(animate);

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [pathname]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
