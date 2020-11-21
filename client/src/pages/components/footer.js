import React from "react";

import logoSmall from "../../assets/images/logos/nxt_lvl_logo.png";

function Footer() {
    return (
        <div className="text-center">
           <nav id="footer" className="navbar justify-content-center sticky-bottom">
               <img id="logoSmall" src={logoSmall} alt="NXT LVL Logo" />
                <span className="navbar-text">&#169;2020</span>
                {/* <a id="footLink" className="nav-item nav-link active" href="https://aus10haymond.herokuapp.com/" target="_blank" rel="noopener noreferrer">austenhaymond</a> */}
            </nav>
        </div>
    )
}

export default Footer;