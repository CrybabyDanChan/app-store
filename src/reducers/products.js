/* eslint-disable no-case-declarations */
export const initialState = {
  arrayOfAllProducts: [],
  arrayOfMyProducts: [],
  arrayOfCart: [],
  idForTranseferring: null,
  idForRemove: null
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
        idForTranseferring: action.payload
      };

    case "LOAD_REMOVE_PRODUCT_TO_CART":
      return {
        ...state,
        idForRemove: action.payload
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
      const allProductsForAdd = state.arrayOfAllProducts.concat();
      const productAdd = allProductsForAdd.find(
        product => product.id === state.idForTranseferring
      );
      productAdd.beInCart = true;
      return {
        ...state,
        arrayOfAllProducts: allProductsForAdd,
        idForTranseferring: null
      };

    case "REMOVE_FROM_CART":
      const allProductsForRemove = state.arrayOfAllProducts.concat();
      const newArrayOfCart = state.arrayOfCart.filter(
        product => product.id !== state.idForRemove
      );
      const productDel = allProductsForRemove.find(
        product => product.id === state.idForRemove
      );
      productDel.beInCart = false;
      return {
        ...state,
        arrayOfAllProducts: allProductsForRemove,
        arrayOfCart: newArrayOfCart,
        idForRemove: null
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
