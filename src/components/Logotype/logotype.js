import React from "react";

import "./logotype.sass";
import personal from "./personal.jpg";
import cart from "./cart.jpg";

const Logotype = () => {
  const authBlock = <div className="logotype-content__auth">
    <a href="#" className="logotype-content__logIn">Log In</a>
    <span className="line"></span>
    <a href="#" className="logotype-content__signIn">Sign In</a>
  </div>;

  const userBlock = <div className="logotype-content__user">
    <a href="#" className="logotype-content__personal">
      <img src={personal} alt="personal"/>
    </a>
    <a href="#" className="logotype-content__cart">
      <img src={cart} alt="cart"></img>
    </a>
  </div>;
  return (
    <div className="logotype">
      <div className="container">
        <div className="logotype-content">
          <div className="logotype-content__title">Logotype</div>
          <div className="logotype-content__wrapper">
            <a href="#" className="logotype-content__products">Products</a>
            { authBlock }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logotype;
