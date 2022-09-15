import React from "react"
import timeElapsed from "../utils/timeElapsed"

const startDate = new Date("1/1/2016")

const Nodejs = () => {
  return (
    <>
      <div className="skill-summary">
        <p>
          I've been working with node since roughly {timeElapsed(startDate, "")}
          . I use it mainly for web development, but have also tinkered with
          other obscure uses like automation tasks and web scraping.
        </p>
        <p>
          I've enjoyed working with Node from the moment I typed in my first
          <em> npm i</em> command into the terminal. The ever evolving library
          of open-source modules makes for a great way to do business.
        </p>
        <div>
          <span className="concepts">Familiar Concepts</span>
          <ul>
            <li>Web Frameworks (Express, NextJs, etc..)</li>
            <li>OOP</li>
            <li>Functional Programming</li>
            <li>Asynchronous I/O (Blocking vs. Non-Blocking)</li>
            <li>Promises</li>
            <li>Event Loop</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nodejs
