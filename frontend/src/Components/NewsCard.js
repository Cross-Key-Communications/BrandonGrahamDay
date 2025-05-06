import React from 'react'
import './NewsCard.css'

function NewsCard({article}){

return(
 <a
      href={article.url}
      target="_blank"
      rel="noreferrer"
      className="news-card-link"
    >
    // Main container div for the news card, uses CSS class 'news-card'
    <div className= "news-card">
    /* Image at the top or side of the card.
              It shows article.urlToImage, or a placeholder if that’s missing.
              It uses a CSS class for styling */
    <img src={article.urlToImage || 'https://via.placeholder.com/250'}//fallback img
    alt={article.tile}
    className="news-card-img"/>
    <div class="news-card content">
    <h3>{article.title}</h3>
    <p>{article.description}</p>
    </div>
   </div>
</a>
);
}
export default NewsCard;
