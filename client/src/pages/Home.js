import React from "react";

import Title from "./components/title";
import NavBar from "./components/navBar";
import About from "./components/about";

import "../assets/styles/home.css"

function Home() {
    return (
        <div id="home">
            <Title />
            <NavBar />
            <div className="container">
                <About />
            </div>
        </div>
    );
}

export default Home;