import React from "react";

import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Main";
import Homeuser from "./components/Mainuser";
import Login from "./components/Login";
import signup from "./components/Singup";

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <ProtectedRoute
        exact
        path="/user"
        component={Homeuser}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={signup} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);
