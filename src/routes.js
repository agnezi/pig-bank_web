import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./views/main";
import Login from "./views/login";
import MainMenu from "./components/MainMenu";

const Routes = () => (
  <BrowserRouter>
    <MainMenu />
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
