import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './TickerSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TickerSlider = () => {
  const [chartImages, setChartImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
                label: `${item.symbol}`,
                data: prices.reverse(),
                fill: false,
                borderColor: 'blue',
                borderWidth: 2
              }]
            },
            options: {
              plugins: {
                legend: { display: false }
              },
              scales: {
                x: { ticks: { font: { size: 14 } } },
                y: { ticks: { font: { size: 14 } } }
              }
            }
          }))}`;

          images.push({ src: chartUrl, alt: `${item.label} (${item.symbol})` });
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
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 40000,
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
  };

  return (
    <div className="ticker-slider-container">
      <div className="ticker-symbol-label">
        {symbols[currentIndex]?.symbol}
      </div>
      <div className="ticker-slider">
        <Slider {...settings}>
          {chartImages.map((img, index) => (
            <div key={index} className="ticker-slide">
              <img
                src={img.src}
                alt={img.alt}
                className="ticker-chart"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TickerSlider;
