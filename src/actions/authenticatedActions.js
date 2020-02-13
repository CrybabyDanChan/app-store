const setTokenAndUserName = (value) => {
  return {
    type: "SET_TOKEN_AND_USER_NAME",
    payload: value
  };
};

const setErrorAuth = (error) => {
  return {
    type: "SET_ERROR",
    payload: error
  };
};

export {
  setTokenAndUserName,
  setErrorAuth
};
