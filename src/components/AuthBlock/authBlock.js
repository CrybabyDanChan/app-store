import React from "react";
import { NavLink } from "react-router-dom";

import "./authBlock.sass";

const authBlock = () => {
  return (
    <div className="auth-block">
      <NavLink to="/home/log-in" className="auth-block__logIn"
        activeClassName="auth-block__is-active">
      Log In
      </NavLink>
      <span className="auth-block__line"></span>
      <NavLink to="/home/sign-in" className="auth-block__signIn"
        activeClassName="auth-block__is-active">
      Sign In
      </NavLink>
    </div>
  );
};

export default authBlock;
