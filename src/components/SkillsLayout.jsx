import React from "react"

// Parent components for viewing 3d models.
import SkillElement from "../components/3d-models/SkillElement"
import ChosenSkill from "../components/3d-models/ChosenSkill"
import LandingSphere from "../components/3d-models/LandingSphere"

export default function SkillsLayout({ skillElements, setSkillElements }) {
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
    // skillLength is the number of skills visible in the circle. Needed to determine
    // accurate radians for circle layout radianStep variable.
    let skillLength = skillElements.filter(
      skill => skill.visible === true
    ).length

    // This basic math converts degrees into radians in order to give the
    // circular layout effect.
    let xOffset = 0
    let yOffset = 0
    let radius = 300
    let radianAngle = 0
    let radianStep = (2 * Math.PI) / skillLength

    skillElements.forEach((skill, i) => {
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
    <div
      style={{ width: "800px", height: "800px" }}
      className="port-skills-links"
    >
      <ul className="circle-container">
        {renderSkills ? renderSkills : ""}
        <li className="landing-sphere">
          <ChosenSkill
            width="250px"
            height="250px"
            SkillModel={LandingSphere}
            modScale={[0.9, 0.9, 0.9]}
          />
        </li>
      </ul>
    </div>
  )
}
