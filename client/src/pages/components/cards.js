import React from "react";

// import "../../assets/styles/cards.css"

function Cards() {
    return (
        <div>
            <br />
            <div className="row">
            <div className="col-sm-4">
                <div className="card" id="projectcard">
                    <br />
                    <h4 className="card-title" id="cardtitle">BRAND DESIGN</h4>
                    <div className="card-body" id="cardbody">
                        <p>We use our expertise to work with your business in order to create the perfect aesthetics in all aspects of your brand.</p>
                        <br />
                        {/* <a href="/projects/logos" rel="noopener noreferrer" className="btn btn-dark">LOGOS</a> */}
                    </div>
                </div>
                <br />
            </div>
            <div className="col-sm-4">
                <div className="card" id="projectcard">
                    <br />
                    <h4 className="card-title" id="cardtitle">PROJECT MANAGEMENT</h4>
                    <div className="card-body" id="cardbody">
                        <p>We help you to manage your brand and set up your business, helping you to efficiently connect with your customers.</p>
                        <br />
                        {/* <a href="/projects/graphics" rel="noopener noreferrer" className="btn btn-dark">GRAPHIC DESIGN</a> */}
                    </div>
                </div>
                <br />
            </div>
            <div className="col-sm-4">
                <div className="card" id="projectcard">
                    <br />
                    <h4 className="card-title" id="cardtitle">CUSTOM DEVELOPMENT</h4>
                    <div className="card-body" id="cardbody">
                        <p>We build custom web applications specifically catered to the needs of your business to help you establish a meaningful web presence.</p>
                        {/* <a href="/projects/websites" rel="noopener noreferrer" className="btn btn-dark">WEBSITES</a> */}
                    </div>
                </div>
                <br />
            </div>
            </div>
        </div>
    );
}

export default Cards;