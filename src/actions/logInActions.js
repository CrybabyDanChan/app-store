const setLoginValue = (value) => {
  return {
    type: "SET_LOGIN",
    payload: value
  };
};

const setPasswordValue = (value) => {
  return {
    type: "SET_PASSWORD",
    payload: value
  };
};

const userLogIn = (value) => {
  return {
    type: "LOAD_USER_LOG_IN",
    payload: value
  };
};

export {
  setLoginValue,
  setPasswordValue,
  userLogIn
};
