import React, { Component } from "react"
import { faCalendar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

class DevStory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imgState: [
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
        <Seo title="Developer Story" />
        <div className="desc-box shadow-scrollwindow">
          <div className="p-3">
            <h1>Developer Story</h1>
            <p>
              Rather than make this one long and impressively boring tale, I
              decided to break it up into time-frames so it's easier to digest.
            </p>
            <span className="time-frame">
              <FontAwesomeIcon icon={faCalendar} />
              <h2> 2012 - 2013</h2>
            </span>
            <p>
              In the beginning... There was classic ASP, and all was good in the
              universe. Well, not really. ASP was already obsolete; nonetheless,
              it frames the beginning of my unlikely journey to becoming a
              developer.
            </p>
            <p>
              While working in an education department as a clerk, I met an MCSE
              guy who took me under his wing. He taught me much about domain
              administration, and the inner workings of Windows OS. Good fortune
              found me in strange ways during this time.
            </p>
            <p>
              About a year into training with this gentleman, I happened to find
              a<em> Wrox</em> Active Server Pages book laying around (better
              known as classic asp). Since I was the guy all the teachers called
              when they were having excel problems, I thought hey, why don't I
              build them a website to record their attendance rather than
              dealing with these clumsy spreadsheets?
            </p>
            <p>
              And thus COMAS was born (Comprehensive Office Management Automated
              System).
            </p>
            <p className="no-indent">
              <label
                onKeyDown={() => this.imgToggle(0)}
                onClick={() => this.imgToggle(0)}
                htmlFor="imgCheck1"
                className="btn-story-img"
              >
                {this.state.imgState[0].visible ? "Hide" : "Show"} Image of
                COMAS!
              </label>
              <input className="hide" id="imgCheck1" type="checkbox" />
              <img
                alt="COMAS for dev story"
                className="story-img"
                src="/images/comas.webp"
              />
            </p>
            <p>
              While ASP.Net was in full swing, I spent over a year toiling away
              with classic asp, and I don't regret a minute of it. I built a
              pretty sweet students tracking machine that offered real-time
              metrics thanks to centralized data.
            </p>
            <p>
              COMAS did everything from tracking student hours and recording
              entry and exit dates, to genereating standardized reports. They
              liked it so much they used it for over 8 years; and I was hooked.
            </p>
            <span className="time-frame">
              <FontAwesomeIcon icon={faCalendar} />
              <h2> 2013 - 2016</h2>
            </span>
            <p>
              After my experience with asp, I was eager to get my hands on some
              newer technology. I soon acquired everything I would need to
              develop with asp.net web forms, and over the next couple years I
              designed multiple sites using the technology.
            </p>
            <p>
              During this period I became acquainted with many of the major
              aspects of web development. To name a few: Javascript and jQuery,
              XHR/AJAX, CSS, Bootstrap, Web Services, along with many others.
            </p>
            <p>
              In 2014, I build a site called veSwap. It's a site where users can
              swap vehicles with other users for a scheduled period. So if you
              have a nice truck, but you want to take a sports car to the beach
              over the weekend, maybe there's someone out there with a sports
              car who needs a truck to help move over the weekend!
            </p>
            <p className="no-indent">
              <label
                onKeyDown={() => this.imgToggle(0)}
                onClick={() => this.imgToggle(1)}
                htmlFor="imgCheck2"
                className="btn-story-img"
              >
                {this.state.imgState[1].visible ? "Hide" : "Show"} Images of
                veSwap!
              </label>
              <input className="hide" id="imgCheck2" type="checkbox" />
              <img
                alt="veSwap for developer story"
                className="story-img"
                src="/images/veswap.webp"
              />
            </p>
            <p>
              Around mid-2015, an ex-banker friend of mine, who's very savvy in
              the world of finance, wrote a book on credit repair. He asked me
              if I'd be willing to develop a website that promotes his book and
              his brand. And so I built CreditScoreMaestro.com.
            </p>
            <p className="no-indent">
              <label
                onKeyDown={() => this.imgToggle(0)}
                onClick={() => this.imgToggle(2)}
                htmlFor="imgCheck3"
                className="btn-story-img"
              >
                {this.state.imgState[2].visible ? "Hide" : "Show"} Image of
                Credit Score Maestro!
              </label>
              <input className="hide" id="imgCheck3" type="checkbox" />
              <img
                alt="Credit Score Maestro for developer story"
                className="story-img"
                src="/images/csm.webp"
              />
            </p>
            <p>
              I did a lot of research on SEO for this project, and utilized
              marketing resources such as Facebook and Google PPC campaigns. It
              certainly gave me an appreciation for what it takes to improve
              Google results and increase organic traffic.
            </p>
            <span className="time-frame">
              <FontAwesomeIcon icon={faCalendar} />
              <h2> 2016 - Present</h2>
            </span>
            <p>
              After my journey with ASP.Net, I began researching the fastest
              growing platforms and frameworks; I wanted to ensure I was keeping
              my skillset relevant. Node, Express, and React were obvious
              standouts.
            </p>
            <p>
              Me being a project oriented learner, I decided to build a social
              media site to get a better feel for things. I ended up using a CMS
              called KeystoneJs, which incorporates a React admin console.
              Figuring out how to tie in my own React Hot-Loader build with the
              pre-existing Keystone build was tricky, but I learned a lot about
              how Webpack works.
            </p>
            <p className="no-indent">
              <label
                onKeyDown={() => this.imgToggle(0)}
                onClick={() => this.imgToggle(3)}
                htmlFor="imgCheck4"
                className="btn-story-img"
              >
                {this.state.imgState[3].visible ? "Hide" : "Show"} Image of
                Chuggo!
              </label>
              <input className="hide" id="imgCheck4" type="checkbox" />
              <img
                alt="Chug for developer story"
                className="story-img"
                src="/images/chug-1.png"
              />
            </p>
            <p>
              I worked on the intricacies of my social media project for quite
              awhile, and built a number of other small projects as well.
            </p>
            <p>
              At the start of 2020, my boss asked me to build him a standalone
              system that could import an Alpha Run from pdf into a sqlite
              database, and handle some specific tasks for him such as keeping
              track of current class lists, and export these lists to an excel
              file for sending via email to all of the respective teachers.
            </p>
            <p>
              I built him a really cool SPA that does everything he wanted and
              more!
            </p>
            <p className="no-indent">
              <label
                onKeyDown={() => this.imgToggle(0)}
                onClick={() => this.imgToggle(4)}
                htmlFor="imgCheck5"
                className="btn-story-img"
              >
                {this.state.imgState[4].visible ? "Hide" : "Show"} Images of
                MAC!
              </label>
              <input className="hide" id="imgCheck5" type="checkbox" />
              <img
                alt="MAC for developer story"
                className="story-img"
                src="/images/mac.webp"
              />
            </p>
            <p>
              Since then, I've learned multiple frameworks, such as GatsbyJs and
              NextJs. I redesigned Credit Score Maetro using the Gatsby
              framework, and hosted it on Netlify.
            </p>
            <p>
              I guess you could say my developer story isn't quite average.
              However, it benefited me in many ways, and I'm a better person and
              developer for it.
            </p>
            <hr />
            <p>
              <em>Sidenote:</em> In August of 2020, I was awarded the&nbsp;
              <em>Unsung Hero</em> gold badge on StackOverflow. I'm quite proud
              of this badge, as I pride myself on the enjoyment I find in
              helping others.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default DevStory
