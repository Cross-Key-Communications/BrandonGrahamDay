import React from 'react';
import NewsCard from './NewsCard';
import { useNavigate } from 'react-router-dom';
import './NewsGrid.css';

const favoriteArticles = [
  {
     id: 1093,
     title: '‘Thunderbolts’ and ‘Sinners’ top box office charts once more - AP News',
     articleDescription: 'Marvel’s Thunderbolts and Ryan Coogler’s Sinners dominated again...',
     articleBody: 'Marvels Thunderbolts and Ryan Cooglers Sinners dominated the North American box office charts again this weekend. Now in their second and fourth weekends respectively, the two films had some new com…',
     author: 'Lindsey Bahr',
     thumbnail: 'https://dims.apnews.com/dims4/default/cbc8a31/2147483647/strip/true/crop/5786x3255+0+224/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fd5%2Fc9%2F31b3d78b036fa15e412ec0ec425d%2F013a17ee80db48febaf712ff3bc15517', // Replace with real image if you have one
     publishedAt: '2025-05-12T00:00:00Z',
     source: { name: 'AP News' }
   },
  {
     id: 1094, // 🔒 New unique ID
        title: '2025 NFL schedule opens with Cowboys at Eagles on Thursday, September 4 - NBC Sports',
        articleDescription: 'Cowboys-Eagles has officially been announced as the league’s opener.',
        articleBody: 'The Cowboys will head to Philadelphia for the first game of the 2025 NFL season. Cowboys-Eagles has officially been announced as the league’s opener, with the game in Philadelphia for the traditional…',
        author: 'Michael David Smith',
        thumbnail: 'https://nbcsports.brightspotcdn.com/dims4/default/9153f05/2147483647/strip/true/crop/4066x2287+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fa4%2F5c%2F5758e8e64a268d15bab3467f0309%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2183990250', // Optional: swap for real NFL image
        publishedAt: '2025-05-13T00:00:00Z',
        source: { name: 'NBCSports.com' }
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
        <NewsCard
           key={article.id}
           article={article}
           onClick={() => handleCardClick(article)}
           isInitiallyFavorite={true}
           lockFavorite={true}
         />
      ))}
    </div>
  );
};

export default FavoritePage;
