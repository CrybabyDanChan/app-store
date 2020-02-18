import React, { Fragment, useEffect } from "react";
import Normalize from "react-normalize";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./app.sass";
import Home from "../Page/Home";
import Products from "../Page/Products";
import Logotype from "../Logotype";
import Cart from "../Cart/cart";
import CreateProducts from "../createProduts";
import * as authenticatedActions from "../../actions/authenticatedActions";

function App (props) {
  const { logAuth } = props;

  useEffect(() => {
    logAuth();
  }, []);

  return (
    <Fragment>
      <Normalize/>
      <div className = "app">
        <Logotype/>
        <Switch>
          <Route
            path="/home"
            render = { () => {
              return <Home/>;
            }}/>
          <Route
            path="/products"
            render = { () => {
              return <Products/>;
            }}/>
          <Route
            path="/cart"
            render = { () => {
              return <Cart/>;
            }}/>
          <Route
            path="/create-products"
            render={() => {
              return <CreateProducts/>;
            }}/>
          <Redirect from='/' to="/home"/>
        </Switch>
      </div>
    </Fragment>
  );
}

App.propTypes = {
  logAuth: PropTypes.func
};

export default connect(undefined, authenticatedActions, undefined, { pure: false })(App);
