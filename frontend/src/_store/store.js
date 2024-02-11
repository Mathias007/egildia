import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import egildiaApp from "./_reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export let store = createStore(
    egildiaApp,
    /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
