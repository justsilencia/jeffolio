import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"
import AnimateHover from "./utils/AnimateHover"
import modelMods from "./utils/modelMods"

export default function Threejs3d(props) {
  const modelRef = useRef()
  const { nodes } = useGLTF("/models/threejs-3d.glb")

  useThree(({ camera }) => {
    camera.position.x = 2
    camera.lookAt(...modelMods.cameraLookat)
  })

  useFrame(() => {
    props.animateProps.animateMode === 1
      ? AnimateHover(modelRef, props.animateProps)
      : (modelRef.current.rotation.z += modelMods.zRotate)
  })

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <mesh
        scale={0.008}
        geometry={nodes.threejs.geometry}
        material={nodes.threejs.material}
      />
    </group>
  )
}

useGLTF.preload("/models/threejs-3d.glb")
