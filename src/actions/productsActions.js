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

const editProduct = (product) => {
  return {
    type: "EDIT_PRODUCT",
    payload: product
  };
};

const addProductsToCart = (products) => {
  return {
    type: "ADD_PRODUCTS_TO_CART",
    payload: products
  };
};

const addProductToCart = (product) => {
  return {
    type: "ADD_PRODUCT_TO_CART",
    payload: product
  };
};

const updateProductFromCart = (product) => {
  return {
    type: "UPDATE_PRODUCT_FROM_CART",
    payload: product
  };
};

const removeProductFromCart = (product) => {
  return {
    type: "REMOVE_PPRODUCT_FROM_CART",
    payload: product
  };
};

export {
  loadAllProducts,
  addAllProducts,
  loadCreateProduct,
  addProduct,
  loadEditProduct,
  editProduct,
  addProductToCart,
  removeProductFromCart,
  addProductsToCart,
  updateProductFromCart
};
