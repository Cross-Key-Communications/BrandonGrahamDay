import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const TickerBox = ({ symbols }) => {
  const [chartImages, setChartImages] = useState([]);

  useEffect(() => {
    const fetchCharts = async () => {
      const images = [];

      for (let item of symbols) {
        try {
          const res = await fetch(`http://localhost:8081/api/stocks/${item.symbol}/live`);
          const data = await res.json();
          const prices = data.prices;

          if (!prices || prices.length === 0) {
            images.push({
              src: 'https://via.placeholder.com/300x150?text=No+Data',
              alt: `${item.label} (${item.symbol}) - No Data`,
            });
            await delay(1200);
            continue;
          }

          const labels = prices.map((_, i) => `T-${i} min`);
          const chartUrl = `https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify({
            type: 'line',
            data: {
              labels: labels.reverse(),
              datasets: [{
                label: item.symbol,
                data: prices.reverse(),
                fill: false,
                borderColor: 'blue',
                borderWidth: 2
              }]
            },
            options: {
              plugins: { legend: { display: false } }
            }
          }))}`;

          images.push({
            src: chartUrl,
            alt: `${item.label} (${item.symbol})`
          });

        } catch (error) {
          images.push({
            src: 'https://via.placeholder.com/300x150?text=Error',
            alt: `${item.label} (${item.symbol}) - Error`
          });
        }

        await delay(1200); // wait to avoid API rate limit
      }

      setChartImages(images);
    };

    fetchCharts();
  }, [symbols]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
    <div className="ticker-box">
      <Slider {...settings}>
        {chartImages.map((img, idx) => (
          <div key={idx}>
            <img src={img.src} alt={img.alt} className="ticker-chart" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TickerBox;
