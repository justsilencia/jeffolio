import React from "react"
import timeElapsed from "../utils/timeElapsed"

const startDate = new Date("1/1/2016")

const Reactjs = () => {
  return (
    <>
      <div className="skill-summary">
        <p>
          I started developing with react
          {timeElapsed(startDate, "")}, and since then it has been my framework
          of choice. React is my second highest scoring tag on Stackoverflow
          (top 10% overall), and I've published a minimalistic emoji enabled
          textarea component on npm.
        </p>
        <p>
          I've developed multiple SPAs with react and React meta frameworks,
          including this very page (GatsbyJs). I'm always looking into advanced
          concepts and patterns to make my React code better.
        </p>
        <div>
          <span className="concepts">Familiar Concepts</span>
          <ul>
            <li>State Management</li>
            <li>Component Lifecycle</li>
            <li>Isomorphic React</li>
            <li>Hooks</li>
            <li>SEO related issues with SPAs</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Reactjs
