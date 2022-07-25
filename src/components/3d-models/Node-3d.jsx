import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import AnimateHover from './utils/AnimateHover';
import modelMods from './utils/modelMods';

export default function Node3d(props) {
  
  const modelRef = useRef();
  const { nodes, materials } = useGLTF('/models/node-3d.glb');

  useThree(({camera}) => {
    camera.position.y = modelMods.cameraY;
    camera.lookAt(...modelMods.cameraLookat);
  });

  useFrame(() => {
    (props.animateProps.animateMode === 1) ? 
      AnimateHover(modelRef, props.animateProps) 
      : 
      modelRef.current.rotation.z += modelMods.zRotate;
  });

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.Curve.geometry}
        material={materials['SVGMat.002']}
        position={[0.02, 0.1, 0]}
        rotation={[-0.01, 0, 0]}
        scale={13.7}
      />
    </group>
  )
}

useGLTF.preload('/models/node-3d.glb');
