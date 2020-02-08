import { createStore, combineReducers } from "redux";

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

const store = createStore(reducer);

export default store;
