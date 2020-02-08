import React, { Fragment } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./products.sass";
import inc from "../../../images/inc.png";
import MyProducts from "../../MyProducts";
import AllProducts from "../../AllProducts";

const Products = ({ authenticated }) => {
  const authLinks = <Fragment>
    <NavLink to="/products/all" className="products-wrapper__link"
      activeClassName="is-active">
        All Products
    </NavLink>
    <NavLink to="/products/my" className="products-wrapper__link products-wrapper__link_indent"
      activeClassName="is-active">
      My Products
    </NavLink>
  </Fragment>;

  const authBlock = <Switch>
    <Route
      path="/products/all"
      exact
      render={() => {
        return <AllProducts/>;
      }}
    />
    <Route
      path="/products/my"
      exact
      render={() => {
        return <MyProducts/>;
      }}
    />
    <Redirect from="/products/" to="/products/all"/>
  </Switch>;

  const authButton = <button className="btn btn_img-flex">
    <img src={inc} className="btn__img" alt=""/>
    add product
  </button>;

  const viewAuthBlok = (trueBlock, falseBlock = null, provision = authenticated) => {
    const viewBlock = provision ? trueBlock : falseBlock;
    return viewBlock;
  };

  return (
    <div className="products">
      <div className="container">
        <div className="products-wrapper">
          <div className="products-wrapper__bar">
            <div className="products-wrapper__title">Products</div>
            {viewAuthBlok(authButton)}
          </div>
          <div className="products-wrapper__links">
            {viewAuthBlok(authLinks)}
          </div>
          <div className="products-wrapper__items">
            {viewAuthBlok(authBlock, <AllProducts/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.authenticated;
};

Products.propTypes = {
  authenticated: PropTypes.bool
};

export default connect(mapStateToProps, undefined, undefined, { pure: false })(Products);
