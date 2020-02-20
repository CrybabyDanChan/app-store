const setRegLoginValue = (value) => {
  return {
    type: "SET_LOGIN_REG",
    payload: value
  };
};

const setRegPasswordValue = (value) => {
  return {
    type: "SET_PASSWORD_REG",
    payload: value
  };
};

const setRegPasswordError = (value) => {
  return {
    type: "SET_PASSWORD_ERRROR_REG",
    payload: value
  };
};

const setRegLoginError = (value) => {
  return {
    type: "SET_LOGIN_ERROR_REG",
    payload: value
  };
};

export {
  setRegLoginValue,
  setRegPasswordValue,
  setRegPasswordError,
  setRegLoginError
};
