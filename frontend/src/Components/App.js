import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import "slick-carousel/slick/slick.css";
import ImageSlider from './ImageSlider';
import NewsGrid from './NewsGrid';
import Footer from './Footer';
import Comment from './Comments';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CategoryNavBar from './CategoryNavBar';

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log("Selected category:", selectedCategory);
  const [showPopup, setShowPopup] = useState(true);

useEffect(() => {
const timer = setTimeout(() => {
setShowPopup(false);
}, 5000);

return () => clearTimeout(timer);
}, []);

  return (
    <div className="App">
<Popup open={showPopup} modal onClose={() => setShowPopup(false)
}>
<div className="modal">
 <button className="close" onClick={() => setShowPopup(false)}>&times;</button>
 <div className="header">Welcome To CKC!</div>
 <div className="content">
 Sign-In or Sign-Up</div>
 <div className="actions">
 <button className="button" onClick={() => setShowPopup(false)}>
 Close
 </button>
 </div>
 </div>
    </Popup>
    <Header />
    <CategoryNavBar onCategorySelect={setSelectedCategory} />
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
      <NewsGrid />
      <Footer />
    </div>
  );
}

export default App;
