import React from "react"
import timeElapsed from "../utils/timeElapsed"

const startDate = new Date("1/1/2013")

const Javascript = () => {
  return (
    <>
      <div className="skill-summary">
        <p>
          I've been programming with Javascript since roughly{" "}
          {timeElapsed(startDate, "")}, and I still learn new things about the
          language regularly. From front-end bells and whistles, to wiring up
          AJAX requests, to back-end servers and APIs, I'm in my comfort zone.
        </p>
        <div>
          <span className="concepts">Familiar Concepts</span>
          <ul>
            <li>Functional Programming</li>
            <li>OOP (with prototypes)</li>
            <li>Asynchronous I/O (Blocking vs. Non-Blocking)</li>
            <li>Promises</li>
            <li>Event Loop</li>
            <li>XHR / Fetch / AJAX</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Javascript
