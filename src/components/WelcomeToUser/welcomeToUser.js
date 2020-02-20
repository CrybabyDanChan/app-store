import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./welcomeToUser.sass";
import Button from "../Button";

const WelcomeToUser = (props) => {
  const { userName } = props;

  return (
    <div className="welcome-to-user">
      <div className="welcome-to-user__title">Hello, {userName}!</div>
      <div className="welcome-to-user__wrapper">
        <Link to="/products" className="btn__link">
          <Button text = {"products"}/>
        </Link>
        <Link to="/cart" className="btn__link">
          <Button text = {"cart"} additionalClass ={"btn_left"}/>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.authenticated;
};

export default connect(mapStateToProps)(WelcomeToUser);
