import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Title from "./components/title";
import NavBar from "./components/navBar";
import About from "./components/about";
import Projects from "./components/projects";
import Carousel from "./components/carousel";

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
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                </Switch>
                <Carousel />
            </div>
        </div>
        </BrowserRouter>
    );
}

export default Home;