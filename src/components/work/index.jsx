import React from 'react'
import Portfolio from "../portfolio";

export default function index() {
    return(
        <section className="my-work" id="work">
           <h2 class="section__title section__title--work">Work Experience</h2>
            <Portfolio/>
        </section>
    )
}
