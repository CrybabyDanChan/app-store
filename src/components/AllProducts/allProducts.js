import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Item from "../Item";
import * as productsActions from "../../actions/productsActions";

const AllProducts = (props) => {
  const { arrayOfAllProducts, loadAllProducts } = props;

  useEffect(() => {
    loadAllProducts();
  }, [props]);

  return (
    <div className="all-products">
      {arrayOfAllProducts.map(product => <Item key={product.id} {...product}/>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state.products;
};

AllProducts.propTypes = {
  arrayOfAllProducts: PropTypes.arrayOf(PropTypes.object),
  loadAllProducts: PropTypes.func
};

export default connect(mapStateToProps, productsActions)(AllProducts);
