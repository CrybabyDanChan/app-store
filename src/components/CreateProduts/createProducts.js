import React, { useState, useRef } from "react";
import className from "classnames";

import "./createProducts.sass";
import defaultImg from "../../images/defaultImg.png";
import download from "../../images/download.png";
import Button from "../Button";
import Counter from "../Counter";

const CreateProducts = () => {
  const [urlImg, setImg] = useState();
  const latestImg = useRef("");
  const dropPlace = useRef();

  const handleImgChange = (event) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImg(e.target.result);
    };
    reader.readAsDataURL(latestImg.current.files[0]);
  };

  const dropSetImg = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const img = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImg(e.target.result);
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
                      ref={latestImg}
                      onChange={handleImgChange}
                      className="create-products-wrapper__input-file"/>
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

export default CreateProducts;
