import { takeEvery, call, put, select } from "redux-saga/effects";

import { mainUrl } from "../utils/url";
import { bodyForCart } from "./selectors";

const addProductToCart = (data) => {
  const url = `${mainUrl}cart`;
  const token = localStorage.token;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
};

function * workerAddProductToCart () {
  const body = yield select(bodyForCart);
  const product = yield call(addProductToCart, body);
//   const data = yield select(valueForm);
//   const upProduct = yield call(updateProduct, data, idProduct);
//   checkProduct(upProduct, usId);
//   yield put(editProduct(upProduct));
}

export function * watchLoadCart () {
  yield takeEvery("LOAD_ADD_TO_CART", workerAddProductToCart);
}
