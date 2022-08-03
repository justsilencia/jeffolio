import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function ChooseSkill(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/sphere-txt.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions["TextAction.005"].play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.001']} scale={1.24} />
      <mesh
        name="Text"
        geometry={nodes.Text.geometry}
        material={materials['Material.002']}
        position={[0, -0.41, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/sphere-txt.glb')
