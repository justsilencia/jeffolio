import React from "react"
import { motion } from "framer-motion"

// Parent components for viewing 3d models.
import SkillElement from "../components/3d-models/SkillElement"
import ChosenSkill from "../components/3d-models/ChosenSkill"
import LandingSphere from "../components/3d-models/LandingSphere"

export default function SkillsLayoutMobile({
  skillElements,
  setSkillElements,
}) {
  const clickSkill = index => {
    let skillArr = []

    // This populates the new skillArr array in order to update the skillElements
    // state array. The only change at this point is the visible property being set
    // to true or false for the chosen skill.
    skillElements.forEach((skillEl, i) => {
      skillArr.push(skillEl)
      skillArr[i].visible = index !== i ? true : false
    })

    setSkillElements(skillArr)
  }

  let renderSkills = []

  if (skillElements.length > 0) {
    skillElements.forEach((skill, i) => {
      if (skill.visible) {
        renderSkills.push(
          <SkillElement
            width="75px"
            height="75px"
            SkillModel={skill.skillModel}
            clickEvent={clickSkill}
            key={i}
            index={i}
            scale={[7, 7, 7]}
          />
        )
      }
    })
  }

  return (
    <div>
      <motion.div className="skills-slider-mobile">
        <ul>{renderSkills ? renderSkills : ""}</ul>
      </motion.div>
      <span>
        <ChosenSkill SkillModel={LandingSphere} modScale={[0.9, 0.9, 0.9]} />
      </span>
    </div>
  )
}
