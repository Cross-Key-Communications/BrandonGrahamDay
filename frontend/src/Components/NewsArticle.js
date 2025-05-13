import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NewsArticle.css';
import Comments from './Comments';
import Footer from './Footer.css';

function NewsArticle() {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return <p>No article data. <button onClick={() => navigate('/')}>Go back</button></p>;
  }

  // Format the published date, if it exists
  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null;

  return (
    <div className="news-article">
      <button onClick={() => navigate('/')}>← Back to Headlines</button>

      {article.thumbnail && (
        <img src={article.thumbnail || "https://via.placeholder.com/300"} alt={article.title} />
      )}

      <h1>{article.title}</h1>

      <p className="news-article-author">
        {article.author ? `By ${article.author}` : 'Unknown Author'}
        {formattedDate && ` • ${formattedDate}`}
      </p>

      <h3 className="news-article-description">{article.articleDescription}</h3>
      <p className="news-article-content">{article.articleBody}</p>

      {article.source?.name && (
        <p className="news-article-source">Source: {article.source.name}</p>
      )}

       <Comments key={article.id} articleId={article.id} />
    </div>
  );
}

export default NewsArticle;
