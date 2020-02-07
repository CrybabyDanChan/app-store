import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import compose from "../../compose";

import "./auth.sass";
import validate from "../hoc/validate";

const Auth = (props) => {
  const {
    loginError,
    passwordError,
    validateLogin,
    validatePassword,
    password,
    login
  } = props;

  const generateInputClass = (errorTypes, key) => {
    return classNames({
      "auth-form__input": key === "",
      "auth-form__input auth-form__input_success": !errorTypes && key !== "",
      "auth-form__input auth-form__input_error": errorTypes && key !== ""
    });
  };

  return (
    <div className="auth">
      <div className="auth-form">
        <h1 className="auth-form__title">Sign In</h1>
        <form className="auth-form__form" onSubmit={() => event.preventDefault()}>
          <label className="auth-form__label">
            Login / Email address
            <input type="text"
              name="login"
              className={generateInputClass(loginError, login)}
              onChange={validateLogin}
              value={login}
            ></input>
          </label>
          <label className="auth-form__label auth-form__label_indent">
            Password
            <input type="text"
              name="password"
              className={generateInputClass(passwordError, password)}
              onChange={validatePassword}
              value = {password}
            ></input>
          </label>
          <button type="submit" className="auth-form__btn">sign in</button>
        </form>
      </div>
    </div>
  );
};

Auth.propTypes = {
  loginError: PropTypes.any,
  passwordError: PropTypes.any,
  validateLogin: PropTypes.func,
  validatePassword: PropTypes.func,
  password: PropTypes.string,
  login: PropTypes.string
};

const mapStateToProps = (state) => {
  return state;
};

export default compose(
  connect(mapStateToProps),
  validate
)(Auth);
