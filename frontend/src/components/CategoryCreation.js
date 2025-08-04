import React, { useState } from 'react';
import axios from 'axios';

function CategoryCreation() {
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

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
      const response = await axios.post('/api/categories', formData);
      setMessage('카테고리가 성공적으로 생성되었습니다!');
      setIsSuccess(true);
      setFormData({ name: '', description: '' });
    } catch (error) {
      setMessage(error.response?.data || '카테고리 생성에 실패했습니다.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="card">
      <h2>카테고리 생성</h2>
      {message && (
        <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'}`}>
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">카테고리명 *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            minLength="1"
            maxLength="50"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">설명</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            maxLength="200"
            placeholder="카테고리에 대한 설명을 입력하세요 (선택사항)"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          카테고리 생성
        </button>
      </form>
    </div>
  );
}

export default CategoryCreation; 