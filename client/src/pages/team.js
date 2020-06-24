import React from "react";

import austen from "../assets/images/austen.png"
import andrea from "../assets/images/andrea.png"

// import "../assets/styles/team.css"

function Team() {
    return (
        <div id="team" className="container">
            <div className="justify-content-center row">
                <h2 id="teamtitle">MEET THE TEAM</h2>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card" id="teamcard">
                        <br />
                        <h4 className="card-title text-center" id="cardtitle">ANDREA</h4>
                        <div className="card-body text-center" id="cardbody">
                            <img id="teamimg" src={andrea} alt="Andrea" />
                            <br />
                            <br />
                            <p id="teamcontent">
                                CREATIVE DIRECTOR
                            </p>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="col-sm-6">
                <div className="card" id="teamcard">
                        <br />
                        <h4 className="card-title text-center" id="cardtitle">AUSTEN</h4>
                        <div className="card-body text-center" id="cardbody">
                            <img id="teamimg" src={austen} alt="Austen" />
                            <br />
                            <br />
                            <p id="teamcontent">
                                WEB DEVELOPER
                            </p>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
}

export default Team;