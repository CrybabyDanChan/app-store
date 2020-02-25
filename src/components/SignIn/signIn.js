import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import compose from "../../compose";
import { withRouter } from "react-router-dom";

import "./signIn.sass";
import * as signInActions from "../../actions/signInActions";
import Button from "../Button";
import { regExForLogin, regExForPassword } from "../../utils/regularExpresion";

const SignIn = (props) => {
  const {
    setRegLoginValue,
    setRegPasswordValue,
    regUser,
    auth,
    history
  } = props;

  const [{ loginValue, passwordValue, loginError, passwordError }, setFormValue] = useState({
    loginValue: "",
    passwordValue: "",
    loginError: false,
    passwordError: false
  });

  useEffect(() => {
    if (auth) {
      history.push("/home/welcome");
    }
  });

  const validateLogin = (value) => {
    const regEx = regExForLogin;
    const checkLogin = regEx.test(value);
    return checkLogin;
  };

  const validatePassword = (value) => {
    const regEx = regExForPassword;
    const checkPassword = regEx.test(value);
    return checkPassword;
  };

  const generateInputClass = (errorTypes, key) => {
    return classNames({
      "sign-in-form__input": key === "",
      "sign-in-form__input sign-in-form__input_success": !errorTypes && key !== "",
      "sign-in-form__input sign-in-form__input_error": errorTypes && key !== ""
    });
  };

  const generateBtn = !(!passwordError && !loginError && loginValue !== "" && passwordValue !== "");

  const registrationOfUsers = () => {
    regUser();
    setFormValue({
      loginValue: "",
      passwordValue: "",
      loginError: false,
      passwordError: false
    });
  };

  const handleChangeLogin = (event) => {
    const logValue = event.target.value;
    const validate = validateLogin(loginValue);
    setFormValue(state => {
      return {
        ...state,
        loginError: !validate,
        loginValue: logValue
      };
    });
    if (validate) {
      setRegLoginValue(logValue);
    }
  };

  const handleChangePassword = (event) => {
    const passValue = event.target.value;
    const validate = validatePassword(passValue);
    setFormValue(state => {
      return {
        ...state,
        passwordError: !validate,
        passwordValue: passValue
      };
    });
    if (validate) {
      setRegPasswordValue(passValue);
    }
  };

  return (
    <div className="sign-in">
      <div className="sign-in-form">
        <h1 className="sign-in-form__title">Sign In</h1>
        <div className="sign-in-form__form">
          <label className="sign-in-form__label">
            Login / Email address
            <input type="text"
              name="login"
              className={generateInputClass(loginError, loginValue)}
              onChange={handleChangeLogin}
              value={loginValue}
            ></input>
          </label>
          <label className="sign-in-form__label sign-in-form__label_indent">
            Password
            <input type="text"
              name="password"
              className={generateInputClass(passwordError, passwordValue)}
              onChange={handleChangePassword}
              value = {passwordValue}
            ></input>
          </label>
          <Button text="sign in"
            type = {generateBtn ? "disabled" : null}
            additionalClass="btn_center"
            disabled={generateBtn}
            method={registrationOfUsers}
          />
        </div>
      </div>
    </div>
  );
};
SignIn.propTypes = {
  validateLogin: PropTypes.func,
  validatePassword: PropTypes.func,
  setRegLoginValue: PropTypes.func,
  setRegPasswordValue: PropTypes.func,
  regUser: PropTypes.func,
  auth: PropTypes.bool,
  history: PropTypes.any
};

const mapStateToProps = (state) => {
  return state.authenticated;
};

export default compose(
  connect(mapStateToProps, signInActions),
  withRouter,
)(SignIn);
