import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./button.sass";
import whiteCart from "../../images/whiteCart.png";
import blueCart from "../../images/blueCart.png";
import create from "../../images/create.png";
import inc from "../../images/inc.png";

const Button = (props) => {
  const {
    type,
    text,
    method,
    disabled,
    additionalClass
  } = props;

  const handleImg = (source, alternative) => {
    return <img src={source} alt={alternative} className="btn__img"/>;
  };

  const handleClass = (nameClass) => {
    return additionalClass ? `${nameClass} ${additionalClass}` : `${nameClass}`;
  };

  const generateClass = classNames("btn", {
    "btn btn_img-flex": type === "addProduct" || "editProduct" || "addToCart",
    "btn btn_img-flex btn_cancel": type === "deleting",
    "btn__disabled btn_center": type === "disabled"
  });

  const generateImg = () => {
    switch (type) {
      case "addToCart" :
        return handleImg(whiteCart, "whiteCart");
      case "addProduct" :
        return handleImg(inc, "plus");
      case "deleting" :
        return handleImg(blueCart, "blueCart");
      case "editProduct" :
        return handleImg(create, "create");
      default:
        return null;
    }
  };

  const generateMethod = !method ? () => {} : method;

  return (
    <button
      disabled = {disabled}
      type="button"
      className={handleClass(generateClass)}
      onClick={generateMethod}>
      {generateImg()}
      {text}
    </button>
  );
};
Button.deffaultProps = {
  additionalClass: "",
  method: null,
  disabled: false
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  method: PropTypes.func,
  disabled: PropTypes.bool,
  additionalClass: PropTypes.string
};
export default Button;
