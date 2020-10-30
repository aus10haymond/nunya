import React from "react";

import ImageGallery from "react-image-gallery";

import booImage from "../../assets/downloads/booImage.png";
import hocusPocusImage from "../../assets/downloads/hocusPocusImage.png";
import booDownload from "../../assets/downloads/booDownload.pdf";
import hocusPocusDownload from "../../assets/downloads/hocusPocusDownload.pdf";


// import "../../assets/styles/image-gallery.css";
// import "../../assets/styles/carousel.css";

// let downloads = 0;

// function clicks() {
//     downloads += 1;
//     console.log(downloads);
// }
class Carousel extends React.Component {

    render() {

        const images = [
            {
                original: booImage,
                description: <a href={booDownload} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Boo!'
            },
            {
                original: hocusPocusImage,
                description: <a href={hocusPocusDownload} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Hocus Pocus!'
            }
        ]

        return (
            <div id="carousel">
            <ImageGallery items={images} showThumbnails={false} autoPlay={true} slideInterval={10000} slideDuration={500} />
            </div>
        );
    }

}

export default Carousel;