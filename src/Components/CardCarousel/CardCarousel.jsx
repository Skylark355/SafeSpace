import React, { useState, useEffect } from 'react';
import { cards } from '../../../Constants'; // Assuming you have a cards array
import './CardCarousel.css'; // Import your styles

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length); // Loop around when reaching the end
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length); // Loop around when at the beginning
  };

  // Autoplay functionality - Change slide every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  // Create an array of 3 cards with looping behavior
  const displayedCards = [
    cards[(currentIndex) % cards.length],
    cards[(currentIndex + 1) % cards.length],
    cards[(currentIndex + 2) % cards.length],
  ];

  return (
    <div className="carousel-container">
      {/* Prev Button */}
      <button className="prev-btn" onClick={prevSlide}>
        Prev
      </button>

      {/* Carousel Content */}
      <div className="carousel-content">
        <div className="cards-container">
          {displayedCards.map((card, id) => (
            <div className="report-card" key={id}>
              <img src={card.image} alt={card.title} />
              <h2>{card.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button className="next-btn" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
};

export default CardCarousel;
