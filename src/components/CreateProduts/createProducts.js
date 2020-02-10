import React, { useState, useRef, useEffect } from "react";

import "./createProducts.sass";
import defaultImg from "../../images/defaultImg.png";

const CreateProducts = () => {
  const [urlImg, setImg] = useState();
  const latestImg = useRef(null);

  const handleImgChange = (event) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImg(e.target.result);
    };
    reader.readAsDataURL(latestImg.current.files[0]);
  };

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
              <div className="create-products-wrapper__input-file-wrap">
                <div className="create-products-wrapper__input-file-title">image</div>
                <div className="create-products-wrapper__img-input">
                  <img src={urlImg}
                    alt=""
                    onError={(e) => { e.target.src = defaultImg; }}
                    className="create-products-wrapper__form-img"/>
                  <span>Drag and drop an images, or click here </span>
                  <label className="create-products-wrapper__form-label-file">
                    <input type="file"
                      ref={latestImg}
                      onChange={handleImgChange}
                      className="create-products-wrapper__input-file"/>
                    <span>Download image</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProducts;
