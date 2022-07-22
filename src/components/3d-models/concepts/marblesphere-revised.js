import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, GradientTexture } from "@react-three/drei";

const Sphere = () => {
  const sphereRef = useRef();
  const repeatX = 3;
  const repeatY = 2;

//   const [base, bump, normal, ao, metal, rough] = useLoader(
//     THREE.TextureLoader,
//     [
//       "/textures/laced-metal/metal1_basecolor.jpg",
//       "/textures/laced-metal/metal1_height.png",
//       "/textures/laced-metal/metal1_normal.jpg",
//       "/textures/laced-metal/metal1_ambientOcclusion.jpg",
//       "/textures/laced-metal/metal1_metallic.jpg",
//       "/textures/laced-metal/metal1_roughness.jpg"
//     ]
//   );

  const [base, bump, normal, ao, metal, rough] = useLoader(
    THREE.TextureLoader,
    [
      "/textures/glass/glass-texture-1.jpg",
      "/textures/glass/marble-texture-1.jpg",
      "/textures/glass/glass-texture-2.jpg",
      "/textures/laced-metal/metal1_ambientOcclusion.jpg",
      "/textures/laced-metal/metal1_metallic.jpg",
      "/textures/laced-metal/metal1_roughness.jpg"
    ]
  );

  [base, bump, normal, ao, metal, rough].forEach((texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeatX, repeatY);
  });

  useFrame(() => {
    sphereRef.current.rotation.x += 0.003;
    sphereRef.current.rotation.y += 0.003;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[2, 32, 32]} attach="geometry" />
      <meshStandardMaterial attach="material" color="lightblue" roughness={0} metalness={0.1} />
    </mesh>
  );
};


export const SphereCanvas = () => {
  return (
    <Canvas style={{ height: 220, width: 220 }}>
      <ambientLight intensity={.5} />
      <directionalLight
      position={[2.5, 8, 5]}
      intensity={1.5}
      />
      <pointLight position={[40, 80, 160]} color="purple" intensity={2.5} />
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};


