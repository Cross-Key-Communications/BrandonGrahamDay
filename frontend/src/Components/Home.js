import React from 'react';
import ImageSlider from './ImageSlider';
import NewsGrid from './NewsGrid';
import TickerSlider from './TickerSlider';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="slider-layout">
        <div className="ticker-box-group">
          <TickerSlider images={[
            { src: '/aapl.png', alt: 'AAPL Chart' },
            { src: '/meta.png', alt: 'META Chart' },
            { src: '/goog.png', alt: 'GOOG Chart' },
            { src: '/amzn.png', alt: 'AMZN Chart' }
          ]} />

          <TickerSlider images={[
            { src: '/nike.png', alt: 'NIKE Chart' },
            { src: '/manu.png', alt: 'MANU Chart' },
            { src: '/addf.png', alt: 'ADDF Chart' }
          ]} />

          <TickerSlider images={[
            { src: '/coke.png', alt: 'COKE Chart' },
            { src: '/jnj.png', alt: 'JNJ Chart' },
            { src: '/dpnt.png', alt: 'DPNT Chart' }
          ]} />
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
