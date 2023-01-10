import React from "react"
import SkillNetworks from "./SkillNetworks"
import CustNavbar from "./nav/CustNavbar"
import "../styles/index.scss"

const Layout = ({ children }) => {
  return (
    <div className="content-outer" id="outer-container">
      <CustNavbar />
      <main className="content-wrap" id="page-wrap">
        <SkillNetworks />
        <div>{children}</div>
      </main>
      <script type="text/javascript" src="http://classic.avantlink.com/affiliate_app_confirm.php?mode=js&authResponse=f0229c5059616820b7038aeb0c2cee85fb7bd896"></script>
    </div>
  )
}

export default Layout
