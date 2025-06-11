import React, { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchFilter from '../components/SearchFilter';
import Header from '../components/Header';
import Button from '../components/Button';

const OrderListPage: React.FC = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const orders = useMemo(() => [  
    { orderId: 1, customerName: 'John Doe', clothes: ['Giacca', 'Jeans'], orderState: 'Da preparare' },
    { orderId: 2, customerName: 'Jane Smith', clothes: ['Maglietta', 'Scarpe'], orderState: 'Consegnato' },
    { orderId: 3, customerName: 'Samuel Green', clothes: ['Giacca'], orderState: 'Reso' },
    { orderId: 4, customerName: 'Linda White', clothes: ['Scarpe'], orderState: 'A scaffale' },
  ], []);

  // State for keyword and state filter
  const [filters, setFilters] = useState({ keyword: '', state: 'All' });

  // Memoize the filtered orders based on filters
  const filteredOrders = useMemo(() => {
    const { keyword, state } = filters;
    return orders.filter((order) => {
      const stateMatch = state === 'All' || order.orderState === state;
      const keywordMatch =
        order.customerName.toLowerCase().includes(keyword.toLowerCase()) ||
        order.orderId.toString().includes(keyword);

      return stateMatch && keywordMatch;
    });
  }, [orders, filters]); // Recalculate only when orders or filters change

  const handleCreate = () => {
    console.log('Create');
    navigate('/create');
  };

  // Memoize handleSearch function to avoid unnecessary re-renders
  const handleSearch = useCallback((newFilters: { keyword: string; state: string }) => {
    setFilters(newFilters);
  }, []); // Only recreate the function once

  return (
    <div>
      <Header />
      <div className='page white-background'>
        <div className='page-container' style={styles.pageContainer}>
          
          <button onClick={handleCreate}>Crea Ordine</button>
          <Button text="Blue button" variant="blue" onClick={() => alert('Button clicked!')} />
          <Button text="Yellow button" variant="yellow" onClick={() => alert('Button clicked!')} />
          <Button text="Green button" variant="green" onClick={() => alert('Button clicked!')} />
          <Button text="Red button" variant="red" onClick={() => alert('Button clicked!')} />
      

          <div style={styles.searchCreateContainer}>
            <SearchFilter onSearch={handleSearch} />
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
                {filteredOrders.map((order) => (
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
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  pageContainer: {
    padding: '0px',
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
