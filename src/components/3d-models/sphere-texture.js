import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

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
      "/textures/glass/marble-texture-1.jpg",
      "/textures/glass/glass-texture-1.jpg",
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
      <sphereGeometry args={[3, 36, 36]} />
      <meshPhysicalMaterial
        map={base}
        bumpMap={bump}
        aoMap={ao}
        normalMap={normal}
        metalnessMap={metal}
        roughnessMap={rough}
      />
    </mesh>
  );
};


export const SphereCanvas = () => {
  return (
    <Canvas style={{ height: 220, width: 220 }}>
      <pointLight position={[5, 10, -10]} intensity={1} />
      <pointLight position={[-3, 0, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};


