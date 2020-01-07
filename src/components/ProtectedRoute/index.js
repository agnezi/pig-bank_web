import React from "react";
import { Route, Redirect } from "react-router-dom";
import MainMenu from "../MainMenu";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <>
            <MainMenu />
            <Component {...props} />
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

ProtectedRoute.defaultProps = {
  location: {}
};

export default ProtectedRoute;
