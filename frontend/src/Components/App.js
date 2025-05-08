import React, { useState } from 'react';
import './App.css';
import NewsGrid from './NewsGrid';

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
    </div>
  );
}

export default App;
