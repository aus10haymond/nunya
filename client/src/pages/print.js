import React from "react";

import Printables from "./components/printables";

// import "../assets/styles/projects.css";

function Print() {
    return (
        <div id="projects" className="container">
            <div className="justify-content-center row">
                <h2 id="projectstitle">PRINTABLES</h2>
                <div className="row text-center">
                    <div id="projectscontent">
                        Below we have included some downloadable designs. These can be used for stories on social media, phone backgrounds, and diplay in other mediums whether digital or in print. Feel free to download any you like!
                    </div>
                </div>
                
                <div className="row">
                    <Printables />
                </div>
            </div>
        </div>
    );
}

export default Print;