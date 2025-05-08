import React from 'react';
import './App.css';
import NewsCard from './NewsCard'; // path is correct since it's in the same folder
import NewsGrid from './NewsGrid';
import Header from './Header';
import "slick-carousel/slick/slick.css";

import ImageSlider from './ImageSlider';
import Footer from './Footer';
import Comment from './Comment';

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="App">
      <h1>CrossKey Communication</h1>
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
<Header />
<ImageSlider />
<Comment />
      <NewsGrid/>
      <Footer />
    </div>
  );
}

export default App;
