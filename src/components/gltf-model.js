import React, { useRef, useState } from "react";
import { useLoader, useFrame, useThree, reconciler } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath, scale, animate }) => {

  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  useFrame(() => {
    
    if (animate.scale.growActive === true) {
      if (ref.current.scale.x < animate.scale.growScale[0]) {
        ref.current.scale.x += .5;
        ref.current.scale.z += .5;
      }
    }
    if (animate.scale.shrinkActive === true) {
      if (ref.current.scale.x > animate.scale.shrinkScale[0]) {
        ref.current.scale.x -= .5;
        ref.current.scale.z -= .5;
      }
    }
    
    // ref.current.rotation.y += 0.001;
    // ref.current.scale.x += Math.sin(Date.now() * 0.01) * Math.PI * 0.01;
    // ref.current.scale.z += Math.sin(Date.now() * 0.005) * Math.PI * 0.005;
    // ref.current.rotation.y += Math.sin(Date.now() * 0.01) * Math.PI * 0.01;
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
