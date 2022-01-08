import React, { useState, useContext, useRef } from "react";

import { Link as RouterLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Grid from "@mui/material/Grid";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import InputBase from '@mui/material/InputBase';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';

import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';


import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

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

  const [clickCount, setClickCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [state] = useContext(Context);
  const [anchorEl, setAnchorEl] = useState(null);
  const [accountOpen, setAccountOpen] = useState(false);

  const stringToColor = (string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 30,
        height: 30,
        fontSize: "1rem"
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  const handleOpen = (e) => {
    setAccountOpen(true);
    setAnchorEl(e.currentTarget);
  };


  const handleClose = () => {
    setAccountOpen(false);
    setAnchorEl(null);
  }

  const handleClick = (e) => {
    if (accountOpen && clickCount === 1) {
      setClickCount(clickCount - 1);
      handleClose();
    } else if (clickCount === 0) {
      setClickCount(clickCount + 1);
      handleOpen(e);
    }
  }


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
                <Grid item xs={11}>
                  <InputBase
                    sx={{ ml: 1, color: "inherit" }}
                    placeholder="Buscar"
                    inputProps={{ 'aria-label': 'buscar' }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={1}>
                  <IconButton
                    color="inherit"
                    aria-label="search"
                    component="span"
                    sx={{ p: 0 }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Search>
          </Grid>
          <Grid item xs={12} order={{ md: 2, xs: 1 }} sx={{ flexBasis: "auto" }}>
            {/* <IconButton
              color="inherit"
              aria-label="cart"
            >
              <AccountCircleIcon />
            </IconButton> */}
            <IconButton
              color="inherit"
              aria-label="cart"
              component={RouterLink}
              to="/region"
            >
              <LanguageIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="cart"
              component={RouterLink}
              to="/notifications"
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="cart"
              onMouseEnter={handleOpen}
              onMouseLeave={handleClose}
              onClick={handleClick}
            >
              <Avatar
                {...stringAvatar('Borja Tobar')}
              />
              <AccountMenu
                anchorEl={anchorEl}
                open={accountOpen}
              />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="cart"
              component={RouterLink}
              to="/cart"
            >
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

function AccountMenu(props) {

  const id = props.open ? 'transition-popper' : undefined;

  return (
    <Popper
      id={id}
      autoFocus
      open={props.open}
      anchorEl={props.anchorEl}
      style={{
        zIndex: 5
      }}
      placement="bottom-start"
    >
      <Paper
        sx={{
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          borderRadius: "4px",
          boxShadow: "none",
          marginTop: "-2%",
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        }}
      >
        <MenuList>
          <MenuItem>
            <AccountCircleIcon />
            <ListItemText sx={{ paddingLeft: "10px" }} primary="My profile" />
          </MenuItem>
          <MenuItem>
            <LocalShippingIcon />
            <ListItemText sx={{ paddingLeft: "10px" }} primary="My purchases" />
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </MenuList>
      </Paper>
    </Popper>
  );
}

export default Header;