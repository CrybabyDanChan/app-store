const addToCart = () => {
  return {
    type: "ADD_TO_CART"
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

const setMyProducts = (userId) => {
  return {
    type: "SET_PRODUCTS_FROM_MY",
    payload: userId
  };
};

const loadAddToCart = (id) => {
  return {
    type: "LOAD_ADD_PRODUCT_TO_CART",
    payload: id
  };
};

const loadProductsFromCart = () => {
  return {
    type: "LOAD_PRODUCTS_FROM_CART"
  };
};

const setProductsFromCart = (data) => {
  return {
    type: "SET_PRODUCTS_FROM_CART",
    payload: data
  };
};
export {
  addToCart,
  clearCart,
  loadAllProducts,
  setProducts,
  loadAddToCart,
  loadProductsFromCart,
  setProductsFromCart,
  setMyProducts
};
