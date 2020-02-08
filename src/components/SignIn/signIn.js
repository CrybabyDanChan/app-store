import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import compose from "../../compose";

import "./signIn.sass";
import validate from "../hoc/validate";
import * as Actions from "../../actions/signIn";

const SignIn = (props) => {
  const {
    loginError,
    passwordError,
    validateLogin,
    validatePassword,
    password,
    login,
    setLoginValue,
    setPasswordValue,
    setPasswordError,
    setLoginError
  } = props;

  console.log(props);
  const generateInputClass = (errorTypes, key) => {
    return classNames({
      "sign-in-form__input": key === "",
      "sign-in-form__input sign-in-form__input_success": !errorTypes && key !== "",
      "sign-in-form__input sign-in-form__input_error": errorTypes && key !== ""
    });
  };

  return (
    <div className="sign-in">
      <div className="sign-in-form">
        <h1 className="sign-in-form__title">Sign In</h1>
        <form className="sign-in-form__form" onSubmit={() => event.preventDefault()}>
          <label className="sign-in-form__label">
            Login / Email address
            <input type="text"
              name="login"
              className={generateInputClass(loginError, login)}
              onChange={() => validateLogin(event, setLoginValue, setLoginError)}
              value={login}
            ></input>
          </label>
          <label className="sign-in-form__label sign-in-form__label_indent">
            Password
            <input type="text"
              name="password"
              className={generateInputClass(passwordError, password)}
              onChange={() => validatePassword(event, setPasswordValue, setPasswordError)}
              value = {password}
            ></input>
          </label>
          <button type="submit" className="btn">sign in</button>
        </form>
      </div>
    </div>
  );
};
SignIn.propTypes = {
  loginError: PropTypes.any,
  passwordError: PropTypes.any,
  validateLogin: PropTypes.func,
  validatePassword: PropTypes.func,
  password: PropTypes.string,
  login: PropTypes.string,
  setLoginValue: PropTypes.func,
  setPasswordValue: PropTypes.func,
  setPasswordError: PropTypes.func,
  setLoginError: PropTypes.func
};

const mapStateToProps = (state) => {
  return state.signIn;
};

export default compose(
  connect(mapStateToProps, Actions),
  validate
)(SignIn);
