import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import AnimateHover from './utils/AnimateHover';
import modelMods from './utils/modelMods';

export default function Mongo3d(props) {
  
  const modelRef = useRef();
  const { nodes, materials } = useGLTF('/models/mongo-3d.glb');

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
      <group scale={56.66}>
        <mesh geometry={nodes.Curve001_1.geometry} material={materials.Material} />
        <mesh geometry={nodes.Curve001_2.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/mongo-3d.glb');
