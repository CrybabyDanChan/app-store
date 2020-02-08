import React from "react";
import { Link } from "react-router-dom";

import "./welcomeToUser.sass";

const WelcomeToUser = () => {
  return (
    <div className="welcome-to-user">
      <div className="welcome-to-user__title">Hello, Robert!</div>
      <div className="welcome-to-user__wrapper">
        <button className="btn"><Link to="/products" className="btn__link">products</Link></button>
        <button className="btn btn_left">cart</button>
      </div>
    </div>
  );
};

export default WelcomeToUser;
