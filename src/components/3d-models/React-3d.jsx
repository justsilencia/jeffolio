import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import AnimateHover from './AnimateHover';
import modelMods from './modelMods';

export default function React3d(props) {

  const modelRef = useRef()
  const { nodes, materials } = useGLTF('/react-3d.glb')

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
      <mesh geometry={nodes.Circle.geometry} material={materials['Material.001']} scale={1.12} />
      <mesh geometry={nodes.Curve001.geometry} material={materials.SVGMat} />
    </group>
  )
}

useGLTF.preload('/react-3d.glb')
