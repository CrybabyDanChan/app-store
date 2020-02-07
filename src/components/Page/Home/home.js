import React from "react";
import { Route, Switch } from "react-router-dom";

import "./home.sass";
import SignIn from "../../SignIn";
import LogIn from "../../LogIn";

const Home = () => {
  return (
    <div className="home">
      <div className="home__wrapper">
        <Switch>
          <Route
            path="/home/sign-in"
            exact
            component = { SignIn }
          />
          <Route
            path="/home/log-in"
            exact
            component = { LogIn }
          />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
