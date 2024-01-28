import React from 'react';
import Slider from './Slider';

const Main = () => {
    const images = [
        'img/0.jpeg',
        'img/3.jpeg',
        'img/2.jpeg',
    ];

    return (
        <div className="main">
            <Slider images={images} />
        </div>
    );
};

export default Main;