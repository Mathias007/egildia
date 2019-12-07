import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import chaosApp from './reducers';

export let store = createStore(chaosApp, applyMiddleware(thunk));
