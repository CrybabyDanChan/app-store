import { takeEvery, call, select, put } from "redux-saga/effects";

import { signIn } from "./selectors";
import { setTokenAndUser, setErrorAuth, userHasChanged } from "../actions/authenticatedActions";
import { mainUrl } from "../utils/url";

const fetchData = (userData) => {
  const url = `${mainUrl}users/register`;
  const user = JSON.stringify({
    name: userData.login,
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
  const userData = yield select(signIn);
  const { username, id, token, error } = yield call(fetchData, userData);
  if (username && token) {
    yield put(setTokenAndUser({ username, id }));
    yield put(userHasChanged());
    localStorage.setItem("token", token);
  } else {
    yield put(setErrorAuth(error));
  }
}

export function * watchLoadSignInData () {
  yield takeEvery("LOAD_USER_SIGN_IN", workerLoadData);
}
