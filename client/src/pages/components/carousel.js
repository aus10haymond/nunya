import React from "react";

import ImageGallery from "react-image-gallery";

import logo1 from "../../assets/images/logos/aqua.png";
import logo2 from "../../assets/images/logos/bigdgtl.png";
import logo3 from "../../assets/images/logos/blackcircle.png";
import logo4 from "../../assets/images/logos/blackgoldcircle.png";
import logo5 from "../../assets/images/logos/blackwhitebox.png";
import logo6 from "../../assets/images/logos/creamcircle.png";
import logo7 from "../../assets/images/logos/hilighter.png";
import logo8 from "../../assets/images/logos/peachstripe.png";
import logo9 from "../../assets/images/logos/purpleyellow.png";

// import "../../assets/styles/image-gallery.css";
// import "../../assets/styles/carousel.css";

class Carousel extends React.Component {

    render() {

        const images = [
            {
                original: logo1
            },
            {
                original: logo2
            },
            {
                original: logo3
            },
            {
                original: logo4
            },
            {
                original: logo5
            },
            {
                original: logo6
            },
            {
                original: logo7
            },
            {
                original: logo8
            },
            {
                original: logo9
            },
        ]

        return (
            <div id="carousel">
            <ImageGallery items={images} showThumbnails={false} autoPlay={true} slideInterval={4000} slideDuration={500} />
            </div>
        );
    }

}

export default Carousel;