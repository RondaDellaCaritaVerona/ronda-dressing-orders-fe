import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchFilter from '../components/SearchFilter';

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
  }, []);



  return (
    <div style={styles.pageContainer}>
      <h1>Lista Ordini</h1>
      <div style={styles.searchCreateContainer}>
        <SearchFilter onSearch={(filters) => console.log(filters)} />
        <button onClick={handleCreate}>Crea Ordine</button>
      </div>
      <div style={styles.tableContainer}>
        <table style={styles.table} border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th style={styles.th}>Numero</th>
              <th style={styles.th}>Ospite</th>
              <th style={styles.th}>Oggetti</th>
              <th style={styles.th}>Stato</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td style={styles.thTd}>{order.orderId}</td>
                <td style={styles.thTd}>{order.customerName}</td>
                <td style={styles.thTd}>{order.clothes.join(', ')}</td>
                <td style={styles.thTd}>{order.orderState}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    padding: '20px',
  },
  searchCreateContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  tableContainer: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
  },
  thTd: {
    padding: '10px',
    textAlign: 'left',
  },
  th: {
    backgroundColor: '#f4f4f4',
  },
};

export default OrderListPage;
