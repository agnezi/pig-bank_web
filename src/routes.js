import React from "react";

import { Router, Switch, Route } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";

import history from "./Helpers/history";

import Header from "./components/Header";

import Register from "./views/register";
import Login from "./views/login";
import Dashboard from "./views/dashboard";
import Expenses from "./views/expenses";
import Laces from "./views/laces";
import NotFoundView from "./views/notFoundView";

const Routes = () => {
  return (
    <Router history={history}>
      <>
        <Header />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Dashboard} />
          <ProtectedRoute exact path="/expenses" component={Expenses} />
          <ProtectedRoute exact path="/laces" component={Laces} />
          <Route component={NotFoundView} />
        </Switch>
      </>
    </Router>
  );
};

export default Routes;
