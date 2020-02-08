import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./home.sass";
import SignIn from "../../SignIn";
import LogIn from "../../LogIn";

const Home = ({ authenticated }) => {
  const linksForNotAuth = <Switch>
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
  </Switch>;

  return (
    <div className="home">
      <div className="home__wrapper">
        { linksForNotAuth }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.authenticated;
};

Home.propTypes = {
  authenticated: PropTypes.bool
};

export default connect(mapStateToProps, undefined, undefined, { pure: false })(Home);
