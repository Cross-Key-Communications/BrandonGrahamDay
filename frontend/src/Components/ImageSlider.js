import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';

const ImageSlider = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8081/articles')
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter(article =>
          article.thumbnail &&
          article.thumbnail.startsWith('http') &&
          !article.thumbnail.endsWith('.svg')
        );
        setArticles(filtered);
      })
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="image-slider-wrapper">
      <Slider {...settings}>
        {articles.map((article, index) => (
          <div
            key={index}
            className="image-slider-card"
            onClick={() => navigate(`/article/${article.id}`, { state: { article } })}
          >
            <img
              src={article.thumbnail || "/placeholder.jpg"}
              onError={(e) => { e.target.src = "/placeholder.jpg"; }}
              alt={article.title}
              className="image-slider-img"
            />
            <div className="image-slider-overlay">
              <h2 className="image-slider-title">
                {article.title || "Untitled Article"}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
