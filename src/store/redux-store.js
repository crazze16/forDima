import { combineReducers, createStore } from "redux";
import reducer from "./reducer/reducer";

const rootReducer = combineReducers({
    reducer
});

export const store = createStore(rootReducer);
// @ts-ignore
window.store = store;