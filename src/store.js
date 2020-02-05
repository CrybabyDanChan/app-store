import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";

const sagaMiddelware = createSagaMiddleware();
const store = createStore(reducer);
// sagaMiddelware.run(watchLoadData);

export default store;
