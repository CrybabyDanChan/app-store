export const initialState = {
  login: "",
  password: ""
};

const signIn = (state = initialState, action) => {
  switch (action.type) {
    case "SET_REG_LOGIN":
      return {
        ...state,
        login: action.payload
      };

    case "SET_REG_PASSWORD":
      return {
        ...state,
        password: action.payload
      };
    case "LOAD_USER_SIGN_IN":
      return {
        ...state
      };
    default:
      return state;
  }
};

export default signIn;
