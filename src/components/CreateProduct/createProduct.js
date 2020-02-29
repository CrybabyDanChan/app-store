import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./createProduct.sass";
import Button from "../Button";
import Counter from "../Counter";
import * as productsActions from "../../actions/productsActions";
import InputImage from "../InputImage";

const CreateProduct = (props) => {
  const { loadCreateProduct, id, loadEditProduct } = props;
  const [{ urlImg, valueTitle, valueDescription, imgFile }, setForm] = useState({
    urlImg: null,
    imgFile: null,
    valueTitle: "",
    valueDescription: ""
  });
  const [count, setCount] = useState(1);

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

  const getValueForm = () => {
    return {
      valueTitle,
      valueDescription,
      imgFile,
      count
    };
  };

  const resetState = () => {
    setForm({
      urlImg: null,
      imgFile: null,
      valueTitle: "",
      valueDescription: ""
    });
  };

  const handleSubmitForCreate = () => {
    if (!imgFile || valueTitle === "" || valueDescription === "") {
      return;
    }
    loadCreateProduct(getValueForm());
    resetState();
    setCount(1);
  };

  const handleSubmitForEdit = () => {
    loadEditProduct(getValueForm());
    resetState();
    setCount(1);
  };

  const generateSubmit = id ? handleSubmitForEdit : handleSubmitForCreate;

  return (
    <div className="create-products">
      <div className="container">
        <div className="create-products-wrapper">
          <div className="create-products-wrapper__title">{ id ? "Edit Products" : "Create"}</div>
          <div className="create-products-wrapper__items">
            <div className="create-products-wrapper__form" name="createProduct">
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
                <label className="create-products-wrapper__counter-wrapper">
                  <div className="create-products-wrapper__subtitle create-products-wrapper_indent-right">Count</div>
                  <Counter method={setCount} count={count}/>
                </label>
                <div className="create-products-wrapper__btn-wrapper">
                  <Button text={id ? "save" : "add"} method={generateSubmit}/>
                  <Button text="cancel" additionalClass="btn_cancel"/>
                </div>
              </div>
              <InputImage method={setForm} urlImg={urlImg}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateProduct.propTypes = {
  loadCreateProduct: PropTypes.func,
  id: PropTypes.any,
  loadEditProduct: PropTypes.func
};

CreateProduct.defaultProps = {
  id: null
};

export default connect(undefined, productsActions)(CreateProduct);
