import React from 'react';
import './NewsCard.css';

function NewsCard({ article, onClick }) {
  return (
    <div className="news-card-link" onClick={onClick}>
      <div className="news-card">
            <img src={article.thumbnail || "https://via.placeholder.com/300"} alt={article.title} />
        <div className="news-card-content">
          <h3>{article.title}</h3>
            <p>{article.articleDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
