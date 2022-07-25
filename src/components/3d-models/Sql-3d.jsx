import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import AnimateHover from './utils/AnimateHover';
import modelMods from './utils/modelMods';

export default function Sql3d(props) {

  const modelRef = useRef();
  const { nodes, materials, animations } = useGLTF('/models/sql-3d.glb');
  const { actions } = useAnimations(animations, modelRef);

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
      <group name="Cube003" rotation={[0, Math.PI / 2, 0]} scale={[0.41, 1.93, 3.38]}>
        <mesh geometry={nodes.Cube004.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/sql-3d.glb');
