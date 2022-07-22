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
import SkillElement from '../components/skillelement';

import SphereCollage from '../components/3d-models/SphereCollage';
import GatsbyModel from '../components/3d-models/Gatsby-3d';
import ModelViewer from "../components/3d-models/ModelViewer";

const IndexPage = () => {

  const [chosenSkill, setChosenSkill] = useState({
    modelSrc: '',
    skillName: '',
    visible: false,
    animate: false,
    skillComp: ''
  })

  const [skillElements, setSkillElements] = useState([
    {
        id: 'HTML5',
        modelSrc: '/models/html-3d.glb',
        visible: true,
        skillComp: <HTML5 />
    },
    {
        id: 'CSS3',
        modelSrc: '/models/css-3d.glb',
        visible: true,
        skillComp: <CSS3 />
    },
    {
        id: 'Javascript',
        modelSrc: '/models/javascript-3d.glb',
        visible: true,
        skillComp: <Javascript />
    },
    {
        id: 'NodeJs',
        modelSrc: '/models/node-3d.glb',
        visible: true,
        skillComp: <Nodejs />
    },
    {
        id: 'ReactJs',
        modelSrc: '/models/react-3d.glb',
        visible: true,
        skillComp: <Reactjs />
    },
    {
        id: 'Mongodb',
        modelSrc: '/models/mongo-3d.glb',
        visible: true,
        skillComp: <Mongodb />
    },
    {
        id: 'ASP.NET',
        modelSrc: '/models/aspnet-3d.glb',
        visible: true,
        skillComp: <ASPNET />
    },
    {
        id: 'SQL',
        modelSrc: '/models/sql-3d.glb',
        visible: true,
        skillComp: <SQL />
    },
    {
        id: 'Next.Js',
        modelSrc: '/models/nextjs-3d.glb',
        visible: true,
        skillComp: <SQL />
    },
    {
        id: 'Gatsby.Js',
        modelSrc: '/models/gatsby-3d.glb',
        visible: true,
        skillComp: <SQL />,
        chosenComp: <GatsbyModel />
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
                      chosenComp: skillArr[index].chosenComp
                  });
  }

  let renderSkills = [];
  
 
  if (skillElements.length > 0) {
    skillElements.forEach((skill, i) => {
      if (skill.visible) {
          renderSkills.push((
            <SkillElement clickEvent={clickSkill} key={i} index={i} skillTxt={skill.id} scale={[7, 7, 7]} mPath={skill.modelSrc} />
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
                            {renderSkills? renderSkills : ''}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center mt-3">
                    <div className="drop-skill">
                        { 
                            chosenSkill.visible?

                              <>
                                  <h1>{chosenSkill.skillName}</h1>
                                  <div id="chosen-model">
                                    <ModelViewer>
                                      { chosenSkill.chosenComp }
                                    </ModelViewer>
                                  </div>
                              </>
                            : ''
                        }
                        
                        {
                            chosenSkill.visible? 
                            <div className="skill-summary-scroll shadow-scrollwindow">
                                <Scrollbar>
                                    <h3>Skill Summary</h3>
                                    {chosenSkill.skillComp}
                                </Scrollbar>
                            </div> : 
                            <div className="choose-skill">
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
