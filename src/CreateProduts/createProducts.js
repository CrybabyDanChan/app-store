import React from "react";

import "./createProducts.sass";

const CreateProducts = () => {
  return (
    <div className="create-products">
      <div className="container">
        <div className="create-products-wrapper">
          <div className="create-products-wrapper__title">Create / Edit Products</div>
          <div className="create-products-wrapper__items">
            <form action="" className="create-products-wrapper__form">
              <label className="create-products-wrapper__form-label">
                  Title
                <input type="text" className="create-products-wrapper__input"/>
              </label>
              <label className="create-products-wrapper__form-label">
                Description
                <textarea cols="30" rows="5" className="create-products-wrapper__textarea-description"/>
              </label>
              <input type="file"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProducts;
