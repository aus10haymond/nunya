import React from "react";

// import "../../assets/styles/footer.css";

function Footer() {
    return (
        <div className="text-center">
           <nav id="footer" className="navbar justify-content-center sticky-bottom">
                <span className="navbar-text">powered by:</span>
                <a id="footLink" className="nav-item nav-link active" href="https://aus10haymond.herokuapp.com/" target="_blank" rel="noopener noreferrer">austenhaymond</a>
            </nav>
        </div>
    )
}

export default Footer;