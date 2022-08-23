import * as React from "react"
import SkillNetworks from "./SkillNetworks"
import CustNavbar from "./nav/CustNavbar"
import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <div className="content-outer" id="outer-container">
      <CustNavbar />
      <main className="content-wrap" id="page-wrap">
        <SkillNetworks />
        <div className="app container">{children}</div>
      </main>
    </div>
  )
}

export default Layout
