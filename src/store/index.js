import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

export default createStore(applyMiddleware(thunk, logger))