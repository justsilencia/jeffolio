import React from "react"
import { Helmet } from "react-helmet"
import SkillNetworks from "./SkillNetworks"
import CustNavbar from "./nav/CustNavbar"
import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <div className="content-outer" id="outer-container">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <CustNavbar />
      <main className="content-wrap" id="page-wrap">
        <SkillNetworks />
        <div>{children}</div>
      </main>
    </div>
  )
}

export default Layout
