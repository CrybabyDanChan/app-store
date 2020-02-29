/* eslint-disable no-case-declarations */
export const initialState = {
  arrayOfAllProducts: [],
  arrayOfMyProducts: [],
  arrayOfCart: [],
  valueForm: null,
  checkProducts: false,
  productIdToChange: null
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ALL_PRODUCTS":
      return {
        ...state
      };

    case "ADD_ALL_PRODUCTS":
      const newProducts = action.payload;
      const myProducts = newProducts.filter(product => product.ownedByUser);
      const productsToCart = newProducts.filter(product => product.beInCart);
      return {
        ...state,
        arrayOfAllProducts: newProducts,
        arrayOfMyProducts: myProducts,
        arrayOfCart: productsToCart,
        checkProducts: true
      };

    case "LOAD_CREATE_PRODUCT":
      return {
        ...state,
        valueForm: action.payload
      };

    case "ADD_PRODUCT":
      const newProduct = action.payload;
      const newArrayOfProducts = state.arrayOfAllProducts.concat();
      const newArrayOfMyProducts = state.arrayOfMyProducts.concat();
      newArrayOfProducts.push(newProduct);
      newArrayOfMyProducts.push(newProduct);
      return {
        ...state,
        arrayOfAllProducts: newArrayOfProducts,
        arrayOfMyProducts: newArrayOfMyProducts,
        valueForm: null
      };

    case "LOAD_EDIT_PRODUCT":
      return {
        ...state,
        productIdToChange: action.payload.productId,
        valueForm: action.payload.valueForm
      };

    case "EDIT_PRODUCT":
      const updateProduct = action.payload;
      const newAllProducts = state.arrayOfAllProducts.concat();
      const newMyProducts = state.arrayOfMyProducts.concat();
      const indexProductInMy = newMyProducts.findIndex(product => product.id === updateProduct.id);
      const indexProductInALl = newAllProducts.findIndex(product => product.id === updateProduct.id);
      newAllProducts[indexProductInALl] = updateProduct;
      newMyProducts[indexProductInMy] = updateProduct;
      return {
        ...state,
        arrayOfAllProducts: newAllProducts,
        arrayOfMyProducts: newMyProducts,
        productIdToChange: null,
        valueForm: null
      };

    case "USER_HAS_CHANGED":
      return {
        ...state,
        checkProducts: false
      };

    default:
      return state;
  }
};

export default products;
