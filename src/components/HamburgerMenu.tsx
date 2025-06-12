import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import ListIcon from '@mui/icons-material/List';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


type Anchor = 'top' | 'left' | 'bottom' | 'right';

const HamburgerMenu: React.FC = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const navigate = useNavigate();

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const menuItems = [
    { text: "Lista d'ordini", path: '/list' },
    { text: 'Nuovo ordine', path: '/create' },
    { text: 'Nuova tessera', path: '/nuova-tessera' },
    { text: 'Ricerca', path: '/ricerca' },
    { text: 'Archivio', path: '/archivio' },
    { text: 'Logout', path: '/logout' },
  ];

  const list = (anchor: Anchor) => (
    <Box
      sx={{ 
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        backgroundColor: 'var(--blue)',
        color: 'white',
        height: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100%'
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                backgroundColor:
                  item.text === "Lista d'ordini" ? 'var(--blue)' :
                  item.text === 'Nuovo ordine' ? 'var(--green)' :
                  item.text === 'Nuova tessera' ? 'var(--red)' :
                  item.text === 'Ricerca' ? 'var(--yellow)' :
                  'var(--white)',
                color:
                  item.text === 'Archivio' || item.text === 'Logout'
                    ? 'var(--blue)'
                    : 'white',
                border:
                  item.text === 'Archivio' || item.text === 'Logout'
                    ? '3px solid var(--blue)'
                    : 'none',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textTransform: 'none',
                gap: 2,
                borderRadius: '12px',
                m: 1,
                minHeight: '56px',
                '&:hover': {
                  backgroundColor:
                    item.text === "Lista d'ordini" ? '#007bb5' :
                    item.text === 'Nuovo ordine' ? '#009e60' :
                    item.text === 'Nuova tessera' ? '#c0392b' :
                    item.text === 'Ricerca' ? '#e6b800' :
                    'var(--light-gray)',
                },
              }}
            >
              {item.text === "Lista d'ordini" && (
                <ListIcon sx={{ fontSize: '2rem', color: 'white' }} />
              )}
              {item.text === 'Nuovo ordine' && (
                <AddIcon sx={{ fontSize: '2rem', color: 'white' }} />
              )}
              {item.text === 'Nuova tessera' && (
                <AddIcon sx={{ fontSize: '2rem', color: 'white' }} />
              )}
              {item.text === 'Ricerca' && (
                <SearchIcon sx={{ fontSize: '2rem', color: 'white' }} />
              )}
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: 'bold',
                  fontSize: '1.5rem',
                  color:
                    item.text === 'Archivio' || item.text === 'Logout'
                      ? 'var(--blue)'
                      : 'white',
                  fontFamily: "'Roboto Slab', serif",
                }}
                sx={{
                  m: 0,
                  flex: 'unset',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer('top', true)}
        sx={{ 
          color: 'white',
          '& .MuiSvgIcon-root': {
            fontSize: '2.5rem'  // Increase icon size
          }
        }}
      >
        <MenuIcon />
      </IconButton>
      
      {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default HamburgerMenu; 