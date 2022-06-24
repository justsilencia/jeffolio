import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath, scale }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(({ camera }) => {
    ref.current.rotation.y += 0.001;
    camera.position.x = 0;
    camera.position.y = 8;
    camera.position.z = 0;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        scale={scale}
      />
    </>
  );
};

export default GltfModel;
