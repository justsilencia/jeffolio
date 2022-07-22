import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Sphere = () => {

  const sphereRef = useRef();

  const base = useLoader(THREE.TextureLoader,"/textures/wrap.jpg");

  useFrame(() => {
    sphereRef.current.rotation.x += 0.003;
    sphereRef.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[2.75, 40, 40]} />
      <meshPhysicalMaterial
        map={base}
      />
    </mesh>
  );
};


export default function SphereCollage() {
  return (
    <Canvas style={{ height: 250, width: 250 }}>
      <ambientLight intensity={.5} />
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};


