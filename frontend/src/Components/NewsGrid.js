import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import './NewsGrid.css';

function NewsGrid() {
  // Store articles from the API
  const [articles, setArticles] = useState([]);

  // Fetch articles from your backend when the component mounts
  useEffect(() => {
    fetch('http://localhost:8081/articles/fetch')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched articles:', data);
        setArticles(data); // Set articles into state
      })
      .catch(error => console.error('Error fetching articles:', error));
  }, []);

  // Display grid of news cards
  return (
    <div className="news-grid">
      {Array.isArray(articles) && articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsGrid;