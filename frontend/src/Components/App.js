import './App.css';
import Header from './Header';
import "slick-carousel/slick/slick.css";
import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import NewsGrid from './NewsGrid';
import Footer from './Footer';
import Comment from './Comments';

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="App">
<Header />
<ImageSlider />
<Comment />
      {selectedArticle ? (
        <div>
          <button onClick={() => setSelectedArticle(null)}>← Back to Headlines</button>
          <iframe
            src={selectedArticle.url}
            title={selectedArticle.title}
            width="100%"
            height="600px"
            style={{ border: 'none', marginTop: '1rem' }}
          />
        </div>
      ) : (
        <NewsGrid onArticleClick={setSelectedArticle} />
      )}
      <NewsGrid/>
      <Footer />
    </div>
  );
}

export default App;
