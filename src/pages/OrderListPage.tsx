import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../services/orderService';
import SearchFilter from '../components/SearchFilter';

const OrderListPage: React.FC = () => {
  const [items, setItems] = useState([]);


  return (
    <div>
      <h1>List Page</h1>
      <SearchFilter onSearch={(filters) => console.log(filters)} />
    </div>
  );
};

export default OrderListPage;
