import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NewsArticle.css';

function NewsArticle() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return <p>No article data. <button onClick={() => navigate('/')}>Go back</button></p>;
  }

  return (
    <div className="news-article">
      <button onClick={() => navigate('/')}>← Back to Headlines</button>
      {article.urlToImage && (
        <img src={article.thumbnail || "https://via.placeholder.com/300"} alt={article.title} />
      )}
      <h1>{article.title}</h1>
      <p className="news-article-author">
        {article.author ? `By ${article.author}` : 'Unknown Author'} •{' '}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
      <h3 className="news-article-description">{article.description}</h3>
      <p className="news-article-content">{article.content}</p>
      <p className="news-article-source">Source: {article.name}</p>
    </div>
  );
}

export default NewsArticle;