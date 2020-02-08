import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./logotype.sass";
import personal from "../../img/personal.jpg";
import cart from "../../img/cart.jpg";

const Logotype = ({ authenticated }) => {
  const authBlock = <div className="logotype-content__auth">
    <NavLink to="/home/log-in" className="logotype-content__logIn" activeClassName="is-active">
      Log In
    </NavLink>
    <span className="line"></span>
    <NavLink to="/home/sign-in" className="logotype-content__signIn" activeClassName="is-active">
      Sign In
    </NavLink>
  </div>;

  const userBlock = <div className="logotype-content__user">
    <a href="#" className="logotype-content__personal">
      <img src={personal} alt="personal"/>
    </a>
    <a href="#" className="logotype-content__cart">
      <img src={cart} alt="cart"></img>
    </a>
  </div>;

  const ViewBlock = authenticated ? userBlock : authBlock;
  return (
    <div className="logotype">
      <div className="container">
        <div className="logotype-content">
          <Link to="/" className="logotype-content__title">Logotype</Link>
          <div className="logotype-content__wrapper">
            <Link to="/products" className="logotype-content__products">Products</Link>
            { ViewBlock }
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.authenticated;
};

Logotype.propTypes = {
  authenticated: PropTypes.bool
};

export default connect(mapStateToProps, undefined, undefined, { pure: false })(Logotype);
