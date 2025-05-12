import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/articles')
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: '100%', maxWidth: '1000px', margin: '20px auto' }}>
      <Slider {...settings}>
        {articles.map((article, index) => (
          <div key={index}>
            <img
              src={article.urlToImage}
              alt={article.title}
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', bottom: '30px', left: '30px', color: 'white', background: 'rgba(0,0,0,0.5)', padding: '10px', maxWidth: '80%' }}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
