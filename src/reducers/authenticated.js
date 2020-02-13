export const initialState = {
  userName: "",
  jwtToken: "",
  authenticated: false,
  error: false
};

const authenticated = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN_AND_USER_NAME":
      return {
        ...state,
        userName: action.payload.username,
        jwtToken: action.payload.token,
        authenticated: !state.authenticated
      };

    case "SET_ERROR":
      return {
        ...state,
        authenticated: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authenticated;
