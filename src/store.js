import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchLoadLogInData } from "./sagas/logInSaga";
import { watchLoadSignInData } from "./sagas/sigInSaga";
import { watchLoadAuthData } from "./sagas/autheticatedSaga";
import { watchLoadCreateProduct } from "./sagas/createProductsSaga";

import signIn from "./reducers/signIn";
import logIn from "./reducers/logIn";
import authenticated from "./reducers/authenticated";
import products from "./reducers/products";
import createProducts from "./reducers/createProducts";

const reducer = combineReducers({
  signIn,
  logIn,
  authenticated,
  products,
  createProducts
});

const logInSagaMiddelware = createSagaMiddleware();
const signInSagaMiddelware = createSagaMiddleware();
const authSagaMiddelware = createSagaMiddleware();
const createProductsSagaMiddelware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(logInSagaMiddelware, signInSagaMiddelware, authSagaMiddelware, createProductsSagaMiddelware));
logInSagaMiddelware.run(watchLoadLogInData);
signInSagaMiddelware.run(watchLoadSignInData);
authSagaMiddelware.run(watchLoadAuthData);
createProductsSagaMiddelware.run(watchLoadCreateProduct);

export default store;
