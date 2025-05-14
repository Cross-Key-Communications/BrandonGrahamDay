import React from 'react';
import Slider from 'react-slick';
import './TickerSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TickerSlider = () => {
  const images = [
    { src: '/aapl.png', alt: 'AAPL Chart' },
    { src: '/amzn.png', alt: 'AMZN Chart' },
    { src: '/goog.png', alt: 'GOOG Chart' },
    { src: '/meta.png', alt: 'META Chart' },
    { src: '/aapl.png', alt: 'AAPL Chart 2' },
    { src: '/amzn.png', alt: 'AMZN Chart 2' }
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className="ticker-slider" style={{ maxWidth: '220px', margin: '0 auto' }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="ticker-slide">
            <img src={img.src} alt={img.alt} className="ticker-image" style={{ height: '150px', objectFit: 'contain' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TickerSlider;
