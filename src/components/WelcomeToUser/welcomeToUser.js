import React from "react";
import { Link } from "react-router-dom";

import "./welcomeToUser.sass";
import Button from "../Button";

const WelcomeToUser = () => {
  return (
    <div className="welcome-to-user">
      <div className="welcome-to-user__title">Hello, Robert!</div>
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

export default WelcomeToUser;
