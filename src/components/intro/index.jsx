import React from "react";
import introImg from "../../assets/rahulm.jpeg";

const IntroSection = () => {

    return(
        <section className="intro" id="home">
           <h1 class="section__title section__title--intro">
                Hi, I am <strong>Rahul Mehra</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">full stack dev</p>
            <img src={introImg} alt="a picture of Jane Smith smiling" className="intro__img"/>
        </section>
    )


}

export default IntroSection;