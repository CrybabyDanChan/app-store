const loadCreateProduct = (valueForm) => {
  return {
    type: "LOAD_CREATE_PRODUCT",
    payload: valueForm
  };
};

export {
  loadCreateProduct
};
