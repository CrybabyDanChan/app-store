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

const setPasswordError = (value) => {
  return {
    type: "SET_PASSWORD_ERRROR",
    payload: value
  };
};

const setLoginError = (value) => {
  return {
    type: "SET_LOGIN_ERROR",
    payload: value
  };
};

export {
  setLoginValue,
  setPasswordValue,
  setPasswordError,
  setLoginError
};
