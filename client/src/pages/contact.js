import React from "react";

// import "../assets/styles/contact.css";

function Contact() {
    return (
        <div id="contact" className="container">
            <div className="justify-content-center row">
                <h2 id="contacttitle">CONTACT US</h2>
            </div>
            <div className="row justify-content-center">
                <div>
                    <div id="contactcontent" className="col-sm-12">
                        <a id="contactlink" href="mailto:ahaymon17@gmail.com?Subject=NXT LVL" target="_top">
                            <h4>EMAIL</h4>
                        </a>
                    </div>
                    <div id="contactcontent" className="col-sm-12">
                        <a id="contactlink" href="tel:602-301-2522">
                            <h4>PHONE</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Contact;