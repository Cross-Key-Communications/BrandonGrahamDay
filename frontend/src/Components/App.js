import React from 'react';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NewsArticle from './NewsArticle';
import Footer from './Footer';
import FavoritePage from './FavoritePage'; // ✅ Import your favorite page component
import './App.css';
import './Footer.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:id" element={<NewsArticle />} />
          <Route path="/favorite" element={<FavoritePage />} /> {/* ✅ Route to favorite page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
