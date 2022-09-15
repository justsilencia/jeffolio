import React from "react"

const Sql = () => {
  return (
    <>
      <div className="skill-summary">
        <p>
          Whether in mySQL, SQLite, Microsoft SQL Server, or PostgreSQL, I've
          been cooking up queries for the better part of a decade. I used SQL
          Server 2000 for my first major website project (in classic asp), and I
          became familiar with many of the features this language has to offer.
        </p>
        <p>
          Later on, I developed with more modern releases of SQL Server such as
          2014 and onward. Experience has taught me no matter how obscure the
          dataset is you'd like to return, there's a way to build a query for
          it.
        </p>
        <div>
          <span className="concepts">Familiar Concepts</span>
          <ul>
            <li>Relational data</li>
            <li>CRUD queries</li>
            <li>Joins / Unions</li>
            <li>Primary / Foreign keys</li>
            <li>Indexing</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sql
