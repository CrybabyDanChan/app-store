export const initialState = {
  userName: "",
  auth: false,
  error: false
};

const authenticated = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return {
        ...state,
        userName: action.payload,
        auth: true
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
        userName: "",
        auth: false,
        error: false
      };

    default:
      return state;
  }
};

export default authenticated;
