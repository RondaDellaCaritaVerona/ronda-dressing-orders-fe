import React, { useState } from 'react';
import { createOrder } from '../services/orderService';

const OrderCreatePage: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Create Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default OrderCreatePage;
