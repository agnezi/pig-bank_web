import React from "react";

import { Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import history from "./Helpers/history";

import Register from "./views/register";
import Login from "./views/login";
import Dashboard from "./views/dashboard";
import NotFoundView from "./views/notFoundView";

const Routes = () => {
  return (
    <Router history={history}>
      <>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Dashboard} />
          <Route component={NotFoundView} />
        </Switch>
      </>
    </Router>
  );
};

export default Routes;
