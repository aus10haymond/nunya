import React from "react";

import "../../assets/styles/about.css";
import photo from "../../assets/images/photo0019.JPG"

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
                        Ad aliqua aliqua sit id aliquip ad aliqua. Quis eu nisi Lorem ea eiusmod non ex ea deserunt duis. Ut fugiat laborum ullamco et non ad officia sit minim ipsum cillum occaecat laboris. Magna in in proident velit Lorem esse enim veniam. Cillum enim adipisicing labore quis. Occaecat minim ullamco non consequat velit cillum laboris consectetur anim Lorem.
                    </p>
                    <p id="aboutcontent">
                        Ad aliqua aliqua sit id aliquip ad aliqua. Quis eu nisi Lorem ea eiusmod non ex ea deserunt duis. Ut fugiat laborum ullamco et non ad officia sit minim ipsum cillum occaecat laboris. Magna in in proident velit Lorem esse enim veniam. Cillum enim adipisicing labore quis. Occaecat minim ullamco non consequat velit cillum laboris consectetur anim Lorem.
                    </p>
                    <p id="aboutcontent">
                        Ad aliqua aliqua sit id aliquip ad aliqua. Quis eu nisi Lorem ea eiusmod non ex ea deserunt duis. Ut fugiat laborum ullamco et non ad officia sit minim ipsum cillum occaecat laboris. Magna in in proident velit Lorem esse enim veniam. Cillum enim adipisicing labore quis. Occaecat minim ullamco non consequat velit cillum laboris consectetur anim Lorem.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;