import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import chaosApp from "./_reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let store = createStore(
    chaosApp,
    /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

// export let store = createStore(chaosApp,
//      applyMiddleware(thunk
//     // ,
//     // persistTokens
// ));
