import React, { useState, useEffect } from 'react';
import './Comments.css';

const Comments = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState('');

  // Fetch comments from backend on component mount
    useEffect(() => {
      fetch(`http://localhost:8081/fetch/comments?articleId=${articleId}` )
        .then(res => res.json())
        .then(data => setComments(data))
        .catch(err => console.error("Error fetching comments:", err));
    }, [articleId]);
//add comment & send to backend
  const handleAddComment = () => {
      if (input.trim()) {
      //POST request to backend
      fetch(`http://localhost:8081/api/comments/add/comment`, {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: input, articleId: articleId }),
      })
      .then(res => res.json())
      .then(newComment => {
      setComments([...comments, newComment]);//add response from backend
      setInput('');
      })
     .catch(err => console.error("Error posting comment:", err));
     }
     };

     // })
               //setComments([...comments, input]); // Frontend-only update (for now)
              // setInput('');
            // }
       //  };
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
            <li key={i} className="comments-item"
            onClick={() => alert(`Comments clicked: ${c.text}`)}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            >
              {c.text}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default Comments;