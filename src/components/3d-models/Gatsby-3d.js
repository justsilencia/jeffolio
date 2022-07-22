
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';

export default function GatsbyModel(props) {

  const group = useRef();
  const { nodes, materials } = useGLTF('/models/gatsby-3d-chosen.glb');

  useThree(({camera}) => {
    camera.position.y = 80;
    camera.lookAt(0, 0, 0);
  });

  useFrame(() => {
    group.current.rotation.z += .01;
  })

  return (
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.Circle.geometry} material={materials['Material.001']} scale={30.29} />
      </group>
  )
}

useGLTF.preload('/models/gatsby-3d-chosen.glb');
