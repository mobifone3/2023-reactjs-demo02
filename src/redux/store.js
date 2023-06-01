import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { qlsvReducer } from "./reducers/qlsv";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  student: qlsvReducer,
});

export const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
