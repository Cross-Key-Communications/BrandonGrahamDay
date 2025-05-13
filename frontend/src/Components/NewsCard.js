import React from 'react';
import './NewsCard.css';

function NewsCard({ article, onClick, isInitiallyFavorite = false, lockFavorite = false }) {
  const [isFavorite, setIsFavorite] = useState(isInitiallyFavorite);

  const toggleFavorite = (e) => {
    e.stopPropagation(); // prevent navigation
    if (lockFavorite) return;
    setIsFavorite(prev => !prev);
  };

  return (
    <div className="news-card-link" onClick={onClick}>
      <div className="news-card">
        <div className="image-container" style={{ position: 'relative' }}>
          <img
            src={article.thumbnail || "/a.png"}
            alt={article.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/a.png";
            }}
          />
          {isPlaceholder && (
            <div className="placeholder-label">
              No image provided - using placeholder
            </div>
          )}
        </div>

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
