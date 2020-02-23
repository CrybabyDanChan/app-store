import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Item from "../Item";
import * as productsActions from "../../actions/productsActions";

const MyProducts = (props) => {
  const {
    arrayOfMyProducts,
    setMyProducts,
    authId
  } = props;

  useEffect(() => {
    setMyProducts(authId);
  }, []);

  return (
    <div className="myProducts">
      {arrayOfMyProducts.map(product => {
        return <Item key={product.id} {...product}/>;
      }
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.products,
    authId: state.authenticated.id
  };
};

MyProducts.propTypes = {
  arrayOfMyProducts: PropTypes.arrayOf(PropTypes.object),
  setMyProducts: PropTypes.func,
  authId: PropTypes.any
};

export default connect(mapStateToProps, productsActions)(MyProducts);
