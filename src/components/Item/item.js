import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import "./item.sass";
import * as cartActions from "../../actions/cartAction";
import Button from "../Button";
import Counter from "../Counter";

const Item = (props) => {
  const {
    id,
    name,
    avatar,
    description,
    ownedByUser,
    loadAddToCart,
    beInCart,
    numberInOrder,
    userId
  } = props;

  const [count, setCount] = useState(1);

  const generateBtn = (ownedByUser)
    ? <Link to={`/edit-products/${id}`}
      className="item-wrapper_link">
      <Button type = "editProduct"
        text="edit product"/>
    </Link>
    : (beInCart)
      ? <Button type = "deleting"
        text="delete"
        method={() => loadAddToCart({ id, count })}/>
      : <Button disabled={!userId}
        type = {userId ? "addToCart" : "disabled"}
        text="add to cart"
        method={() => loadAddToCart({ id, count })}/>;

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
            {
              !ownedByUser && userId
                ? <Counter method={setCount} count={beInCart ? numberInOrder : count}/>
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
  loadAddToCart: PropTypes.func,
  beInCart: PropTypes.bool,
  numberInOrder: PropTypes.any,
  userId: PropTypes.any
};

const mapStateToProps = (state) => {
  return {
    userId: state.authenticated.userId
  };
};

const mapDispatchToProps = (dispatch) => {
  const { loadAddToCart } = bindActionCreators(cartActions, dispatch);
  return {
    loadAddToCart
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
