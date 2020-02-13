export const initialState = {
  login: "",
  password: ""
};

const logIn = (state = initialState, action) => {
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

    case "LOAD_USER_LOG_IN":
      return {
        ...state
      };

    default:
      return state;
  }
};

export default logIn;
