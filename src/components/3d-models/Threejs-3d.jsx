import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useThree, useFrame } from "@react-three/fiber"
import AnimateHover from "./utils/AnimateHover"
import modelMods from "./utils/modelMods"

export default function Model(props) {
  const modelRef = useRef()
  const { nodes, materials } = useGLTF("/models/threejs-3d.glb")

  useThree(({ camera }) => {
    camera.position.y = modelMods.cameraY
    camera.lookAt(...modelMods.cameraLookat)
  })

  useFrame(() => {
    props.animateProps.animateMode === 1
      ? AnimateHover(modelRef, props.animateProps)
      : (modelRef.current.rotation.z += modelMods.zRotate)
  })

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.11}>
        <mesh
          geometry={nodes.threejs.geometry}
          material={materials.Material_0}
          rotation={[0, 0, -0.5]}
        />
      </group>
    </group>
  )
}

useGLTF.preload("/models/threejs-3d.glb")
