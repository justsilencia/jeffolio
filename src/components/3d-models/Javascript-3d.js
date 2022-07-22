/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/javascript-3d.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Curve.geometry} material={materials.SVGMat} position={[0, -1.25, 0]} scale={13.5} />
    </group>
  )
}

useGLTF.preload('/javascript-3d.glb')
