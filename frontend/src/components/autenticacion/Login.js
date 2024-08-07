import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthTokens } from '../store/authSlice';
import axiosInstance from '../utils/axiosInstance';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('token/', { username, password });
      dispatch(setAuthTokens(response.data));
      axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.data.access;
    } catch (error) {
      console.error('Error de login:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;