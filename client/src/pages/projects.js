import React from "react";

import Cards from "./components/cards";

import "../assets/styles/projects.css";

function Projects() {
    return (
        <div id="projects" className="container">
            <div className="justify-content-center row">
                <h2 id="projectstitle">OUR WORK</h2>
                <div className="row text-center">
                    <div id="projectscontent">
                        Veniam occaecat do ex elit commodo dolor adipisicing consequat nulla. Sunt do excepteur proident elit cupidatat aliquip. Deserunt sint amet officia ea. Exercitation occaecat tempor fugiat consequat aliquip est ut cupidatat. Magna non commodo et eu proident nulla non.
                    </div>
                </div>
                
                <div className="row">
                    <Cards />
                </div>
            </div>
        </div>
    );
}

export default Projects;