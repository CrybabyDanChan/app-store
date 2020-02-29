import React, { Fragment, useEffect } from "react";
import Normalize from "react-normalize";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import "./app.sass";
import Home from "../Page/Home";
import Products from "../Page/Products";
import Logotype from "../Logotype";
import Cart from "../Cart/cart";
import CreateProduct from "../CreateProduct";
import * as authenticatedActions from "../../actions/authenticatedActions";
import * as productsActions from "../../actions/productsActions";

function App (props) {
  const { logAuth, loadAllProducts, checkProducts, userId } = props;

  useEffect(() => {
    logAuth();
  }, []);

  useEffect(() => {
    if (!checkProducts) {
      loadAllProducts();
    }
  }, [userId]);

  return (
    <Fragment>
      <Normalize/>
      <div className = "app">
        <Logotype/>
        <Switch>
          <Route
            path="/home"
            render = { () => {
              return <Home/>;
            }}/>
          <Route
            path="/products"
            render = { () => {
              return <Products/>;
            }}/>
          <Route
            path="/cart"
            render = { () => {
              return <Cart/>;
            }}/>
          <Route
            path="/create-product"
            render={() => {
              return <CreateProduct/>;
            }}/>
          <Route
            exact
            path="/edit-products/:id"
            render={({ match }) => {
              const id = match.params.id;
              return <CreateProduct id={id}/>;
            }}/>
          <Redirect from='/' to="/home"/>
        </Switch>
      </div>
    </Fragment>
  );
}

App.propTypes = {
  logAuth: PropTypes.func,
  loadAllProducts: PropTypes.func,
  checkProducts: PropTypes.bool,
  userId: PropTypes.any
};

const mapStateToProps = (state) => {
  return {
    checkProducts: state.products.checkProducts,
    userId: state.authenticated.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  const { logAuth } = bindActionCreators(authenticatedActions, dispatch);
  const { loadAllProducts } = bindActionCreators(productsActions, dispatch);
  return {
    logAuth,
    loadAllProducts
  };
};

export default connect(mapStateToProps, mapDispatchToProps, undefined, { pure: false })(App);
