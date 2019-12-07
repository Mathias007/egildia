import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import chaosApp from './_reducers';

export let store = createStore(chaosApp, applyMiddleware(thunk));
