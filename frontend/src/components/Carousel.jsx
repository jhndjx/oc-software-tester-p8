import {useState} from 'react';
import '../assets/css/Carousel.css';

function Carousel({images}) {
    const [currentIndex, setCurrentIndex] = useState(0);

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

    return (
        <div className="carousel">
            <button className="carousel-left" onClick={goToPrevious}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <img src={images[currentIndex]} alt="Carousel" className="carousel-image"/>
            <button className="carousel-right" onClick={goToNext}>
                <i className="fas fa-chevron-right"></i>
            </button>
            <div className="carousel-indicator">
                {currentIndex + 1}/{images.length}
            </div>
        </div>
    );
}

export default Carousel;
