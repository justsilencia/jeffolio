import React from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import "react-perfect-scrollbar/dist/css/styles.css";

const WhyMe = () => {
    return (
        <div className="desc-box shadow-scrollwindow">
            <Scrollbar>
                <div className="p-3">
                    <h1>Why Me?</h1>
                    <p>
                        At some point, every potential employer must ask themselves: "Why
                        should I hire you over the next guy?"
                    </p>
                    <p>
                        In answer to this question, I believe I'm a unique prospect for
                        several reasons. Although I've been developing full-stack for 
                        almost 10 years, I'd happily join any team as a junior/mid-level
                        developer.
                    </p>
                    <p>
                        It may seem as though I'm selling myself short, but that's not
                        the case at all. I think highly of my value as a developer, however
                        I also realize that I've never worked with a group of experienced
                        professionals who work as a team to complete real world projects.
                    </p>
                    <p>
                        For this reason, I'm willing to be hired on as a developer in any
                        capacity. I like to think I make for a great cost/benefit outlook
                        when considering this perspective.
                    </p>
                    <p>
                        I'd like to mention as a sidenote that, although I've never worked
                        with a group of developers, I'm very easy to work with and I've 
                        performed well with teams in the past. Working in an education
                        department for 10 years in a pretty tough environment, I coached
                        small teams of clerks while creating a more efficient workflow.
                    </p>
                    <p>
                        My goal is to grow as a developer and as a person, but also to fullfil
                        and exceed the needs of my employer. Doing what I love for a living
                        is a luxury few get to experience; the prospect is exciting.
                    </p>
                </div>
            </Scrollbar>
        </div>
    )
}

export default WhyMe;