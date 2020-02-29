import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Item from "../Item";
import * as productsActions from "../../actions/productsActions";

const MyProducts = (props) => {
  const {
    arrayOfMyProducts
  } = props;

  return (
    <div className="myProducts">
      {arrayOfMyProducts.map(product => <Item key={product.id} {...product}/>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.products;
};

MyProducts.propTypes = {
  arrayOfMyProducts: PropTypes.arrayOf(PropTypes.object),
  setMyProducts: PropTypes.func,
  authId: PropTypes.any
};

export default connect(mapStateToProps, productsActions)(MyProducts);
