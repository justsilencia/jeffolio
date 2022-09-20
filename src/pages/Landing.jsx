// Standard components.
import React, { useState, useEffect } from "react"
import Seo from "../components/Seo"
import SkillsLayout from "../components/SkillsLayout"
import useMediaQuery from "../components/utils/useMediaQuery"

// Component for rendering 3d model for the chosen skill.
import ChosenSkill from "../components/3d-models/ChosenSkill"

// 3d model components.
import * as ThreeModels from "../components/3d-models"

// Skill components.
import * as Skills from "../components/skills"

export default function Landing() {
  //  const [screenWidth] = useState(useMediaQuery().width)

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

  // This effect checks for a change in the skillElements state array in order
  // to keep the chosenSkill state up to date. The skill that is not visible
  // is the chosen skill.
  useEffect(() => {
    const chosenSkill = skillElements.filter(
      skill => skill.visible === false
    )[0]

    if (chosenSkill) {
      setChosenSkill({
        modelSrc: chosenSkill.modelSrc,
        skillName: chosenSkill.id,
        visible: true,
        skillComp: chosenSkill.skillComp,
        skillModel: chosenSkill.skillModel,
      })
    }
  }, [skillElements])

  return (
    <>
      <Seo
        title="Full Stack Dev"
        description="I'm a full-stack web developer with experience working on multiple 
        different frameworks and platforms. Feel free to reach out!"
      />
      <div className="row justify-content-center">
        <SkillsLayout
          skillElements={skillElements}
          setSkillElements={setSkillElements}
        />
        {chosenSkill.visible ? (
          <div className="col-lg-6">
            <div className="drop-skill">
              <h2>{chosenSkill.skillName}</h2>
              <div id="chosen-model">
                <ChosenSkill
                  key={chosenSkill.skillName}
                  SkillModel={chosenSkill.skillModel}
                  modScale={[7, 7, 7]}
                />
              </div>
              <div className="skill-summary-scroll shadow-scrollwindow">
                <h3>Skill Summary</h3>
                {chosenSkill.skillComp}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}
