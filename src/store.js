import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchLoadLogInData } from "./sagas/logInSaga";
import { watchLoadSignInData } from "./sagas/sigInSaga";
import { watchLoadAuthData } from "./sagas/autheticatedSaga";
import { watchLoadProducts } from "./sagas/productsSaga";
import { watchLoadCart } from "./sagas/cartSaga";

import signIn from "./reducers/signIn";
import logIn from "./reducers/logIn";
import authenticated from "./reducers/authenticated";
import products from "./reducers/products";
import cart from "./reducers/cart";

const reducer = combineReducers({
  signIn,
  logIn,
  authenticated,
  products,
  cart
});

const logInSagaMiddelware = createSagaMiddleware();
const signInSagaMiddelware = createSagaMiddleware();
const authSagaMiddelware = createSagaMiddleware();
const allProductsSagaMiddelware = createSagaMiddleware();
const cartSagaMiddelware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(
  logInSagaMiddelware,
  signInSagaMiddelware,
  authSagaMiddelware,
  allProductsSagaMiddelware,
  cartSagaMiddelware
));
logInSagaMiddelware.run(watchLoadLogInData);
signInSagaMiddelware.run(watchLoadSignInData);
authSagaMiddelware.run(watchLoadAuthData);
allProductsSagaMiddelware.run(watchLoadProducts);
cartSagaMiddelware.run(watchLoadCart);

export default store;
