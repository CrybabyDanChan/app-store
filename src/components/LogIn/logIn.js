import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";

import compose from "../../compose";
import "./logIn.sass";
import validate from "../hoc/validate";
import * as Actions from "../../actions/logIn";

const LogIn = (props) => {
  const {
    regLoginError,
    regPasswordError,
    validateLogin,
    validatePassword,
    regPassword,
    regLogin,
    setRegLoginValue,
    setRegPasswordValue,
    setRegPasswordError,
    setRegLoginError
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
              className={generateInputClass(regLoginError, regLogin)}
              onChange={() => validateLogin(event, setRegLoginValue, setRegLoginError)}
              value={regLogin}
            ></input>
          </label>
          <label className="log-in-form__label log-in-form__label_indent">
            Password
            <input type="text"
              name="password"
              className={generateInputClass(regPasswordError, regPassword)}
              onChange={() => validatePassword(event, setRegPasswordValue, setRegPasswordError)}
              value = {regPassword}
            ></input>
          </label>
          <button type="submit" className="btn btn_center">log in</button>
        </form>
      </div>
    </div>
  );
};
LogIn.propTypes = {
  regLoginError: PropTypes.any,
  regPasswordError: PropTypes.any,
  validateLogin: PropTypes.func,
  validatePassword: PropTypes.func,
  regPassword: PropTypes.string,
  regLogin: PropTypes.string,
  setRegLoginValue: PropTypes.func,
  setRegPasswordValue: PropTypes.func,
  setRegPasswordError: PropTypes.func,
  setRegLoginError: PropTypes.func
};

const mapStateToProps = (state) => {
  return state.logIn;
};

export default compose(
  connect(mapStateToProps, Actions),
  validate
)(LogIn);
