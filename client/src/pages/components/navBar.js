import React from "react";

import "../../assets/styles/navbar.css";

function NavBar() {
    return (
        <nav className="navbar sticky-top justify-content-center navbar-expand-lg bg" id="nav">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon justify-content-center"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav justify-content-center">
                <a id="navitem" className="nav-item nav-link js-scroll-trigger" href="/about">ABOUT US</a>
                <a id="navitem" className="nav-item nav-link js-scroll-trigger" href="/projects">OUR WORK</a>
                <a id="navitem" className="nav-item nav-link js-scroll-trigger" href="/contact">CONTACT US</a>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;