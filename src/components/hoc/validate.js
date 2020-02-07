/* eslint-disable react/display-name */

import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../actions/index";
import PropTypes from "prop-types";

const validate = (Component) => {
  const validComponent = (props) => {
    const {
      setLoginValue,
      setPasswordValue,
      setPasswordError,
      setLoginError
    } = props;
    const validateLogin = (event) => {
      const loginValue = event.target.value;
      const regFromLogin = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$|^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i;
      const checkLogin = regFromLogin.test(loginValue);
      if (checkLogin) {
        setLoginError(!checkLogin);
      } else {
        setLoginError(!checkLogin);
      }
      setLoginValue(loginValue);
    };

    const validatePassword = (event) => {
      const passwordValue = event.target.value;
      const regFromLogin = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i;
      const checkPassword = regFromLogin.test(passwordValue);
      if (checkPassword) {
        setPasswordError(!checkPassword);
      } else {
        setPasswordError(!checkPassword);
      }
      setPasswordValue(passwordValue);
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
  validComponent.propTypes = {
    setLoginValue: PropTypes.func,
    setPasswordValue: PropTypes.func,
    setPasswordError: PropTypes.func,
    setLoginError: PropTypes.func
  };
  return connect(mapStateToProps, Actions)(validComponent);
};

export default validate;
