const loadProductsFromCart = () => {
  return {
    type: "LOAD_PRODUCTS_FROM_CART"
  };
};

const loadAddCart = (productInfo) => {
  return {
    type: "LOAD_ADD_CART",
    payload: productInfo
  };
};

const loadRemoveCart = (productInfo) => {
  return {
    type: "LOAD_REMOVE_CART",
    payload: productInfo
  };
};

const loadUpdateCart = (productInfo) => {
  return {
    type: "LOAD_UPDATE_CART",
    payload: productInfo
  };
};

export {
  loadAddCart,
  loadRemoveCart,
  loadProductsFromCart,
  loadUpdateCart
};
