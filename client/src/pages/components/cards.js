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
                    <h4 className="card-title" id="cardtitle">DESIGN & ANALYSIS</h4>
                    <div className="card-body" id="cardbody">
                        <img src="" alt="" />
                        <p>We work with your subject matter experts to gather and discuss requirements. We will help define project objectives, business rules, and deployment timelines.</p>
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
                        <img src="" alt="" />
                        <p>We help maintain an appropriate project plan that meets all your critical milestones. We ensure that business logic and software architecture remain in line.</p>
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
                        <img src="" alt="" />
                        <p>We build custom applications specifically designed for the unique demands of your business. Our applications can be scaled with ease as your organization changes and grows.</p>
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