import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import './NewsGrid.css';


function NewsGrid({ onArticleClick, selectedCategory }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/articles/fetch')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched articles:', data);
        console.log('Selected category:', selectedCategory);

        const filtered = selectedCategory
        ? data.filter(article => article.category?.toLowerCase() === selectedCategory.toLowerCase())
       : data;
console.log('Filtered articles:', filtered);
        setArticles(filtered);
      })
      .catch(error => console.error('Error fetching articles:', error));
  }, [selectedCategory]);

  return (
    <div className="news-grid">
      {Array.isArray(articles) && articles.map((article, index) => (
        <NewsCard key={article.id || index} article={article} onClick={onArticleClick} />
      ))}
    </div>
  );
}

export default NewsGrid;