"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Globe() {
  const mesh = useRef<THREE.Mesh>(null);
  const outerMesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current && outerMesh.current) {
      // Slower, smoother rotation
      mesh.current.rotation.y += delta * 0.04;
      mesh.current.rotation.x += delta * 0.02;
      
      outerMesh.current.rotation.y -= delta * 0.02;
      outerMesh.current.rotation.x -= delta * 0.01;
    }
  });

  return (
    <group>
      {/* Inner Dark Sphere to block background */}
      <mesh>
        <sphereGeometry args={[2.45, 64, 64]} />
        <meshBasicMaterial color="#050505" />
      </mesh>
      
      {/* Wireframe Globe - Smoother with more segments */}
      <mesh ref={mesh}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshBasicMaterial 
          color="#3b82f6" 
          wireframe={true} 
          transparent={true} 
          opacity={0.25} 
        />
      </mesh>
      
      {/* Outer Glow / Network effect */}
      <mesh ref={outerMesh}>
        <sphereGeometry args={[2.7, 32, 32]} />
        <meshBasicMaterial 
          color="#8b5cf6" 
          wireframe={true} 
          transparent={true} 
          opacity={0.08} 
        />
      </mesh>
    </group>
  );
}

export default function GlobeScene() {
  return (
    <div className="w-full h-[400px] md:h-[600px] flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 7] }}>
        <Globe />
      </Canvas>
    </div>
  );
}
