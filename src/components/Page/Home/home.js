import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./home.sass";
import SignIn from "../../SignIn";
import LogIn from "../../LogIn";
import WelcomeToUser from "../../WelcomeToUser/welcomeToUser";

const Home = ({ authenticated }) => {
  const linksForNotAuth = <Switch>
    <Route
      path="/home/sign-in"
      render={() => {
        return <SignIn/>;
      }}
    />
    <Route
      exact
      path="/home/log-in"
      render={() => {
        return <LogIn />;
      }}
    />
  </Switch>;

  const viewBlock = authenticated ? <WelcomeToUser/> : linksForNotAuth;

  return (
    <div className="home">
      <div className="home__wrapper">
        { viewBlock }
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
