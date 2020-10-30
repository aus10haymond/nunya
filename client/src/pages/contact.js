import React from "react";

// import "../assets/styles/contact.css";

function Contact() {
    return (
        <div id="contact" className="container">
            <div className="justify-content-center row">
                <h2 id="contacttitle">CONTACT US</h2>
            </div>
            <br />
            <div className="row justify-content-center">
                <div>
                    <div id="contactcontent" className="col-sm-12">
                        <nav id="contact" className="navbar justify-content-center">
                            <i id="contactlink" className="fas fa-envelope-open-text"></i>
                            <a id="contactlink" className="nav-item nav-link active" href="mailto:nxtlvldgtl@gmail.com?Subject=NXT LVL" target="_top">
                                <h4>EMAIL</h4>
                            </a>
                        </nav>
                    </div>
                    <br />
                    <div id="contactcontent" className="col-sm-12">
                        <nav id="contact" className="navbar justify-content-center">
                            <i id="contactlink" className="fas fa-phone"></i>
                            <a id="contactlink" className="nav-item nav-link active" href="tel:602-301-2522">
                                <h4>PHONE</h4>
                            </a>
                        </nav>
                    </div>
                    <br />
                    <div id="contactcontent" className="col-sm-12">
                        <nav id="contact" className="navbar justify-content-center">
                            <i id="contactlink" className="fab fa-instagram"></i>
                            <a id="contactlink" className="nav-item nav-link active" href="http://instagram.com/_u/nxtlvldgtl/" target="_blank" rel="noopener noreferrer">
                                <h4>INSTAGRAM</h4>
                            </a>
                        </nav>
                    </div>
                    <br />
                    <div id="contactcontent" className="col-sm-12">
                        <nav id="contact" className="navbar justify-content-center">
                            <i id="contactlink" className="fab fa-facebook-square"></i>
                            <a id="contactlink" className="nav-item nav-link active" href="https://www.facebook.com/nxtlvldgtl/" target="_blank" rel="noopener noreferrer">
                                <h4>FACEBOOK</h4>
                            </a>
                        </nav>
                    </div>
                    <br />
                </div>
            </div>
        </div>

    );
}

export default Contact;