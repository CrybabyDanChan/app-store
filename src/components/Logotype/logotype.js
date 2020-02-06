import React from "react";
import { Link } from "react-router-dom";

import "./logotype.sass";
import personal from "../../img/personal.jpg";
import cart from "../../img/cart.jpg";

const Logotype = () => {
  const authBlock = <div className="logotype-content__auth">
    <Link to="#" className="logotype-content__logIn">
      Log In
    </Link>
    <span className="line"></span>
    <Link to="/home/auth" className="logotype-content__signIn">
      Sign In
    </Link>
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
          <Link to="/" className="logotype-content__title">Logotype</Link>
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
