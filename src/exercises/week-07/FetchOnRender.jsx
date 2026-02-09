import { useState, useEffect } from 'react';
import { getPosts } from './api';
import './Week07Styles.css';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
        console.error('Error in FetchOnRender:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      
      <div className="content">
        {loading ? (
          <div className="loading-state">Loading posts...</div>
        ) : error ? (
          <div className="error-state">
            <p>Error: {error}</p>
            <button 
              type="button" 
              onClick={() => window.location.reload()}
              className="button"
            >
              Try again
            </button>
          </div>
        ) : posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          <ul className="posts-list">
            {posts.map((post) => (
              <li key={post.id} className="post-item">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-body">{post.body}</p>
                <small className="post-meta">Post ID: {post.id} | User ID: {post.userId}</small>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}