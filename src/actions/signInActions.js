const setRegLoginValue = (value) => {
  return {
    type: "SET_REG_LOGIN",
    payload: value
  };
};

const setRegPasswordValue = (value) => {
  return {
    type: "SET_REG_PASSWORD",
    payload: value
  };
};

const regUser = () => {
  return {
    type: "LOAD_USER_SIGN_IN"
  };
};

export {
  setRegLoginValue,
  setRegPasswordValue,
  regUser
};
