import React from 'react';
import timeElapsed from '../utils/timeElapsed';

const startDate = new Date('1/1/2016');

const Reactjs = () => {

    return (
        <>
            <div className="skill-summary">
                <p>
                    Not only do I love programming with React, I'm actually pretty good at
                    it! All bravado aside, I started programming with react  
                    {timeElapsed(startDate, '')}, and I definitely consider myself up to par. 
                    React is my second highest scoring tag on Stackoverflow 
                    (top 10% overall), and I've published an emoji enabled textarea 
                    component on npm and github.
                </p>
                <p>
                    I introduced myself to React around the same time I started with Node,
                    and the two pretty much go hand-in-hand these days whenever I decide 
                    to create a new website.
                </p>
                <p>
                    I've developed multiple SPAs with react and react-router, including this
                    very page you're reviewing. I hope you like it!
                </p>
                <div>
                    <span className="concepts">Familiar Concepts</span>
                    <ul>
                        <li>JSX</li>
                        <li>SPA</li>
                        <li>State Management</li>
                        <li>Component Lifecycle</li>
                        <li>props</li>
                        <li>Controlled vs. Uncontrolled</li>
                        <li>Function Components</li>
                        <li>Hooks</li>
                        <li>react-router</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Reactjs;