import { takeEvery, call, put, select } from "redux-saga/effects";

import { mainUrl } from "../utils/url";
import { productInfo } from "./selectors";
import { addProductToCart, removeProductFromCart, addProductsToCart, updateProductFromCart } from "../actions/productsActions";

const fetchProductsFromCart = () => {
  const url = `${mainUrl}cart/products`;
  const token = localStorage.token;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
};

const addCart = (data) => {
  const url = `${mainUrl}cart`;
  const token = localStorage.token;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const updateCart = (data) => {
  const url = `${mainUrl}cart/${data.cartId}`;
  const token = localStorage.token;
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ count: data.count })
  }).then(res => res.json());
};

const removeCart = (data) => {
  const url = `${mainUrl}cart/${data.cartId}`;
  const token = localStorage.token;
  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
};

function * workerGetProductFromCart () {
  const products = yield call(fetchProductsFromCart);
  yield put(addProductsToCart(products));
}

function * workerAddCart () {
  const body = yield select(productInfo);
  const product = yield call(addCart, body);
  yield put(addProductToCart(product));
}

function * workerRemoveCart () {
  const body = yield select(productInfo);
  const product = yield call(removeCart, body);
  yield put(removeProductFromCart(product));
}

function * workerUpdateCart () {
  const body = yield select(productInfo);
  const product = yield call(updateCart, body);
  yield put(updateProductFromCart(product));
}

export function * watchLoadCart () {
  yield takeEvery("LOAD_PRODUCTS_FROM_CART", workerGetProductFromCart);
  yield takeEvery("LOAD_ADD_CART", workerAddCart);
  yield takeEvery("LOAD_UPDATE_CART", workerUpdateCart);
  yield takeEvery("LOAD_REMOVE_CART", workerRemoveCart);
}
