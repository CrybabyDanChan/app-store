import React, { useState, useRef } from "react";
import className from "classnames";
import { connect } from "react-redux";

import "./createProducts.sass";
import defaultImg from "../../images/defaultImg.png";
import download from "../../images/download.png";
import Button from "../Button";
import Counter from "../Counter";
import * as createProductsActions from "../../actions/createProductsActions";

const CreateProducts = (props) => {
  const { loadCreateProduct } = props;
  const [{ urlImg, valueTitle, valueDescription, imgFile }, setForm] = useState({
    urlImg: null,
    imgFile: null,
    valueTitle: "",
    valueDescription: ""
  });
  const [count, setCount] = useState(1);
  const refImg = useRef();
  const dropPlace = useRef();

  const handleImgInput = (event) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setForm(state => {
        return {
          ...state,
          urlImg: e.target.result,
          imgFile: refImg.current.files[0]
        };
      });
    };
    reader.readAsDataURL(refImg.current.files[0]);
  };

  const handleInputTitle = (event) => {
    const value = event.target.value;
    setForm(state => {
      return {
        ...state,
        valueTitle: value
      };
    });
  };

  const handleInputDescription = (event) => {
    const value = event.target.value;
    setForm(state => {
      return {
        ...state,
        valueDescription: value
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const valueForm = {
      valueTitle,
      valueDescription,
      imgFile,
      count
    };
    if (imgFile && valueTitle !== "" && valueDescription !== "") {
      loadCreateProduct(valueForm);
      setForm(state => {
        return {
          urlImg: null,
          imgFile: null,
          valueTitle: "",
          valueDescription: ""
        };
      });
    }
  };

  const dropSetImg = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const img = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setForm(state => {
        return {
          ...state,
          urlImg: e.target.result,
          imgFile: img
        };
      });
    };
    reader.readAsDataURL(img);
    dropPlace.current.classList.remove("create-products-wrapper__border-dashed");
  };

  const preventDefault = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dropPlace.current.classList.add("create-products-wrapper__border-dashed");
  };

  const images = !urlImg ? defaultImg : urlImg;

  const generateDropText = !urlImg ? "Drag and drop an images, or click here" : null;

  const generateDownloadText = !urlImg ? "download image" : "upload a new image";

  const classNameDownload = className(
    "create-products-wrapper__form-file-download",
    {
      "create-products-wrapper__form-file-download create-products-wrapper_upload": urlImg
    }
  );
  return (
    <div className="create-products">
      <div className="container">
        <div className="create-products-wrapper">
          <div className="create-products-wrapper__title">Create</div>
          <div className="create-products-wrapper__items">
            <form className="create-products-wrapper__form" onSubmit={handleSubmit} name="createProduct">
              <div className="create-products-wrapper__input-wrapper">
                <label className="create-products-wrapper__form-label">
                  <div className="create-products-wrapper__subtitle">Title</div>
                  <input type="text"
                    className="create-products-wrapper__input"
                    value={valueTitle}
                    onChange={handleInputTitle}
                    name="title"
                  />
                </label>
                <label className="create-products-wrapper__form-label create-products-wrapper_indent-top">
                  <div className="create-products-wrapper__subtitle">Description</div>
                  <textarea cols="30" rows="5"
                    className="create-products-wrapper__textarea"
                    value={valueDescription}
                    onChange={handleInputDescription}
                    name="description"
                  />
                </label>
                <div className="create-products-wrapper__counter-wrapper">
                  <div className="create-products-wrapper__subtitle create-products-wrapper_indent-right">Count</div>
                  <Counter method={setCount} count={count}/>
                </div>
                <div className="create-products-wrapper__btn-wrapper">
                  <Button text={"add"}/>
                  <Button text={"cancel"} additionalClass={"btn_cancel"}/>
                </div>
              </div>
              <div className="create-products-wrapper__form-file-wrap">
                <img className="create-products-wrapper__form-file-img"
                  src={images}
                  alt="img-download"/>
                <div className="create-products-wrapper__drop-place"
                  onDragEnter={preventDefault}
                  onDragOver={preventDefault}
                  onDrop={dropSetImg}
                  ref={dropPlace}>
                  <div className="create-products-wrapper__drop-place-title">{ generateDropText }</div>
                  <label className="create-products-wrapper__form-file-label">
                    <div className="create-products-wrapper__subtitle create-products-wrapper__subtitle_abs">Image</div>
                    <input type="file"
                      ref={refImg}
                      onChange={handleImgInput}
                      className="create-products-wrapper__input-file"
                      name="avatar"/>
                    <div className={classNameDownload}>
                      <img src={download} alt="download"/>
                      {generateDownloadText}
                    </div>
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

export default connect(undefined, createProductsActions)(CreateProducts);
