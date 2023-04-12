import {
  compose,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import rootRducer from "../reducers";
import thunk from "redux-thunk";

export const store = createStore(rootRducer, compose(applyMiddleware(thunk)));
