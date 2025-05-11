import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
import './NewsGrid.css';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.css';


function NewsGrid() {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8081/articles/fetch')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  const handleClick = (article, index) => {
    navigate(`/article/${index}`, { state: { article } });
  };

  return (
    <div className="news-grid">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} onClick={() => handleClick(article, index)} />
      ))}
    </div>
  );
}

export default NewsGrid;