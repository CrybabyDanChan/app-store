import React from "react";
import PropTypes from "prop-types";

import "./item.sass";
import whiteCart from "../../images/whiteCart.png";

const Item = (props) => {
  const { name, avatar, description } = props;
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
            <div className="item-wrapper__result">1</div>
            <button className="item-wrapper__inc">
              <span></span>
              <span></span>
            </button>
          </div>
          <button className="btn btn_img-flex">
            <img src={whiteCart} alt="" className="btn__img"/>
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string
};

export default Item;
