import { takeEvery, call, put, select } from "redux-saga/effects";

import { setProducts, addToCart, setProductsFromCart, removeFromCart } from "../actions/productsActions";
import { idAdd, cartId, idRemove } from "./selectors";

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

const removeProductToCart = (id) => {
  const url = "http://localhost:3000/products/remove-from-cart";
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

function * workerAllProducts () {
  const data = yield call(fetchAllProducts);
  const cart = yield select(cartId);
  const responceItems = data.map(async (product) => {
    const img = await fetchImage(product.avatar);
    const cartCheck = product.cart.find(c => c.id === cart);
    const beInCart = !!cartCheck;
    return {
      ...product,
      avatar: img.url,
      beInCart
    };
  });
  const productItems = yield call(getAllProducts, responceItems);
  yield put(setProducts(productItems));
}

function * workerAddProductToCart () {
  const idProduct = yield select(idAdd);
  yield call(sendProductToCart, idProduct);
  yield put(addToCart());
}

function * workerRemoveProductFromCart () {
  const idProduct = yield select(idRemove);
  yield call(removeProductToCart, idProduct);
  yield put(removeFromCart());
}

function * workerProductsFromUsersCart () {
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
  yield takeEvery("LOAD_ALL_PRODUCTS", workerAllProducts);
  yield takeEvery("LOAD_ADD_PRODUCT_TO_CART", workerAddProductToCart);
  yield takeEvery("LOAD_REMOVE_PRODUCT_TO_CART", workerRemoveProductFromCart);
  yield takeEvery("LOAD_PRODUCTS_FROM_CART", workerProductsFromUsersCart);
}
