const loadAllProducts = () => {
  return {
    type: "LOAD_ALL_PRODUCTS"
  };
};

const addAllProducts = (products) => {
  return {
    type: "ADD_ALL_PRODUCTS",
    payload: products
  };
};

const loadCreateProduct = (valueForm) => {
  return {
    type: "LOAD_CREATE_PRODUCT",
    payload: valueForm
  };
};

const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product
  };
};

const loadEditProduct = (productId, valueForm) => {
  return {
    type: "LOAD_EDIT_PRODUCT",
    payload: { productId, valueForm }
  };
};

const editProduct = (updateProduct) => {
  return {
    type: "EDIT_PRODUCT",
    payload: updateProduct
  };
};

export {
  loadAllProducts,
  addAllProducts,
  loadCreateProduct,
  addProduct,
  loadEditProduct,
  editProduct
};
