import React from "react";

import ImageGallery from "react-image-gallery";

import bb8 from "../../assets/downloads/valentines/bb8.png";
import beeMine from "../../assets/downloads/valentines/beeMine.png";
import chewie from "../../assets/downloads/valentines/chewie.png";
import conversationHearts from "../../assets/downloads/valentines/conversationHearts.png";
import friendsLobster from "../../assets/downloads/valentines/friendsLobster.png";
import grogu from "../../assets/downloads/valentines/grogu.png";
import hearts from "../../assets/downloads/valentines/hearts.png";
import heartsGlitter from "../../assets/downloads/valentines/heartsGlitter.png";
import roses from "../../assets/downloads/valentines/roses.png";
import smallHearts from "../../assets/downloads/valentines/smallHearts.png";
import tieFighter from "../../assets/downloads/valentines/tieFighter.png";
import xoxo from "../../assets/downloads/valentines/xoxo.png";

// import comingSoon from "../../assets/downloads/comingSoon.png";
class Carousel extends React.Component {

    render() {

        const images = [
            {
                original: bb8,
                description: <a href={bb8} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'BB-8 Mine'
            },
            {
                original: chewie,
                description: <a href={chewie} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'ugughhhgh guugh!'
            },
            {
                original: grogu,
                description: <a href={grogu} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Grogu'
            },
            {
                original: tieFighter,
                description: <a href={tieFighter} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Sith Valentines'
            },
            {
                original: friendsLobster,
                description: <a href={friendsLobster} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Pivot!'
            },
            {
                original: beeMine,
                description: <a href={beeMine} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Bee Mine'
            },
            {
                original: conversationHearts,
                description: <a href={conversationHearts} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Conversation hearts'
            },
            {
                original: hearts,
                description: <a href={hearts} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Hearts'
            },
            {
                original: heartsGlitter,
                description: <a href={heartsGlitter} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Hearts glitter'
            },
            {
                original: smallHearts,
                description: <a href={smallHearts} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Small hearts'
            },
            {
                original: roses,
                description: <a href={roses} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'Roses'
            },
            {
                original: xoxo,
                description: <a href={xoxo} target="_blank" rel="noopener noreferrer">DOWNLOAD</a>,
                originalAlt: 'XOXO'
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