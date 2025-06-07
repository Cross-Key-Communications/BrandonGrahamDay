import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './TickerSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TickerSlider = () => {
  const [chartImages, setChartImages] = useState([]);
  const symbols = ['AAPL', 'JNJ', 'GOOG', 'MANU', 'NKE', 'DD'];

  useEffect(() => {
    const fetchCharts = async () => {
      const images = [];

      for (let symbol of symbols) {
        try {
          const res = await fetch(`http://localhost:8081/api/stocks/${symbol}/chart`);
          const data = await res.json();

          const prices = data.prices;
          if (!prices || prices.length === 0) continue;

          const dates = prices.map((_, i) => `Day ${i + 1}`);

          const chartUrl = `https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify({
            type: 'line',
            data: {
              labels: dates,
              datasets: [{
                label: symbol,
                data: prices,
                fill: false,
              }]
            }
          }))}`;

          images.push({ src: chartUrl, alt: `${symbol} Chart` });
        } catch (error) {
          console.error(`Error fetching data for ${symbol}`, error);
        }
      }

      setChartImages(images);
      console.log('Fetched chart images:', images);
    };

    fetchCharts();
  }, []);

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
        {chartImages.map((img, index) => (
          <div key={index} className="ticker-slide">
            <img
              src={img.src}
              alt={img.alt}
              className="ticker-image"
              style={{ height: '150px', objectFit: 'contain' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TickerSlider;

/*
// Static version (commented out)

const images = [
  { src: '/aapl.png', alt: 'AAPL Chart' },
  { src: '/jnj.png', alt: 'AMZN Chart' },
  { src: '/goog.png', alt: 'GOOG Chart' },
  { src: '/manu.png', alt: 'META Chart' },
  { src: '/nike.png', alt: 'AAPL Chart 2' },
  { src: '/dpnt.png', alt: 'AMZN Chart 2' }
];
*/
