import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Title from "./components/title";
import NavBar from "./components/navBar";
import About from "./about";
import Projects from "./projects";
import Start from "./start";
import Contact from "./contact";
import Footer from "./components/footer";

import "../assets/styles/home.css"

function Home() {
    return (
        <BrowserRouter>
        <div id="home">
            <Title />
            <NavBar />
            <br />
            <div className="container">
                <Switch>                    
                    <Route exact path="/" component={Start} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </div>
            <br />
            <Footer />
        </div>
        </BrowserRouter>
    );
}

export default Home;