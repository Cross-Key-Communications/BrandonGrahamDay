import React, { useState, useEffect } from 'react';
import './Comments.css';

const Comments = ({ articleId, refreshTrigger }) => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');
  const userId = 1;//temp user

  useEffect(() => {
    fetch(`http://localhost:8081/comments/fetch/all`)
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter(c => c.article && c.article.id === articleId);
        setComments(filtered);
      })
      .catch(err => console.error("Error fetching comments:", err));
  }, [articleId, refreshTrigger]);

const handleAddComment = () => {
    if (!input.trim()) return;

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
        setComments(prev => [newComment, ...prev]); // Show new comment at top
        setInput('');
      })
      .catch(err => console.error("Error posting comment:", err));
  };

  return (
    <div className="comments">
      <h3>Leave a comment</h3>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your comment here..."
        rows={4}
        className="comments-input"
      />
      <br />
      <button onClick={handleAddComment} className="comment-button">Post Comment</button>

      <div className="comments-list-container">
        <h3>Comments</h3>
         <ul className="comments-list">
           {comments.length > 0 ? (
             comments.map((c, i) => (
               <li key={i} className="comments-item">
                 <strong>{c.user?.username || "Anonymous"}:</strong> {c.text}
               </li>
             ))
           ) : (
             <p>No comments yet. Be the first to comment!</p>
           )}
         </ul>
      </div>
    </div>
  );
};

export default Comments;
