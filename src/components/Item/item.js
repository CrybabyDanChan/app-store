import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./item.sass";
import * as cartActions from "../../actions/cartActions";
import Button from "../Button";
import Counter from "../Counter";
import { mainUrl } from "../../utils/url";

const Item = (props) => {
  const {
    id,
    name,
    avatar,
    description,
    ownedByUser,
    loadAddCart,
    loadRemoveCart,
    loadUpdateCart,
    cartId,
    numberInOrder,
    userId
  } = props;

  const [count, setCount] = useState(1);

  useEffect(() => {
    if (numberInOrder) {
      setCount(numberInOrder);
    }
  }, []);

  const updateCounterInCart = (number) => {
    loadUpdateCart({ count: number, cartId });
    setCount(number);
  };

  const handleCounter = cartId ? updateCounterInCart : setCount;

  const generateBtn = (ownedByUser)
    ? <Link to={`/edit-products/${id}`}
      className="item-wrapper_link">
      <Button type = "editProduct"
        text="edit product"/>
    </Link>
    : (cartId)
      ? <Button type = "deleting"
        text="delete"
        method={() => loadRemoveCart({ cartId, count, id })}/>
      : <Button disabled={!userId}
        type = {userId ? "addToCart" : "disabled"}
        text="add to cart"
        method={() => loadAddCart({ id, count })}/>;

  return (
    <div className="item">
      <div className="container">
        <div className="item-wrapper">
          <img src={`${mainUrl}image?file=${avatar}`} alt="" className="item-wrapper__img"/>
          <div className="item-wrapper__description">
            <div className="item-wrapper__title">{name}</div>
            <div className="item-wrapper__text">{description}</div>
          </div>
          <div className="item-wrapper__counter">
            {
              !ownedByUser && userId
                ? <Counter method={handleCounter} count={count}/>
                : null
            }
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
  ownedByUser: PropTypes.bool,
  loadAddCart: PropTypes.func,
  cartId: PropTypes.any,
  numberInOrder: PropTypes.any,
  userId: PropTypes.any,
  loadRemoveCart: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    userId: state.authenticated.userId
  };
};

export default connect(mapStateToProps, cartActions)(Item);
