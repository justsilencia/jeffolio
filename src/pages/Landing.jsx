// Standard components.
import React, { useState } from "react"
import Seo from "../components/Seo"

// Parent components for viewing 3d models.
import SkillElement from "../components/3d-models/SkillElement"
import ChosenSkill from "../components/3d-models/ChosenSkill"
import LandingSphere from "../components/3d-models/LandingSphere"

// 3d model components.
import * as ThreeModels from "../components/3d-models"

// Skill components.
import * as Skills from "../components/skills"

export default function Landing() {
  const [chosenSkill, setChosenSkill] = useState({
    modelSrc: "",
    skillName: "",
    visible: false,
    skillComp: "",
    skillModel: "",
  })

  const [skillElements, setSkillElements] = useState([
    {
      id: "HTML5",
      modelSrc: "/models/html-3d.glb",
      visible: true,
      skillComp: <Skills.Html5 />,
      skillModel: ThreeModels.Html3d,
    },
    {
      id: "CSS3",
      modelSrc: "/models/css-3d.glb",
      visible: true,
      skillComp: <Skills.Css3 />,
      skillModel: ThreeModels.Css3d,
    },
    {
      id: "Javascript",
      modelSrc: "/models/javascript-3d.glb",
      visible: true,
      skillComp: <Skills.Javascript />,
      skillModel: ThreeModels.Javascript3d,
    },
    {
      id: "NodeJs",
      modelSrc: "/models/node-3d.glb",
      visible: true,
      skillComp: <Skills.Nodejs />,
      skillModel: ThreeModels.Node3d,
    },
    {
      id: "ReactJs",
      modelSrc: "/models/react-3d.glb",
      visible: true,
      skillComp: <Skills.Reactjs />,
      skillModel: ThreeModels.React3d,
    },
    {
      id: "Mongodb",
      modelSrc: "/models/mongo-3d.glb",
      visible: true,
      skillComp: <Skills.Mongodb />,
      skillModel: ThreeModels.Mongo3d,
    },
    {
      id: "ASP.NET",
      modelSrc: "/models/aspnet-3d.glb",
      visible: true,
      skillComp: <Skills.AspNet />,
      skillModel: ThreeModels.AspNet3d,
    },
    {
      id: "SQL",
      modelSrc: "/models/sql-3d.glb",
      visible: true,
      skillComp: <Skills.Sql />,
      skillModel: ThreeModels.Sql3d,
    },
    {
      id: "Next.Js",
      modelSrc: "/models/nextjs-3d.glb",
      visible: true,
      skillComp: <Skills.NextJs />,
      skillModel: ThreeModels.Next3d,
    },
    {
      id: "Gatsby.Js",
      modelSrc: "/models/gatsby-3d.glb",
      visible: true,
      skillComp: <Skills.Gatsby />,
      skillModel: ThreeModels.Gatsby3d,
    },
    {
      id: "Three.Js",
      modelSrc: "/models/threejs-3d.glb",
      visible: true,
      skillComp: <Skills.ThreeJs />,
      skillModel: ThreeModels.Threejs3d,
    },
  ])

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
    skillElements.forEach((skill, i) => {
      if (skill.visible) {
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
          />
        )
      }
    })
  }

  return (
    <>
      <Seo title="Home" />
      <div className="row">
        <div className="col-lg-12">
          <div className="port-skills-links">
            <ul>{renderSkills ? renderSkills : ""}</ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-center mt-3">
          <div className="drop-skill">
            {chosenSkill.visible ? (
              <>
                <h1>{chosenSkill.skillName}</h1>
                <div id="chosen-model">
                  <ChosenSkill
                    key={chosenSkill.skillName}
                    SkillModel={chosenSkill.skillModel}
                    modScale={[7, 7, 7]}
                  />
                </div>
              </>
            ) : (
              ""
            )}

            {chosenSkill.visible ? (
              <div className="skill-summary-scroll shadow-scrollwindow">
                <h3>Skill Summary</h3>
                {chosenSkill.skillComp}
              </div>
            ) : (
              <div className="choose-skill">
                <ChosenSkill
                  SkillModel={LandingSphere}
                  modScale={[0.9, 0.9, 0.9]}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
