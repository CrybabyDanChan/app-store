import { takeEvery, call, put } from "redux-saga/effects";
import { setTokenAndUser, setErrorAuth } from "../actions/authenticatedActions";

const fetchData = () => {
  const token = localStorage.token;
  const url = "http://localhost:3000/profile";
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
  const { username, userId, error, cartId } = yield call(fetchData);
  if (username) {
    yield put(setTokenAndUser({ username, id: userId, cartId }));
  } else {
    yield put(setErrorAuth(error));
  }
}

export function * watchLoadAuthData () {
  yield takeEvery("LOAD_AUTH", workerLoadData);
}
