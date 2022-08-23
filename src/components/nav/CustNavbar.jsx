import React, { Component } from "react"
import { scaleRotate as Menu } from "react-burger-menu"
import {
  faHome,
  faFolderOpen,
  faCog,
  faCommentDots,
  faQuestion,
  faBook,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
        {/* <a id='stats' href='/Feedback'>
                    <FontAwesomeIcon icon={faCommentDots} />
                    <span>
                        FEEDBACK
                    </span>
                </a> */}
      </Menu>
    )
  }
}

export default CustNavbar
