import { takeEvery, call, put } from "redux-saga/effects";
import { setTokenAndUser, setErrorAuth } from "../actions/authenticatedActions";

import { mainUrl } from "../utils/url";

const fetchData = () => {
  const token = localStorage.token;
  const url = `${mainUrl}profile`;
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then((data) => {
    return data.json();
  });
};

function * workerLoadData () {
  const { username, userId, error } = yield call(fetchData);
  if (username) {
    yield put(setTokenAndUser({ username, id: userId }));
  } else {
    yield put(setErrorAuth(error));
  }
}

export function * watchLoadAuthData () {
  yield takeEvery("LOAD_AUTH", workerLoadData);
}
