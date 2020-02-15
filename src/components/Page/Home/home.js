import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./home.sass";
import SignIn from "../../SignIn";
import LogIn from "../../LogIn";
import WelcomeToUser from "../../WelcomeToUser/welcomeToUser";
import OutUser from "../../outUser";

const Home = ({ authenticated }) => {
  console.log(authenticated);
  return (
    <div className="home">
      <div className="home__wrapper">
        <Switch>
          <Route
            exact
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
          <Route
            exact
            path="/home/welcome"
            render={() => {
              return <WelcomeToUser/>;
            }}
          />
          <Route
            exact
            path="/home/out"
            render={() => {
              return <OutUser/>;
            }}
          />
          <Redirect to={authenticated ? "/home/welcome" : "/home/log-in"}/>
        </Switch>;
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
