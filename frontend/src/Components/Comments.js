import React, { useState, useEffect } from 'react';

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  // Load comments when component mounts
  useEffect(() => {
    fetch(`/api/comments/post/${postId}`)
      .then(res => res.json())
      .then(data => setComments(data))
      .catch(err => console.error('Error fetching comments:', err));
  }, [postId]);

  // Submit a new comment
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: commentText,
        author: 'Anonymous', // or a logged-in user
        postId: postId
      })
    })
      .then(res => res.json())
      .then(newComment => {
        setComments([...comments, newComment]); // Update comment list
        setCommentText(''); // Clear input
      })
      .catch(err => console.error('Error posting comment:', err));
  };

  return (
    <div>
      <h3>Comments</h3>

      <form onSubmit={handleSubmit}>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
          rows={3}
          style={{ width: '100%' }}
        ></textarea>
        <button type="submit">Post Comment</button>
      </form>

      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{comment.author}:</strong> {comment.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;