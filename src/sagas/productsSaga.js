import { takeEvery, call } from "redux-saga/effects";

const fetchData = (data) => {
  const token = localStorage.token;
  return fetch("http://localhost:3000/products", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => res.json());
};

function * workerLoadData () {
  const data = yield call(fetchData);
  data.map(product => {
    fetch(`http://localhost:3000/products/download?file=${product.avatar}`).then(res => console.log(res));
  })
}

export function * watchLoadAllProducts () {
  yield takeEvery("LOAD_ALL_PRODUCTS", workerLoadData);
}
