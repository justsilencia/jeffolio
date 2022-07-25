import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import AnimateHover from './utils/AnimateHover';
import modelMods from './utils/modelMods';

export default function Javascript3d(props) {
  
  const modelRef = useRef();
  const { nodes, materials } = useGLTF('/models/javascript-3d.glb');

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
      <mesh geometry={nodes.Curve.geometry} material={materials.SVGMat} position={[0, -1.25, 0]} scale={13.5} />
    </group>
  )
}

useGLTF.preload('/models/javascript-3d.glb');
