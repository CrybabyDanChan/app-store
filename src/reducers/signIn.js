export const initialState = {
  login: "",
  password: "",
  loginError: null,
  passwordError: null
};

const signIn = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGIN":
      return {
        ...state,
        login: action.payload
      };

    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload
      };

    case "SET_PASSWORD_ERRROR":
      return {
        ...state,
        passwordError: action.payload
      };

    case "SET_LOGIN_ERROR":
      return {
        ...state,
        loginError: action.payload
      };
    default:
      return state;
  }
};

export default signIn;
