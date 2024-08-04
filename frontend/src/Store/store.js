import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";

const INITIAL_STORE = {
  expense: [],
  counter: 0,
};
const FETCH_EXPENSES_START = "FETCH_EXPENSES_START";
const FETCH_EXPENSES_SUCCESS = "FETCH_EXPENSES_SUCCESS";
const FETCH_EXPENSES_FAILURE = "FETCH_EXPENSES_FAILURE";
const storeReducer = (store = INITIAL_STORE, action) => {
  return store;
};
const myStore = createStore(storeReducer);
export default myStore;
