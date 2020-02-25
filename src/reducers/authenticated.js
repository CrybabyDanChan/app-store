export const initialState = {
  id: "",
  userName: "",
  cartId: "",
  auth: false,
  error: false
};

const authenticated = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userName: action.payload.username,
        id: action.payload.id,
        auth: true,
        cartId: action.payload.cartId
      };

    case "SET_ERROR":
      return {
        ...state,
        auth: false,
        error: action.payload
      };

    case "LOAD_AUTH":
      return {
        ...state
      };

    case "OUT_LOGIN":
      return {
        ...state,
        id: "",
        cartId: "",
        userName: "",
        auth: false,
        error: false
      };

    default:
      return state;
  }
};

export default authenticated;
