
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import AnimateHover from './utils/AnimateHover';
import modelMods from './utils/modelMods';

export default function Gatsby3d(props) {

  const modelRef = useRef();
  const { nodes, materials } = useGLTF('/models/gatsby-3d.glb');

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
        <mesh geometry={nodes.Circle.geometry} material={materials['Material.001']} scale={5.29} />
      </group>
  )
}

useGLTF.preload('/models/gatsby-3d-chosen.glb');
