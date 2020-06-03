import React from "react";

import "../../assets/styles/cards.css"

function Cards() {
    return (
        <div>
            <div className="row justify-content-center">
                <h4 id="cardtitle">OUR PROJECTS</h4>
            </div>
            <br />
            <div className="row">
            <div className="col-sm-4">
                <div className="card" id="projectcard">
                    <br />
                    <h5 className="card-title" id="cardtitle">WEBSITES</h5>
                    <div className="card-body" id="cardbody">
                        <img src="" alt="" />
                        <a href="/projects/websites" rel="noopener noreferrer" className="btn btn-dark">CHECK IT OUT</a>
                    </div>
                </div>
                <br />
            </div>
            <div className="col-sm-4">
                <div className="card" id="projectcard">
                    <br />
                    <h5 className="card-title" id="cardtitle">LOGOS</h5>
                    <div className="card-body" id="cardbody">
                        <img src="" alt="" />
                        <a href="/projects/logos" rel="noopener noreferrer" className="btn btn-dark">CHECK IT OUT</a>
                    </div>
                </div>
                <br />
            </div>
            <div className="col-sm-4">
                <div className="card" id="projectcard">
                    <br />
                    <h5 className="card-title" id="cardtitle">GRAPHIC DESIGN</h5>
                    <div className="card-body" id="cardbody">
                        <img src="" alt="" />
                        <a href="/projects/graphics" rel="noopener noreferrer" className="btn btn-dark">CHECK IT OUT</a>
                    </div>
                </div>
                <br />
            </div>
            </div>
        </div>
    );
}

export default Cards;