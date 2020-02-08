import React from "react";

import "./products.sass";
import inc from "../../../images/inc.png";

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
          <div className="products-wrapper__items">
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
