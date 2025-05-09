import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NewsGrid from './NewsGrid';
import NewsArticle from './NewsArticle';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>CrossKey Communication</h1>
        <Routes>
          <Route path="/" element={<NewsGrid />} />
          <Route path="/article/:id" element={<NewsArticle />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;