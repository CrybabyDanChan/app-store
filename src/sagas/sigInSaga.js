import { takeEvery, call, select } from "redux-saga/effects";
import { getSigIn } from "./selectors";

const fetchData = (userData) => {
  const user = {
    name: userData.login,
    password: userData.password
  };
  return fetch("http://localhost:3000/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
};

function * workerLoadData () {
  const userData = yield select(getSigIn);
  const userReg = yield call(fetchData, userData);
}

export function * watchLoadSignInData () {
  yield takeEvery("LOAD_USER_SIGN_IN", workerLoadData);
}
