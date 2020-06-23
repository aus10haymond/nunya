import React from "react";

import Cards from "./components/cards";

// import "../assets/styles/projects.css";

function Projects() {
    return (
        <div id="projects" className="container">
            <div className="justify-content-center row">
                <h2 id="projectstitle">OUR WORK</h2>
                <div className="row text-center">
                    <div id="projectscontent">
                        We help our clients take the first steps in their entrepreneurial journey through design and analysis, project management, and custom development.
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