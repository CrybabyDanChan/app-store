import { takeEvery, call, put, select } from "redux-saga/effects";
import { selectRequested, selectError } from "./actions/index";
import { getCart } from "./selectors";

// const fetchData = (url) => {
//   return fetch(url)
//     .then(data => data.json());
// };

// function * workerLoadData () {
//   const url = yield select(getCart);
//   const { items, message } = yield call(fetchData, url);
//   if (items) {
//     yield put(selectRequested(items));
//   } else {
//     yield put(selectError(message));
//   }
// }

// export function * watchLoadData () {
//   yield takeEvery("LOAD_DATA", workerLoadData);
// }
