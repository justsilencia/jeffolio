import React from 'react';
import timeElapsed from '../utils/timeElapsed';

const startDate = new Date('1/1/2016');

const Nodejs = () => {

    return (
        <>
            <div className="skill-summary">
                <p>
                    I've been working with node since roughly {timeElapsed(startDate, '')}. 
                    I've used quite a few different stacks, from MERN and SERN, to 
                    other obscure combinations of my choosing.
                </p>
                <p>
                    I've enjoyed working with Node from the moment I typed in my first 
                    <em> npm i</em> command into the terminal. The super light-weight core combined 
                    with a never ending, ever evolving library of open-source modules makes 
                    for a great way to do business.
                </p>
                <p>
                    Although I've mainly used Node for webdev, I'm also likely to use it
                    for whipping up a quick program to handle more mundane tasks, such as
                    renaming a bunch of media files that I've accumulated. Node has allowed
                    Javascript to become my go-to language for just about everything.
                </p>
                <div>
                    <span className="concepts">Familiar Concepts</span>
                    <ul>
                        <li>Web Frameworks (Express, etc.)</li>
                        <li>OOP</li>
                        <li>Functional Programming</li>
                        <li>Asynchronous I/O (Blocking vs. Non-Blocking)</li>
                        <li>Promises</li>
                        <li>Event Loop</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nodejs;