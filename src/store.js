import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

// redux store setup
const configureStore = () => {
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  const enhancer = compose(...enhancers);
  const store = createStore(rootReducer, undefined, enhancer);
  return store;
};

const store = configureStore();

export default store;
