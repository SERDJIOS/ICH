import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from './components/Profile';
import Login from './components/Login';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Navigate to="/profile" /> : <Navigate to="/login" />}
      />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;