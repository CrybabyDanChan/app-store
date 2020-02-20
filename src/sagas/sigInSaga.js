import { takeEvery, call, select, put } from "redux-saga/effects";
import { getSigIn } from "./selectors";
import { setTokenAndUserName, setErrorAuth } from "../actions/authenticatedActions";

const fetchData = (userData) => {
  const url = "http://localhost:3000/users/register";
  const user = {
    name: userData.login,
    password: userData.password
  };
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(res => res.json());
};

function * workerLoadData () {
  const userData = yield select(getSigIn);
  const { username, token, error } = yield call(fetchData, userData);
  if (username && token) {
    yield put(setTokenAndUserName(username));
    localStorage.setItem("token", token);
  } else {
    yield put(setErrorAuth(error));
  }
}

export function * watchLoadSignInData () {
  yield takeEvery("LOAD_USER_SIGN_IN", workerLoadData);
}
