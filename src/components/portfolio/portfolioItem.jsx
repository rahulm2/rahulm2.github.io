import React from 'react';

export default function PortfolioItem() {
    return (
        <div className="portfolio__item">
        <div className="portfolio__item-heading">
        <h4><strong>Software Engineer 2</strong></h4>
        <h4>Full Time</h4>
        </div>
        <div className="portfolio__item-subheading">
        <p>Synacor</p>
        <p>April 21 - Present</p>
        </div>
       <ul className="portfolio__item-list">
           <li>Developed User Interface component using Reactjs to display Organizational Hierarchy. Integrate it with server side calls using GraphQL and Apollo Client.</li>
           <li>Developed Custom Search component which based on route displays Organization Hierarchy of the searched contact.</li>
       </ul>
        </div>
    )
}