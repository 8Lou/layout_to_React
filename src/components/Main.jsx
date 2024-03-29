import React, { useEffect, useState } from 'react';

import SliderImage from '../../src/assets/img/1.jpeg';
import SliderImage1 from '../../src/assets/img/3.jpeg';
import SliderImage2 from '../../src/assets/img/2.jpeg';
import Button from './Button';

function Main() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderImages = [SliderImage, SliderImage1, SliderImage2];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
        }, 3000);

        return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
    }, [sliderImages.length]);

    return (
        <div className="container">
            <img className="image" src={sliderImages[currentSlide]} alt="Slider Image" />
            <p className='leasing__title'>Leasing From Lou</p>
            <Button className='button main__button'>FIND A CAR</Button>
            <div>
            </div>
        </div>
    );
}

export default Main;