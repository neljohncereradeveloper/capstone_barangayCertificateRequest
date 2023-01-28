import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isLoggedInState, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isLoggedInState ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};
export default PublicRoute;
