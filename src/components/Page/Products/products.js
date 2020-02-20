import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./products.sass";
import MyProducts from "../../MyProducts";
import AllProducts from "../../AllProducts";
import Button from "../../Button";
import AuthBlock from "../../AuthBlock";

const Products = ({ auth }) => {
  const authButton = <Link to="/create-product" className="products-wrapper__link">
    <Button text="add product" type="addProduct"/>
  </Link>;

  const viewAuthBlok = (trueBlock, falseBlock = null, provision = auth) => {
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
            {viewAuthBlok(<AuthBlock type="products"/>)}
          </div>
          <div className="products-wrapper__items">
            <Switch>
              <Route
                path="/products/all"
                exact
                render={() => {
                  return <AllProducts/>;
                }}/>
              <Route
                path="/products/my"
                exact
                render={() => {
                  return <MyProducts/>;
                }}/>
              <Redirect from="/products/" to="/products/all"/>
            </Switch>
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
  auth: PropTypes.bool
};

export default connect(mapStateToProps, undefined, undefined, { pure: false })(Products);
