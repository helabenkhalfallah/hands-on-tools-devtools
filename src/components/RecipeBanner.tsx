import React, { useEffect, useState } from 'react';

const images = [
    'https://images.squarespace-cdn.com/content/v1/5fb59d11289b1d642b6993b5/1654699588476-PVI9FRFIPYMH7FYSKM1Z/custom_recipe_wallpaper_etsy_the_recipe_preserve_kitchen_pantry.jpg',
    'https://i.etsystatic.com/24028706/r/il/2b7c56/2973053637/il_fullxfull.2973053637_5geh.jpg',
    'https://i.etsystatic.com/38329553/r/il/bee500/4841447550/il_fullxfull.4841447550_m7av.jpg',
];

const RecipeBanner: React.FC = () => {
    const [bannerLoaded, setBannerLoaded] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Simulate delayed banner load (CLS simulation)
        const loadTimeout = setTimeout(() => {
            setBannerLoaded(true);
        }, 3000); // 3-second delay

        return () => clearTimeout(loadTimeout);
    }, []);

    useEffect(() => {
        if (bannerLoaded) {
            // Start sliding banner once loaded
            const slideInterval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000); // Change image every 3 seconds

            return () => clearInterval(slideInterval);
        }
    }, [bannerLoaded]);

    if (!bannerLoaded) {
        // Placeholder div to simulate CLS (e.g., blank space for banner)
        // return <div className="banner-placeholder"></div>;
        return null;
    }

    return (
        <div className="banner-container">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`banner-image ${currentIndex === index ? 'active' : ''}`}
                />
            ))}
        </div>
    );
};

export default RecipeBanner;
