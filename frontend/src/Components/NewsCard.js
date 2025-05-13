import React, { useState } from 'react';
import './NewsCard.css';

function NewsCard({ article, onClick, isInitiallyFavorite = false, lockFavorite = false }) {
  const [isFavorite, setIsFavorite] = useState(isInitiallyFavorite);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // prevent navigation
    if (lockFavorite) return; // ✅ don't toggle if locked
    setIsFavorite(prev => !prev);
  };

  return (
    <div className="news-card-link" onClick={onClick}>
      <div className="news-card">
        <img
          src={article.thumbnail || "https://via.placeholder.com/300"}
          alt={article.title}
        />
        <div className="news-card-content">
          <h3>{article.title}</h3>
          <p>{article.articleDescription}</p>
        </div>

        <button
          className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
          onClick={toggleFavorite}
        >
          ★
        </button>
      </div>
    </div>
  );
}

export default NewsCard;
