import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./cart.sass";
import Item from "../Item";
import Button from "../Button";

const Cart = ({ arrayOfCart }) => {
  const placeOrder = arrayOfCart.length
    ? <div className="cart-wrapper__place-order">
      <Button text="clear" actionMethod = {() => {}} additionalClass="btn_cancel"/>
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
  arrayOfCart: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(Cart);
