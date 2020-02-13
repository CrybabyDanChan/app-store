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

export {
  addToCart,
  clearCart
};
