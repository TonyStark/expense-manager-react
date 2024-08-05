import { createStore } from "redux";

const INITIAL_STORE = {
  counter: 0,
};

const storeReducer = (store = INITIAL_STORE, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...store,
        counter: store.counter + 1,
      };
    default:
      return store;
  }
};

const myStore = createStore(storeReducer);

export default myStore;
