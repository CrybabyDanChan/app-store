import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchLoadLogInData } from "./sagas/logInSaga";
import { watchLoadSignInData } from "./sagas/sigInSaga";
import { watchLoadAuthData } from "./sagas/autheticatedSaga";

import signIn from "./reducers/signIn";
import logIn from "./reducers/logIn";
import authenticated from "./reducers/authenticated";
import products from "./reducers/products";

const reducer = combineReducers({
  signIn,
  logIn,
  authenticated,
  products
});

const logInSagaMiddelware = createSagaMiddleware();
const signInSagaMiddelware = createSagaMiddleware();
const authSagaMiddelware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(logInSagaMiddelware, signInSagaMiddelware, authSagaMiddelware));
logInSagaMiddelware.run(watchLoadLogInData);
signInSagaMiddelware.run(watchLoadSignInData);
authSagaMiddelware.run(watchLoadAuthData);

export default store;
