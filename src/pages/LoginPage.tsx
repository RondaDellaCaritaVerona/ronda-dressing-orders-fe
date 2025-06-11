import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import logoronda from '../logo-ronda.svg';
import HamburgerMenu from '../components/HamburgerMenu';
import Header from '../components/Header';



const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Authentication logic here
    console.log('Logged in');
    navigate('/list');
  };

  return (
    <div>
      <Header />
      <div className='page-container blue-background login-page'>
        <h1>Guardaroba login</h1>
        <form className="flex-column gap-20" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="blue-outline" type="submit" onClick={handleLogin}>Login</button>
        </form>
      
      
      {/* <Button text="Blue button" variant="blue" onClick={() => alert('Button clicked!')} />
      <Button text="Yellow button" variant="yellow" onClick={() => alert('Button clicked!')} />
      <Button text="Green button" variant="green" onClick={() => alert('Button clicked!')} />
      <Button text="Red button" variant="red" onClick={() => alert('Button clicked!')} /> */}
      </div>
    </div>
  );
};

export default LoginPage;
