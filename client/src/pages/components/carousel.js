import React from "react";

import ImageGallery from "react-image-gallery";

import beaniePrintable from "../../assets/downloads/christmas/beaniePrintable.png";
import beanieDownload from "../../assets/downloads/christmas/beaniePrintable.pdf";
import christmasPrintable from "../../assets/downloads/christmas/christmasPrintable.png";
import christmasDownload from "../../assets/downloads/christmas/christmasPrintable.pdf";
import christmasPrintable2 from "../../assets/downloads/christmas/christmasPrintable2.png";
import christmasDownload2 from "../../assets/downloads/christmas/christmasPrintable2.pdf";
import christmasTreePrintable from "../../assets/downloads/christmas/christmasTreePrintable.png";
import christmasTreeDownload from "../../assets/downloads/christmas/christmasTreePrintable.pdf";
import christmasTreePrintable2 from "../../assets/downloads/christmas/christmasTreePrintable2.png";
import christmasTreeDownload2 from "../../assets/downloads/christmas/christmasTreePrintable2.pdf";
import santaHatPrintable from "../../assets/downloads/christmas/santaHatPrintable.png";
import santaHatDownload from "../../assets/downloads/christmas/santaHatPrintable.pdf";

// import comingSoon from "../../assets/downloads/comingSoon.png";
class Carousel extends React.Component {

    render() {

        const images = [
            {
                original: beaniePrintable,
                description: <a href={beanieDownload} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Christmas Beanies'
            },
            {
                original: christmasPrintable,
                description: <a href={christmasDownload} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Christmas lights'
            },
            {
                original: christmasPrintable2,
                description: <a href={christmasDownload2} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Christmas reindeer'
            },
            {
                original: christmasTreePrintable,
                description: <a href={christmasTreeDownload} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Christmas Trees'
            },
            {
                original: christmasTreePrintable2,
                description: <a href={christmasTreeDownload2} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Christmas Trees 2'
            },
            {
                original: santaHatPrintable,
                description: <a href={santaHatDownload} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Santa Hats'
            }
            // {
            //     original: comingSoon,
            //     description: 'Coming Soon!',
            //     originalAlt: 'Coming Soon!'
            // }
        ]

        return (
            <div id="carousel">
            <ImageGallery items={images} showThumbnails={false} autoPlay={true} slideInterval={10000} slideDuration={500} />
            </div>
        );
    }

}

export default Carousel;