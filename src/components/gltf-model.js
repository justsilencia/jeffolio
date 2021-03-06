import React, { useRef } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath, scale, animate }) => {

  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  useFrame(() => {
    
    // Grow scale, and rotate on z axis.
    if (animate.scale.growActive === true) {
      if (ref.current.scale.x < animate.scale.growScale[0]) {
        ref.current.scale.x += .25;
        ref.current.scale.z += .25;
      }
      ref.current.rotation.z += .02;
    }

    // Shrink scale, and bring z axis position back to 0.
    if (animate.scale.shrinkActive === true) {
      ref.current.rotation.z = 0;
      if (ref.current.scale.x > animate.scale.shrinkScale[0]) {
        ref.current.scale.x -= .25;
      }
      if (ref.current.scale.z > animate.scale.shrinkScale[2]) {
        ref.current.scale.z -= .25;
      }
    }
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
