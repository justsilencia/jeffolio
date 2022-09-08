import React from "react"
import { motion } from "framer-motion"

// Parent components for viewing 3d models.
import SkillElement from "../components/3d-models/SkillElement"
import ChosenSkill from "../components/3d-models/ChosenSkill"
import LandingSphere from "../components/3d-models/LandingSphere"

export default function SkillsLayout({
  skillElements,
  setSkillElements,
  setChosenSkill,
}) {
  const clickSkill = index => {
    let skillArr = []
    skillElements.forEach((skillEl, i) => {
      skillArr.push(skillEl)
      skillArr[i].visible = index !== i ? true : false
    })

    setSkillElements(skillArr)

    setChosenSkill({
      modelSrc: skillArr[index].modelSrc,
      skillName: skillArr[index].id,
      visible: true,
      skillComp: skillArr[index].skillComp,
      skillModel: skillArr[index].skillModel,
    })
  }

  let renderSkills = []

  if (skillElements.length > 0) {
    let skillArr = skillElements.filter(skill => skill.visible == true)
    let xOffset = 0
    let yOffset = 0
    let radius = 300
    let radianAngle = 0
    let radianStep = (2 * Math.PI) / skillArr.length

    skillArr.forEach((skill, i) => {
      if (skill.visible) {
        xOffset = Math.round(radius * Math.cos(radianAngle))
        yOffset = Math.round(radius * Math.sin(radianAngle))
        renderSkills.push(
          <SkillElement
            width="150px"
            height="150px"
            SkillModel={skill.skillModel}
            clickEvent={clickSkill}
            key={i}
            index={i}
            scale={[7, 7, 7]}
            xOffset={xOffset}
            yOffset={yOffset}
          />
        )
        radianAngle += radianStep
      }
    })
  }

  return (
    <motion.div animate={{ x: 0 }} className="port-skills-links">
      <ul className="circle-container">
        {renderSkills ? renderSkills : ""}
        <li className="landing-sphere">
          <ChosenSkill SkillModel={LandingSphere} modScale={[0.9, 0.9, 0.9]} />
        </li>
      </ul>
    </motion.div>
  )
}
