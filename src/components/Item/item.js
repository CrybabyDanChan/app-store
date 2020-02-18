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
    addToCart
  } = props;

  const [count, setCount] = useState(1);

  const generateBtn = beInCart ? <Button deleting id ={id} actionMethod={addToCart}/>
    : <Button addProductsToCart id ={id} actionMethod={addToCart}/>;

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
  addToCart: PropTypes.func
};

export default connect(undefined, productsActions)(Item);
