import React from "react";
import Service from "./service";

const Services = function () {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Front End</h3>
          <p>
            I have experience building Progressive Web Applications and Chrome
            Extensions using JavaScript,React,HTML,CSS,Jquery.
          </p>
        </div>
        <div className="service">
          <h3>Back End</h3>
          <p>
            I have experience in developing business logic, Entities and REST
            API's using Java, J2EE, Spring, Hibernate, EJBs using AWS Cloud
            platform.
          </p>
        </div>
        <div className="service">
          <h3>DevOps</h3>
          <p>
            Have hands on experience on delivering requirements using CI/CD
            tools like Jenkins, Docker, Git, Bitbucket, CircleCI.
          </p>
        </div>
      </div>
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
};

export default Services;
