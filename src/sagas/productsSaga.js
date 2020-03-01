import { takeEvery, call, put, select } from "redux-saga/effects";

import { addAllProducts, addProduct, editProduct } from "../actions/productsActions";
import { mainUrl } from "../utils/url";
import { valueForm, userId, productIdToChange } from "./selectors";

const checkProduct = (product, userId) => {
  product.ownedByUser = false;
  if (product.userId === userId) {
    product.ownedByUser = true;
  }
};

const fetchAllProducts = () => {
  const url = `${mainUrl}products`;
  const token = localStorage.token;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
};

function * workerAllProducts () {
  const data = yield call(fetchAllProducts);
  const usId = yield select(userId);
  const products = data.map(product => {
    checkProduct(product, usId);
    return product;
  });
  yield put(addAllProducts(products));
}

const createProduct = (data) => {
  const url = `${mainUrl}products`;
  const token = localStorage.token;
  const formData = new FormData();
  formData.append("avatar", data.imgFile);
  formData.append("title", data.valueTitle);
  formData.append("description", data.valueDescription);
  formData.append("count", data.count);
  return fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  }).then(res => res.json());
};

function * workerCreateProduct () {
  const usId = yield select(userId);
  const data = yield select(valueForm);
  const newProduct = yield call(createProduct, data);
  checkProduct(newProduct, usId);
  yield put(addProduct(newProduct));
}

const updateProduct = (data, id) => {
  const url = `${mainUrl}products/${id}`;
  const token = localStorage.token;
  const formData = new FormData();
  formData.append("avatar", data.imgFile);
  formData.append("title", data.valueTitle);
  formData.append("description", data.valueDescription);
  formData.append("count", data.count);
  return fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  }).then(res => res.json());
};

function * workerUpdateProduct () {
  const usId = yield select(userId);
  const idProduct = yield select(productIdToChange);
  const data = yield select(valueForm);
  const upProduct = yield call(updateProduct, data, idProduct);
  checkProduct(upProduct, usId);
  yield put(editProduct(upProduct));
}

export function * watchLoadProducts () {
  yield takeEvery("LOAD_ALL_PRODUCTS", workerAllProducts);
  yield takeEvery("LOAD_CREATE_PRODUCT", workerCreateProduct);
  yield takeEvery("LOAD_EDIT_PRODUCT", workerUpdateProduct);
}
