import { createStore, applyMiddleware } from "redux";
import reducers from "./Redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

let middleware = [thunk];

const store = createStore(
    reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export { store };