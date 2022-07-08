import React, { useRef } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath, scale }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame(() => {
    //ref.current.rotation.y += 0.001;
    //ref.current.rotation.y += Math.sin(Date.now() * 0.01) * Math.PI * 0.01;
    // ref.current.rotation.z += Math.sin(Date.now() * 0.01) * Math.PI * 0.01;
    // ref.current.rotation.x += Math.sin(Date.now() * 0.01) * Math.PI * 0.01;
  });

  useThree(({camera}) => {
    camera.position.y = 80;
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
