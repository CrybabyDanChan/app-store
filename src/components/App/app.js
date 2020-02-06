import React, { Fragment } from "react";
import Normalize from "react-normalize";
import { Switch, Route, Redirect } from "react-router-dom";

import "./app.sass";
import Home from "../Page/Home";

function App () {
  return (
    <Fragment>
      <Normalize/>
      <div className = "app">
        <Switch>
          <Route
            path="/home"
            render = { () => {
              return <Home/>;
            }}
          />
          <Redirect from='/' to='/home'/>
        </Switch>
      </div>
    </Fragment>
  );
}

export default App;
