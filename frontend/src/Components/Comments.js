import React, { useState, useEffect } from 'react';
import './Comments.css';

const Comments = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');
const userId = 1;//temp user

  useEffect(() => {
    fetch(`http://localhost:8081/comments/fetch/all`)
      .then(res => res.json())
      .then(data => {
        const filtered = data
          .filter(c => c.article && c.article.id === articleId)
          .sort((a, b) => new Date(b.datePosted) - new Date(a.datePosted)); // newest first
        setComments(filtered);
      });
  }, [articleId]);

  const handleAddComment = () => {
    if (input.trim()) {
      fetch(`http://localhost:8081/comments/add/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: input,
          articleId: articleId,
          userId: Number(userId),
        }),
      })
        .then(res => res.json())
        .then(newComment => {
          setComments(prev => [newComment, ...prev]); // Add to top
          setInput('');
        })
        .catch(err => console.error("Error posting comment:", err));
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
      <button onClick={handleAddComment} className="comment-button">Post</button>

      <div className="comments-list-container">
        <ul className="comments-list">
          {comments.map((c, i) => (
            <li key={i} className="comments-item">
              {typeof c === 'string' ? c : c.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
