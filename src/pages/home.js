import React, { Component } from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";
import HTML5 from '../components/skills/html5';
import CSS3 from '../components/skills/css3';
import Javascript from '../components/skills/javascript';
import Nodejs from '../components/skills/nodejs';
import Reactjs from '../components/skills/reactjs';
import SQL from '../components/skills/sql';
import Mongodb from '../components/skills/mongodb';
import ASPNET from '../components/skills/aspnet';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            skillElements: [
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
            ],
            chosenSkill: {
                imgSrc: '',
                skillName: '',
                visible: false,
                animate: false,
                skillComp: ''
            }
        }

        this.clickSkill = this.clickSkill.bind(this);
        this.animationEnd = this.animationEnd.bind(this);
    }

    animationEnd() {
        this.setState(prevState => ({
            chosenSkill: {
                imgSrc: prevState.chosenSkill.imgSrc, 
                skillName: prevState.chosenSkill.skillName,
                visible: true, 
                animate: false,
                skillComp: prevState.chosenSkill.skillComp
            }
        }));
    }

    clickSkill(index) {

        let skillArr = [];
        this.state.skillElements.forEach((skillEl, i) => {
            skillArr.push(skillEl);
            skillArr[i].visible = (index !== i) ? true : false;
        });
       
        skillArr[index].visible = false;
        this.setState({skillElements: skillArr, 
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

    render() {

        let renderSkills = [];
        this.state.skillElements.forEach((skill, i) => {
            if (skill.visible) {
                renderSkills.push((
                    <li key={i}>
                        <img alt="Skill summary link."
                        ref={skill.elRef} 
                        onClick={() => this.clickSkill(i)} 
                        src={skill.imgSrc} />
                        <span>{skill.id}</span>
                    </li>
                ))
            }
        });

        return (
            <>
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
                            this.state.chosenSkill.visible? 
                            <>
                                <img alt="Chosen skill summary."
                                onAnimationEnd={this.animationEnd} 
                                className={this.state.chosenSkill.animate? "img-grow" : ""} 
                                src={this.state.chosenSkill.imgSrc} />
                                <h1>{this.state.chosenSkill.skillName}</h1>
                            </>
                            : ''
                        }
                        
                        {
                            this.state.chosenSkill.visible? 
                            <div className="skill-summary-scroll shadow-scrollwindow">
                                <Scrollbar>
                                    <h3>Skill Summary</h3>
                                    {this.state.chosenSkill.skillComp}
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
            </>
        ); 
    }
}

export default Home;