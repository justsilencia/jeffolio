/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/nextjs-3d.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0.01, 0]} scale={[1.26, 1.43, 1.43]}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.005']} />
      </group>
    </group>
  )
}

useGLTF.preload('/nextjs-3d.glb')
