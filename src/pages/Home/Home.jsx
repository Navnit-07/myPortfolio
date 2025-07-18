import React from "react";
import Hero from "./sections/Hero/Hero";
import NavBar from "./sections/NavBar/NavBar";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";

function Home(){
    return(
        <>
            <NavBar/>
            <Hero/>
            <About/>
            <Skills/>
        </>
    )
}

export default Home;