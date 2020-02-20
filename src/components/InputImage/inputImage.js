import React, { useRef } from "react";
import Proptypes from "prop-types";

import "./inputImage.sass";
import download from "../../images/download.png";
import defaultImg from "../../images/defaultImg.png";

const InputImage = (props) => {
  const { method, urlImg } = props;
  const refImg = useRef();
  const dropPlace = useRef();

  const dropGetImg = (event) => {
    event.stopPropagation();
    const img = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      method(state => {
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

  const handleDrag = (event) => {
    event.stopPropagation();
    dropPlace.current.classList.add("create-products-wrapper__border-dashed");
  };

  const handleImgInput = () => {
    const reader = new FileReader();
    const imgFileItem = refImg.current.files[0];
    reader.onload = (e) => {
      method(state => {
        return {
          ...state,
          urlImg: e.target.result,
          imgFile: imgFileItem
        };
      });
    };
    reader.readAsDataURL(imgFileItem);
  };

  const generateDropText = !urlImg ? "Drag and drop an images, or click here" : null;

  const generateDownloadText = !urlImg ? "download image" : "upload a new image";

  const classNameDownload = urlImg
    ? "inputImage__form-file-download inputImage_upload"
    : "inputImage__form-file-download";

  const images = !urlImg ? defaultImg : urlImg;

  return (
    <div className="inputImage">
      <img className="inputImage__form-file-img"
        src={images}
        alt="img-download"/>
      <div className="inputImage__drop-place"
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDrop={dropGetImg}
        ref={dropPlace}>
        <div className="inputImage__drop-place-title">{ generateDropText }</div>
        <label className="inputImage__form-file-label">
          <div className="inputImage__subtitle inputImage__subtitle_abs">Image</div>
          <input type="file"
            ref={refImg}
            onChange={handleImgInput}
            className="inputImage__input-file"
            name="avatar"/>
          <div className={classNameDownload}>
            <img src={download} alt="download"/>
            {generateDownloadText}
          </div>
        </label>
      </div>
    </div>
  );
};

InputImage.propTypes = {
  method: Proptypes.func,
  urlImg: Proptypes.string
};

export default InputImage;
