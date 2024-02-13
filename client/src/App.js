// App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import UploadImage from './components/UploadImage/UploadImage';
import { useAuth } from './AuthContext'; 

const App = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup />} />
      <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
      <Route
        path="/upload"
        element={user ? <UploadImage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default App;
