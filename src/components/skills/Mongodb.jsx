import React from 'react';
import timeElapsed from '../utils/timeElapsed';

const startDate = new Date('1/1/2016');

const Mongodb = () => {

    return (
        <>
            <div className="skill-summary">
                <p>
                    I've been working woth Mongo on and off since roughly
                    {timeElapsed(startDate, '')}.
                    Learning Mongo was an interesting experience for me. Going from all my
                    years of using SQL to a no-SQL query system was a bit jarring, but once
                    I got the hang of it I quickly saw many beneficial aspects.
                </p>
                <p>
                    Creating schemas with mongoose and storing data as JSON objects makes
                    for a seamless coding experience when using a node back-end. Suffice it
                    to say when it comes to Mongodb, I can definitely hold my own.
                </p>
                <div>
                    <span className="concepts">Familiar Concepts</span>
                    <ul>
                        <li>Schemas (Mongoose)</li>
                        <li>no-SQL</li>
                        <li>CRUD queries</li>
                        <li>Aggregates</li>
                        <li>Indexing</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Mongodb;