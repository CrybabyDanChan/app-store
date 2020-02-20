import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import "./authBlock.sass";

const authBlock = ({ type }) => {
  const authLinksForLogotype = <Fragment>
    <NavLink to="/home/log-in" className="auth-block__logIn"
      activeClassName="auth-block__is-active">
      Log In
    </NavLink>
    <span className="auth-block__line"></span>
    <NavLink to="/home/sign-in" className="auth-block__signIn"
      activeClassName="auth-block__is-active">
      Sign In
    </NavLink>
  </Fragment>;

  const authLinksForProducts = <Fragment>
    <NavLink to="/products/all" className="products-wrapper__link"
      activeClassName="is-active">
      All Products
    </NavLink>
    <NavLink to="/products/my" className="products-wrapper__link products-wrapper__link_indent"
      activeClassName="is-active">
    My Products
    </NavLink>
  </Fragment>;

  const generateBlock = () => {
    switch (type) {
      case "products":
        return authLinksForProducts;
      case "logotype":
        return authLinksForLogotype;
      default:
        return null;
    }
  };

  const generateClass = () => {
    switch (type) {
      case "products":
        return "auth-block_default";
      case "logotype":
        return "auth-block";
      default:
        return null;
    }
  };

  return (
    <div className={generateClass()}>
      {generateBlock()}
    </div>
  );
};

authBlock.defaultProps = {
  type: ""
};

authBlock.propTypes = {
  type: PropTypes.string
};

export default authBlock;
