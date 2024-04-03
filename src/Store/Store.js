import { legacy_createStore as createStore } from "redux";

import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import globalReducer from "./reducers/globalReducer";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import storeReducer from "./reducers/storeReducer";
import creditCartReducer from "./reducers/CreditCartReducer";

const reducer = combineReducers({
  global: globalReducer,
  user: userReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
  paymentInfo: creditCartReducer,
  store: storeReducer,
});
const middleware = [thunk, logger];

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
