import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TickerSlider.css';

const tickerImages = [
  { src: '/aapl.png', alt: 'AAPL Chart' },
  { src: '/amzn.png', alt: 'AMZN Chart' },
  { src: '/goog.png', alt: 'GOOG Chart' },
  { src: '/meta.png', alt: 'META Chart' }
];

function TickerSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className="ticker-slider">
      <Slider {...settings}>
        {tickerImages.map((img, index) => (
          <div key={index}>
            <img src={img.src} alt={img.alt} className="ticker-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TickerSlider;