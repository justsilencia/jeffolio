import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import AnimateHover from './utils/AnimateHover';
import modelMods from './utils/modelMods';

export default function AspNet3d(props) {
  
  const modelRef = useRef();
  const { nodes, materials } = useGLTF('/models/aspnet-3d.glb');

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
      <mesh geometry={nodes.NurbsPath.geometry} material={materials['Material.002']} scale={[2.7, 3.1, 3.1]} />
    </group>
  )
}

useGLTF.preload('/models/aspnet-3d.glb');
