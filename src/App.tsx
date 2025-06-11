import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
//import logo from './logo.svg';

const App: React.FC = () => (
  <BrowserRouter>
    {/* <img src={logo} alt="Logo" /> */}
    <AppRouter />
  </BrowserRouter>
);

export default App;
