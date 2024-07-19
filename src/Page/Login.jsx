import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState({ top: '', bottom: '' });
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username === '') {
      alert('Username must be filled out');
      return;
    }

    if (password === '') {
      alert('Password must be filled out');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/api/log/login?username=${username}&password=${password}`,
        {},
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      const data = response.data;
      if (data && data.username && data.role) {
        localStorage.setItem('storedRole', data.role);
        localStorage.setItem('username', data.username);
        setSuccessMessage({top: 'Login successful!' });
        console.log('Login successful!');

        setTimeout(() => {
          if (data.role === 'admin') {
            navigate('/Main/Home');
          } else if (data.role === 'doctor') {
            navigate('/layout/Home2');
          } else {
            navigate('/layout/Home2'); // Default redirection for other roles
          }
        }, 2000);
      } else {
        throw new Error('Invalid login data');
      }
    } catch (error) {
      setError('Invalid username or password. Please try again.');
      console.error('Login error:', error);
    }
  };

  useEffect(() => {
    if (location.pathname === '/') {
      localStorage.removeItem('username');
      localStorage.removeItem('storedRole');
    }
  }, [location]);

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="login-form">
      {successMessage.top && (
        <div className='alert alert-success alert-success-top-right' role='alert'>
          <div>{successMessage.top}</div>
          <div>{successMessage.bottom}</div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="image-container">
          <img src="doctor3.png" alt="Avatar" className="avatar" />
        </div>
        <div className="form-container">
          <div className="input-group">
            <div className="Login_title"><strong>Login</strong></div>
            <label htmlFor="username"><b>Username</b></label>
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              className="input-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="input-userPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-red-500">{error}</div>}
          <button type="submit" className="login-button">Login</button>
          <div className="checkbox-container">
            <label>
              <input type="checkbox" name="rememberMe"/> Remember me
            </label>
          </div>
        </div>
        <div className="password-reset">
          Forgot <a href="forgot" className="link-password">password?</a>
          <Link to="patient_account" className="link-info">New Patient?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
