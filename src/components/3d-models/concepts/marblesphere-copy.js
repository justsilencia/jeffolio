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
      "/textures/wrap5.jpg",
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
      <sphereGeometry args={[2.75, 40, 40]} />
      <meshPhysicalMaterial
        map={base}
      />
    </mesh>
  );
};


export const SphereCanvas = () => {
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


