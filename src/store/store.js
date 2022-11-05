import { combineReducers, legacy_createStore } from "redux";
import { authReducer } from "../reducers/authReducer";

const reducers = combineReducers({
    auth: authReducer,
})

export const store = legacy_createStore(reducers)