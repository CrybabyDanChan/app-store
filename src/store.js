import { createStore, combineReducers } from "redux";

import signIn from "./reducers/signIn";
import logIn from "./reducers/logIn";
import authenticated from "./reducers/authenticated";

const reducer = combineReducers({
  signIn,
  logIn,
  authenticated
});

const store = createStore(reducer);

export default store;
