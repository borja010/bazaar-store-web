import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "app/components/Skeleton/home";
import Item from "app/components/Store/itemStore";
import Store from "app/components/Store/store";
import NotFound from "app/components/Skeleton/notFound";
import Cart from "app/components/Cart/cart";
import Profile from "app/components/Account/profile";
import Purchase from "app/components/Account/purchase";
import Notifications from "app/components/Account/notifications";
import Region from "app/components/Account/region";

function Main() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/item/:id" component={Item} />
      <Route path="/store" component={Store} />
      <Route path="/cart" component={Cart} />
      <Route path="/profile" component={Profile} />
      <Route path="/purchase" component={Purchase} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/region" component={Region} />
      <Route component={NotFound}></Route>
    </Switch>
  );
}

export default Main;
