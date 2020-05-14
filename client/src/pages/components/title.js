import React from "react";

import "../../assets/styles/title.css"

function Title() {
    return (
        <div id="titlebar">
            <nav className="navbar justify-content-center">
                <h1 id="title">NXT LVL</h1>
            </nav>
            <nav className="navbar justify-content-center">
                <h5 id="tagline">take your business to the next level</h5>
            </nav>
        </div>
    );
}

export default Title;