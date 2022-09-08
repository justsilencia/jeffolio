import React, { useState } from "react"
import SkillModelViewer from "./SkillModelViewer"
import { motion } from "framer-motion"

export default function SkillElement({
  SkillModel,
  scale,
  clickEvent,
  index,
  width,
  height,
  xOffset,
  yOffset,
}) {
  const [animateParams, setAnimateParams] = useState({
    scale: {
      initialScale: scale,
      growActive: false,
      shrinkActive: false,
      growScale: scale.map(axis => axis + 0.5),
      shrinkScale: scale,
    },
    animateMode: 1,
  })

  return (
    <motion.li
      transition={{ delay: 0.75 }}
      animate={{ x: xOffset, y: yOffset }}
      onMouseOver={() =>
        setAnimateParams(prevState => {
          prevState.scale.growActive = true
          prevState.scale.shrinkActive = false
          return prevState
        })
      }
      onMouseLeave={() => {
        setAnimateParams(prevState => {
          prevState.scale.shrinkActive = true
          prevState.scale.growActive = false
          return prevState
        })
      }}
      onClick={() => clickEvent(index)}
    >
      <SkillModelViewer width={width} height={height}>
        <SkillModel scale={scale} animateProps={animateParams} />
      </SkillModelViewer>
    </motion.li>
  )
}
