import React from "react";
import download1 from "../../assets/downloads/download1.pdf";
import download2 from "../../assets/downloads/download2.pdf";
import download3 from "../../assets/downloads/download3.pdf";
// import "../../assets/styles/cards.css"

function Printables() {
    return (
        <div>
            <br />
            <div className="row">
            <div className="col-sm-4">
                <div className="card" id="projectcard">
                    <br />
                    <h4 className="card-title text-center" id="cardtitle">COMING SOON</h4>
                    <div className="card-body" id="cardbody">
                        <button className="contact contactcontent" href={download1} target="blank">DOWNLOAD</button>
                    </div>
                </div>
                <br />
            </div>
            <div className="col-sm-4">
                <div className="card" id="projectcard">
                    <br />
                    <h4 className="card-title text-center" id="cardtitle">COMING SOON</h4>
                    <div className="card-body" id="cardbody">
                        <button className="contact contactcontent" href={download2} target="blank">DOWNLOAD</button>
                    </div>
                </div>
                <br />
            </div>
            <div className="col-sm-4">
                <div className="card" id="projectcard">
                    <br />
                    <h4 className="card-title text-center" id="cardtitle">COMING SOON</h4>
                    <div className="card-body" id="cardbody">
                        <button className="contact contactcontent" href={download3} target="blank">DOWNLOAD</button>
                    </div>
                </div>
                <br />
            </div>
            </div>
        </div>
    );
}

export default Printables;