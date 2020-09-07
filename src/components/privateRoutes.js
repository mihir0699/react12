import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../context/authContext";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated} = authContext;
  return (
    <Route
    {...rest}
    render={props =>
      !isAuthenticated ? (
        <Redirect to='/' />
      ) : (
        <Component {...props} />
      )
    }
  />
  );
};

export default PrivateRoutes;
