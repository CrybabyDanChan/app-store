import React from "react";
import { Link } from "react-router-dom";

import "./welcomeToUser.sass";

const WelcomeToUser = () => {
  return (
    <div className="welcome-to-user">
      <div className="welcome-to-user__title">Hello, Robert!</div>
      <div className="welcome-to-user__wrapper">
        <Link to="/products" className="btn__link">
          <button className="btn">products</button>
        </Link>
        <Link to="/cart" className="btn__link">
          <button className="btn btn_left">cart</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeToUser;
