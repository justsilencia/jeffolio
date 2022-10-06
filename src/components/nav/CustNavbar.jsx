import React, { Component } from "react"
import { scaleRotate as Menu } from "react-burger-menu"
import {
  faHome,
  faFolderOpen,
  faCog,
  faQuestion,
  faBook,
  faStar,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../styles/color-scheme.scss"
import "../../styles/nav.scss"

class CustNavbar extends Component {
  render() {
    return (
      <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
        <h2>
          <FontAwesomeIcon icon={faFolderOpen} />
          <span>Jeff's Skillfolio</span>
        </h2>
        <a id="home" href="/">
          <FontAwesomeIcon icon={faHome} />
          <span>HOME</span>
        </a>
        <a href="/Projects">
          <FontAwesomeIcon icon={faCog} />
          <span>PROJECTS</span>
        </a>
        <a href="/DevStory">
          <FontAwesomeIcon icon={faBook} />
          <span>DEVELOPER STORY</span>
        </a>
        <a id="stats" href="/WhyMe">
          <FontAwesomeIcon icon={faQuestion} />
          <span>WHY ME</span>
        </a>
        <a
          style={{ textDecoration: "none" }}
          target="_child"
          href="https://www.upwork.com/freelancers/~015e4b636a42e26d33?viewMode=1"
        >
          <div className="nav-reviews">
            <div className="review">
              <FontAwesomeIcon style={{ color: "green" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "green" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "green" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "green" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "green" }} icon={faStar} />{" "}
              <b>5.00</b>
              <span className="review-date">May 18, 2022 - Present</span>
              <p>
                "Jeff is awesome! We work with him for tech writing, mainly
                about Javascript. All his work is amazing and on point. He is
                the driving force behind our company blog. He includes code
                examples, amazing writing, what else can you ask for?"
              </p>
            </div>
            <div className="review">
              <FontAwesomeIcon style={{ color: "green" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "green" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "green" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "green" }} icon={faStar} />
              <FontAwesomeIcon style={{ color: "green" }} icon={faStar} />{" "}
              <b>5.00</b>
              <span className="review-date">Apr 1, 2022 - Apr 21, 2022</span>
              <p>
                "I hired Jeff to write several technical programming articles
                for my blog, and he knocked it out of the park! He has a
                technical background with knowledge of Git and programming
                languages and has great communication skills.... Highly
                recommended!"
              </p>
            </div>
          </div>
        </a>
      </Menu>
    )
  }
}

export default CustNavbar
