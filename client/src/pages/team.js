import React from "react";

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
                        <div className="card-body" id="cardbody">
                            <img id="teamimg" src="" alt="" />
                            <h5 className="card-title text-center" id="cardtitle">ANDREA</h5>
                            <p id="teamcontent">

                            </p>
                        </div>
                    </div>
                    <br />
                </div>
                <div className="col-sm-6">
                <div className="card" id="teamcard">
                        <br />
                        <div className="card-body" id="cardbody">
                            <img id="teamimg" src="" alt="" />
                            <h5 className="card-title text-center" id="cardtitle">AUSTEN</h5>
                            <p id="teamcontent">

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