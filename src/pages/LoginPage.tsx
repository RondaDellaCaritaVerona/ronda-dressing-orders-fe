import React from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage: React.FC = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    // Authentication logic here
    console.log('Logged in');
    navigate('/list');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
