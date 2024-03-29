import React from "react"

const NextJs = () => {
  return (
    <>
      <div className="skill-summary">
        <p>
          As with most new technologies, I took a project oriented approach to
          learning Next. I wanted to start getting a feel for Web3 development,
          so I used NextJs to build a prototype for a cryptocurrency based
          startup idea that I was toying around with.
        </p>
        <p>
          Overall, I think NextJs is a great framework for SSR or SSG React
          apps, and I feel very comfortable developing with this framework.
        </p>
        <div>
          <span className="concepts">Familiar Concepts</span>
          <ul>
            <li>SSG / SSR</li>
            <li>getServerSideProps() vs getStaticProps()</li>
            <li>Isomorphic React</li>
            <li>Next Image Optimization</li>
            <li>SEO Benefits of SSG vs SSR</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default NextJs
