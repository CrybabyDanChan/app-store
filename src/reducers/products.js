/* eslint-disable no-case-declarations */
export const initialState = {
  arrayOfAllProducts: [],
  arrayOfMyProducts: [],
  arrayOfCart: []
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ALL_PRODUCTS":
      return {
        ...state
      };
    case "ADD_TO_CART":
      let newArrayOfCart = state.arrayOfCart.concat();
      const newArrayOfAllProducts = state.arrayOfAllProducts.concat();
      const id = action.payload;
      const product = newArrayOfAllProducts.find(p => p.id === id);
      product.beInCart = !product.beInCart;
      newArrayOfCart.push(product);
      newArrayOfCart = newArrayOfCart.filter(product => product.beInCart);
      return {
        ...state,
        arrayOfCart: newArrayOfCart,
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
    default:
      return state;
  }
};

export default products;
