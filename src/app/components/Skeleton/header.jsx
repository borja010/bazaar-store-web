import React, { useState, useContext } from "react";


import AppBar from '@mui/material/AppBar';
import Grid from "@mui/material/Grid";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled, alpha } from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Context } from "app/context/storeContext";

const menu = ["Página principal", "Contacto", "Productos"];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

function Header() {
  const [open, setOpen] = useState(false);
  const [state] = useContext(Context);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
          <MenuIcon />
          <Typography variant="h6">
            {state.title}
          </Typography>
        </IconButton>
        <Grid container direction="row" justifyContent="space-between">
        <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Search>
              <InputBase
                sx={{ ml: 1, color: "white" }}
                placeholder="Buscar"
                inputProps={{ 'aria-label': 'buscar' }}
              />
              <IconButton color="inherit" type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Search>
          </Grid>
          <Grid item xs={4}>
            <IconButton color="inherit" aria-label="cart" onClick={() => setOpen(true)}>
              <AccountCircleIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="cart" onClick={() => setOpen(true)}>
              <ShoppingCartIcon />
            </IconButton>
          </Grid>
        </Grid>
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
    </AppBar >
  );
}

export default Header;