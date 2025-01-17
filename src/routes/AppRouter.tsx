import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/LoginPage';
import OrderListPage from '../pages/OrderListPage';
import OrderCreatePage from '../pages/OrderCreatePage';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/list" element={<OrderListPage />} />
    <Route path="/create" element={<OrderCreatePage />} />
  </Routes>
);

export default AppRouter;
