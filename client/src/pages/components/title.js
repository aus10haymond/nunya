import React from "react";

import logo from "../../assets/images/logos/nld.png";
// import "../../assets/styles/title.css"

function Title() {
    return (
        <div id="titlebar">
                <nav className="navbar justify-content-center">
                    <img id="logo" src={logo} alt="NXT LVL Logo" />
                </nav>
                <nav className="navbar justify-content-center">
                    <h5 id="tagline">Take your business to the next level.</h5>
                </nav>
        </div>
    );
}

export default Title;