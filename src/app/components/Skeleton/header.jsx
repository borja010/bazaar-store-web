import React, { useState, useContext } from "react";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';

import { Context } from "app/context/storeContext";

const menu = ["Página principal", "Contacto", "Productos"];

function Header() {
  const [open, setOpen] = useState(false);
  const [state] = useContext(Context);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          {state.title}
        </Typography>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar"
          inputProps={{ 'aria-label': 'buscar' }}
        />
        <IconButton color="inherit" type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="inherit" aria-label="cart" onClick={() => setOpen(true)}>
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          {
            menu.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))
          }
        </List>
      </Drawer >
    </AppBar>
  );
}

export default Header;