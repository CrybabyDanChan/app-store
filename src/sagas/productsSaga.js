import { takeEvery, call, put } from "redux-saga/effects";

import { setProducts } from "../actions/productsActions";

const fetchData = (data) => {
  const url = "http://localhost:3000/products";
  const token = localStorage.token;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
};

const fetchImages = async (imgName) => {
  const url = `http://localhost:3000/products/download?file=${imgName}`;
  const fetchData = await fetch(url);
  return fetchData;
};

const allProducts = (imageItems) => {
  return Promise.all(imageItems);
};

function * workerLoadData () {
  const data = yield call(fetchData);
  const responceItems = data.map(async (product) => {
    const img = await fetchImages(product.avatar);
    return {
      ...product,
      avatar: img.url
    };
  });
  const productItems = yield call(allProducts, responceItems);
  yield put(setProducts(productItems));
}

export function * watchLoadAllProducts () {
  yield takeEvery("LOAD_ALL_PRODUCTS", workerLoadData);
}
