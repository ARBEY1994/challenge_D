import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import tareasReducer from "./reducer";

export const store = createStore(
  tareasReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
