import React, { useEffect, useState } from 'react';

import SliderImage from '../../src/assets/img/0.jpeg';
import SliderImage1 from '../../src/assets/img/3.jpeg';
import SliderImage2 from '../../src/assets/img/2.jpeg';

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
            <p className='menu__title'>Leasing From Lou</p>
        </div>
    );
}

export default Main;