const loadAddToCart = (body) => {
  return {
    type: "LOAD_ADD_TO_CART",
    payload: body
  };
};

export {
  loadAddToCart
};
