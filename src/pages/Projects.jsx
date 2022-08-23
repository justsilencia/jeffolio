import React, { Component } from "react"
import Layout from "../components/Layout"

class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imgState: [
        { visible: false },
        { visible: false },
        { visible: false },
        { visible: false },
        { visible: false },
        { visible: false },
      ],
    }

    this.imgToggle = this.imgToggle.bind(this)
  }

  imgToggle(index) {
    const newState = this.state.imgState
    newState[index].visible = !newState[index].visible
    this.setState({ imgState: newState })
  }

  render() {
    return (
      <Layout>
        <div className="desc-box shadow-scrollwindow">
          <div className="projects p-3">
            <h1>Projects</h1>
            <p>
              I've developed or helped develop countless projects. Here, I've
              put together a list of the more relevant projects I've authored
              over the years, in chronological order from newest to oldest.
              <br />
              <em>
                * This portfolio was built with React/GatsbyJs and hosted on
                Netlify.
              </em>
            </p>
            <div>
              <ul>
                <li>
                  <a href="#mac">MAC (SERN Stack)</a>
                </li>
                <li>
                  <a href="#chuggo">Chuggo (MERN Stack)</a>
                </li>
                <li>
                  <a href="#ezemoji">react-ez-emoji (Reactjs)</a>
                </li>
                <li>
                  <a href="#csm">Credit Score Maestro (ASP.Net)</a>
                </li>
                <li>
                  <a href="#veswap">veSwap (ASP.Net)</a>
                </li>
                <li>
                  <a href="#comas">COMAS (Classic ASP)</a>
                </li>
              </ul>
            </div>
            <span>
              <h2 id="mac">MAC (SERN Stack)</h2>
            </span>
            <p>
              MAC is an SPA I built for a teacher (Mr. Mac) that handle some
              specific tasks for him such as keeping track of current class
              lists, and exporting these lists to an excel file for sending via
              email to all of the respective teachers.
            </p>
            <p>
              You can download this app and have it running in seconds. Just
              click the link to my Github repo at the top of your screen!
            </p>
            <div>
              <h3>Features:</h3>
              <ul>
                <li>Developed with SERN stack, and React-Router.</li>
                <li>One-click import of current roster from pdf(s).</li>
                <li>Dynamic creation of groups and classes.</li>
                <li>Keeps running class list for unlimited classes.</li>
                <li>Exports data to pre-styled excel spreadsheet.</li>
                <li>Form generation.</li>
              </ul>
            </div>
            <p className="no-indent">
              <label
                onClick={() => this.imgToggle(0)}
                htmlFor="imgCheck1"
                className="btn-story-img"
              >
                {this.state.imgState[0].visible ? "Hide" : "Show"} Images of
                MAC!
              </label>
              <input className="hide" id="imgCheck1" type="checkbox" />
              <img
                alt="MAC for portfolio."
                className="story-img"
                src="/images/mac.webp"
              />
            </p>
            <span>
              <h2 id="chuggo">Chuggo (MERN Stack)</h2>
            </span>
            <p>
              Chuggo is a social media project. It's very much unfinished, and I
              pretty much used it as a learning platform for the MERN stack. I
              ended up using a CMS called KeystoneJs, which incorporates a React
              admin console.
            </p>
            <p>
              Figuring out how to tie in my own React Hot-Loader build with the
              pre-existing Keystone build was tricky, but I learned a lot about
              how Webpack works in the process.
            </p>
            <div>
              <h3>Features:</h3>
              <ul>
                <li>Developed with the MERN stack and PUG view engine.</li>
                <li>Trending hashtag tracker.</li>
                <li>Custom minimalistic emoji system.</li>
                <li>Upvoting, commenting, and mentioning capability.</li>
              </ul>
            </div>
            <p className="no-indent">
              <label
                onClick={() => this.imgToggle(1)}
                htmlFor="imgCheck2"
                className="btn-story-img"
              >
                {this.state.imgState[1].visible ? "Hide" : "Show"} Image of
                Chuggo!
              </label>
              <input className="hide" id="imgCheck2" type="checkbox" />
              <img
                alt="Chug for portfolio."
                className="story-img"
                src="/images/chug-1.png"
              />
            </p>
            <span>
              <h2 id="ezemoji">React-ez-emoji (Reactjs)</h2>
            </span>
            <p>
              While building Chuggo, I realized that I'd like a more
              minimalistic emoji-enabled textarea than what was currently
              available on NPM. So I made react-ez-emoji, and published it to
              NPM while I was at it.
            </p>
            <p>
              For Chuggo, I modified react-ez-emoji to be able to detect
              hashtags and mentions. However, the version I published to NPM is
              just a simple textarea with streamlined emoji capability.
            </p>
            <div>
              <h3>Features:</h3>
              <ul>
                <li>Simplified and customizable emoji picker.</li>
                <li>Emoji encoding.</li>
                <li>Easy to import and tie-in to component state.</li>
              </ul>
            </div>
            <p className="no-indent">
              <label
                onClick={() => this.imgToggle(2)}
                htmlFor="imgCheck3"
                className="btn-story-img"
              >
                {this.state.imgState[2].visible ? "Hide" : "Show"} Image of
                react-ez-emoji!
              </label>
              <input className="hide" id="imgCheck3" type="checkbox" />
              <img
                alt="react-ez-emoji for portfolio."
                className="story-img"
                src="/images/react-ez-emoji.png"
              />
            </p>
            <span>
              <h2 id="csm">Credit Score Maestro (ASP.Net)</h2>
            </span>
            <p>
              Credit Score Maestro is a website I built for an ex-banker who
              wrote a book about credit repair and financial management.
            </p>
            <p>
              I did a lot of research on SEO for this project, and utilized
              marketing resources such as Facebook and Google PPC campaigns. It
              certainly gave me an appreciation for what it takes to improve
              Google results and increase organic traffic.
            </p>
            <div>
              <h3>Features:</h3>
              <ul>
                <li>Built with ASP.Net web forms.</li>
                <li>Optimized for SEO purposes.</li>
                <li>Responsive design with bootstrap.</li>
              </ul>
            </div>
            <p className="no-indent">
              <label
                onClick={() => this.imgToggle(3)}
                htmlFor="imgCheck4"
                className="btn-story-img"
              >
                {this.state.imgState[3].visible ? "Hide" : "Show"} Images of
                Credit Score Maestro!
              </label>
              <input className="hide" id="imgCheck4" type="checkbox" />
              <img
                alt="Credit Score Maestro for portfolio."
                className="story-img"
                src="/images/csm.webp"
              />
            </p>
            <span>
              <h2 id="veswap">veSwap (ASP.Net)</h2>
            </span>
            <p>
              veSwap was built with ASP.Net 4 Web Forms. It is a platform where
              users can swap vehicles on a scheduled basis. So if you have a
              nice truck, but you want to take a sports car to the beach over
              the weekend, maybe there's someone out there with a sports car who
              needs a truck to help move over the weekend, and you guys can
              swap!
            </p>
            <p>
              I built this site without the comforts of bootstrap or other CSS
              frameworks. So, although the styling may not be amazing, it's all
              coded by my hand.
            </p>
            <div>
              <h3>Features:</h3>
              <ul>
                <li>Ties in to API that keeps up-to-date vehicle list.</li>
                <li>
                  Custom system that determines distance from other users.
                </li>
                <li>Request and schedule vehicle swaps with other users.</li>
              </ul>
            </div>
            <p className="no-indent">
              <label
                onClick={() => this.imgToggle(4)}
                htmlFor="imgCheck5"
                className="btn-story-img"
              >
                {this.state.imgState[4].visible ? "Hide" : "Show"} Images of
                veSwap!
              </label>
              <input className="hide" id="imgCheck5" type="checkbox" />
              <img
                alt="veSwap for portfolio."
                className="story-img"
                src="/images/veswap.webp"
              />
            </p>
            <span>
              <h2 id="comas">COMAS (Classic ASP)</h2>
            </span>
            <p>
              <em>Comprehensive Office Management Automated System</em>. Bit of
              a mouthful, it was my first real web development project.
              Programmed with Classic ASP, it utilized a back-end engine using
              embedded vbScript and HTML for building the views, and SQL Server
              2000 for storing and retrieving data.
            </p>
            <p>
              Since the department already generated an alpha run in pdf format,
              I built a bridge using Data Transformation Services in SQL Server
              that imported the data from a text file (converted from pdf) into
              the database.
            </p>
            <div>
              <h3>Features:</h3>
              <ul>
                <li>Import current roster from pdf.</li>
                <li>Keeps running class list for over 10 classes.</li>
                <li>GUI for tracking student attendance.</li>
                <li>
                  Warning system for falling below regulatory requirements.
                </li>
                <li>Standardized report generator.</li>
              </ul>
            </div>
            <p className="no-indent">
              <label
                onClick={() => this.imgToggle(5)}
                htmlFor="imgCheck6"
                className="btn-story-img"
              >
                {this.state.imgState[5].visible ? "Hide" : "Show"} Images of
                COMAS!
              </label>
              <input className="hide" id="imgCheck6" type="checkbox" />
              <img
                alt="COMAS for portfolio."
                className="story-img"
                src="/images/comas.webp"
              />
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Projects
