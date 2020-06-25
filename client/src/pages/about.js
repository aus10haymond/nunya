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
                        We work with a variety of local small businesses to take them to the next level. Our purpose is to develop collaborative projects, combining creativity with technology in order to bring your goals and dreams to life. Our "husband and wife" team of Austen and Andrea Haymond will be by your side helping you to put your business on the digital map. 
                    </p>
                    <p id="aboutcontent">
                        Andrea graduated with a Bachelor's in Business from Arizona State University in May 2020. Austen completed a Web Development coding boot camp through the University of Arizona and is working towards Bachelor's and then Master's degrees in Computer Science at Arizona State.
                    </p>
                    <p id="aboutcontent">
                        Combining Andrea's background in business and passion for design with Austen's technical know-how and experience with web development, NXT LVL DGTL was born, with the goal of assisting small businesses in expanding their online presence.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;