import React from "react";
import aboutImg from "../../assets/rahulm2.jpeg";

export default function index() {
  return (
    <section className="about" id="about">
      <h2 class="section__title section__title--about">Who I am</h2>
      <p class="section__subtitle section__subtitle--about">
        Full Stack Developer based out of India
      </p>

      <div class="about-me__body">
        <p class="about-me__para">
          I am an experienced Web Developer who builts full responsive Web
          Applications using in JavaScript, Reactjs, Java. I believe the most
          important things for a web developer are quick learning, problem
          solving ability and patience.
        </p>
        <p class="about-me__para">
          Apart from technical stuff. I love playing basketball, reading books
          and writing.
        </p>
      </div>

      <img
        src={aboutImg}
        alt="Rahul Mehra in Uttarakhand, India"
        className="about-me__img"
      />
    </section>
  );
}
