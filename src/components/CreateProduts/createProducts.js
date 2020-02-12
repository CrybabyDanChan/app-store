import React, { useState, useRef, useEffect } from "react";

import "./createProducts.sass";
import defaultImg from "../../images/defaultImg.png";
import Button from "../Button";
import Counter from "../Counter";

const CreateProducts = () => {
  const [urlImg, setImg] = useState();
  const latestImg = useRef("");

  const handleImgChange = (event) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImg(e.target.result);
    };
    reader.readAsDataURL(latestImg.current.files[0]);
  };

  const images = !urlImg ? defaultImg : urlImg;

  return (
    <div className="create-products">
      <div className="container">
        <div className="create-products-wrapper">
          <div className="create-products-wrapper__title">Create / Edit Products</div>
          <div className="create-products-wrapper__items">
            <form action="" className="create-products-wrapper__form">
              <div className="create-products-wrapper__input-wrapper">
                <label className="create-products-wrapper__form-label">
                  <div className="create-products-wrapper__subtitle">Title</div>
                  <input type="text" className="create-products-wrapper__input"/>
                </label>
                <label className="create-products-wrapper__form-label create-products-wrapper_indent-top">
                  <div className="create-products-wrapper__subtitle">Description</div>
                  <textarea cols="30" rows="5" className="create-products-wrapper__textarea"/>
                </label>
                <div className="create-products-wrapper__counter-wrapper">
                  <div className="create-products-wrapper__subtitle create-products-wrapper_indent-right">Count</div>
                  <Counter/>
                </div>
                <div className="create-products-wrapper__btn-wrapper">
                  <Button text={"add"}/>
                  <Button text={"cancel"} additionalClass={"btn_cancel"}/>
                </div>
              </div>
              <div className="create-products-wrapper__input-file-wrap">
                <div className="create-products-wrapper__subtitle">Image</div>
                <div className="create-products-wrapper__img-input">
                  {/* <label className="create-products-wrapper__form-label-file">
                    <input type="file"
                      ref={latestImg}
                      onChange={handleImgChange}
                      className="create-products-wrapper__input-file"/>
                    <span>Download image</span>
                  </label> */}
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
