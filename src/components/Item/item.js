import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from "react-redux";

import "./item.sass";
import whiteCart from "../../images/whiteCart.png";
import blueCart from "../../images/blueCart.png";
import * as Actions from "../../actions/products";

const Item = (props) => {
  const {
    id,
    name,
    avatar,
    description,
    beInCart,
    count,
    addToCart
  } = props;

  const generateBtn = (provision = beInCart) => {
    const btnClass = classNames({
      "btn btn_img-flex": !provision,
      "btn btn_img-flex btn_cancel": provision
    });

    const imgForBtn = provision ? blueCart : whiteCart;

    return <button className={btnClass}
      onClick={() => addToCart(id)}
    >
      <img src={imgForBtn} alt="" className="btn__img"/>
      {provision ? "delete" : "add to cart"}
    </button>;
  };
  return (
    <div className="item">
      <div className="container">
        <div className="item-wrapper">
          <img src={avatar} alt="" className="item-wrapper__img"/>
          <div className="item-wrapper__description">
            <div className="item-wrapper__title">{name}</div>
            <div className="item-wrapper__text">{description}</div>
          </div>
          <div className="item-wrapper__counter">
            <button className="item-wrapper__dec">
              <span></span>
            </button>
            <div className="item-wrapper__result">{count}</div>
            <button className="item-wrapper__inc">
              <span></span>
              <span></span>
            </button>
          </div>
          {generateBtn()}
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string,
  count: PropTypes.number,
  beInCart: PropTypes.bool,
  addToCart: PropTypes.func
};

export default connect(undefined, Actions)(Item);
