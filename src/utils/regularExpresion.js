/* eslint-disable no-useless-escape */
const regExForLogin = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$|^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i;
const regExForPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i;

export {
  regExForLogin,
  regExForPassword
};
