import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./item.sass";
import * as productsActions from "../../actions/productsActions";
import Button from "../Button";
import Counter from "../Counter";

const Item = (props) => {
  const {
    id,
    name,
    avatar,
    description,
    beInCart,
    loadAddToCart
  } = props;

  const [count, setCount] = useState(1);

  const generateBtn = beInCart
    ? <Button type = "deleting"
      text="delete"
      method={() => {}}/>
    : <Button type = "addToCart"
      text="add to cart"
      method={() => loadAddToCart(id)}/>;

  return (
    <div className="item">
      <div className="container">
        <div className="item-wrapper">
          <img src={avatar} alt="" className="item-wrapper__img"/>
          <div className="item-wrapper__description">
            <div className="item-wrapper__title">{name}</div>
            <div className="item-wrapper__text">{description}</div>
          </div>
          <div className="item-wrapper__counter">
            <Counter method={setCount} count={count}/>
          </div>
          {generateBtn}
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.any,
  name: PropTypes.string,
  avatar: PropTypes.string,
  description: PropTypes.string,
  beInCart: PropTypes.bool,
  loadAddToCart: PropTypes.func
};

export default connect(undefined, productsActions)(Item);
