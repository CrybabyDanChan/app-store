import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Item from "../Item";

const AllProducts = (props) => {
  const { arrayOfAllProducts } = props;
  return (
    <div className="all-products">
      {arrayOfAllProducts.map(product => {
        return <Item key={product.id} {...product}/>;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.products;
};

AllProducts.propTypes = {
  arrayOfAllProducts: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(AllProducts);
