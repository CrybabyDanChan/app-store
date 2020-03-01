/* eslint-disable no-useless-escape */
const valLogin = (value) => {
  const regExForLogin = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$|^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i;
  return regExForLogin.test(value);
};

const valPass = (value) => {
  const regExForPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i;
  return regExForPassword.test(value);
};

export {
  valLogin,
  valPass
};
