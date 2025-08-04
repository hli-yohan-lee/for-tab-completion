import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/posts');
        setPosts(response.data);
      } catch (error) {
        setError('게시글을 불러오는데 실패했습니다.');
        console.error('게시글 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('ko-KR');
  };

  if (loading) {
    return (
      <div className="card">
        <h2>게시글 목록</h2>
        <p>게시글을 로딩 중입니다...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <h2>게시글 목록</h2>
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>게시글 목록</h2>
      {posts.length === 0 ? (
        <p>아직 작성된 게시글이 없습니다.</p>
      ) : (
        <div className="post-list">
          {posts.map(post => (
            <div key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <div className="post-meta">
                <strong>작성자:</strong> {post.username} | 
                <strong>카테고리:</strong> {post.categoryName} | 
                <strong>작성일:</strong> {formatDate(post.createdAt)}
                {post.updatedAt !== post.createdAt && (
                  <span> | <strong>수정일:</strong> {formatDate(post.updatedAt)}</span>
                )}
              </div>
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {post.content.length > 200 
                  ? post.content.substring(0, 200) + '...' 
                  : post.content
                }
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList; 