export const initialState = {
  userName: "",
  authenticated: false,
  error: false
};

const authenticated = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return {
        ...state,
        userName: action.payload,
        authenticated: true
      };

    case "SET_ERROR":
      return {
        ...state,
        authenticated: false,
        error: action.payload
      };

    case "LOAD_AUTH":
      return {
        ...state,
        authenticated: true
      };

    case "OUT_LOGIN":
      return {
        ...state,
        userName: "",
        authenticated: false,
        error: false
      };

    default:
      return state;
  }
};

export default authenticated;
