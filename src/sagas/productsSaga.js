import { takeEvery, call, put, select } from "redux-saga/effects";

import { setProducts, addToCart, setProductsFromCart } from "../actions/productsActions";
import { id } from "./selectors";

const fetchAllProducts = () => {
  const url = "http://localhost:3000/products";
  const token = localStorage.token;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
};

const fetchImage = async (imgName) => {
  const url = `http://localhost:3000/products/download?file=${imgName}`;
  const fetchData = await fetch(url);
  return fetchData;
};

const sendProductToCart = (id) => {
  const url = "http://localhost:3000/products/add-to-cart";
  const token = localStorage.token;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ id })
  });
};

const fetchProductsFromUsersCart = () => {
  const url = "http://localhost:3000/products/from-users-cart";
  const token = localStorage.token;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
};

const getAllProducts = (imageItems) => {
  return Promise.all(imageItems);
};

function * workerLoadAllProducts () {
  const data = yield call(fetchAllProducts);
  const responceItems = data.map(async (product) => {
    const img = await fetchImage(product.avatar);
    return {
      ...product,
      avatar: img.url,
      beInCart: false
    };
  });
  const productItems = yield call(getAllProducts, responceItems);
  yield put(setProducts(productItems));
}

function * workerLoadAddProductToCart () {
  const idProduct = yield select(id);
  yield call(sendProductToCart, idProduct);
  yield put(addToCart());
}

function * workerLoadProductsFromUsersCart () {
  const data = yield call(fetchProductsFromUsersCart);
  const responceItems = data.map(async (product) => {
    const img = await fetchImage(product.avatar);
    return {
      ...product,
      avatar: img.url,
      beInCart: true
    };
  });
  const productItems = yield call(getAllProducts, responceItems);
  yield put(setProductsFromCart(productItems));
}

export function * watchLoadAllProducts () {
  yield takeEvery("LOAD_ALL_PRODUCTS", workerLoadAllProducts);
  yield takeEvery("LOAD_ADD_PRODUCT_TO_CART", workerLoadAddProductToCart);
  yield takeEvery("LOAD_PRODUCTS_FROM_CART", workerLoadProductsFromUsersCart);
}
