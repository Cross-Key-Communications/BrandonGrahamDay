import React from 'react';
import ImageSlider from './ImageSlider';
import NewsGrid from './NewsGrid';
import TickerSlider from './TickerSlider';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="slider-layout">
        <div className="ticker-box">
          <TickerSlider />
        </div>

        <div className="main-slider">
          <ImageSlider />
        </div>
      </div>

      <div className="news-section">
        <NewsGrid />
      </div>
    </>
  );
};

export default Home;
