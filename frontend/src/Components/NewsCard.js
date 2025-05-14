import React, { useState } from 'react';
import './NewsCard.css';

function NewsCard({ article, onClick, isInitiallyFavorite = false, lockFavorite = false }) {
  const [isFavorite, setIsFavorite] = useState(isInitiallyFavorite);
  const isPlaceholder = !article.thumbnail;

  const toggleFavorite = (e) => {
    e.stopPropagation(); // Prevents triggering the onClick when star is clicked
    if (!lockFavorite) {
      setIsFavorite(!isFavorite);
    }
  };

  return (
    <div className="news-card" onClick={onClick}>
      <img
        src={article.thumbnail || '/a.png'}
        alt={article.title}
        onError={(e) => (e.target.src = '/a.png')}
        className="news-thumbnail"
      />

      <div className="news-content">
        <h3>{article.title}</h3>
        <p>{article.articleDescription}</p>
      </div>

      <div className="favorite-icon" onClick={toggleFavorite}>
        {isFavorite ? (
          <span role="img" aria-label="favorite">⭐</span>
        ) : (
          <span role="img" aria-label="not favorite">☆</span>
        )}
      </div>
    </div>
  );
}

export default NewsCard;
