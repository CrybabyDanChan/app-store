import { takeEvery, call, select } from "redux-saga/effects";
import { getCreateProducts } from "./selectors";

const fetchData = (data) => {
  const token = localStorage.token;
  const formData = new FormData();
  formData.append("avatar", data.imgFile);
  formData.append("title", data.title);
  formData.append("description", data.description);
  return fetch("http://localhost:3000/products/add", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  });
};

function * workerLoadData () {
  const data = yield select(getCreateProducts);
  yield call(fetchData, data);
}

export function * watchLoadCreateProduct () {
  yield takeEvery("LOAD_CREATE_PRODUCT", workerLoadData);
}
