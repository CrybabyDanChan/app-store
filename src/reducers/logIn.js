export const initialState = {
  regLogin: "",
  regPassword: "",
  regLoginError: null,
  regPasswordError: null
};

const logIn = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN_REG":
      return {
        ...state,
        regLogin: action.payload
      };

    case "SET_PASSWORD_REG":
      return {
        ...state,
        regPassword: action.payload
      };

    case "SET_PASSWORD_ERRROR_REG":
      return {
        ...state,
        regPasswordError: action.payload
      };

    case "SET_LOGIN_ERROR_REG":
      return {
        ...state,
        regLoginError: action.payload
      };
    default:
      return state;
  }
};

export default logIn;
