import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserRegistration from './components/UserRegistration';
import CategoryCreation from './components/CategoryCreation';
import PostCreation from './components/PostCreation';
import PostList from './components/PostList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="container">
            <h1 style={{ color: 'white', margin: 0 }}>Simple Blog</h1>
            <div>
              <Link to="/">홈</Link>
              <Link to="/register">계정 생성</Link>
              <Link to="/category">카테고리 생성</Link>
              <Link to="/post">게시글 작성</Link>
              <Link to="/posts">게시글 목록</Link>
            </div>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<UserRegistration />} />
            <Route path="/category" element={<CategoryCreation />} />
            <Route path="/post" element={<PostCreation />} />
            <Route path="/posts" element={<PostList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="card">
      <h2>Simple Blog에 오신 것을 환영합니다!</h2>
      <p>이 애플리케이션은 다음과 같은 기능을 제공합니다:</p>
      <ul>
        <li><strong>계정 생성:</strong> 새로운 사용자 계정을 생성할 수 있습니다.</li>
        <li><strong>카테고리 생성:</strong> 게시글을 분류할 카테고리를 생성할 수 있습니다.</li>
        <li><strong>게시글 작성:</strong> 사용자와 카테고리를 선택하여 게시글을 작성할 수 있습니다.</li>
        <li><strong>게시글 목록:</strong> 작성된 모든 게시글을 확인할 수 있습니다.</li>
      </ul>
      <p>위의 메뉴를 사용하여 각 기능을 이용해보세요!</p>
    </div>
  );
}

export default App; 