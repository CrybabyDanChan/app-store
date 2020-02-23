/* eslint-disable no-case-declarations */
export const initialState = {
  arrayOfAllProducts: [],
  arrayOfMyProducts: [],
  arrayOfCart: [],
  idForTranseferringToCart: null
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ALL_PRODUCTS":
      return {
        ...state
      };

    case "LOAD_ADD_PRODUCT_TO_CART":
      return {
        ...state,
        idForTranseferringToCart: action.payload
      };

    case "LOAD_PRODUCTS_FROM_CART":
      return {
        ...state
      };

    case "SET_PRODUCTS_FROM_CART":
      return {
        ...state,
        arrayOfCart: action.payload
      };

    case "SET_PRODUCTS_FROM_MY":
      const userId = action.payload;
      const newArrayOfMyProducts = state.arrayOfAllProducts.filter(
        product => product.userId === userId
      );
      return {
        ...state,
        arrayOfMyProducts: newArrayOfMyProducts
      };

    case "ADD_TO_CART":
      const newArrayOfAllProducts = state.arrayOfAllProducts.concat();
      const product = newArrayOfAllProducts.find(product => product.id === state.idForTranseferringToCart);
      product.beInCart = true;
      return {
        ...state,
        arrayOfAllProducts: newArrayOfAllProducts
      };

    case "CLEAR_CART" :
      const newArrayOfCartClear = state.arrayOfCart
        .concat()
        .map(product => {
          product.beInCart = false;
          return product;
        })
        .filter(product => product.beInCart);
      return {
        ...state,
        arrayOfCart: newArrayOfCartClear
      };

    case "SET_PRODUCTS":
      return {
        ...state,
        arrayOfAllProducts: action.payload
      };

    default:
      return state;
  }
};

export default products;
