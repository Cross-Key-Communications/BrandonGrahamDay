import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './TickerSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TickerSlider = () => {
  const [chartImages, setChartImages] = useState([]);

  const symbols = [
    { symbol: 'AAPL', label: 'Apple' },
    { symbol: 'NKE', label: 'Nike' },
    { symbol: 'GOOG', label: 'Google' }
  ];

  useEffect(() => {
    const fetchAllCharts = async () => {
      const images = [];

      for (let item of symbols) {
        try {
          const res = await fetch(`http://localhost:8081/api/stocks/${item.symbol}/live`);
          const data = await res.json();

          const prices = data.prices;
          if (!prices || prices.length === 0) continue;

          const labels = prices.map((_, i) => `T-${i} min`);

          const chartUrl = `https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify({
            type: 'line',
            data: {
              labels: labels.reverse(),
              datasets: [{
                label: `${item.label} (Live)`,
                data: prices.reverse(),
                fill: false,
                borderColor: 'blue'
              }]
            }
          }))}`;

          images.push({ src: chartUrl, alt: `${item.label} Live Chart` });
        } catch (error) {
          console.error(`Error fetching data for ${item.symbol}`, error);
        }
      }

      setChartImages(images);
    };

    fetchAllCharts();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // all 3 charts stacked vertically
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 40000
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
