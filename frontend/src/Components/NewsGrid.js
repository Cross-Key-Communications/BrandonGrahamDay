import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import './NewsGrid.css';


function NewsGrid({ onArticleClick }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/articles/fetch')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched articles:', data);
        setArticles(data);
      })
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div className="news-grid">
      {Array.isArray(articles) && articles.map((article, index) => (
        <NewsCard key={index} article={article} onClick={onArticleClick} />
      ))}
    </div>
  );
}

export default NewsGrid;