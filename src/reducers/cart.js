export const initialState = {
  bodyForNewCart: null
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ADD_TO_CART":
      return {
        ...state,
        bodyForNewCart: action.payload
      };
    default:
      return state;
  }
};

export default cart;
