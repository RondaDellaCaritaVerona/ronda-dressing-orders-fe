import React from 'react';

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    // Authentication logic here
    console.log('Logged in');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
