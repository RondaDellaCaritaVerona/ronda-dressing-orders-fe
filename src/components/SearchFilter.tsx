import React, { useState, useEffect } from 'react';

interface SearchFilterProps {
  onSearch: (filters: { keyword: string; state: string }) => void;
}

const orderStates = ['All', 'Da preparare', 'Consegnato', 'A scaffale', 'Reso']; 

const SearchFilter: React.FC<SearchFilterProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [state, setState] = useState('All');
  const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);

  // Debouncing logic for keyword input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 200); 
    return () => clearTimeout(timer); // Cleanup on every input change
  }, [keyword]);

  // Call onSearch whenever keyword or state changes
  useEffect(() => {
    onSearch({ keyword: debouncedKeyword, state });
  }, [debouncedKeyword, state, onSearch]);

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search by ID, name, etc..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)} // Update keyword state on each change
        style={styles.input}
      />

      <select
        value={state}
        onChange={(e) => setState(e.target.value)} // Update state on each change
        style={styles.select}
      >
        {orderStates.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'center', 
    gap: '10px', 
    padding: '10px',
    maxWidth: '100%', 
    flexWrap: 'wrap', 
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    flex: '1', 
    minWidth: '150px', 
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    minWidth: '120px', 
    appearance: 'none', 
    cursor: 'pointer', 
    flexShrink: 0, 
  },
};

export default SearchFilter;
