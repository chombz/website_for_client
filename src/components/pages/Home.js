import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../../styles/App.css';
import '../../styles/Home.css';

const combinedSlideshowImages = [
    '/images/image1.jpg',
    '/images/activity9.jpg',
    '/images/image2.jpg',
    '/images/image3.png',
    '/images/activity2.jpg',
    '/images/activity6.jpg',
    '/images/activity7.jpg',
    '/images/activity8.jpg',
];

function Home()
{
    const navigate = useNavigate(); // Hook for navigation

    // Main Slideshow state
    const [currentMainSlideIndex, setCurrentMainSlideIndex] = useState(0);
    const autoplayIntervalRef = useRef(null);

    // Function to advance to the next slide
    const goToNextSlide = () =>
    {
        setCurrentMainSlideIndex((prevIndex) =>
            prevIndex === combinedSlideshowImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Function to go to the previous slide
    const goToPrevSlide = () =>
    {
        setCurrentMainSlideIndex((prevIndex) =>
            prevIndex === 0 ? combinedSlideshowImages.length - 1 : prevIndex - 1
        );
    };

    // Setup and clear autoplay interval, restarting it
    const setupAutoplay = () =>
    {
        if (autoplayIntervalRef.current)
        {
            clearInterval(autoplayIntervalRef.current);
        }
        autoplayIntervalRef.current = setInterval(goToNextSlide, 3000); // Change image every 3 seconds
    };

    // Automatic slideshow for main banner
    useEffect(() =>
    {
        setupAutoplay(); // Start autoplay on mount
        return () =>
        {
            if (autoplayIntervalRef.current)
            {
                clearInterval(autoplayIntervalRef.current); // Clear on unmount
            }
        };
    },); // Empty dependency array, so it runs only on mount and unmount

    // Handler for the "Next" button
    const handleNextButtonClick = () =>
    {
        goToNextSlide(); // Manually advance the slide
        setupAutoplay(); // Reset the autoplay timer
    };

    // Handler for the "Previous" button
    const handlePrevButtonClick = () =>
    {
        goToPrevSlide(); // Manually go to the previous slide
        setupAutoplay(); // Reset the autoplay timer
    };

    return (
        <div className="home-container">
            {/* Main Slideshow Section */}
            <div className="slideshow-container">
                {combinedSlideshowImages.map((image, index) => (
                    <div
                        key={`main-slide-${index}`}
                        className={`slide ${index === currentMainSlideIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + image})` }}
                    >
                        {/* You can add captions or other content over the image here if desired */}
                    </div>
                ))}
                {/* Navigation Arrows */}
                <button className="prev" onClick={handlePrevButtonClick}>&#10094;</button>
                <button className="next" onClick={handleNextButtonClick}>&#10095;</button>
            </div>

            {/* Our Key Focus Areas Section (Moved Up) */}
            <div className="focus-areas-section">
                <h2>Our Key Focus Areas</h2>
                <div className="focus-areas-grid">
                    <div className="focus-area-item">
                        <h3>Entrepreneurship & AGPO training</h3>
                        <p>Supporting individuals with skills and opportunities for self-reliance.</p>
                    </div>
                    <div className="focus-area-item">
                        <h3>Climate Change</h3>
                        <p>Addressing environmental challenges and promoting sustainable practices.</p>
                    </div>
                    <div className="focus-area-item">
                        <h3>Drugs & Substance Abuse</h3>
                        <p>Working to combat drug abuse and provide support for recovery.</p>
                    </div>
                </div>
            </div>

            {/* Navigation Cards Section (About Us & Our Activities) */}
            <div className="navigation-cards-container">
                <div className="nav-card about-us-card" onClick={() => navigate('/about')}>
                    <div className="card-overlay">
                        <h2>About Us</h2>
                        <p>Learn more about who we are and what drives us.</p>
                    </div>
                </div>
                <div className="nav-card our-activities-card" onClick={() => navigate('/activities')}>
                    <div className="card-overlay">
                        <h2>Our Activities</h2>
                        <p>Discover the impactful projects and initiatives we undertake.</p>
                    </div>
                </div>
            </div>

            {/* Footer will likely be in App.js or a separate Footer component */}
        </div>
    );
}

export default Home;