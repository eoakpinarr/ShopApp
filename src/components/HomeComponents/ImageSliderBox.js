import React from 'react'
import { ImageSlider } from 'react-native-image-slider-banner';

const ImageSliderBox = () => {

    const images = [
        { img: "https://img.etimg.com/thumb/msid-93051525,width-1070,height-580,imgsize-2243475,overlay-economictimes/photo.jpg" },
        { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif" },
        { img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg" },
    ];

    return <ImageSlider showIndicator={false} data={images} autoPlay closeIconColor="#fff" />
}

export default ImageSliderBox

