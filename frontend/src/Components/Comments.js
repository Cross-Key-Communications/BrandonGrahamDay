import React, { useState, useEffect } from 'react';
import './Comments.css';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  // Fetch comments from backend on component mount
    useEffect(() => {
      fetch('http://localhost:8081/fetch/comments')
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(err => console.error("Error fetching comments:", err));
    }, []);

  const handleAddComment = () => {
      if (input.trim()) {
        setComments([...comments, input]); // Frontend-only update (for now)
        setInput('');
      }
  };

  return (
      <div className="comments">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a comment..."
          className="comments-input"
        />
        <button onClick={handleAddComment} className="comment-button">
          Post
        </button>
        <ul className="comments-list">
          {comments.map((c, i) => (
            <li key={i} className="comments-item">
              {typeof c === 'string' ? c : c.text}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default Comments;