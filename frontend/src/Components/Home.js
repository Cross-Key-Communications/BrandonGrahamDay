import React from 'react';
import ImageSlider from './ImageSlider';
import NewsGrid from './NewsGrid';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Just the full-width slider now */}
      <div className="slider-wrapper">
        <ImageSlider />
      </div>

      {/* News below */}
      <div className="news-section">
        <NewsGrid />
      </div>
    </>
  );
};

export default Home;
