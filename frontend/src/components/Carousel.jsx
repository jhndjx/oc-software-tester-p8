import { useState, useMemo } from 'react';
import '../assets/css/Carousel.css';

function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasMultipleImages = useMemo(() => images.length > 1, [images.length]);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    if (images.length === 0) {
        return <div className="carousel">Aucune image</div>;
    }

    return (
        <div className="carousel">
            {hasMultipleImages && (
                <button className="carousel-left" onClick={goToPrevious}>
                    <i className="fas fa-chevron-left"></i>
                </button>
            )}

            <img src={images[currentIndex]} alt={`Carousel, image n°${currentIndex + 1}`} className="carousel-image" />

            {hasMultipleImages && (
                <button className="carousel-right" onClick={goToNext}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            )}

            <div className="carousel-indicator">
                {currentIndex + 1}/{images.length}
            </div>
        </div>
    );
}

export default Carousel;
