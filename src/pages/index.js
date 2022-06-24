import React, { useState } from "react";
//import { Link } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Scrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";

// Skill components...
import HTML5 from '../components/skills/html5';
import CSS3 from '../components/skills/css3';
import Javascript from '../components/skills/javascript';
import Nodejs from '../components/skills/nodejs';
import Reactjs from '../components/skills/reactjs';
import SQL from '../components/skills/sql';
import Mongodb from '../components/skills/mongodb';
import ASPNET from '../components/skills/aspnet';
import SkillElement from "../components/skillelement";

const IndexPage = () => {

  const [chosenSkill, setChosenSkill] = useState({
    imgSrc: '',
    skillName: '',
    visible: false,
    animate: false,
    skillComp: ''
  })

  const [skillElements, setSkillElements] = useState([
    {
        id: 'HTML5',
        imgSrc: '../images/html5.png',
        visible: true,
        skillComp: <HTML5 />
    },
    {
        id: 'CSS3',
        imgSrc: '../images/css3.png',
        visible: true,
        skillComp: <CSS3 />
    },
    {
        id: 'Javascript',
        imgSrc: '../images/javascript.png',
        visible: true,
        skillComp: <Javascript />
    },
    {
        id: 'NodeJs',
        imgSrc: '../images/nodejs.png',
        visible: true,
        skillComp: <Nodejs />
    },
    {
        id: 'ReactJs',
        imgSrc: '../images/reactjs.png',
        visible: true,
        skillComp: <Reactjs />
    },
    {
        id: 'Mongodb',
        imgSrc: '../images/mongodb.png',
        visible: true,
        skillComp: <Mongodb />
    },
    {
        id: 'ASP.NET',
        imgSrc: '../images/asp.net.png',
        visible: true,
        skillComp: <ASPNET />
    },
    {
        id: 'SQL',
        imgSrc: '../images/SQL.png',
        visible: true,
        skillComp: <SQL />
    }
  ]);

  const animationEnd = () => {
    setChosenSkill(prevState => ({
        chosenSkill: {
            imgSrc: prevState.chosenSkill.imgSrc, 
            skillName: prevState.chosenSkill.skillName,
            visible: true, 
            animate: false,
            skillComp: prevState.chosenSkill.skillComp
        }
    }));
}

  const clickSkill = (index) => {

    let skillArr = [];
    skillElements.forEach((skillEl, i) => {
        skillArr.push(skillEl);
        skillArr[i].visible = (index !== i) ? true : false;
    });
   
  skillArr[index].visible = false;
  setSkillElements({skillElements: skillArr, 
                   chosenSkill: 
                        {
                            imgSrc: skillArr[index].imgSrc,
                            skillName: skillArr[index].id,
                            visible: true,
                            animate: true,
                            skillComp: skillArr[index].skillComp
                        }
                    });
  }

  let renderSkills = [];

  skillElements.forEach((skill, i) => {
    if (skill.visible) {
        renderSkills.push((
          <SkillElement />
        ))
    }
  });

  return (
    <Layout>
      <Seo title='Home' />
      
      <div className="row">
                <div className="col-lg-12">
                    <div className="port-skills-links">
                        <ul>
                          <li>
                            <SkillElement mScale={"1.5"} mPath={"/models/node-3d.glb"} />
                          </li>
                          <li>
                            <SkillElement mScale={"1.2"} mPath={"/models/javascript-3d.glb"} />
                          </li>
                            
                            {/*renderSkills? renderSkills : ''*/}
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
                                <svg viewBox="0 0 100 100">
                                    <path d="M 0, 50 a 50, 50 0 1, 1 0, 1 z" id="circle" />
                                    <text fill="#fff">
                                        <textPath xlinkHref="#circle">
                                            CHOOSE A SKILL!
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                        }
                    </div>
                    
                </div>
            </div>

    </Layout>
  )
}

export default IndexPage
