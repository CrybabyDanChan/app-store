import { takeEvery, call, put, select } from "redux-saga/effects";

import { setTokenAndUser, setErrorAuth, userHasChanged } from "../actions/authenticatedActions";
import { logIn } from "./selectors";
import { mainUrl } from "../utils/url";

const fetchData = (userData) => {
  const url = `${mainUrl}auth/login`;
  const user = JSON.stringify({
    username: userData.login,
    password: userData.password
  });
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: user
  }).then(res => res.json());
};

function * workerLoadData () {
  const userData = yield select(logIn);
  const { username, id, token, error } = yield call(fetchData, userData);
  if (username && token) {
    yield put(setTokenAndUser({ username, id }));
    yield put(userHasChanged());
    localStorage.setItem("token", token);
  } else {
    yield put(setErrorAuth(error));
  }
}

export function * watchLoadLogInData () {
  yield takeEvery("LOAD_USER_LOG_IN", workerLoadData);
}
