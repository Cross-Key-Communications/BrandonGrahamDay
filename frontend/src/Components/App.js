import React from 'react';
import './App.css';
import NewsCard from './NewsCard'; // path is correct since it's in the same folder
import NewsGrid from './NewsGrid';
import Header from './Header';
import "slick-carousel/slick/slick.css";

import ImageSlider from './ImageSlider';
import Footer from './Footer';


function App() {
  // dummy data to simulate one article
  const sampleArticle = {
    title: 'CNN Clone Article',
    description: 'This is a sample description of the news article.',
    url: 'https://cnn.com',
    urlToImage: 'https://via.placeholder.com/300x200' // placeholder image
  };

  return (
    <div className="App">
<Header />
<ImageSlider />
      <NewsGrid/>
      <Footer />
    </div>
  );
}

export default App;
