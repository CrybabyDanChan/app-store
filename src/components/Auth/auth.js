import "./auth.sass";
import React from "react";

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth-form">
        <h1 className="auth-form__title">Sign In</h1>
        <form className="auth-form__form" onSubmit={() => event.preventDefault()}>
          <label className="auth-form__label">
            Login / Email address
            <input type="text" name="login" className="auth-form__input"></input>
          </label>
          <label className="auth-form__label auth-form__label_indent">
            Password
            <input type="text" name="password" className="auth-form__input"></input>
          </label>
          <button type="submit" className="auth-form__btn">sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
