import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './TickerSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TickerSlider = () => {
  const [chartImages, setChartImages] = useState([]);

  const symbols = ['AAPL', 'JNJ', 'GOOG', 'MANU', 'NKE', 'DD']; // stock symbols
  const apiKey = '6AQN5983ASH3JJ0A';

  useEffect(() => {
    const fetchCharts = async () => {
      const images = [];

      for (let symbol of symbols) {
        try {
          const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${apiKey}`);

          const data = await res.json();

          const timeSeries = data['Time Series (Daily)'];
          if (!timeSeries) continue;

          const dates = Object.keys(timeSeries).slice(0, 7).reverse();
          const prices = dates.map(date => timeSeries[date]['4. close']);

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
            <img src={img.src} alt={img.alt} className="ticker-image" style={{ height: '150px', objectFit: 'contain' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TickerSlider;
