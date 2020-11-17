import React from "react";

import ImageGallery from "react-image-gallery";

import chooseToBeGrateful from '../../assets/downloads/thanksgiving/choose-to-be-grateful.png';
import chooseToBeGratefulDownload from '../../assets/downloads/thanksgiving/choose-to-be-grateful.pdf';
import leaves from '../../assets/downloads/thanksgiving/leaves.png';
import gratefulLeaves from '../../assets/downloads/thanksgiving/grateful-leaves.png';
import gratefulLeavesDownload from '../../assets/downloads/thanksgiving/grateful-leaves.pdf';
import gratefulStory from '../../assets/downloads/thanksgiving/grateful-story.png';
import gratefulStoryDownload from '../../assets/downloads/thanksgiving/grateful-story.pdf';
import gratefulThankfulBlessed from '../../assets/downloads/thanksgiving/grateful-thankful-blessed.png';
import gratefulThankfulBlessedDownload from '../../assets/downloads/thanksgiving/grateful-thankful-blessed.pdf';

// import comingSoon from "../../assets/downloads/comingSoon.png";

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
                original: chooseToBeGrateful,
                description: <a href={chooseToBeGratefulDownload} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Choode to be Grateful'
            },
            {
                original: leaves,
                description: <a href={gratefulLeavesDownload} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Fall Leaves'
            },
            {
                original: gratefulLeaves,
                description: <a href={gratefulLeavesDownload} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Leaves quote'
            },
            {
                original: gratefulStory,
                description: <a href={gratefulStoryDownload} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Grateful Story'
            },
            {
                original: gratefulThankfulBlessed,
                description: <a href={gratefulThankfulBlessedDownload} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Grateful Thankful Blessed'
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