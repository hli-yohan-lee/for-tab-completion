import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostCreation() {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    userId: '',
    categoryId: ''
  });
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, categoriesResponse] = await Promise.all([
          axios.get('/api/users'),
          axios.get('/api/categories')
        ]);
        setUsers(usersResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('데이터 로딩 실패:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsSuccess(false);

    try {
      const response = await axios.post('/api/posts', formData);
      setMessage('게시글이 성공적으로 작성되었습니다!');
      setIsSuccess(true);
      setFormData({ title: '', content: '', userId: '', categoryId: '' });
    } catch (error) {
      setMessage(error.response?.data || '게시글 작성에 실패했습니다.');
      setIsSuccess(false);
    }
  };

  if (loading) {
    return (
      <div className="card">
        <h2>게시글 작성</h2>
        <p>데이터를 로딩 중입니다...</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>게시글 작성</h2>
      {message && (
        <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'}`}>
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">제목 *</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            minLength="1"
            maxLength="200"
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용 *</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            placeholder="게시글 내용을 입력하세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userId">작성자 *</label>
          <select
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          >
            <option value="">작성자를 선택하세요</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>
                {user.username} ({user.email})
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="categoryId">카테고리 *</label>
          <select
            id="categoryId"
            name="categoryId"
            value={formData.categoryId}
            onChange={handleChange}
            required
          >
            <option value="">카테고리를 선택하세요</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          게시글 작성
        </button>
      </form>
    </div>
  );
}

export default PostCreation; 