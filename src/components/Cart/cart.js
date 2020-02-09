import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./cart.sass";
import Item from "../Item";
import * as Actions from "../../actions/products";

const Cart = ({ arrayOfCart, clearCart }) => {
  const placeOrder = arrayOfCart.length ? <div className="cart-wrapper__place-order">
    <button className="btn btn_cancel"
      onClick={() => clearCart()}
    >clear</button>
    <button className="btn">order</button>
  </div> : null;

  return (
    <div className="cart">
      <div className="container">
        <div className="cart-wrapper">
          <div className="cart-wrapper__title">Cart</div>
          <div className="cart-wrapper__items">
            {
              arrayOfCart.map(product => {
                return <Item key={product.id} {...product}/>;
              })
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
  arrayOfCart: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps, Actions)(Cart);
