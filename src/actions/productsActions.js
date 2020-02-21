const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: id
  };
};
const clearCart = () => {
  return {
    type: "CLEAR_CART"
  };
};

const loadAllProducts = () => {
  return {
    type: "LOAD_ALL_PRODUCTS"
  };
};

const setProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products
  };
};

export {
  addToCart,
  clearCart,
  loadAllProducts,
  setProducts
};
