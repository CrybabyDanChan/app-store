import React from "react";

import "./item.sass";
import whiteCart from "../../images/whiteCart.png";

const Item = () => {
  return (
    <div className="item">
      <div className="container">
        <div className="item-wrapper">
          <img src="https://vernik.me/wp-content/uploads/2019/09/uemrerminor.jpg" alt="" className="item-wrapper__img"/>
          <div className="item-wrapper__description">
            <div className="item-wrapper__title">Apple Watch Series 3</div>
            <div className="item-wrapper__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id justo velit. Ut tincidunt rhoncus eros, eget tincidunt orci consequat nec ...</div>
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

export default Item;
