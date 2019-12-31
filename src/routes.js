import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from "./views/register";
import Login from "./views/login";
import Dashboard from "./views/dashboard";

const Routes = () => {
  console.log("Register", Register);
  console.log("Login", Login);
  console.log("Dashboard", Dashboard);
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Routes;
