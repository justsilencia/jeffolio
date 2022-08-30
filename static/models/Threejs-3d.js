/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/threejs-3d.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.08}>
        <mesh geometry={nodes.threejs.geometry} material={materials.Material_0} rotation={[0, 0, -0.5]} />
      </group>
    </group>
  )
}

useGLTF.preload('/threejs-3d.glb')
