import React from "react";
import Hero from "./sections/Hero/Hero.jsx";
import NavBar from "./sections/NavBar/NavBar.jsx";
import About from "./sections/About/About.jsx";
import Skills from "./sections/Skills/Skills.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Contact from "./sections/Contact/Contact.jsx";

function Home(){
    return(
        <>
            <NavBar/>
            <Hero/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default Home;