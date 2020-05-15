import React from "react";

import Title from "./components/title";
import NavBar from "./components/navBar";
import About from "./components/about";
import Projects from "./components/projects";

import "../assets/styles/home.css"

function Home() {
    return (
        <div id="home">
            <Title />
            <NavBar />
            <br />
            <div className="container">
                <About />
                <br />
                <Projects />
            </div>
        </div>
    );
}

export default Home;