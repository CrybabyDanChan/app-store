import { takeEvery, call, put, select } from "redux-saga/effects";
import { setTokenAndUserName, setErrorAuth } from "../actions/authenticatedActions";
import { getLogIn } from "./selectors";

const fetchData = (userData) => {
  const user = {
    username: userData.login,
    password: userData.password
  };
  return fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then((data) => {
    return data.json();
  });
};

function * workerLoadData () {
  const userData = yield select(getLogIn);
  const { username, token, error } = yield call(fetchData, userData);
  if (username && token) {
    yield put(setTokenAndUserName({ username }));
    localStorage.setItem("token", token);
  } else {
    yield put(setErrorAuth(error));
  }
}

export function * watchLoadLogInData () {
  yield takeEvery("LOAD_USER_LOG_IN", workerLoadData);
}
