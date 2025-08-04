import React, { useState } from 'react';
import axios from 'axios';

function UserRegistration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
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
      const response = await axios.post('/api/users', formData);
      setMessage('사용자가 성공적으로 생성되었습니다!');
      setIsSuccess(true);
      setFormData({ username: '', email: '', password: '' });
    } catch (error) {
      setMessage(error.response?.data || '사용자 생성에 실패했습니다.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="card">
      <h2>사용자 등록</h2>
      {message && (
        <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'}`}>
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">사용자명 *</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            minLength="2"
            maxLength="50"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일 *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호 *</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          사용자 등록
        </button>
      </form>
    </div>
  );
}

export default UserRegistration; 