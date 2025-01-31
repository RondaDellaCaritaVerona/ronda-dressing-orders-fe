import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../services/orderService';
import SearchFilter from '../components/SearchFilter';
import { useNavigate } from 'react-router-dom';

const OrderListPage: React.FC = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const orders = [
    { orderId: 1, customerName: 'John Doe', clothes: ['Giacca', 'Jeans'], orderState: 'Da preparare' },
    { orderId: 2, customerName: 'Jane Smith', clothes: ['Maglietta', 'Scarpe'], orderState: 'Consegnato' },
    { orderId: 3, customerName: 'Samuel Green', clothes: ['Giacca'], orderState: 'Reso' },
    { orderId: 4, customerName: 'Linda White', clothes: ['Scarpe'], orderState: 'A scaffale' },
  ];


  const handleCreate = () => {
    console.log('Create');
    navigate('/create');
  };

  useEffect(() => {
    // TODO Fetch orders
  },  []);


  return (
    <div>
      <h1>Lista Ordini</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>

      <SearchFilter onSearch={(filters) => console.log(filters)} />
      <button onClick={handleCreate}>Crea Ordine</button>
      </div>
      <div style={{ overflowX: 'auto' }}>
      <table border={1} cellPadding={10} cellSpacing={0} style={{ width: '100%', tableLayout: 'fixed' }}>
      <thead>
          <tr>
            <th>Numero</th>
            <th>Ospite</th>
            <th>Oggetti</th>
            <th>Stato</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.customerName}</td>
              <td>{order.clothes.join(', ')}</td> 
              <td>{order.orderState}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default OrderListPage;
