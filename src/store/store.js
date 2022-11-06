import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";

const reducers = combineReducers({
    auth: authReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)