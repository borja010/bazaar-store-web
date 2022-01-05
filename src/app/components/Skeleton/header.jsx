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
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  margin: "auto"
}));

function Header() {
  const [open, setOpen] = useState(false);
  const [state] = useContext(Context);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => setOpen(true)}>
              <MenuIcon />
              <Typography variant="h6">
                {state.title}
              </Typography>
            </IconButton>
          </Grid>
          <Grid item xs={12} md={8} order={{ md: 1, xs: 2 }} sx={{ padding: { xs: 1, md: 0 } }}>
            <Search sx={{ width: { xs: "100%", md: "60%" } }}>
              <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs={6} sx={{ flexBasis: "auto" }}>
                  <InputBase
                    sx={{ ml: 1, color: "inherit" }}
                    placeholder="Buscar"
                    inputProps={{ 'aria-label': 'buscar' }}
                  />
                </Grid>
                <Grid item xs={6} sx={{ flexBasis: "auto" }}>
                  <IconButton
                    color="inherit"
                    aria-label="search"
                    component="span"

                  >
                    <SearchIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Search>
          </Grid>
          <Grid item xs={4} order={{ md: 2, xs: 1 }} sx={{ flexBasis: "auto" }}>
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