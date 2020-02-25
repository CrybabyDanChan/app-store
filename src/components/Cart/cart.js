import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./cart.sass";
import Item from "../Item";
import * as productsActions from "../../actions/productsActions";
import Button from "../Button";

const Cart = ({ arrayOfCart, clearCart, loadProductsFromCart }) => {
  useEffect(() => {
    loadProductsFromCart();
  }, []);

  const placeOrder = arrayOfCart.length
    ? <div className="cart-wrapper__place-order">
      <Button text="clear" method = {clearCart} additionalClass="btn_cancel"/>
      <Button text="order"/>
    </div>
    : null;

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-wrapper">
          <div className="cart-wrapper__title">Cart</div>
          <div className="cart-wrapper__items">
            {
              arrayOfCart.map(product => <Item key={product.id} {...product}/>)
            }
          </div>
          {placeOrder}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.products;
};

Cart.propTypes = {
  arrayOfCart: PropTypes.arrayOf(PropTypes.object),
  clearCart: PropTypes.func,
  loadProductsFromCart: PropTypes.func
};

export default connect(mapStateToProps, productsActions)(Cart);
