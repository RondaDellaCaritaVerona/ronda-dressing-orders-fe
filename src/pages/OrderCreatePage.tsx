import React, { useState } from 'react';
import { createOrder } from '../services/orderService';
import Header from '../components/Header';

const OrderCreatePage: React.FC = () => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <div className='page white-background'>
        <div className='page-container' style={styles.pageContainer}>
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
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    padding: '0px',
  },
};

export default OrderCreatePage;
