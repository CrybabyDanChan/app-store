import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";

import compose from "../../compose";
import "./logIn.sass";
import validate from "../hoc/validate";

const LogIn = (props) => {
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
      "log-in-form__input": key === "",
      "log-in-form__input log-in-form__input_success": !errorTypes && key !== "",
      "log-in-form__input log-in-form__input_error": errorTypes && key !== ""
    });
  };

  return (
    <div className="log-in">
      <div className="log-in-form">
        <h1 className="log-in-form__title">Log In</h1>
        <form className="log-in-form__form" onSubmit={() => event.preventDefault()}>
          <label className="log-in-form__label">
            Login / Email address
            <input type="text"
              name="login"
              className={generateInputClass(loginError, login)}
              onChange={validateLogin}
              value={login}
            ></input>
          </label>
          <label className="log-in-form__label log-in-form__label_indent">
            Password
            <input type="text"
              name="password"
              className={generateInputClass(passwordError, password)}
              onChange={validatePassword}
              value = {password}
            ></input>
          </label>
          <button type="submit" className="log-in-form__btn">log in</button>
        </form>
      </div>
    </div>
  );
};
LogIn.propTypes = {
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
)(LogIn);
