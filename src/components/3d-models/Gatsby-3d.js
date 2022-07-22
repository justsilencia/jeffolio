
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import AnimateHover from './AnimateHover';

export default function GatsbyModel(props) {

  const modelRef = useRef();
  const { nodes, materials } = useGLTF('/models/gatsby-3d-chosen.glb');

  useThree(({camera}) => {
    camera.position.y = 80;
    camera.lookAt(0, 0, 0);
  });

  useFrame(() => {
    (props.animateProps.animateMode === 1) ? AnimateHover(modelRef, props.animateProps) : modelRef.current.rotation.z += .01;
  });

  return (
      <group ref={modelRef} {...props} dispose={null}>
        <mesh geometry={nodes.Circle.geometry} material={materials['Material.001']} scale={30.29} />
      </group>
  )
}

useGLTF.preload('/models/gatsby-3d-chosen.glb');
