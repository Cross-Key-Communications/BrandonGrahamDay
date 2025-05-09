import React from 'react';
import './NewsCard.css';

function NewsCard({ article, onClick }) {
  return (
    <div className="news-card-link" onClick={onClick}>
      <div className="news-card">
        <img src={article.urlToImage} alt={article.title} className="news-card-img" />
        <div className="news-card-content">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
