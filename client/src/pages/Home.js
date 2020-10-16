import React from "react";

import Title from "./components/title";
import NavBar from "./components/navBar";
import About from "./about";
import Projects from "./projects";
// import Start from "./start";
import Contact from "./contact";
import Footer from "./components/footer";
import Team from "./team";
import Print from "./print";

import "../assets/styles/home.css"

function Home() {
    return (
        <div id="home">
            <NavBar />
            <Title />
            <br />
            <div className="container">
                {/* <Start /> */}
                <br />
                <About />
                <br />
                <Team />
                <br />
                <Projects />
                <br />
                <Print />
                <br />
                <Contact />
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default Home;