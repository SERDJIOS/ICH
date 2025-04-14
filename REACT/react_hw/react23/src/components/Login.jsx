import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', 'your-auth-token');
    dispatch(login({ username }));
    navigate('/profile');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Авторизация</h1>
      <input
        type="text"
        placeholder="Введите имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ margin: '10px', padding: '5px' }}
      />
      <br />
      <button
        onClick={handleLogin}
        style={{
          padding: '10px 20px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;