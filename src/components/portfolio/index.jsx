import React from "react";
import PortfolioItem from "./portfolioItem";

export default function index() {
  return (
    <div className="portfolio">
      <div className="portfolio__item">
        <div className="portfolio__item-heading">
          <h4>
            <strong>Full Stack Developer</strong>
          </h4>
          <h4>Part Time</h4>
        </div>
        <div className="portfolio__item-subheading">
          <p>Freelancing</p>
          <p>April 20 - Present</p>
        </div>
        <p>Technologies:- React, SCSS, Service Workers</p>
        <ul className="portfolio__item-list">
          <li>
            Built a React based website 10skills.co to help people with
            location-based job insights. The site scores a 95% score for
            following Progressive Web Application best practices.
          </li>
          <li>
            Built a Web Application taponline.org for The Apprentice Project
            (NGO) to provide an online leaderboard platform which promotes
            gamification of learning and encourages students to study more.
            Customized Service Worker to update cache whenever a new build is
            deployed. The application is deployed on Firebase.
          </li>
        </ul>
      </div>
      <div className="portfolio__item">
        <div className="portfolio__item-heading">
          <h4>
            <strong>Software Engineer II</strong>
          </h4>
          <h4>Full Time</h4>
        </div>
        <div className="portfolio__item-subheading">
          <p>Synacor</p>
          <p>April 21 - Present</p>
        </div>
        <p>
          Technologies:- React, Redux, Recompose, SCSS, GraphQL, Apollo Client
        </p>
        <ul className="portfolio__item-list">
          <li>
            Developed User Interface component using Reactjs to display
            Organizational Hierarchy. Integrate it with server side calls using
            GraphQL and Apollo Client.
          </li>
          <li>
            Developed Custom Search component which based on route displays
            Organization Hierarchy of the searched contact.
          </li>
        </ul>
      </div>
      <div className="portfolio__item">
        <div className="portfolio__item-heading">
          <h4>
            <strong>Software Engineer</strong>
          </h4>
          <h4>Full Time</h4>
        </div>
        <div className="portfolio__item-subheading">
          <p>Avaya</p>
          <p>July 18 - April 21</p>
        </div>
        <p>
          Technologies:- React, Redux, SCSS, Axios, Java, Hibernate, EJB, J2EE,
          Docker
        </p>
        <ul className="portfolio__item-list">
          <li>
            Developed multiple UI modules for different screens and data
            visualizations in Reactjs with global state management using Redux.
          </li>
          <li>Developed REST endpoint consumers for the data using Axios.</li>
          <li>
            Reduced the load time of page from 40 seconds to less than 1 second
            by caching files using Service Workers.
          </li>
          <li>
            Implemented the masquerading user feature using localStorage and
            sessionStorage which passed anadditional header whenever the user
            was masqueraded.
          </li>
          <li>
            Developed REST endpoints, Entities, Service layer and business logic
            for end-to-end feature delivery by following TDD approach. Wrote
            Unit level and Service layer test cases covering all Acceptance
            Criteria. Worked on the development of a new Java microservice to
            facilitate the association of devices in bulk in a multi-threaded
            environment.
          </li>
          <li>
            Implemented filters and interceptors for API requests to store
            request data for analysis in DB.
          </li>
          <li>
            Contributed in the CICD Jenkins pipeline by adding multiple stages
            for the deployment of builds. Added logic to fail the build whenever
            Unit test case pass rate was below the threshold leading to early
            detection of issues.
          </li>
          <li>
            Worked on a QR code-based Guest Management Web Application which
            makes the process of meeting scheduling faster and easier for
            incoming guests in a workplace. Developed using Java based Spring
            Boot framework with Front end developed in Reactjs.
          </li>
        </ul>
      </div>
    </div>
  );
}
