import React, { useState } from "react";
//import { Link } from "gatsby"
import Layout from '../components/layout';
import Seo from '../components/seo';
import Scrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

// Skill components...
import HTML5 from '../components/skills/html5';
import CSS3 from '../components/skills/css3';
import Javascript from '../components/skills/javascript';
import Nodejs from '../components/skills/nodejs';
import Reactjs from '../components/skills/reactjs';
import SQL from '../components/skills/sql';
import Mongodb from '../components/skills/mongodb';
import ASPNET from '../components/skills/aspnet';

// 3d Model Components
//import SkillElement from '../components/skillelement';
import SkillElement from "../components/3d-models/SkillElement";
import ChosenSkill from "../components/3d-models/ChosenSkill";
import SphereCollage from '../components/3d-models/SphereCollage';
import * as ThreeModels from '../components/3d-models';
import SkillModelViewer from "../components/3d-models/SkillModelViewer";

const IndexPage = () => {

  const [chosenSkill, setChosenSkill] = useState({
    modelSrc: '',
    skillName: '',
    visible: false,
    animate: false,
    skillComp: '',
    skillModel: ''
  });

  const [skillElements, setSkillElements] = useState([
    {
        id: 'HTML5',
        modelSrc: '/models/html-3d.glb',
        visible: true,
        skillComp: <HTML5 />,
        skillModel: ThreeModels.Html3d
    },
    {
        id: 'CSS3',
        modelSrc: '/models/css-3d.glb',
        visible: true,
        skillComp: <CSS3 />,
        skillModel: ThreeModels.Css3d
    },
    {
        id: 'Javascript',
        modelSrc: '/models/javascript-3d.glb',
        visible: true,
        skillComp: <Javascript />,
        skillModel: ThreeModels.Javascript3d
    },
    {
        id: 'NodeJs',
        modelSrc: '/models/node-3d.glb',
        visible: true,
        skillComp: <Nodejs />,
        skillModel: ThreeModels.Node3d
    },
    {
        id: 'ReactJs',
        modelSrc: '/models/react-3d.glb',
        visible: true,
        skillComp: <Reactjs />,
        skillModel: ThreeModels.React3d
    },
    {
        id: 'Mongodb',
        modelSrc: '/models/mongo-3d.glb',
        visible: true,
        skillComp: <Mongodb />,
        skillModel: ThreeModels.Mongo3d
    },
    {
        id: 'ASP.NET',
        modelSrc: '/models/aspnet-3d.glb',
        visible: true,
        skillComp: <ASPNET />,
        skillModel: ThreeModels.AspNet3d 
    },
    {
        id: 'SQL',
        modelSrc: '/models/sql-3d.glb',
        visible: true,
        skillComp: <SQL />,
        skillModel: ThreeModels.Sql3d 
    },
    {
        id: 'Next.Js',
        modelSrc: '/models/nextjs-3d.glb',
        visible: true,
        skillComp: <SQL />,
        skillModel: ThreeModels.Next3d
    },
    {
        id: 'Gatsby.Js',
        modelSrc: '/models/gatsby-3d.glb',
        visible: true,
        skillComp: <SQL />,
        skillModel: ThreeModels.Gatsby3d 
    }
  ]);

  const clickSkill = (index) => {
    
    let skillArr = [];
    skillElements.forEach((skillEl, i) => {
        skillArr.push(skillEl);
        skillArr[i].visible = (index !== i) ? true : false;
    });
   
    setSkillElements(skillArr);
    setChosenSkill({
                      modelSrc: skillArr[index].modelSrc,
                      skillName: skillArr[index].id,
                      visible: true,
                      animate: true,
                      skillComp: skillArr[index].skillComp,
                      skillModel: skillArr[index].skillModel
                  });
  }

  let renderSkills = [];
 
  if (skillElements.length > 0) {
    skillElements.forEach((skill, i) => {
      if (skill.visible) {
          renderSkills.push((
            <SkillElement 
            width="150px"
            height="150px"
            SkillModel={skill.skillModel} 
            clickEvent={clickSkill} 
            key={i} index={i} 
            skillTxt={skill.id} 
            scale={[7, 7, 7]} />
          ))
      }
    });
  }
  

  return (
    <Layout>
      <Seo title='Home' />
      
      <div className="row">
                <div className="col-lg-12">
                    <div className="port-skills-links">
                        <ul>
                            { renderSkills? renderSkills : '' }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
              {/* Testing the new SkillElement and ChosenSkill components!!! */}
              {/* <ChosenSkill SkillModel={ThreeModels.Gatsby3d} scale={[13,13,13]} /> */}
              {/* <SkillElement SkillModel={ThreeModels.Gatsby3d} scale={[1,1,1]} /> */}
                <div className="col-lg-12 d-flex justify-content-center mt-3">
                    <div className="drop-skill">
                        { 
                            chosenSkill.visible?
                              <>
                                  <h1>{chosenSkill.skillName}</h1>
                                  <div id="chosen-model">
                                    <ChosenSkill SkillModel={chosenSkill.skillModel} scale={[7,7,7]} />
                                  </div>
                              </>
                            : ''
                        }
                        
                        {
                            chosenSkill.visible? 
                             <div className="skill-summary-scroll shadow-scrollwindow">
                              <h3>Skill Summary</h3>
                              {chosenSkill.skillComp}
                            </div> : 
                            <div className="choose-skill">
                              <svg viewBox="0 0 100 100">
                                    <path d="M 0, 50 a 50, 50 0 1, 1 0, 1 z" id="circle" fillOpacity={"0"} />
                                    <text fill="#fff">
                                        <textPath xlinkHref="#circle">
                                            CHOOSE A SKILL!
                                        </textPath>
                                    </text>
                                </svg>
                              <SphereCollage />
                            </div>
                        }
                    </div>
                    
                </div>
            </div>

    </Layout>
  )
}

export default IndexPage
