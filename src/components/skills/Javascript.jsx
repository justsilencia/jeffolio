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
        <p>
          Since adopting Node as my primary back-end platform, my understanding
          of Javascript has made leaps and bounds. Creating back-end systems
          with Javascript has been a joy; it has forced me to disect aspects of
          the language I probably never would have ventured into.
        </p>
        <div>
          <span className="concepts">Familiar Concepts</span>
          <ul>
            <li>OOP</li>
            <li>Functional Programming</li>
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
