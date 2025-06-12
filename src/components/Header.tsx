import * as React from 'react';
import HamburgerMenu from './HamburgerMenu';
import logoronda from '../logo-ronda.svg';
import Button from '../components/Button';

const Header: React.FC = () => {
  return (
      <div style={styles.headerContainer} className="header-container">
        <div className="header-container-left">
          <img src={logoronda} alt="Guardaroba logo" className="ronda-logo" />
          <h1>{window.location.pathname === '/list' ? 'Lista Ordini' : 
             window.location.pathname === '/create' ? 'Crea Ordine' : 
             window.location.pathname === '/nuova-tessera' ? 'Nuova Tessera' :
             window.location.pathname === '/ricerca' ? 'Ricerca' :
             window.location.pathname === '/archivio' ? 'Archivio' :
             window.location.pathname === '/login' ? 'Login' : ' '}</h1>
        </div>
        <HamburgerMenu />
      </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  headerContainer: {
    padding: '20px',
  }
};

export default Header;
