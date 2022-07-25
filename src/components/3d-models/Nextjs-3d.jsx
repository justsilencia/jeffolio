import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import AnimateHover from './AnimateHover';
import modelMods from './modelMods';

export default function Next3d(props) {
  
  const modelRef = useRef();
  const { nodes, materials } = useGLTF('/nextjs-3d.glb');

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
      <group rotation={[0, 0.01, 0]} scale={[1.26, 1.43, 1.43]}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.005']} />
      </group>
    </group>
  )
}

useGLTF.preload('/nextjs-3d.glb')
