import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "./button.sass";

import whiteCart from "../../images/whiteCart.png";
import blueCart from "../../images/blueCart.png";
import create from "../../images/create.png";
import inc from "../../images/inc.png";

const Button = (props) => {
  const {
    text,
    addProductsToCart,
    editProduct,
    addProduct,
    deleting,
    id,
    actionMethod,
    additionalClass,
    disabled
  } = props;

  const handleBtn = (event) => {

  };

  const genearetEvent = !actionMethod ? handleBtn : actionMethod;

  const generateClass = `btn + ${additionalClass}`;

  const defaultButton = <button
    onClick={genearetEvent}
    className={generateClass}>
    {text}
  </button>;

  const addToCart = <button className="btn btn_img-flex"
    onClick={() => actionMethod(id)}>
    <img src={whiteCart} alt="" className="btn__img"/>
    add to cart
  </button>;

  const addProductButton = <button className="btn btn_img-flex">
    <img src={inc} alt="" className="btn__img"/>
    add product
  </button>;

  const deleteButton = <button className="btn btn_img-flex btn_cancel"
    onClick={() => actionMethod(id)}>
    <img src={blueCart} alt="" className="btn__img"/>
    delete
  </button>;

  const editProductButton = <button className="btn btn_img-flex">
    <img src={create} alt="" className="btn__img"/>
    edit product
  </button>;

  const disabledButton = <button
    disabled
    className="btn__disabled btn_center">
    {text}
  </button>;

  const generateButton = () => {
    const button = (addProductsToCart) ? addToCart
      : (addProduct) ? addProductButton
        : (deleting) ? deleteButton
          : (editProduct) ? editProductButton
            : (disabled) ? disabledButton
              : defaultButton;
    return button;
  };
  return (
    <Fragment>
      { generateButton() }
    </Fragment>
  );
};
Button.deffaultProps = {
  addProductsToCart: false,
  editProduct: false,
  deleting: false,
  addProduct: false,
  additionalClass: null,
  value: null,
  actionMethod: false,
  disabled: false
};

Button.propTypes = {
  text: PropTypes.string,
  addProductsToCart: PropTypes.bool,
  editProduct: PropTypes.bool,
  addProduct: PropTypes.bool,
  deleting: PropTypes.bool,
  id: PropTypes.any,
  actionMethod: PropTypes.func,
  additionalClass: PropTypes.string,
  disabled: PropTypes.bool
};
export default Button;
