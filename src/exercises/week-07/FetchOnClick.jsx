import { useState } from 'react';
import { getSinglePost } from './api';
import './Week07Styles.css';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    try {
      setLoading(true);
      setError(null);
      // Hardcoding the postId to 1 here, but it could be modified to allow dynamic input
      const data = await getSinglePost(1);
      setPost(data);
    } catch (err) {
      setError(err.message);
      console.error('Error in FetchOnClick:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      
      <button 
        type="button" 
        onClick={handleClick}
        disabled={loading}
        className="button"
      >
        {loading ? 'Loading...' : 'Get post'}
      </button>
      
      <div className="content">
        {loading ? (
          <div className="loading-state">Loading post...</div>
        ) : error ? (
          <div className="error-state">
            <p>Error: {error}</p>
            <button 
              type="button" 
              onClick={handleClick}
              className="button"
            >
              Try again
            </button>
          </div>
        ) : post ? (
          <div className="post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <small className="post-meta">Post ID: {post.id} | User ID: {post.userId}</small>
          </div>
        ) : (
          <p>
            Click the <code>Get post</code> button to fetch a post
          </p>
        )}
      </div>
    </div>
  );
}