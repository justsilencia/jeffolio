import React, { useRef, useEffect } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

export default function LandingSphere(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF("/models/landing-sphere.glb")
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    actions["TextAction.003"].play()
  })

  useFrame(() => {
    group.current.rotation.z += 0.003
    group.current.rotation.x += 0.003
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="Text"
        geometry={nodes.Text.geometry}
        material={materials["Material.012"]}
        rotation={[Math.PI / 2, 0, 3.08]}
      />
      <group scale={-2.57}>
        <mesh
          geometry={nodes.Sphere_1.geometry}
          material={materials["Material.001"]}
        />
        <mesh geometry={nodes.Sphere_2.geometry} material={materials.SVGMat} />
        <mesh
          geometry={nodes.Sphere_3.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Sphere_4.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Sphere_5.geometry}
          material={materials["SVGMat.002"]}
        />
        <mesh
          geometry={nodes.Sphere_6.geometry}
          material={materials["SVGMat.003"]}
        />
        <mesh
          geometry={nodes.Sphere_7.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Sphere_8.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          geometry={nodes.Sphere_9.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Sphere_10.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Sphere_11.geometry}
          material={materials["SVGMat.004"]}
        />
        <mesh
          geometry={nodes.Sphere_12.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Sphere_13.geometry}
          material={materials["SVGMat.005"]}
        />
        <mesh
          geometry={nodes.Sphere_14.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Sphere_15.geometry}
          material={materials["Material.010"]}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/models/landing-sphere.glb")
