import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ isLoggedInState, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isLoggedInState ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
