import React, { useState } from "react"
import { motion } from "framer-motion"

// Parent components for viewing 3d models.
import SkillElement from "../components/3d-models/SkillElement"
import ChosenSkill from "../components/3d-models/ChosenSkill"
import LandingSphere from "../components/3d-models/LandingSphere"

export default function SkillsLayout({
  skillVisible,
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
    let xOffset = 0
    let yOffset = 0
    let radius = 304
    let size = 608
    let angle = 0
    let step = (2 * Math.PI) / skillElements.length

    skillElements.forEach((skill, i) => {
      if (skill.visible) {
        xOffset = Math.round(size + radius * Math.cos(angle) - 150 / 2) - 526
        yOffset = Math.round(size + radius * Math.sin(angle) - 150 / 2) - 526
        renderSkills.push(
          <SkillElement
            width="150px"
            height="150px"
            SkillModel={skill.skillModel}
            clickEvent={clickSkill}
            key={i}
            index={i}
            skillTxt={skill.id}
            scale={[7, 7, 7]}
            xOffset={xOffset}
            yOffset={yOffset}
          />
        )
        angle += step
      }
    })
  }

  return (
    <div className="port-skills-links">
      <ul className="circle-container">
        {renderSkills ? renderSkills : ""}
        {skillVisible ? (
          ""
        ) : (
          <li className="landing-sphere">
            <ChosenSkill
              SkillModel={LandingSphere}
              modScale={[0.9, 0.9, 0.9]}
            />
          </li>
        )}
      </ul>
    </div>
  )
}
