import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "app/components/Skeleton/home/home";

function Main() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" component={Home} />
    </Switch>
  );
}

export default Main;
