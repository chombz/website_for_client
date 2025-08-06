import React, { useState, useEffect } from 'react';
import './Slideshow.css'; // Create a Slideshow.css file

function Slideshow({ images, interval = 3000 })
{
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() =>
    {
        const timer = setInterval(() =>
        {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer); // Cleanup the interval on unmount
    }, [images, interval]);

    const goToPrevious = () =>
    {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () =>
    {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="slideshow-container">
            <button className="prev" onClick={goToPrevious}>&#10094;</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
            <button className="next" onClick={goToNext}>&#10095;</button>
        </div>
    );
}

export default Slideshow;