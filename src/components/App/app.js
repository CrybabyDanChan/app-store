import React, { Fragment } from "react";
import Normalize from "react-normalize";
import { Switch, Route, Redirect } from "react-router-dom";

import "./app.sass";
import Home from "../Page/Home";
import Products from "../Page/Products";
import Logotype from "../Logotype";
import Cart from "../Cart/cart";
import CreateProducts from "../createProduts";

function App () {
  return (
    <Fragment>
      <Normalize/>
      <div className = "app">
        <Logotype/>
        <Switch>
          <Route
            path="/home"
            exact
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
            exact
            render={() => {
              return <CreateProducts/>;
            }}/>
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
