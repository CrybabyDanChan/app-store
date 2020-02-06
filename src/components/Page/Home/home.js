import React from "react";
import { Route, Switch } from "react-router-dom";

import "./home.sass";
import Auth from "../../Auth";

const Home = () => {
  return (
    <div className="home">
      <div className="home__wrapper">
        <Switch>
          <Route
            path="/home/auth"
            exact
            component = { Auth }
          />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
