import React from "react";

// import "../assets/styles/about.css";
import photo from "../assets/images/IMG_0936.JPG"

function About() {
    return (
        <div id="about" className="container">
            <div className="justify-content-center row">
                <h2 id="abouttitle">ABOUT US</h2>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <img id="us" src={photo} alt="pic of Austen and Andrea" />
                </div>
                <div className="col-sm-8">
                    <p id="aboutcontent">
                        We work with a variety of local small businesses to take them to the next level. Our purpose is to develop collaborative projects, combining creativity with technology in order to bring your goals and dreams to life. 
                    </p>
                    <p id="aboutcontent">
                        NXT LVL DGTL was founded in 2020 by Austen and Andrea Haymond. Combining Andrea's background in business and passion for design with Austen's technical know-how and experience with web development, NXT LVL DGTL was born, with the goal of assisting small businesses in expanding their online presence.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;