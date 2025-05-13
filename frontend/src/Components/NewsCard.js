import React from 'react';
import './NewsCard.css';

function NewsCard({ article, onClick }) {
  const isPlaceholder = !article.thumbnail;

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
      </div>
    </div>
  );
}

export default NewsCard;
