"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const mesh = useRef<THREE.Mesh>(null);
  const outerMesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current && outerMesh.current) {
      mesh.current.rotation.y += delta * 0.05;
      mesh.current.rotation.x += delta * 0.02;
      outerMesh.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <group>
        {/* Inner Dark Sphere - Optimized segments to 40 */}
        <mesh>
          <sphereGeometry args={[2.45, 40, 40]} />
          <meshBasicMaterial color="#050505" />
        </mesh>
        
        {/* Wireframe Globe - Optimized segments */}
        <mesh ref={mesh}>
          <sphereGeometry args={[2.5, 48, 48]} />
          <meshBasicMaterial 
            color="#3b82f6" 
            wireframe={true} 
            transparent={true} 
            opacity={0.2} 
          />
        </mesh>
        
        {/* Outer Glow - Optimized segments */}
        <mesh ref={outerMesh}>
          <sphereGeometry args={[2.7, 24, 24]} />
          <meshBasicMaterial 
            color="#8b5cf6" 
            wireframe={true} 
            transparent={true} 
            opacity={0.05} 
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function GlobeScene() {
  return (
    <div className="w-full h-[400px] md:h-[600px] flex items-center justify-center">
      <Canvas 
        dpr={[1, 2]} 
        gl={{ antialias: true, stencil: false, powerPreference: "high-performance" }}
        className="pointer-events-none"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 7]} />
        <Globe />
      </Canvas>
    </div>
  );
}
