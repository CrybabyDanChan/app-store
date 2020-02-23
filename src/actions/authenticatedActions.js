const setTokenAndUser = (value) => {
  return {
    type: "SET_USER",
    payload: value
  };
};

const setErrorAuth = (error) => {
  return {
    type: "SET_ERROR",
    payload: error
  };
};

const logAuth = () => {
  return {
    type: "LOAD_AUTH"
  };
};
const outLog = () => {
  return {
    type: "OUT_LOGIN"
  };
};
export {
  setTokenAndUser,
  setErrorAuth,
  logAuth,
  outLog
};
