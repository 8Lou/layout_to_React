import React, { useState } from 'react';
import './index.css';
import img1 from '../assets/img/0.jpeg';
import img2 from '../assets/img/3.jpeg';
import img3 from '../assets/img/2.jpeg';

const Slider = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextSlide = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            <button onClick={prevSlide}>&#10094;</button>
            <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
            <button onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default Slider;