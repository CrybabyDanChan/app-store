import React, { Fragment } from "react";
import Normalize from "react-normalize";
import { Switch, Route, Redirect } from "react-router-dom";

import "./app.sass";
import Home from "../Page/Home";
import Logotype from "../Logotype";
import Products from "../Page/Products/products";

function App () {
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
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
