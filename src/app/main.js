import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "app/components/Skeleton/home";
import Item from "app/components/Store/item";
import Store from "app/components/Store/store";
import NotFound from "app/components/Skeleton/notFound";

function Main() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/item/:id" component={Item} />
      <Route path="/store" component={Store} />
      <Route component={NotFound}></Route>
    </Switch>
  );
}

export default Main;
