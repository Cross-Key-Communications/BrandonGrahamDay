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
    <div className= "news-card">

    <img src={article.urlToImage}
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
