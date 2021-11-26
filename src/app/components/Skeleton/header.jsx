import React, { useState, useContext } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer  from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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
      </Toolbar>
      <Drawer  anchor="left" open={open} onClose={() => setOpen(false)}>
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