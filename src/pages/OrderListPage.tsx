import React, { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchFilter from '../components/SearchFilter';
import StatusFilter from '../components/StatusFilter';
import Header from '../components/Header';
import Button from '../components/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';


  const OrderListPage: React.FC = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

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

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div>
      <Header />
      <div className='page white-background'>
        <div className='page-container' style={styles.pageContainer}>
          
          <div className='button-container flex gap-20'>
            <Button onClick={handleCreate} text="Nuovo ordine" variant="green" icon={<AddIcon sx={{ fontSize: '1.5rem', color: 'white' }} />}/>
            <Button text="Nuova tessera" variant="red" icon={<AddIcon sx={{ fontSize: '1.5rem', color: 'white' }} />} /> 
            <Button onClick={handleOpen} text="Ricerca" variant="yellow" icon={<SearchIcon sx={{ fontSize: '1.5rem', color: 'white' }} />}/>
            
            <Modal open={modalOpen} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={modalStyle}>
              <div style={styles.searchCreateContainer}>
                <SearchFilter onSearch={handleSearch} />
              </div>
              </Box>
            </Modal>
          </div>
          
          <StatusFilter onSearch={handleSearch} />

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


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default OrderListPage;
