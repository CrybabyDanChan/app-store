/* eslint-disable react/display-name */

import React from "react";
import { connect } from "react-redux";

const validate = (Component) => {
  const validComponent = (props) => {
    const validateLogin = (event, setLogin, setErrorLogin) => {
      const loginValue = event.target.value;
      const regFromLogin = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$|^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i;
      const checkLogin = regFromLogin.test(loginValue);
      if (checkLogin) {
        setErrorLogin(!checkLogin);
      } else {
        setErrorLogin(!checkLogin);
      }
      setLogin(loginValue);
    };

    const validatePassword = (event, setPassword, setErrorPassword) => {
      const passwordValue = event.target.value;
      const regFromLogin = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i;
      const checkPassword = regFromLogin.test(passwordValue);
      if (checkPassword) {
        setErrorPassword(!checkPassword);
      } else {
        setErrorPassword(!checkPassword);
      }
      setPassword(passwordValue);
    };
    return (
      <Component {...props}
        validateLogin = { validateLogin }
        validatePassword = { validatePassword }
      ></Component>
    );
  };
  const mapStateToProps = (state) => {
    return state;
  };
  return connect(mapStateToProps)(validComponent);
};

export default validate;
