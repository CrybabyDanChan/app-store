export const initialState = {
  productInfo: null
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS_FROM_CART":
      return {
        ...state
      };
    case "LOAD_ADD_CART":
      return {
        ...state,
        productInfo: action.payload
      };
    case "LOAD_REMOVE_CART":
      return {
        ...state,
        productInfo: action.payload
      };
    case "LOAD_UPDATE_CART":
      return {
        ...state,
        productInfo: action.payload
      };
    default:
      return state;
  }
};

export default cart;
