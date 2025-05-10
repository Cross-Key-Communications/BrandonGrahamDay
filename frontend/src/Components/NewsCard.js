import React from 'react';
import './NewsCard.css';
import Comments from './Comments';

function NewsCard({ article, onClick }) {
  return (
    <div className="news-card-link" onClick={() => onClick(article)}>
      <div className="news-card">
        <img
          src={article.urlToImage}
          alt={article.title}
          className="news-card-img"
        />
        <div className="news-card-content">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <Comments articleId={article.id} />
        </div>
      </div>
    </div>
  );
}

export default NewsCard;