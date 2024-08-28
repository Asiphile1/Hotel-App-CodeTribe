import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const Navbar = () => {
  const [roomsAnchorEl, setRoomsAnchorEl] = React.useState(null);
  const [hotelAnchorEl, setHotelAnchorEl] = React.useState(null);
  const [templateAnchorEl, setTemplateAnchorEl] = React.useState(null);

  const handleMenuOpen = (event, setAnchorEl) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (setAnchorEl) => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#2d2d2d' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <span style={{ fontWeight: 'bold' }}>LE' BEL MO</span> 
          <span style={{ marginLeft: '10px', color: '#bbb' }}>ekhaya</span>
        </Typography>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
          <Button 
            color="inherit" 
            onClick={(e) => handleMenuOpen(e, setRoomsAnchorEl)}>
            Rooms
          </Button>
          <Menu
            anchorEl={roomsAnchorEl}
            open={Boolean(roomsAnchorEl)}
            onClose={() => handleMenuClose(setRoomsAnchorEl)}
          >
            <MenuItem onClick={() => handleMenuClose(setRoomsAnchorEl)}>Deluxe</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setRoomsAnchorEl)}>Suite</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setRoomsAnchorEl)}>Single</MenuItem>
          </Menu>

          <Button 
            color="inherit" 
            onClick={(e) => handleMenuOpen(e, setHotelAnchorEl)}>
            Hotel
          </Button>
          <Menu
            anchorEl={hotelAnchorEl}
            open={Boolean(hotelAnchorEl)}
            onClose={() => handleMenuClose(setHotelAnchorEl)}
          >
            <MenuItem onClick={() => handleMenuClose(setHotelAnchorEl)}>About Us</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setHotelAnchorEl)}>Amenities</MenuItem>
          </Menu>

          <Button 
            color="inherit" 
            onClick={(e) => handleMenuOpen(e, setTemplateAnchorEl)}>
            Visuals
          </Button>
          <Menu
            anchorEl={templateAnchorEl}
            open={Boolean(templateAnchorEl)}
            onClose={() => handleMenuClose(setTemplateAnchorEl)}
          >
            <MenuItem onClick={() => handleMenuClose(setTemplateAnchorEl)}>Gallery</MenuItem>
            <MenuItem onClick={() => handleMenuClose(setTemplateAnchorEl)}>Blog</MenuItem>
          </Menu>

          <Button color="inherit">Overview</Button>
          <Button color="inherit">Contact</Button>
        </Box>

        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#d3b8b8', color: 'white', ml: 2 }}>
          Booking
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
