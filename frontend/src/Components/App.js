import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header';
import "slick-carousel/slick/slick.css";
import ImageSlider from './ImageSlider';
import NewsGrid from './NewsGrid';
import Footer from './Footer';
import Comment from './Comments';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CategoryNavBar from './CategoryNavBar';


const Favorite = () => <h2>Favorite Article Page</h2>;
const Story1  = () => <h2>My Favorite Story1</h2>
const Story2  = () => <h2>My Favorite Story2</h2>
const World = () => <h2>World News Page</h2>;
const India = () => <h2>India Page</h2>;
const Canada = () => <h2>Canada Page</h2>;

function Home() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  console.log("Selected article:", selectedArticle);
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
}
contentStyle={{
  width: '500px',
     height: '500px',
     borderRadius: '12px',
     padding: '100px',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     fontFamily: 'Helvetica, sans-serif',
      boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      backgroundColor: '#fff',
     fontSize: '60px',
 }}
 >
 <div style={{ textAlign: 'center' }}>
     <img
       src="/a.png"
       alt="CKC Logo"
       style={{ width: '100px', height: '100px', marginBottom: '20px', borderRadius: '50%' }}
     />
     <h2 style={{ fontSize: '28px', color: '#111', marginBottom: '10px' }}>
           Welcome To <span style={{ color: '#8B0000' }}>CKC</span>!
         </h2>
         <p style={{ fontSize: '18px', marginBottom: '30px' }}>
               Sign-In or Sign-Up to get started.
             </p>

<button
      style={{
        padding: '10px 20px',
        backgroundColor: '#8B0000',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        marginBottom: '10px'
      }}
    >
      Sign In / Sign Up
    </button>
     <br />
 <button
 onClick={() => setShowPopup(false)}
style={{
        padding: '6px 14px',
        backgroundColor: '#ccc',
        border: 'none',
        borderRadius: '6px',
        fontSize: '14px',
        cursor: 'pointer'
      }}
 >
 Close
 </button>
 </div>
    </Popup>
    <Header />
    <CategoryNavBar onCategorySelect={setSelectedCategory} />
<ImageSlider />
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
          <Comment articleId={selectedArticle.id} />
        </div>
      ) : (
        <NewsGrid onArticleClick={setSelectedArticle} />
      )}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/story1" element={<Story1 />} />
        <Route path="/story2" element={<Story2 />} />
        <Route path="/world" element={<World />} />
        <Route path="/india" element={<India />} />
        <Route path="/canada" element={<Canada />} />
      </Routes>
    </Router>
  );
}

export default App;
