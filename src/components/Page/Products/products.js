import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

import "./products.sass";
import inc from "../../../images/inc.png";
import WelcomeToUser from "../../WelcomeToUser";
import Item from "../../Item";

const Products = () => {
  return (
    <div className="products">
      <div className="container">
        <div className="products-wrapper">
          <div className="products-wrapper__bar">
            <div className="products-wrapper__title">Products</div>
            <button className="btn btn_img-flex">
              <img src={inc} className="btn__img" alt=""/>
                add product
            </button>
          </div>
          <div className="products-wrapper__links">
            <NavLink to="/products/all" className="products-wrapper__link"
              activeClassName="is-active">
                All Products
            </NavLink>
            <NavLink to="/products/my" className="products-wrapper__link products-wrapper__link_indent"
              activeClassName="is-active">
              My Products
            </NavLink>
          </div>
          <div className="products-wrapper__items">
            <Switch>
              <Route
                path="/products/all"
                exact
                render={() => {
                  return <Item/>;
                }}
              />
              <Route
                path="/products/my"
                exact
                render={() => {
                  return <WelcomeToUser/>;
                }}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
