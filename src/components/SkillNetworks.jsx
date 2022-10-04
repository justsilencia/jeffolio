import React, { useEffect, useState } from "react"

const SkillNetworks = () => {
  const [stackInfo, setInfo] = useState()

  useEffect(() => {
    fetch("https://api.stackexchange.com/2.2/users/9040866?site=stackoverflow")
      .then(res => res.json())
      .then(info => {
        setInfo(info.items[0])
      })
      .catch(() => {
        console.log("Couldn't connect to stackoverflow.")
        setInfo({
          display_name: "silencedogood",
          reputation: "1919",
          badge_counts: {
            gold: "1",
            silver: "3",
            bronze: "20",
          },
        })
      })
  }, [])

  return (
    <>
      <div className="top-bar">
        <a
          className="rep-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://stackoverflow.com/users/9040866/silencedogood"
        >
          <div className="flex-link">
            <div>
              <img alt="Stackoverflow logo." src="/images/stackoverflow.png" />
            </div>
            <div>
              {stackInfo ? stackInfo.display_name : ""}
              <br />
              {stackInfo ? stackInfo.reputation : ""}
              <i className="so-badge gold-badge" />
              {stackInfo ? stackInfo.badge_counts.gold : ""}
              <i className="so-badge silver-badge" />
              {stackInfo ? stackInfo.badge_counts.silver : ""}
              <i className="so-badge bronze-badge" />
              {stackInfo ? stackInfo.badge_counts.bronze : ""}
            </div>
          </div>
        </a>
        <a
          className="rep-link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/justsilencia/folio"
        >
          <div className="flex-link">
            <div>
              <img alt="GIT logo." src="/images/git.png" />
            </div>
            <div style={{ marginLeft: "5px" }}>Github Repositories</div>
          </div>
        </a>
      </div>
    </>
  )
}

export default SkillNetworks
