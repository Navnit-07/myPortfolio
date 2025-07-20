import React, { useRef } from "react";
import Hero from "./sections/Hero/Hero.jsx";
import NavBar from "./sections/NavBar/NavBar.jsx";
import About from "./sections/About/About.jsx";
import Skills from "./sections/Skills/Skills.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Contact from "./sections/Contact/Contact.jsx";
import SocialLinks from "./sections/SocialLinks/SocialLinks.jsx";

function Home(){
    const scrollTarget = useRef(null);
    return(
        <>
            <NavBar/>
            <Hero scrollTargetRef={scrollTarget}/>
            <About ref={scrollTarget}/>
            <Skills/>
            <SocialLinks/>
            <Projects/>
            <Contact/>
        </>
    )
}

export default Home;