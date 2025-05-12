import React from 'react';
import NewsCard from './NewsCard';
import { useNavigate } from 'react-router-dom';
import './NewsGrid.css';

const favoriteArticles = [
  {
    id: 1,
    title: 'Breaking: Favorite News!',
    articleDescription: 'This is a top story you marked as favorite.',
    articleBody: 'This is the full body of the favorite article.',
    author: 'John Doe',
    thumbnail: 'https://via.placeholder.com/300',
    publishedAt: '2023-05-01T12:00:00Z',
    source: { name: 'CNN' }
  },
  {
    id: 2,
    title: 'Another Favorite Story',
    articleDescription: 'This article was also marked as favorite.',
    articleBody: 'Here’s more text that appears on the full article page.',
    author: 'Jane Smith',
    thumbnail: 'https://via.placeholder.com/300',
    publishedAt: '2023-04-20T10:30:00Z',
    source: { name: 'NYTimes' }
  }
];

const FavoritePage = () => {
  const navigate = useNavigate();

  const handleCardClick = (article) => {
    navigate(`/article/${article.id}`, { state: { article } });
  };

  return (
    <div className="news-grid">
      {favoriteArticles.map(article => (
        <NewsCard key={article.id} article={article} onClick={() => handleCardClick(article)} />
      ))}
    </div>
  );
};

export default FavoritePage;
