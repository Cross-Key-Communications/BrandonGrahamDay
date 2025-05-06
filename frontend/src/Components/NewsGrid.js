import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import './NewsGrid.css';

function NewsGrid() {
  // Store articles from the API
  const [articles, setArticles] = useState([]);

  // 2. Fill articles with dummy data when component mounts
  useEffect(() => {
    const testArticles = [
      {
        title: 'Test Headline',
        description: 'This is a sample description.',
        url: 'https://cnn.com',
        urlToImage: 'https://via.placeholder.com/300'
      },
      {
        title: 'Another Article',
        description: 'Another sample news story.',
        url: 'https://nytimes.com',
        urlToImage: 'https://via.placeholder.com/300'
      },
      {
        title: 'Yet Another Headline',
        description: 'This is yet another sample article.',
        url: 'https://bbc.com',
        urlToImage: 'https://via.placeholder.com/300'
      },
      {
        title: 'Breaking News',
        description: 'Latest updates on global events.',
        url: 'https://bbc.com',
        urlToImage: 'https://via.placeholder.com/300'
      },
      {
        title: 'Tech Trends Today',
        description: 'The newest tech trends and innovations.',
        url: 'https://techcrunch.com',
        urlToImage: 'https://via.placeholder.com/300'
      }
    ];

    setArticles(testArticles);
  }, []); // runs once on mount

  // Display grid of news cards
  return (
    <div className="news-grid">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsGrid;