import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/authSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Добро пожаловать в профиль</h1>
      <button
        onClick={handleLogout}
        style={{
          padding: '10px 20px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;