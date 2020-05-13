import React from "react";

import "../../assets/styles/about.css";
import photo from "../../assets/images/photo0019.JPG"

function About() {
    return (
        <div id="about" className="row">
            <div className="col-sm-4">
                <img id="us" src={photo} />
            </div>
            <div className="col-sm-8">
                ABOUT US
            </div>
        </div>
    );
}

export default About;